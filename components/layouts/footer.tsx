"use client";
import React from "react";

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
    <footer id="contact" className="bg-background pb-12 px-5 border-t border-border z-50 relative text-center w-full">
        <motion.div 
            variants={footerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
        >


            <motion.div 
                variants={footerItemVariants}
                className="flex w-full justify-between items-center mt-4 flex-col md:flex-row gap-6 pt-8"
            >
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-wider">STATUS: AVAILABLE FOR HIRE</span>
                </div>

                <div className="flex gap-6">
                    <LinkElement href={SOCIAL_LINKS.GITHUB} icon={<FaGithub size={24} />} alt="GitHub" />
                    <LinkElement href={SOCIAL_LINKS.LINKEDIN} icon={<FaLinkedin size={24} />} alt="LinkedIn" />
                    <LinkElement href={SOCIAL_LINKS.TWITTER} icon={<FaXTwitter size={24} />} alt="X" />
                </div>
                
                <p className="font-sans text-sm text-muted-foreground">
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
        <a href={href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all p-2 rounded-full hover:bg-primary/10">
            {icon}
        </a>
    )
}