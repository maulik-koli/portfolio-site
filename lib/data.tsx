import { FaUser, FaCode, FaBriefcase, FaFolder, FaEnvelope } from "react-icons/fa";

export const HEADER_DATA = [
    { name: "About",      link: "#about",      icon: <FaUser /> },
    { name: "Skills",     link: "#skills",     icon: <FaCode /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Projects",   link: "#work",       icon: <FaFolder /> },
    { name: "Contact",    link: "#contact",    icon: <FaEnvelope /> },
]


export const SKILLS = [
    {
        title: "Frontend",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
            { name: "Drag & Drop (DnD Kit)" },
            { name: "Dynamic Form Handling" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "REST API Design" },
            { name: "MongoDB" },
            { name: "PostgreSQL" },
            { name: "Redis (Caching / Rate Limiting / Sessions)" },
            { name: "BullMQ (Background Jobs)" },
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker (Learning)", dimmed: true },
            { name: "VPS Deployment" },
            { name: "Coolify / Dokploy" },
            { name: "CI/CD (GitHub Actions)" },
            { name: "Git" },
            { name: "SEO Optimization" },
        ]
    }
];