"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.04 }
    }
};

const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};


const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="relative py-24 px-4 max-w-7xl mx-auto w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06)_0%,transparent_60%)] pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">Core Skills</h2>
                <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: category.delay }}
                        whileHover={{ boxShadow: "0 0 30px rgba(56,189,248,0.15)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-slate/10 p-8 rounded-2xl border border-slate/30 relative flex flex-col"
                    >
                        <h3 className="text-lg font-mono text-champagne uppercase tracking-wider mb-3">
                            <span className="mr-2">&middot;</span>{category.title}
                        </h3>
                        
                        <div className="h-px w-full bg-champagne/30 mb-6" />

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {category.skills.map((skill, sIdx) => (
                                <motion.span 
                                    key={sIdx}
                                    variants={pillVariants}
                                    className={`relative px-4 py-1.5 bg-obsidian border border-slate/40 text-ivory rounded-full font-mono text-xs shadow-inner transition-colors hover:border-champagne hover:text-champagne hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] ${skill.dimmed ? 'opacity-60' : ''}`}
                                >
                                    {skill.name}
                                    {skill.badge && (
                                        <span className="font-mono text-[9px] uppercase bg-black/80 border border-slate/50 px-1.5 py-0.5 rounded-sm absolute -top-3 -right-2">
                                            {skill.badge}
                                        </span>
                                    )}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;