"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";


export const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-24 px-4 max-w-7xl mx-auto w-full">
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
                {SKILLS.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="bg-slate/10 p-8 rounded-2xl border border-slate/30 shadow-2xl relative overflow-hidden group h-full flex flex-col"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                        
                        <h3 className="text-xl font-mono text-champagne mb-6 uppercase tracking-wider relative z-10 text-center">{category.title}</h3>
                        <div className="flex flex-wrap gap-3 relative z-10 justify-center flex-1 content-start">
                            {category.skills.map((skill, sIdx) => (
                                <span 
                                    key={sIdx}
                                    className={`px-3 py-1.5 bg-obsidian border border-slate/50 text-ivory rounded font-sans text-sm shadow-inner transition-colors hover:border-champagne/50 ${skill.dimmed ? 'opacity-60' : ''}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection