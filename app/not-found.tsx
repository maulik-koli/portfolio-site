"use client";
import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


const NotFound: React.FC = () => {
    return (
        <main className="relative bg-obsidian flex flex-col items-center justify-center min-h-screen w-full px-4 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_50%)] pointer-events-none -z-10" />
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center text-center max-w-2xl relative z-10"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-9xl md:text-[180px] font-mono text-champagne font-bold leading-none tracking-widest mb-4"
                >
                    404
                </motion.h1>
                
                <motion.div variants={itemVariants} className="h-px w-32 bg-champagne/50 mb-8" />
                
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-ivory mb-6 tracking-tight">
                    Page Not Found
                </motion.h2>
                
                <motion.p variants={itemVariants} className="font-mono text-slate-400 text-sm md:text-base uppercase tracking-wider mb-12">
                    Looks like this route doesn&apos;t exist.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                    <Link 
                        href="/"
                        className="px-8 py-3 rounded-full bg-champagne text-obsidian font-sans font-bold hover:bg-ivory transition-colors text-sm text-center shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </motion.div>
        </main>
    );
}

export default NotFound;