"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import FallbackImage from "@/components/ui/fallback-image";

const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};


const FeaturedProjects: React.FC = () => {
    return (
        <section id="work" className="relative py-24 px-4 max-w-7xl mx-auto w-full overflow-hidden">
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[150px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-slate/30 rounded-full blur-[150px] pointer-events-none -z-10" />

            <motion.div 
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 flex flex-col items-center justify-center text-center"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">Featured Projects</h2>
                <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
            </motion.div>

            <div className="space-y-24">
                {PROJECTS.map((project, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                    >
                        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-slate/30 shadow-2xl relative group">
                            <FallbackImage src={project.img} alt={project.title} width={600} height={400} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default FeaturedProjects;