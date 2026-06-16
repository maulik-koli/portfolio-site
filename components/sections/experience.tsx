"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { 
    SiReact, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs 
} from "react-icons/si";
import { TbDragDrop } from "react-icons/tb";

const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -15, filter: "blur(3px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Victa Soft",
        date: "Jan 2025 — Dec 2025",
        location: "India · On-site",
        points: [
            <>
                Led <span className="text-primary font-semibold">end-to-end frontend architecture</span> and <span className="text-foreground font-semibold">database schema design</span> for a Shopify SaaS mobile app builder, owning core modules from initial concept to live production on the <span className="text-primary font-medium">Shopify App Store</span>.
            </>,
            <>
                Engineered a full <span className="text-primary font-semibold">drag-and-drop mobile app builder</span> using <span className="text-foreground font-semibold">React, TypeScript</span>, and DnD Kit, enabling users to visually compose entire app layouts with real-time previews.
            </>,
            <>
                Built and owned backend modules in <span className="text-foreground font-semibold">Node.js and MongoDB</span>, covering business logic, data modeling, and REST API design across the core product.
            </>,
            <>
                Collaborated in a cross-functional team to deliver a client platform, maintaining shared codebase integrity and ensuring <span className="text-primary font-medium">zero-delay feature delivery</span>.
            </>
        ],
        techBadges: [
            { name: "React", icon: SiReact, color: "text-sky-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
            { name: "Express.js", icon: SiExpress, color: "text-muted-foreground" },
            { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
            { name: "DnD Kit", icon: TbDragDrop, color: "text-amber-400" },
        ]
    },
    {
        role: "Freelance Full Stack Developer",
        company: "Independent Client Work",
        date: "Jan 2026 — Present",
        location: "India · Remote",
        points: [
            <>
                Independently architected a full-stack booking platform using <span className="text-foreground font-semibold">Next.js, TypeScript, Express, and MongoDB</span>, covering user booking flow, admin dashboard, and JWT auth, from schema to production.
            </>,
            <>
                Digitized a fully offline tourism business to web, reaching <span className="text-primary font-semibold">500+ visitors</span> and expanding customer base to new regions via production-grade <span className="text-foreground font-medium">SEO</span> and <span className="text-foreground font-medium">VPS deployment</span>.
            </>
        ],
        techBadges: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
            { name: "Express.js", icon: SiExpress, color: "text-muted-foreground" },
            { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="relative py-24 px-4 max-w-7xl mx-auto w-full mb-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_50%)] pointer-events-none -z-10" />

            <motion.div 
                initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 text-center flex flex-col items-center"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">Experience</h2>
                <div className="h-1 w-20 bg-primary mb-6 rounded-full" />
            </motion.div>

            <div className="flex flex-col items-center w-full gap-16">
                {experiences.map((exp, expIdx) => (
                    <motion.div 
                        key={expIdx}
                        className="flex justify-center w-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <BackgroundGradient className="rounded-[22px] max-w-4xl w-full p-4 sm:p-10 bg-card border-[0.5px] border-border shadow-2xl">
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-b border-border pb-8">
                                <div>
                                    <div className="flex items-center gap-2.5 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{exp.role}</h3>
                                        </div>
                                    </div>
                                    <p className="text-primary font-mono text-sm tracking-wider uppercase ml-[52px]">{exp.company}</p>
                                </div>
                                <div className="flex flex-col gap-2 md:items-end">
                                    <div className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-4 py-1.5 w-max">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-muted-foreground font-sans text-sm">{exp.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1">
                                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                                        <span className="text-muted-foreground font-sans text-sm">{exp.location}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <motion.div 
                                variants={listContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="mb-10 space-y-5"
                            >
                                {exp.points.map((point, idx) => (
                                    <motion.div 
                                        key={idx}
                                        variants={listItemVariants} 
                                        whileHover={{ x: 4, transition: { type: "spring", stiffness: 300 } }}
                                        className="flex items-start gap-4 group cursor-default"
                                    >
                                        <div className="relative mt-2 shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-300" />
                                        </div>
                                        <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed transition-opacity duration-300">
                                            {point}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="pt-8 border-t border-border">
                                <h4 className="text-sm font-mono text-muted-foreground mb-5 uppercase tracking-widest">Core Tech Used</h4>
                                <div className="flex flex-wrap gap-3">
                                    {exp.techBadges.map((badge, idx) => {
                                        const Icon = badge.icon;
                                        return (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ 
                                                    y: -3,
                                                    scale: 1.05,
                                                    borderColor: "rgba(56,189,248,0.4)",
                                                    transition: { type: "spring", stiffness: 400, damping: 15 }
                                                }}
                                                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full cursor-default hover:bg-muted transition-colors duration-300"
                                            >
                                                <Icon className={`w-4 h-4 ${badge.color}`} />
                                                <span className="text-foreground text-xs font-mono">{badge.name}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </BackgroundGradient>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;