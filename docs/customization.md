# ⚙️ Customization & Constants Guide

This portfolio is **fully data-driven**. Instead of modifying code files inside `src/components/sections/`, all text content, social links, skill listings, projects, and work experience are managed inside a single constants file.

- **Constants File Path:** [constants.ts](file:///c:/Users/Deepesh/Desktop/p2/src/lib/constants.ts)

---

## 📄 Customizing Constants

### 1. Site Metadata (`siteConfig`)
Configure your name, job title, tagline, description, and social media profile URLs:

```typescript
export const siteConfig = {
  name: "Deepesh",
  title: "Machine Learning & Full-Stack Engineer",
  tagline: "Bridging AI, scalable backend infrastructure, and 3D automation.",
  description: "I engineer complex systems—from custom Transformer models...",
  email: "deepeshdangi700@gmail.com",
  location: "Your City, Country",
  social: {
    github: "https://github.com/Deepesh70",
    linkedin: "https://linkedin.com/in/deepesh-dangi-377a1028a/",
    leetcode: "https://leetcode.com/u/j52P06pFAY/",
  },
};
```

### 2. Projects Array (`projects`)
Each project in the array represents a card in the **Projects** section grid. Populate these keys:

| Key | Type | Description |
| --- | --- | --- |
| `title` | `string` | The display title of the project. |
| `description` | `string` | A short paragraph detailing features and technical achievements. |
| `tags` | `string[]` | List of languages/frameworks (rendered as wobbly sticky chips). |
| `image` | `string` | Asset path under `public/` (e.g., `/images/projects/adaptivegrade.png`). |
| `liveUrl` | `string` | Link to the deployed application (opens in a new tab). |
| `codeUrl` | `string` | Link to the GitHub repository. Use `#` if private. |

```typescript
export const projects = [
  {
    title: "AdaptiveGrade",
    description: "An asynchronous AI platform that processes academic PDFs...",
    tags: ["FastAPI", "Celery", "Redis", "AI Architecture"],
    image: "/images/projects/adaptivegrade.png",
    liveUrl: "https://www.adaptivegrade.tech/",
    codeUrl: "https://github.com/Deepesh70/adaptive-grade",
  },
  ...
];
```

### 3. Competencies Category (`skillCategories`)
Organized by technical buckets. Add or delete names and skills to render category cards:

```typescript
export const skillCategories = [
  {
    name: "Machine Learning & AI",
    skills: ["Transformers", "Self-Attention", "Ensemble Methods", "PCA/ICA", "Python"],
  },
  ...
];
```

### 4. Professional Timeline (`experiences`)
Lists timeline items in the **Experience** section. Displays in alternating left-to-right nodes:

```typescript
export const experiences = [
  {
    role: "Data Science & ML Student / Independent Developer",
    company: "Self-Directed",
    period: "Current",
    description: "Currently researching low-level ML mechanics...",
  }
];
```

### 5. Client/Colleague Reviews (`testimonials`)
To add testimonials, populate the array with objects conforming to the `Testimonial` interface:

```typescript
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jane Doe",
    role: "Lead Engineer @ Tech Corp",
    text: "Deepesh delivered a highly scalable backend structure...",
    avatar: "/images/avatars/jane.jpg"
  }
];
```
*(Leave empty to automatically hide the reviews slide section if no feedback is ready).*

---

## 🖼️ Handling Media & Static Assets

- Place screenshots or personal images inside the `public/` folder (e.g., `public/images/`).
- Reference them relative to the root URL (e.g., `/images/my-photo.jpg` translates to `public/images/my-photo.jpg`).
- The wobbly frames in `Hero.tsx` and `Card.tsx` will fit any standard aspect ratio seamlessly.
