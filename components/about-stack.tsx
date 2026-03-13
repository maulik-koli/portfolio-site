"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutStack: React.FC = () => {
    return (
        <section id="about" className="py-24 px-4 max-w-4xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">About Me</h2>
                <div className="h-1 w-20 bg-champagne mb-12 rounded-full" />
                
                <p className="font-sans text-slate-300 text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
                    I am Maulik Koli, a Full Stack Developer based in Rajkot, India, with hands-on experience building production-grade web applications end to end, from database architecture and API design to frontend implementation and deployment. I take full ownership of the products I work on, and I bring a strong inclination toward clean, scalable code and well-thought-out system design.
                </p>
                <p className="font-sans text-slate-300 text-lg md:text-xl opacity-90 leading-relaxed mb-12">
                    I work best when given a problem to solve rather than a task to execute. Whether that means reverse-engineering a competitor&apos;s feature, designing a data model from scratch, or shipping an entire frontend independently, I approach every challenge with research, precision, and a consistent bias toward delivery.
                </p>

                <div className="flex flex-wrap justify-center gap-3 relative z-10 mt-4">
                    {["End-to-End Delivery", "Problem Solver", "Self-Driven", "Clean Architecture"].map((trait, idx) => (
                        <motion.span 
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-obsidian border-[0.5px] border-champagne text-champagne rounded-full font-mono text-xs md:text-sm shadow-inner uppercase tracking-wider"
                        >
                            {trait}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default AboutStack;