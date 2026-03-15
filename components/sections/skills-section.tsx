"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.7, filter: "blur(4px)" },
    visible: { 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px)",
        transition: { type: "spring" as const, stiffness: 120, damping: 14 }
    }
};

const CATEGORY_COLORS = [
    { dot: "#38bdf8", border: "border-sky-500/20", hoverBorder: "hover:border-sky-400/50", glow: "rgba(56,189,248,0.12)", labelBg: "bg-sky-500/8", labelText: "text-sky-400" },
    { dot: "#34d399", border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-400/50", glow: "rgba(52,211,153,0.12)", labelBg: "bg-emerald-500/8", labelText: "text-emerald-400" },
    { dot: "#a78bfa", border: "border-purple-500/20", hoverBorder: "hover:border-purple-400/50", glow: "rgba(167,139,250,0.12)", labelBg: "bg-purple-500/8", labelText: "text-purple-400" },
];


const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="relative py-24 px-4 max-w-6xl mx-auto w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.06)_0%,transparent_60%)] pointer-events-none -z-10" />

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">Skills & Expertise</h2>
                <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
                <p className="font-sans text-slate-300 text-base md:text-lg opacity-80 max-w-2xl leading-relaxed">
                    A snapshot of my <span className="text-champagne font-semibold">technical toolkit</span>, refined through real-world
                    projects and <span className="text-champagne font-semibold">production deployments</span>.
                </p>
            </motion.div>

            {/* Category Lanes */}
            <div className="space-y-6">
                {SKILL_CATEGORIES.map((category, idx) => {
                    const colors = CATEGORY_COLORS[idx];
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="group relative"
                        >
                            {/* Lane container */}
                            <div className={`relative flex flex-col md:flex-row items-stretch rounded-2xl border ${colors.border} bg-slate/5 overflow-hidden transition-all duration-500 hover:bg-slate/10`}
                                 style={{ boxShadow: `0 0 0px ${colors.glow}` }}
                                 onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 40px ${colors.glow}`; }}
                                 onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0px ${colors.glow}`; }}
                            >
                                {/* Left: Category Label */}
                                <div className="md:w-48 lg:w-56 shrink-0 p-5 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center gap-2 md:border-r border-b md:border-b-0 border-white/5">
                                    <div className="flex items-center gap-2.5">
                                        <div 
                                            className="w-2 h-2 rounded-full shrink-0"
                                            style={{ backgroundColor: colors.dot }}
                                        />
                                        <h3 className="text-base md:text-lg font-mono text-champagne uppercase tracking-wider whitespace-nowrap">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <p className="hidden md:block font-sans text-slate-500 text-xs leading-relaxed mt-1.5">
                                        {category.description}
                                    </p>
                                    <span className={`text-[10px] font-mono ${colors.labelText} ${colors.labelBg} px-2 py-0.5 rounded-full`}>
                                        {category.skills.length} skills
                                    </span>
                                </div>

                                {/* Right: Skills flow */}
                                <motion.div 
                                    className="flex-1 p-4 md:p-5 flex flex-wrap items-center gap-3"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ staggerChildren: 0.04, delayChildren: idx * 0.1 }}
                                >
                                    {category.skills.map((skill, sIdx) => {
                                        const Icon = skill.icon;
                                        return (
                                            <motion.div
                                                key={sIdx}
                                                variants={skillItemVariants}
                                                whileHover={{ 
                                                    y: -3,
                                                    scale: 1.06,
                                                    transition: { type: "spring", stiffness: 400, damping: 15 }
                                                }}
                                                className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-obsidian/80 border border-slate/20 cursor-default ${colors.hoverBorder} hover:bg-slate/15 transition-all duration-300 group/skill`}
                                            >
                                                <div className={`w-8 h-8 rounded-lg ${category.iconBg} flex items-center justify-center transition-all duration-300 group-hover/skill:scale-110`}>
                                                    <Icon className="w-4 h-4 transition-transform duration-300" />
                                                </div>
                                                <span className="text-ivory/80 text-xs font-mono whitespace-nowrap group-hover/skill:text-ivory transition-colors duration-300">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default SkillsSection;