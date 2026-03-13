"use client";
import React from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from './ui/aurora-background';

const Hero: React.FC = () => {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center gap-4 px-4 h-screen"
            >
                <div className='max-w-[89vw] md:max-w-3xl lg:max-w-[65vw] flex flex-col items-center justify-center z-10'>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className='uppercase tracking-widest text-sm text-center text-champagne max-w-fit font-mono bg-champagne/10 px-4 py-1.5 rounded-full border border-champagne/20'
                    >
                        FULL-STACK DEVELOPER
                    </motion.h2>

                    <h1 className="text-center mt-6 text-4xl md:text-6xl lg:text-7xl font-serif text-ivory tracking-tight font-bold">
                        Scalable Systems. Clean Code. Real Delivery.
                    </h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className='text-center md:tracking-wider mb-8 mt-6 text-sm md:text-lg lg:text-xl font-sans max-w-2xl opacity-80 text-slate-300'
                    >
                        I&apos;m Maulik, I build, and ship full-stack web applications that are production-ready.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                    >
                        <a 
                            href="#work"
                            className="px-8 py-3 rounded-full bg-champagne text-obsidian font-sans font-bold hover:bg-ivory transition-colors text-sm text-center"
                        >
                            View My Work
                        </a>
                        <a 
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-transparent border border-champagne text-champagne font-sans font-bold hover:bg-champagne/10 transition-colors text-sm text-center"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </AuroraBackground>
    )
}

export default Hero;
