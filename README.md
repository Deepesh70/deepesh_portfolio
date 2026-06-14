# 🎨 Sketchbook Portfolio — Deepesh

Welcome to the repository of my creative, hand-drawn portfolio website. Built to showcase a blend of high-performance backend systems, machine learning engineering, and responsive 3D automation.

Live Site: [adaptivegrade.tech](https://www.adaptivegrade.tech/) *(example project link)*

---

## ✨ Features

- **Organic Hand-Drawn Theme:** Utilizes custom CSS wobbly border ratios (`border-radius: X / Y`), paper-grid dot background patterns, and sketch decoration assets (tape, tacks, handwriting typography).
- **Butter-Smooth Motion:** Integrates scroll-triggered animations via **GreenSock (GSAP)** with automated context cleanups for safe rendering.
- **Dynamic & Data-Driven:** Easily customizable sections driven by a centralized config file.
- **Accessibility First:** Detects and respects user `prefers-reduced-motion` settings.
- **Modern Responsive Design:** Clean layout adaptivity from small mobile displays to large desktop viewports.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Logic:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GreenSock GSAP v3 (ScrollTrigger)](https://gsap.com/)
- **Typography:** Custom fonts (Kalam & Patrick Hand) via Google Fonts
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 📦 Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Deepesh70/portfolio-artistic.git
   cd portfolio-artistic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio live!

---

## 📖 Project Documentation

For in-depth explanations of how this repository is structured and how to extend it, check out the files in the `/docs` folder:

- 🗂️ **[Project Architecture & File Layout](./docs/overview.md)** — Explains the high-level routing, folders, and component organization.
- 🎨 **[Design Tokens & Wobbly Borders](./docs/styling.md)** — A breakdown of Tailwind v4, custom paper/pencil colors, and hand-drawn borders/decorations.
- 🎬 **[GSAP Animations & Lifecycle](./docs/animations.md)** — Deep-dive into React hook wrapping, timeline triggers, and reduced motion adjustments.
- ⚙️ **[Content Customization Guide](./docs/customization.md)** — Step-by-step instructions on updating projects, skills, history, and testimonials in `constants.ts`.
