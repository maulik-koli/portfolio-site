
export const ABUOT_TRAITS = [
    "End-to-End Delivery",
    "Problem Solver",
    "Self-Driven",
    "Clean Architecture"
]

type SkillsCategory = {
    title: string,
    skills: { name: string, dimmed?: boolean, badge?: string }[]
    delay: number
}

export const SKILL_CATEGORIES: SkillsCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Framer Motion" },
            { name: "TanStack Query" },
            { name: "React Hook Form" },
            { name: "Redux" },
            { name: "Zustand" },
            { name: "Zod" },
            { name: "Drag & Drop (DnD Kit)" },
        ],
        delay: 0
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "REST API Design" },
            { name: "MongoDB" },
            { name: "PostgreSQL" },
            { name: "Redis" },
            { name: "BullMQ" },
        ],
        delay: 0.15
    },
    {
        title: "DevOps & Tools",
        skills: [
            // { name: "Docker", dimmed: true, badge: "Learning" },
            { name: "Docker" },
            { name: "VPS Deployment" },
            { name: "Dokploy" },
            { name: "CI/CD (GitHub Actions)" },
            { name: "Git" },
            { name: "SEO Optimization" },
        ],
        delay: 0.3
    }
];



export const PROJECTS = [
    {
        title: "E-Commerce Platform",
        description: "A production-grade full-stack e-commerce system built with a focus on scalability and performance. Features include a PostgreSQL database with Redis for caching, rate limiting, and temporary session storage, BullMQ for background job processing, and a fully integrated payment gateway. Includes a complete Next.js admin panel. Deployed on a VPS with Docker and CI/CD via GitHub Actions (deployment in progress).",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "TypeScript", "CI/CD"],
        img: "/images/ecommerce.png",
        demoLink: "#",
        demoText: "Deploy in Progress",
        demoDisabled: true,
        repoLink: "https://github.com",
    },
    {
        title: "Tourism Booking Platform",
        description: "A concept-to-deployment client project converting a small tourism business to a fully online operation. Includes a user-facing Next.js site with best-practice SEO, a guest payment gateway, and an admin panel, all deployed on a VPS via Dokploy at minimal cost. Built and shipped end to end independently.",
        tags: ["Next.js", "Express.js", "MongoDB", "TypeScript", "SEO", "VPS", "Dokploy"],
        img: "/images/tourism.png",
        demoLink: "https://example.com",
        demoText: "Live Demo",
        demoDisabled: false,
    },
    // Uncomment and fill in when ready to add 3rd project
    // {
    //   title: "Project Title",
    //   description: "Project description here.",
    //   tags: ["Next.js", "Node.js"],
    //   img: "/project3.png",
    //   demoLink: "https://",
    //   demoText: "Live Demo",
    //   demoDisabled: false,
    //   repoLink: "https://",
    // }
];


export const SOCIAL_LINKS = {
    DOMAIN_URL: "https://maulikkoli.me",
    DOMAIN: "maulikkoli.me",
    TWITTER_HANDLE: "@maulik_koli11",
    EMAIL: "maulikkoli1021@gmail.com",
    GITHUB: "https://github.com/maulik-koli",
    TWITTER: "https://twitter.com/maulik_koli11",
    LINKEDIN: "https://www.linkedin.com/in/maulik-koli-387a75302/",
}