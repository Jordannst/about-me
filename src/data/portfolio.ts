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
  highlight: `For me, coding isn't just about logic—it's about creating experiences that leave an impression.`,
};

export const skills = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Golang", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
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
    slug: "project-one",
    title: "Project Name",
    description: "A brief description of your project. What problem does it solve?",
    longDescription: "This is a longer description that explains the project in more detail. Talk about the challenges you faced, the solutions you implemented, and the impact of the project.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    link: "https://github.com/yourusername/project",
    featured: true,
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    slug: "project-two",
    title: "Another Project",
    description: "Description of another amazing project you built.",
    longDescription: "Detailed description of the second project, explaining the technical challenges and how you solved them.",
    image: "/images/project-2.jpg",
    tags: ["React", "Golang", "PostgreSQL"],
    link: "https://github.com/yourusername/project-2",
    featured: true,
    year: "2024",
    role: "Backend Developer",
  },
  {
    id: 3,
    slug: "project-three",
    title: "Third Project",
    description: "Yet another cool project showcasing your skills.",
    longDescription: "A comprehensive description of your third project.",
    image: "/images/project-3.jpg",
    tags: ["Python", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-3",
    featured: false,
    year: "2023",
    role: "Frontend Developer",
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
