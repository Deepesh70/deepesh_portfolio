"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { gsap } from "@/lib/gsap";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        rotateZ: -1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        rotateZ: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Mock submit endpoint call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setSubmitStatus({
        type: "success",
        text: "Message sent! I'll get back to you soon.",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Got a project idea? Let's chat!">
          Get In Touch
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div className="contact-form">
            <div
              className="bg-white border-2 border-pencil p-6 md:p-8 shadow-[4px_4px_0px_0px_#2d2d2d]"
              style={{
                borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-body text-base text-pencil/70 mb-1 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    className="w-full font-body text-lg bg-white border-2 border-pencil px-4 py-3 text-pencil placeholder:text-pencil/30 focus:border-pen focus:ring-2 focus:ring-pen/20 outline-none transition-colors"
                    style={inputStyle}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-marker font-body text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-body text-base text-pencil/70 mb-1 block"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className="w-full font-body text-lg bg-white border-2 border-pencil px-4 py-3 text-pencil placeholder:text-pencil/30 focus:border-pen focus:ring-2 focus:ring-pen/20 outline-none transition-colors"
                    style={inputStyle}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-marker font-body text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-body text-base text-pencil/70 mb-1 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    className="w-full font-body text-lg bg-white border-2 border-pencil px-4 py-3 text-pencil placeholder:text-pencil/30 focus:border-pen focus:ring-2 focus:ring-pen/20 outline-none transition-colors resize-none"
                    style={{
                      borderRadius:
                        "15px 225px 15px 255px / 255px 15px 225px 15px",
                    }}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-marker font-body text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                {submitStatus && (
                  <div
                    aria-live="polite"
                    className={`font-body text-base p-3 border-2 border-pencil ${
                      submitStatus.type === "success" ? "bg-white text-pen" : "bg-white text-marker"
                    }`}
                    style={{
                      borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
                    }}
                  >
                    {submitStatus.text}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} strokeWidth={2.5} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info flex flex-col justify-center gap-6">
            <div
              className="bg-postit border-2 border-pencil p-6 shadow-[4px_4px_0px_0px_#2d2d2d]"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                transform: "rotate(-1deg)",
              }}
            >
              <h3 className="font-heading text-xl font-bold text-pencil mb-4">
                Let&apos;s connect!
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-white border-2 border-pencil flex items-center justify-center"
                    style={{
                      borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                    }}
                  >
                    <Mail size={18} strokeWidth={2.5} className="text-marker" />
                  </div>
                  <span className="font-body text-base text-pencil">
                    {siteConfig.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-white border-2 border-pencil flex items-center justify-center"
                    style={{
                      borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                    }}
                  >
                    <MapPin
                      size={18}
                      strokeWidth={2.5}
                      className="text-marker"
                    />
                  </div>
                  <span className="font-body text-base text-pencil">
                    {siteConfig.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border-2 border-pencil flex items-center justify-center shadow-[3px_3px_0px_0px_#2d2d2d] hover:shadow-[1px_1px_0px_0px_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-marker hover:text-white transition-all duration-100 font-body text-sm text-pencil capitalize"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 45% 60% 40% 55%",
                  }}
                >
                  {name.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
