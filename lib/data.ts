import { Code, Palette, Laptop, GitBranch, Figma, Sparkles, Briefcase, GraduationCap } from "lucide-react"

export const skills = [
  { name: "HTML", icon: Code, description: "Semantic markup and web standards.", proficiency: 95 },
  { name: "CSS", icon: Palette, description: "Responsive design and modern layouts.", proficiency: 90 },
  { name: "JavaScript", icon: Sparkles, description: "Dynamic and interactive web applications.", proficiency: 88 },
  { name: "GitHub", icon: GitBranch, description: "Version control and collaboration.", proficiency: 85 },
  { name: "Tailwind CSS", icon: Palette, description: "Utility-first CSS framework.", proficiency: 92 },
  {
    name: "Project Management",
    icon: Briefcase,
    description: "Planning, executing, and closing projects.",
    proficiency: 75,
  },
  { name: "React.js", icon: Laptop, description: "Building modern user interfaces.", proficiency: 87 },
  { name: "Figma", icon: Figma, description: "UI/UX design and prototyping.", proficiency: 70 },
]

export const projects = [
  {
    name: "Revino.in",
    description: "A modern website showcasing solutions, industries, and resources for a company.",
    techStack: ["HTML", "CSS", "JavaScript", "React"], // Assuming common frontend tech
    liveLink: "https://revino.in/",
    githubLink: "#", // Placeholder, update if available
    image: "/images/revino-in-full.png", // Updated image path
  },
  {
    name: "Miragix.com",
    description: "A business website focused on intelligent AI solutions and transforming operations.",
    techStack: ["HTML", "CSS", "JavaScript", "React"], // Assuming common frontend tech
    liveLink: "https://miragix.com/",
    githubLink: "#", // Placeholder, update if available
    image: "/images/miragix-com-hero.png", // Updated image path
  },
  {
    name: "Virtual-Atm",
    description: "A web-based simulation of an ATM, demonstrating basic banking operations.",
    techStack: ["HTML", "CSS", "JavaScript"], // Assuming core web technologies
    liveLink: "https://ani1801.github.io/VirtualAtm/",
    githubLink: "https://github.com/ani1801/VirtualAtm", // Assuming this is the repo
    image: "/images/virtual-atm.png",
  },
  {
    name: "AI-driven Show Streaming Platform",
    description: "A modern streaming platform with AI-driven recommendations and a sleek user interface.",
    techStack: ["HTML", "CSS", "JavaScript"], // Updated tech stack
    liveLink: null, // Set to null to disable the button
    githubLink: "#", // Placeholder, update if available
    image: "/images/ai-streaming-platform.png", // New image path
    status: "Ongoing", // Added status
  },
]

export const experience = [
  {
    title: "Intern",
    company: "Revino",
    duration: "Feb 2025 - May 2025",
    location: "Remote, India",
    description: [
      "Built and deployed 2 responsive websites using React.js, Vite, and Tailwind CSS, improving load speed by 40%.",
      "Redesigned the company's main website on Hostinger with a mobile-first, UI/UX-focused approach.",
    ],
    icon: Briefcase, // Using Briefcase icon for internship
  },
  {
    title: "Hackathon / Smart India Hackathon (SIH) – Finalist",
    company: "Smart India Hackathon (SIH)",
    duration: "Aug 2024", // Updated duration
    location: "Online", // Updated location
    description: [
      "Role: Frontend Developer & UI Designer.",
      "Designed and developed an intuitive web UI using HTML, CSS, and JavaScript to help farmers connect with customers directly.",
      "Contributed as a frontend specialist, focusing on usability, responsiveness, and accessibility.",
      "Cleared internal college selection round and qualified for the national-level final round of SIH Hackathon.",
      "Used the opportunity to sharpen frontend skills and gain experience in real-world problem solving.",
    ],
    icon: GraduationCap, // Using GraduationCap icon for hackathon/academic achievement
  },
]
