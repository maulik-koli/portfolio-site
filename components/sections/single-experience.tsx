"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { 
    SiReact, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiGraphql 
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

const techBadges = [
    { name: "React", icon: SiReact, color: "text-sky-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Express.js", icon: SiExpress, color: "text-slate-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-ivory" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
    { name: "DnD Kit", icon: TbDragDrop, color: "text-amber-400" },
];

const experiencePoints = [
    {
        text: (
            <>
                Architected and delivered the <span className="text-champagne font-semibold">full frontend</span> of a Shopify SaaS mobile app builder in{" "}
                <span className="text-ivory font-semibold">React + TypeScript</span>, building a <span className="text-champagne font-medium">drag-and-drop interface</span> (DnD Kit) and{" "}
                <span className="text-ivory font-medium">Shopify GraphQL</span> integration across 10+ configurable block types for real merchants.
            </>
        ),
    },
    {
        text: (
            <>
                Engineered <span className="text-champagne font-semibold">core backend modules</span> in{" "}
                <span className="text-ivory font-semibold">Node.js, Express.js, and MongoDB</span>, covering{" "}
                <span className="text-ivory font-medium">data modeling</span> and competitive research that directly shaped product roadmap decisions.
            </>
        ),
    },
    {
        text: (
            <>
                Delivered a <span className="text-ivory font-semibold">React admin panel</span> for internal operations and an{" "}
                <span className="text-champagne font-semibold">SEO-optimized Next.js</span> landing page with server-side rendering, improving organic discoverability for the live SaaS product.
            </>
        ),
    },
    {
        text: (
            <>
                Contributed <span className="text-ivory font-semibold">frontend work</span> on a parallel client project, collaborating on a shared codebase and meeting concurrent delivery timelines <span className="text-champagne font-medium">without delays</span>.
            </>
        ),
    },
];


const SingleExperience: React.FC = () => {
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
                <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">Experience</h2>
                <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
            </motion.div>

            <motion.div 
                className="flex justify-center w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <BackgroundGradient className="rounded-[22px] max-w-4xl w-full p-4 sm:p-10 bg-obsidian border-[0.5px] border-slate/30 shadow-2xl">
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4 border-b border-slate/50 pb-8">
                        <div>
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-champagne/10 flex items-center justify-center">
                                    <Briefcase className="w-5 h-5 text-champagne" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-ivory">MERN Stack Developer</h3>
                                </div>
                            </div>
                            <p className="text-champagne font-mono text-sm tracking-wider uppercase ml-[52px]">Victa Soft</p>
                        </div>
                        <div className="flex flex-col gap-2 md:items-end">
                            <div className="flex items-center gap-2 bg-slate/30 border border-slate/50 rounded-full px-4 py-1.5 w-max">
                                <Calendar className="w-3.5 h-3.5 text-champagne" />
                                <span className="text-slate-300 font-sans text-sm">Jan 2025 — Dec 2025</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                <span className="text-slate-400 font-sans text-sm">India · On-site</span>
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
                        {experiencePoints.map((point, idx) => (
                            <motion.div 
                                key={idx}
                                variants={listItemVariants} 
                                whileHover={{ x: 4, transition: { type: "spring", stiffness: 300 } }}
                                className="flex items-start gap-4 group cursor-default"
                            >
                                <div className="relative mt-2 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-champagne group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-300" />
                                </div>
                                <p className="font-sans text-slate-300 text-base md:text-lg opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                                    {point.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="pt-8 border-t border-slate/50">
                        <h4 className="text-sm font-mono text-slate-400 mb-5 uppercase tracking-widest">Core Tech Used</h4>
                        <div className="flex flex-wrap gap-3">
                            {techBadges.map((badge, idx) => {
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
                                        className="flex items-center gap-2 px-4 py-2 bg-obsidian border border-slate/40 rounded-full cursor-default hover:bg-slate/20 transition-colors duration-300"
                                    >
                                        <Icon className={`w-4 h-4 ${badge.color}`} />
                                        <span className="text-ivory text-xs font-mono">{badge.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </BackgroundGradient>
            </motion.div>
        </section>
    );
}

export default SingleExperience;