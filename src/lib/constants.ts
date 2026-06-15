export const siteConfig = {
  name: "Deepesh", 
  title: "Machine Learning & Full-Stack Developer", 
  tagline: "Bridging AI, scalable backend infrastructure, and 3D automation.",
  description:
    "I build complex systems—from custom Transformer models and asynchronous AI processing pipelines to real-time 3D engine automation. I focus on practical, hard engineering challenges, high-performance web applications, and understanding low-level ML mechanics.",
  email: "deepeshdangi700@gmail.com",
  location: "Indore, Madhya Pradesh, India", 
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
  { label: "Lab", href: "#lab" },
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
    title: "ScholarDive",
    description:
      "An AI-powered adaptive learning platform featuring a 4-level hierarchical knowledge graph, epsilon-greedy exploration, and an adaptive RAG pipeline. Built with a dual-backend architecture to handle non-blocking, compute-heavy parsing and sub-second question evaluation.",
    tags: ["React", "Node.js","Mongoose","FastAPI", "LangChain", "Qdrant Cloud", "Celery", "Redis", "Docker"],
    image: "/placeholder-project.svg",
    liveUrl: "https://www.adaptivegrade.tech/",
    // codeUrl: "", 
  },
  {
    title: "Unreal-MCP Agent",
    description:
      "A bridging system connecting a Python-based agent to Unreal Engine 5 via WebSockets. Designed to execute automated, real-time spatial reasoning and 3D asset manipulation.",
    tags: ["Python", "Unreal Engine 5", "WebSockets", "C++"],
    image: "/placeholder-project.svg",
    // liveUrl: "",
    codeUrl: "https://github.com/Deepesh70/Unreal-MCP",
  },
  {
    title: "Mini Generative Pretrained Transformer",
    description:
      "A ground-up training pipeline and configuration for a custom Transformer model, optimized to process and train on a 2GB subset of the OpenWebText dataset.",
    tags: ["Machine Learning", "Transformers", "LLM", "Python"],
    image: "/placeholder-project.svg",
    // liveUrl: "",
    codeUrl: "https://github.com/Deepesh70/Mini_Generative_Pretrained_Transformer",
  },
  {
    title: "Riot Web Clone",
    description:
      "A high-fidelity, exact-match clone of the Riot Games web platform. Built strictly as a stress test for rendering performance, seamless aesthetics, and advanced CSS/animation mechanics.",
    tags: ["GSAP", "Framer Motion", "Tailwind CSS", "React"],
    image: "/placeholder-project.svg",
    // liveUrl: "",
    codeUrl: "https://github.com/Deepesh70/Riot_web",
  },
  {
    title: "GGStats",
    description:
      "A robust statistics tracking platform engineered to parse, process, and display complex gaming data with high accuracy and low latency.", 
    tags: ["React", "Node.js", "API Integration", "Data Visualization"], 
    image: "/placeholder-project.svg",
    // liveUrl: "",
    codeUrl: "https://github.com/Jeevant010/GGStats",
  }
];

export const experiments = [
  {
    title: "Frontend Sandbox & High-Fidelity UI",
    description:
      "A collection of experimental UI builds focusing on advanced CSS mechanics, GSAP animations, and component rendering. These are strict frontend stress-tests, not full-stack systems.",
    tags: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "UI/UX"],
    subProjects: [
      { label: "Zentry Architecture", url: "https://github.com/Deepesh70/Zentry-Clone" },
      { label: "Spotify Interface", url: "https://github.com/Deepesh70/Spotify_Clone" },
      { label: "Flex Watch", url: "https://github.com/Deepesh70/Flex-Watch" },
      { label: "Mojito Showcase", url: "https://github.com/Deepesh70/Mojito_Cocktail" },
    ],
  },
  {
    title: "NLP Sandbox: Sentiment Analysis",
    description:
      "An exploratory testing ground for foundational Natural Language Processing techniques to classify and interpret text sentiment.",
    tags: ["Python", "NLP", "Machine Learning", "Text Processing"],
    subProjects: [
      { label: "Source Code", url: "https://github.com/Deepesh70/Sentiment_Analysis" },
    ],
  },
];

export const experiences = [
  {
    role: "Data Science & ML Student / Independent Developer",
    company: "Self-Directed",
    period: "Current",
    description:
      "Currently researching low-level ML mechanics while actively developing scalable full-stack applications and automated 3D systems. Focused on practical, complex engineering challenges over generic web development.",
  }
];
