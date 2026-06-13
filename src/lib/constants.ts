export const siteConfig = {
  name: "Deepesh",
  title: "Machine Learning & Full-Stack Engineer",
  tagline: "Bridging AI, scalable backend infrastructure, and 3D automation.",
  description:
    "I engineer complex systems—from custom Transformer models and asynchronous AI processing pipelines to real-time 3D engine automation. My focus spans low-level ML mathematics to high-fidelity, high-performance web applications.",
  email: "deepeshdangi700@gmail.com",
  social: {
    github: "https://github.com/Deepesh70",
    linkedin: "https://linkedin.com/in/deepesh-dangi-377a1028a/",
    leetcode: "https://leetcode.com/u/j52P06pFAY/",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Core Projects", value: 5 },
  { label: "Tech Stack", value: 15 },
  { label: "GitHub Commits", value: "1200+" }, 
];

export const skillCategories = [
  {
    name: "Machine Learning & AI",
    skills: ["Transformers", "Self-Attention", "Ensemble Methods", "PCA/ICA", "Python"],
  },
  {
    name: "Backend & Systems",
    skills: ["FastAPI", "Node.js", "Celery", "Redis", "MERN Stack", "C++"],
  },
  {
    name: "3D Engine & Frontend",
    skills: ["Unreal Engine 5", "Unity", "React", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
];

export const projects = [
  {
    title: "AdaptiveGrade",
    description:
      "An asynchronous AI platform that processes academic PDFs to generate modular lesson content and quizzes. Engineered with FastAPI, Celery, and Redis to handle non-blocking, compute-heavy processing.",
    tags: ["FastAPI", "Celery", "Redis", "AI Architecture"],
    image: "/placeholder-project.svg", // Update with your actual asset
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Unreal-MCP Agent",
    description:
      "A bridging system connecting a Python-based agent to Unreal Engine 5 via WebSockets. Designed to execute automated, real-time spatial reasoning and 3D asset manipulation.",
    tags: ["Python", "Unreal Engine 5", "WebSockets", "C++"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    codeUrl: "https://github.com/Deepesh70/Unreal-MCP.git",
  },
  {
    title: "Custom Transformer Model",
    description:
      "A ground-up training pipeline and configuration for a custom Transformer model, optimized to process and train on a 2GB subset of the OpenWebText dataset.",
    tags: ["Machine Learning", "Transformers", "LLM"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Dynamic Portfolio Generator",
    description:
      "A multi-tenant application built entirely to stress-test complex system design patterns within the MERN stack.",
    tags: ["MERN Stack", "System Design", "Multi-tenant"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "High-Fidelity UI Clones",
    description:
      "Exact-match clones of Apple, Zentry, and Riot Web platforms. Built strictly as stress tests for rendering performance, 'butter smooth' aesthetics, and advanced CSS/animation mechanics.",
    tags: ["GSAP", "Framer Motion", "Tailwind CSS"],
    image: "/placeholder-project.svg",
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const experiences = [
  {
    role: "Data Science & ML Student / Independent Developer",
    company: "Self-Directed",
    period: "Current",
    description:
      "Currently researching low-level ML mechanics (Transformers, bootstrapping) while actively developing scalable full-stack applications and automated 3D systems. Focused on practical, complex engineering challenges over generic web development.",
  }
];

export const testimonials = []; // Empty array. Do not use fake reviews.