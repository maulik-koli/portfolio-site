"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A production-grade full-stack e-commerce system built with a focus on scalability and performance. Features include a PostgreSQL database with Redis for caching, rate limiting, and temporary session storage, BullMQ for background job processing, and a fully integrated payment gateway. Includes a complete Next.js admin panel. Deployed on a VPS with Docker and CI/CD via GitHub Actions (deployment in progress).",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "TypeScript", "CI/CD"],
        img: "https://via.placeholder.com/600x400/0d1b2a/38bdf8?text=E-Commerce+Platform",
        demoLink: "#",
        demoText: "Deploy in Progress",
        demoDisabled: true,
        repoLink: "https://github.com",
    },
    {
        title: "Tourism Booking Platform",
        description: "A concept-to-deployment client project converting a small tourism business to a fully online operation. Includes a user-facing Next.js site with best-practice SEO, a guest payment gateway, and an admin panel — all deployed on a VPS via Dokploy at minimal cost. Built and shipped end to end independently.",
        tags: ["Next.js", "Express.js", "MongoDB", "TypeScript", "SEO", "VPS", "Dokploy"],
        img: "https://via.placeholder.com/600x400/0d1b2a/38bdf8?text=Tourism+Booking+Platform",
        demoLink: "https://example.com",
        demoText: "Live Demo",
        demoDisabled: false,
        repoLink: "https://github.com",
    }
];

export function FeaturedProjects() {
    return (
        <section id="work" className="py-24 px-4 max-w-7xl mx-auto w-full">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 flex flex-col items-center justify-center text-center"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">Featured Projects</h2>
                <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
            </motion.div>

            <div className="space-y-24">
                {projects.map((project, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                    >
                        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate/30 shadow-2xl relative group">
                            <img src={project.img} alt={project.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-champagne/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        <div className="w-full md:w-1/2 flex flex-col gap-6">
                            <h3 className="text-2xl md:text-4xl font-serif text-ivory font-bold">{project.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-mono bg-slate/50 text-champagne px-3 py-1.5 rounded-sm border border-champagne/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="font-sans text-slate-300 text-lg opacity-80 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <a 
                                    href={project.demoLink} 
                                    className={`px-6 py-3 rounded font-sans font-bold transition-colors text-sm text-center shadow-lg ${project.demoDisabled ? 'bg-slate/50 text-slate-400 cursor-not-allowed border border-slate/50' : 'bg-champagne text-obsidian hover:bg-ivory'}`}
                                    aria-disabled={project.demoDisabled}
                                    onClick={project.demoDisabled ? (e) => e.preventDefault() : undefined}
                                >
                                    {project.demoText}
                                </a>
                                <a href={project.repoLink} className="px-6 py-3 rounded bg-transparent border border-slate text-ivory font-sans hover:border-champagne hover:text-champagne transition-colors text-sm text-center">
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
