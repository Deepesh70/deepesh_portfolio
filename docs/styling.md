# 🎨 Styling & Design Tokens

This project uses a curated **Hand-Drawn Sketchbook theme** designed with **Tailwind CSS v4** and customized CSS variables inside `src/app/globals.css`.

---

## 🎨 Custom Design Tokens (`@theme`)

The theme colors, font families, and custom shadows are registered inline within Tailwind CSS v4 in `src/app/globals.css`:

```css
@theme inline {
  --color-paper: #fdfbf7;      /* Clean warm sketchbook page color */
  --color-pencil: #2d2d2d;     /* Solid charcoal pencil line color */
  --color-erased: #e5e0d8;     /* Slightly gray erased/shadow shade */
  --color-marker: #ff4d4d;     /* Red highlight pen color */
  --color-pen: #2d5da1;        /* Blue link/ink accent color */
  --color-postit: #fff9c4;     /* Sticky-note pastel yellow */
  --color-white: #ffffff;

  --font-heading: var(--font-kalam);
  --font-body: var(--font-patrick-hand);

  --shadow-hard: 4px 4px 0px 0px #2d2d2d;
  --shadow-hard-lg: 8px 8px 0px 0px #2d2d2d;
  --shadow-hard-sm: 2px 2px 0px 0px #2d2d2d;
  --shadow-hard-subtle: 3px 3px 0px 0px rgba(45, 45, 45, 0.1);
}
```

---

## ✏️ Wobbly Borders (Organic Borders)

Instead of crisp, computer-generated rounded corners, components simulate paper-like curves using CSS wobbly border ratios (`border-radius: X / Y` syntax). 

These are defined as global variables under `:root` and exposed as helper utility classes:

```css
:root {
  --wobbly: 255px 15px 225px 15px / 15px 225px 15px 255px;
  --wobbly-md: 15px 225px 15px 255px / 255px 15px 225px 15px;
  --wobbly-sm: 185px 10px 195px 10px / 10px 195px 10px 185px;
  --wobbly-alt: 30px 200px 20px 225px / 200px 30px 225px 20px;
}
```

### Utility Classes
- **`.wobbly`**: Applied to primary buttons to give a hand-cut index card feel.
- **`.wobbly-md`**: Used for cards (projects, experience timeline items).
- **`.wobbly-sm`**: Great for smaller badges, tag chips, and input boxes.
- **`.wobbly-alt`**: Highly irregular borders used on custom image frames.

---

## 📌 Decorative Elements

### 1. Tape (`.tape`)
Simulates translucent masking tape holding down paper blocks. 
- **Implementation:** Added via `::before` pseudo-element on the `.tape` container class.
- **Style:** Semi-transparent warm yellow-gray shade (`rgba(200, 200, 180, 0.45)`), rotated slightly (`-2deg`), overlapping the top border.

### 2. Pushpin / Tack (`.tack`)
Simulates a red tack anchoring notes on the page.
- **Implementation:** Added via `::before` pseudo-element.
- **Style:** Small circular shape styled with `--color-marker`, a solid charcoal `--color-pencil` outline, and a small shadow offset to add depth.

### 3. Wavy Underlines (`.wavy-underline`)
Draws a playful marker-like wave underneath designated words or headings.
- **Implementation:** Custom inline background SVG pattern repeating on the X-axis:
  ```css
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 6'%3E%3Cpath d='M0 3 Q5 0 10 3 T20 3' fill='none' stroke='%23ff4d4d' stroke-width='1.5'/%3E%3C/svg%3E") repeat-x;
  ```

---

## 🖨️ Background and Selection

- **Notebook Dot Grid:** The body has a repeating radial gradient to draw dots:
  ```css
  background-image: radial-gradient(#e5e0d8 1px, transparent 1px);
  background-size: 24px 24px;
  ```
- **Custom Selection:** Text highlighting is styled to look like highlighting with a yellow highlighter marker (`--color-postit` background):
  ```css
  ::selection {
    background-color: var(--color-postit);
    color: var(--color-pencil);
  }
  ```
