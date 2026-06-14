# Project Overview & Architecture

This repository contains the dynamic, high-fidelity portfolio website of **Deepesh**, a Machine Learning and Full-Stack Systems Engineer. It is designed to showcase projects spanning from deep ML algorithms and 3D engine integrations to polished front-end web applications.

---

## 🎨 Design System & Visual Concept

The website features an immersive, creative **hand-drawn/sketchbook theme**. Key design characteristics include:
- **Wobbly Borders:** Simulating organic hand-sketched lines instead of standard geometric boxes.
- **Visual Annotations:** SVG-rendered hand-drawn arrows, squiggly separators, tape stickers, and pin/tack decorators.
- **Paper Grid Background:** A custom dot-grid SVG radial background pattern reminiscent of graph paper.
- **Premium Fluid Motion:** Liquid-smooth entry timelines and scroll-triggered animations powered by GreenSock (GSAP).

---

## 🛠️ Technology Stack

The project is built on a modern, high-performance stack:
- **Core Framework:** [Next.js 16](https://nextjs.org/) (App Router architecture) & [React 19](https://react.dev/).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with post-css integration.
- **Animations:** [GreenSock (GSAP) v3](https://gsap.com/) with the `ScrollTrigger` plugin for advanced scroll interaction.
- **Typography:** Custom handwriting fonts loaded via Google Fonts via Next.js:
  - **Kalam:** Hand-drawn look used for headings and accents.
  - **Patrick Hand:** Round, friendly hand-drawn typography used for body text.
- **Icons:** [Lucide React](https://lucide.dev/) for crisp vector iconography.

---

## 📂 Project Directory Structure

Below is an overview of the key folders and files in the repository:

```
portfolio-artistic/
├── docs/                      # Technical documentation
│   ├── overview.md            # [This File] General architecture overview
│   ├── styling.md             # Custom hand-drawn Tailwind configuration
│   ├── animations.md          # GSAP animation timeline lifecycle & hooks
│   └── customization.md       # Content updating & constant configurations
├── public/                    # Static assets (images, vectors, placeholders)
├── src/
│   ├── app/
│   │   ├── globals.css        # Base styles, variables, wobbly borders, keyframes
│   │   ├── layout.tsx         # Font loading, metadata injection, root structure
│   │   └── page.tsx           # Page assembly containing sections
│   ├── components/
│   │   ├── decorations/       # Animated/Hand-drawn SVG decorators
│   │   │   ├── BouncingCircle.tsx
│   │   │   ├── HandDrawnArrow.tsx
│   │   │   └── SquigglyLine.tsx
│   │   ├── sections/          # Content areas of the page
│   │   │   ├── About.tsx      # Stats display and personal description
│   │   │   ├── Contact.tsx    # Wobbly-styled interactive contact form
│   │   │   ├── Experience.tsx # Dashed-line timeline experience track
│   │   │   ├── Footer.tsx     # Clean bottom section
│   │   │   ├── Hero.tsx       # Welcoming section with entrance timelines
│   │   │   ├── Navbar.tsx     # Responsive menu with scroll transitions
│   │   │   ├── Projects.tsx   # Project cards grid with hover animations
│   │   │   ├── Skills.tsx     # Categories of technical competencies
│   │   │   └── Testimonials.tsx # Carousel layout for reviews
│   │   └── ui/                # Base reusable components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx     # Custom tactile button with shadows
│   │       ├── Card.tsx       # Tape/Tack decorative block container
│   │       └── SectionHeading.tsx
│   ├── hooks/
│   │   └── useGsap.ts         # Hook wrapper for safe React GSAP contexts
│   └── lib/
│       ├── constants.ts       # Central source of truth for portfolio data
│       └── gsap.ts            # Client-side GSAP initialization & plugins
├── tailwind.config.js         # Base configurations (where applicable)
├── tsconfig.json              # TypeScript compilation rules
├── next.config.ts             # Next.js configurations
└── package.json               # Node.js dependencies and run scripts
```
