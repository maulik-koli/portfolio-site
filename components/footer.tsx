"use client";
import React from "react";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-obsidian pt-24 pb-12 px-5 border-t border-slate/30 z-50 relative mt-20 text-center w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
            className="text-4xl md:text-6xl font-serif text-ivory font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Get In Touch
        </motion.h2>
        
        <motion.p
            className="text-slate-300 font-sans text-lg mb-6 max-w-xl opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            Currently open to full-time roles and selective freelance projects. I typically respond within 24 hours.
        </motion.p>
        
        <motion.div
            className="mb-10 text-champagne font-mono text-xl tracking-wider select-all cursor-text font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
        >
            maulik@example.com
        </motion.div>

        <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
        >
            <a 
                href="mailto:maulik@example.com"
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

        <div className="flex w-full justify-between items-center mt-12 flex-col md:flex-row gap-6 border-t border-slate/30 pt-8">
            <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-champagne"></span>
                </div>
                <span className="font-mono text-xs text-slate-300 tracking-wider">STATUS: AVAILABLE FOR HIRE</span>
            </div>

            <div className="flex gap-6">
                <a href="https://github.com/maulik" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-champagne hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all p-2 rounded-full hover:bg-champagne/10">
                    <Github size={24} strokeWidth={1.5} />
                </a>
                <a href="https://linkedin.com/in/maulik" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-champagne hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all p-2 rounded-full hover:bg-champagne/10">
                    <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a href="https://x.com/maulik" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-champagne hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all p-2 rounded-full hover:bg-champagne/10">
                    <Twitter size={24} strokeWidth={1.5} />
                </a>
            </div>
            
            <p className="font-sans text-sm text-slate-400">
                &copy; {new Date().getFullYear()} Maulik Koli. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
