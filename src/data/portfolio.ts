// Portfolio Data

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
  { name: "PHP", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
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
    description:
      "Production-grade Retrieval-Augmented Generation system with hybrid semantic search, AI-powered document analysis, and Data Analyst Agent for CSV/Excel analytics with chart visualization.",
    longDescription:
      "Production-grade Retrieval-Augmented Generation system with hybrid semantic search (vector + full-text), AI-powered document analysis, and Data Analyst Agent that generates Python code from natural language queries for CSV/Excel analytics with chart visualization.",
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
    description:
      "Cloud-based Point of Sale SaaS for Indonesian SMEs. Features AI analytics, real-time inventory sync, multi-outlet management & subscription tiers.",
    longDescription:
      "Cloud-based Point of Sale SaaS for Indonesian SMEs. Features AI analytics, real-time inventory sync, multi-outlet management & subscription tiers. Try FREE at kassentix.cloud!",
    image: "/kassentix.webp",
    tags: ["Next.js 15", "TypeScript", "Express.js", "Prisma", "Socket.io"],
    link: "https://kassentix.cloud",
    liveUrl: "https://kassentix.cloud",
    featured: true,
    year: "2025",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    slug: "klk-invoice-system",
    title: "KLK Invoice Management System",
    description:
      "Full-stack invoice management system for logistics company. Features transaction tracking, digital signature support, PDF generation, soft-delete with trash system, and secure authentication.",
    longDescription:
      "A modern invoice management system built for logistics/expedition businesses. Includes transaction management, invoice grouping, digital signature storage, PDF export with html2pdf.js, rate-limited authentication, soft-delete functionality, and real-time analytics dashboard.",
    image: "/klkinvoice.webp",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS 4",
      "Supabase",
    ],
    link: "https://klkinvoice.my.id/",
    liveUrl: "https://klkinvoice.my.id/",
    featured: true,
    year: "2026",
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
    title: "UI/UX Design 3rd Honorable Mention",
    issuer: "Indoneris IT Competition - Universitas Amikom Purwokerto",
    date: "2025",
    type: "competition",
    description:
      "3rd Honorable Mention (Juara Harapan 3) in the UI/UX Design category at the Indonesia IT Competition (Indoneris) 2025.",
    image: "/UIUX-6.webp",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "UI/UX Design 1st Place",
    issuer: "Indoneris IT Competition - Universitas Amikom Purwokerto",
    date: "2024",
    type: "competition",
    description:
      "First place winner in the UI/UX Design category at the Indonesia IT Competition (Indoneris) 2024.",
    image: "/2024-UIUX.webp",
    credentialUrl: "#",
  },
  
];

export const social = {
  github: "https://github.com/Jordannst",
  linkedin: "https://id.linkedin.com/in/jordan-sutarto-04866b26b",
  instagram: "https://www.instagram.com/_jordannst/",
};

export const meta = {
  title: "Jordan Sutarto | About Me",
  description:
    "Personal portfolio of Jordan Sutarto - A passionate fullstack developer and AI enthusiast crafting beautiful digital experiences.",
  year: new Date().getFullYear(),
};
