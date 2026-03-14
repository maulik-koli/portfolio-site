"use client";
import React from "react";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/data";

const footerContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const footerItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-obsidian pt-24 pb-12 px-5 border-t border-slate/30 z-50 relative mt-20 text-center w-full">
        <motion.div 
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
        >
            <motion.h2 
                variants={footerItemVariants}
                className="text-4xl md:text-6xl font-serif text-ivory font-bold mb-6 tracking-tight"
            >
                Get In Touch
            </motion.h2>
            
            <motion.p
                variants={footerItemVariants}
                className="text-slate-300 font-sans text-lg mb-6 max-w-xl opacity-80"
            >
                Currently open to full-time roles and selective freelance projects. I typically respond within 24 hours.
            </motion.p>
            
            <motion.div
                variants={footerItemVariants}
                className="mb-10 text-champagne font-mono text-xl tracking-wider select-all cursor-text font-bold"
            >
                {SOCIAL_LINKS.EMAIL}
            </motion.div>

            <motion.div 
                variants={footerItemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-16"
            >
                <a 
                    href={`mailto:${SOCIAL_LINKS.EMAIL}`}
                    className="px-8 py-3 rounded bg-champagne text-obsidian font-sans font-bold hover:bg-ivory transition-colors text-sm text-center"
                >
                    Send Email
                </a>
                <a 
                    href="/resume.pdf"
                    className="px-8 py-3 rounded bg-transparent border border-champagne text-champagne font-sans font-bold hover:bg-champagne/10 transition-colors text-sm flex items-center justify-center gap-2"
                >
                    <Download className="w-4 h-4" />
                    Download Resume
                </a>
            </motion.div>

            <motion.div 
                variants={footerItemVariants}
                className="flex w-full justify-between items-center mt-12 flex-col md:flex-row gap-6 border-t border-slate/30 pt-8"
            >
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-champagne"></span>
                    </div>
                    <span className="font-mono text-xs text-slate-300 tracking-wider">STATUS: AVAILABLE FOR HIRE</span>
                </div>

                <div className="flex gap-6">
                    <LinkElement href={SOCIAL_LINKS.GITHUB} icon={<FaGithub size={24} />} alt="GitHub" />
                    <LinkElement href={SOCIAL_LINKS.LINKEDIN} icon={<FaLinkedin size={24} />} alt="LinkedIn" />
                    <LinkElement href={SOCIAL_LINKS.TWITTER} icon={<FaXTwitter size={24} />} alt="X" />
                </div>
                
                <p className="font-sans text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} Maulik Koli. All rights reserved.
                </p>
            </motion.div>
        </motion.div>
    </footer>
  );
}

export default Footer;

const LinkElement: React.FC<{href: string, icon: React.ReactNode, alt: string}> = ({href, icon, alt}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-champagne hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all p-2 rounded-full hover:bg-champagne/10">
            {icon}
        </a>
    )
}