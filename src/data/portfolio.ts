// Portfolio Data - Easy to update
// Edit this file to change your portfolio content

export const personal = {
  name: "Jordan Sutarto",
  tagline: "Fullstack Developer",
  taglineAccent: "AI Enthusiast",
  location: "Indonesia",
  email: "your-email@example.com", // Update this
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

export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "A brief description of your project. What problem does it solve?",
    image: "/images/project-1.jpg", // Add your project image
    tags: ["Next.js", "TypeScript", "MongoDB"],
    link: "https://github.com/yourusername/project",
    featured: true,
  },
  {
    id: 2,
    title: "Another Project",
    description: "Description of another amazing project you built.",
    image: "/images/project-2.jpg",
    tags: ["React", "Golang", "PostgreSQL"],
    link: "https://github.com/yourusername/project-2",
    featured: true,
  },
  {
    id: 3,
    title: "Third Project",
    description: "Yet another cool project showcasing your skills.",
    image: "/images/project-3.jpg",
    tags: ["Python", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-3",
    featured: false,
  },
];

export const social = {
  github: "https://github.com/yourusername", // Update this
  linkedin: "https://linkedin.com/in/yourusername", // Update this
  instagram: "https://instagram.com/yourusername", // Update this
};

export const meta = {
  title: "Jordan Sutarto | Fullstack Developer & AI Enthusiast",
  description: "Personal portfolio of Jordan Sutarto - A passionate fullstack developer and AI enthusiast crafting beautiful digital experiences.",
  year: new Date().getFullYear(),
};
