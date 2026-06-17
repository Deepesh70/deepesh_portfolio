import { NextResponse } from "next/server";

// This Route Handler runs on the server, so the Web3Forms access key is read
// from a non-public env var (WEB3FORMS_ACCESS_KEY) and is NEVER shipped to the
// browser. The client only ever talks to /api/contact.
//
// Run at request time: the handler reads env vars and an incoming request body,
// so it must be dynamic (Route Handlers are dynamic by default for non-GET, but
// we make it explicit).
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// --- Limits & validation -------------------------------------------------

const MAX_NAME = 100;
const MAX_EMAIL = 254; // RFC 5321 practical limit
const MAX_MESSAGE = 5000;

// RFC 5322-compatible subset. Deliberately stricter than the old /\S+@\S+\.\S+/.
// - local part: 1..64 visible chars (no spaces), common specials allowed
// - single @
// - domain: labels separated by dots, TLD of 2+ letters
const EMAIL_RE =
  /^(?=.{1,254}$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]{1,64}@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  // Honeypot: a hidden field that real users never fill in. If non-empty, the
  // submission is a bot — silently drop it by pretending success.
  botcheck?: unknown;
}

/** Validate and coerce the incoming payload. Returns errors or clean fields. */
function validate(payload: ContactPayload): {
  errors: FieldErrors;
  data?: { name: string; email: string; message: string };
} {
  const errors: FieldErrors = {};

  // Name
  if (typeof payload.name !== "string" || !payload.name.trim()) {
    errors.name = "Name is required";
  } else if (payload.name.length > MAX_NAME) {
    errors.name = `Name must be ${MAX_NAME} characters or fewer`;
  }

  // Email
  if (typeof payload.email !== "string" || !payload.email.trim()) {
    errors.email = "Email is required";
  } else if (payload.email.length > MAX_EMAIL || !EMAIL_RE.test(payload.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Message
  if (typeof payload.message !== "string" || !payload.message.trim()) {
    errors.message = "Message is required";
  } else if (payload.message.length > MAX_MESSAGE) {
    errors.message = `Message must be ${MAX_MESSAGE} characters or fewer`;
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // Coerced + trimmed clean values (safe to assert after validation above).
  const data = {
    name: (payload.name as string).trim().slice(0, MAX_NAME),
    email: (payload.email as string).trim().slice(0, MAX_EMAIL),
    message: (payload.message as string).trim().slice(0, MAX_MESSAGE),
  };
  return { errors: {}, data };
}

// --- Handler -------------------------------------------------------------

export async function POST(request: Request) {
  // 1. Parse + guard the body.
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // 2. Honeypot: silently accept bot submissions so they can't tell they were blocked.
  if (typeof payload.botcheck === "string" && payload.botcheck.trim() !== "") {
    return NextResponse.json({
      success: true,
      message: "Message sent! I'll get back to you soon.",
    });
  }

  // 3. Validate (server is the source of truth — client validation is a courtesy).
  const { errors, data } = validate(payload);
  if (Object.keys(errors).length > 0 || !data) {
    return NextResponse.json(
      { success: false, message: "Please correct the highlighted fields.", errors },
      { status: 422 }
    );
  }

  // 4. Load the secret server-side. Never expose the real reason to the client.
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey || accessKey.trim() === "") {
    // Log detailed error server-side only; return a generic message.
    console.error("[contact] WEB3FORMS_ACCESS_KEY is not configured.");
    return NextResponse.json(
      { success: false, message: "The contact form is unavailable right now." },
      { status: 503 }
    );
  }

  // 5. Forward to Web3Forms with the key injected here (not in the browser).
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: data.name,
        email: data.email,
        message: data.message,
        // Re-send the honeypot so Web3Forms' own anti-spam sees it too.
        botcheck: false,
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (response.ok && result.success) {
      return NextResponse.json({
        success: true,
        message: "Message sent! I'll get back to you soon.",
      });
    }

    // Upstream rejected — don't leak Web3Forms internals to the client.
    console.error("[contact] Web3Forms rejected submission:", result);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  } catch (err) {
    console.error("[contact] Error forwarding to Web3Forms:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
