import { IconType } from "react-icons";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
    SiReacthookform, SiRedux, SiGraphql, SiReactquery, SiZod,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiRedis,
    SiPrisma, SiJsonwebtokens, SiVitest,
    SiDocker, SiGithubactions, SiGit, SiShadcnui
} from "react-icons/si";
import { TbDragDrop } from "react-icons/tb";
import { VscServer } from "react-icons/vsc";
import { MdOutlineSpeed, MdPayment } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { BsKanban } from "react-icons/bs";
import { LuRocket } from "react-icons/lu";

export const ABUOT_TRAITS = [
    "End-to-End Delivery",
    "Problem Solver",
    "Self-Driven",
    "Clean Architecture"
]

type Skill = {
    name: string;
    icon: IconType;
}

type SkillsCategory = {
    title: string;
    description: string;
    skills: Skill[];
    delay: number;
    gradient: string;
    iconBg: string;
}

export const SKILL_CATEGORIES: SkillsCategory[] = [
    {
        title: "Frontend",
        description: "Building responsive, performant interfaces with modern React ecosystem",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer },
            { name: "React Hook Form", icon: SiReacthookform },
            { name: "DnD Kit", icon: TbDragDrop },
            { name: "GraphQL", icon: SiGraphql },
            { name: "TanStack Query", icon: SiReactquery },
            { name: "shadcn/ui", icon: SiShadcnui },
            { name: "Redux", icon: SiRedux },
            { name: "Zustand", icon: BsKanban },
        ],
        delay: 0,
        gradient: "from-sky-500/10 to-blue-500/5",
        iconBg: "bg-sky-500/10 text-sky-400",
    },
    {
        title: "Backend",
        description: "Designing robust APIs, databases, and scalable server architectures",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
            { name: "Redis", icon: SiRedis },
            { name: "BullMQ", icon: MdOutlineSpeed },
            { name: "Zod", icon: SiZod },
            { name: "JWT / Auth", icon: SiJsonwebtokens },
            { name: "Payment Gateway", icon: MdPayment },
        ],
        delay: 0.1,
        gradient: "from-emerald-500/10 to-green-500/5",
        iconBg: "bg-emerald-500/10 text-emerald-400",
    },
    {
        title: "DevOps & Tools",
        description: "Shipping and maintaining applications with modern tooling",
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "Git", icon: SiGit },
            { name: "GitHub Actions", icon: SiGithubactions },
            { name: "VPS Deployment", icon: VscServer },
            { name: "Dokploy", icon: LuRocket },
            { name: "SEO Optimization", icon: HiOutlineSearch },
            { name: "Vitest", icon: SiVitest },
        ],
        delay: 0.2,
        gradient: "from-purple-500/10 to-violet-500/5",
        iconBg: "bg-purple-500/10 text-purple-400",
    }
];



export const PROJECTS = [
    {
        title: "Core Mart",
        description: "Architected full-stack e-commerce platform using Node.js, PostgreSQL, payment gateway integration, and BullMQ async queues for email processing. Achieved sub-200ms API response times under load via Redis caching, containerized with Docker and automated via GitHub Actions CI/CD to VPS. Covered payment and auth logic with Vitest unit tests.",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "TypeScript", "CI/CD"],
        img: "/proj-1.webp",
        demoLink: "#",
        demoText: "Live link",
        demoDisabled: false,
        repoLink: "https://github.com/core-stack-code/coremart-backend",
    },
    {
        title: "Eklavya Tourism",
        description: "A concept-to-deployment client project converting a small tourism business to a fully online operation. Includes a user-facing Next.js site with best-practice SEO, a guest payment gateway, and an admin panel, all deployed on a VPS via Dokploy at minimal cost. Built and shipped end to end independently.",
        tags: ["Next.js", "Express.js", "MongoDB", "TypeScript", "SEO", "VPS", "Dokploy"],
        img: "/proj-2.webp",
        demoLink: "https://eklavyatourism.com/",
        demoText: "Live link",
        demoDisabled: false,
        repoLink: "https://github.com/maulik-koli/tour-base",
    },
    {
        title: "Just Pick Already",
        description: "Built a gamified AI personality platform using Next.js and Framer Motion with custom keyboard-driven 2D character movement, 100+ users, no game engine. Engineered server-side Gemini SDK AI pipeline with Prisma ORM, prompt engineering, and rate-limited endpoints to prevent abuse.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini SDK", "Prisma", "PostgreSQL", "Framer Motion"],
        img: "/proj-3.webp",
        demoLink: "https://justpickalready.in",
        demoText: "Live link",
        demoDisabled: false,
        repoLink: "https://github.com/maulik-koli/just-pick-already",
    }
];


export const SOCIAL_LINKS = {
    DOMAIN_URL: "https://maulikkoli.dev",
    DOMAIN: "maulikkoli.dev",
    TWITTER_HANDLE: "@maulik_koli11",
    EMAIL: "maulikkoli1021@gmail.com",
    GITHUB: "https://github.com/maulik-koli",
    TWITTER: "https://twitter.com/maulik_koli11",
    LINKEDIN: "https://www.linkedin.com/in/maulik-koli-387a75302/",
}