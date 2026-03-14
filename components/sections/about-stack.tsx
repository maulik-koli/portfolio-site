"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ABUOT_TRAITS } from "@/lib/data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(4px)", y: 10 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const traitContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.1 } 
    }
};

const traitItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};


const AboutStack: React.FC = () => {
    return (
        <section id="about" className="relative py-24 px-4 max-w-4xl mx-auto w-full">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-champagne/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-slate/30 rounded-full blur-[100px] pointer-events-none -z-10 transform scale-x-150" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center text-center"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">About Me</motion.h2>
                <motion.div variants={itemVariants} className="h-1 w-20 bg-champagne mb-12 rounded-full" />
                
                <motion.p variants={itemVariants} className="font-sans text-slate-300 text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
                    I am Maulik Koli, a Full Stack Developer based in Rajkot, India, with hands-on experience building production-grade web applications end to end, from database architecture and API design to frontend implementation and deployment. I take full ownership of the products I work on, and I bring a strong inclination toward clean, scalable code and well-thought-out system design.
                </motion.p>
                <motion.p variants={itemVariants} className="font-sans text-slate-300 text-lg md:text-xl opacity-90 leading-relaxed mb-12">
                    I work best when given a problem to solve rather than a task to execute. Whether that means reverse-engineering a competitor&apos;s feature, designing a data model from scratch, or shipping an entire frontend independently, I approach every challenge with research, precision, and a consistent bias toward delivery.
                </motion.p>

                <motion.div variants={traitContainerVariants} className="flex flex-wrap justify-center gap-3 relative z-10 mt-4">
                    {ABUOT_TRAITS.map((trait, idx) => (
                        <motion.span 
                            key={idx}
                            variants={traitItemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-obsidian border-[0.5px] border-champagne text-champagne rounded-full font-mono text-xs md:text-sm shadow-inner uppercase tracking-wider"
                        >
                            {trait}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default AboutStack;