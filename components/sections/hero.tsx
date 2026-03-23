"use client";
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from '../ui/aurora-background';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const phrases = [
    "Creative Thinker. Clean Coder. Problem Solver.",
    "Rapid Learner. Passionate Builder. Team Player.",
    "Detail Oriented. Logic Driven. Impact Focused.",
    "Smart Debugger. System Builder. Tech Explorer.",
    "User Centric. Performance Driven. Code Crafter.",
    "Self Starter. Growth Mindset. Value Creator."
];


const Hero: React.FC = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    
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

                    <div className="min-h-[150px] md:min-h-[180px] lg:min-h-[220px] flex items-center justify-center w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPhraseIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <TextGenerateEffect
                                    className='text-center mt-6 text-4xl md:text-6xl lg:text-7xl font-serif text-ivory tracking-tight font-bold'
                                    words={phrases[currentPhraseIndex]}
                                    indexNumber={2}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className='text-center md:tracking-wider mb-8 mt-6 text-sm md:text-lg lg:text-xl font-sans max-w-2xl opacity-80 text-slate-300'
                    >
                        I&apos;m <span className='font-bold'>Maulik</span>, I build, and ship full-stack web applications that are production-ready.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                    >
                        <a 
                            href="#work"
                            className="w-full sm:w-auto px-8 py-3 rounded-full bg-champagne text-obsidian font-sans font-bold hover:bg-ivory transition-colors text-sm text-center"
                        >
                            View My Work
                        </a>
                        <a 
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3 rounded-full bg-transparent border border-champagne text-champagne font-sans font-bold hover:bg-champagne/10 transition-colors text-sm text-center"
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
