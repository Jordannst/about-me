// Portfolio Data - Easy to update
// Edit this file to change your portfolio content

export const personal = {
  name: "Jordan Sutarto",
  tagline: "Fullstack Developer",
  taglineAccent: "AI Enthusiast",
  location: "Indonesia",
  email: "jordannst.08@gmail.com",
};

export const about = {
  intro: `A 3rd-year Computer Science student passionate about web development and crafting beautiful user interfaces. I thrive on building real-world projects that solve meaningful problems, and I actively participate in tech competitions to push my boundaries.`,
  highlight: `For me, coding isn't just about logic, it's about creating experiences that leave an impression.`,
};

export const skills = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Golang", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Figma", category: "Design" },
];

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link: string;
  liveUrl?: string;
  featured: boolean;
  year?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "contextual-rag-chat",
    title: "Contextual RAG Chat",
    description: "Production-grade Retrieval-Augmented Generation system with hybrid semantic search, AI-powered document analysis, and Data Analyst Agent for CSV/Excel analytics with chart visualization.",
    longDescription: "Production-grade Retrieval-Augmented Generation system with hybrid semantic search (vector + full-text), AI-powered document analysis, and Data Analyst Agent that generates Python code from natural language queries for CSV/Excel analytics with chart visualization.",
    image: "/rag-chatbot.webp",
    tags: ["Next.js", "Go", "PostgreSQL", "pgvector", "Gemini AI"],
    link: "https://github.com/Jordannst/contextual-rag-chat",
    featured: true,
    year: "2025",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    slug: "kassentix-pos",
    title: "Kassentix POS",
    description: "Cloud-based Point of Sale SaaS for Indonesian SMEs. Features AI analytics, real-time inventory sync, multi-outlet management & subscription tiers.",
    longDescription: "Cloud-based Point of Sale SaaS for Indonesian SMEs. Features AI analytics, real-time inventory sync, multi-outlet management & subscription tiers. Try FREE at kassentix.cloud!",
    image: "/kassentix.webp",
    tags: ["Next.js 15", "TypeScript", "Express.js", "Prisma", "Socket.io"],
    link: "https://kassentix.cloud",
    liveUrl: "https://kassentix.cloud",
    featured: true,
    year: "2025",
    role: "Full Stack Developer",
  },
];

// Certificate Types: "organization", "competition", "course"
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: "organization" | "competition" | "course";
  image?: string;
  credentialUrl?: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate Name",
    issuer: "Organization / Platform Name",
    date: "2024",
    type: "organization",
    description: "Brief description of the certificate or achievement.",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Competition Winner",
    issuer: "Competition Name",
    date: "2024",
    type: "competition",
    description: "1st Place / Winner description.",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Course Completion",
    issuer: "Course Platform",
    date: "2023",
    type: "course",
    description: "Course completion details.",
    credentialUrl: "#",
  },
];

export const social = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
};

export const meta = {
  title: "Jordan Sutarto | Fullstack Developer & AI Enthusiast",
  description: "Personal portfolio of Jordan Sutarto - A passionate fullstack developer and AI enthusiast crafting beautiful digital experiences.",
  year: new Date().getFullYear(),
};
