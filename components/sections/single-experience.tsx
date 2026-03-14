"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { motion, Variants } from "framer-motion";

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


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
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate/50 pb-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-ivory mb-2">MERN Stack Developer</h3>
              <p className="text-champagne font-mono text-sm tracking-wider uppercase">Victa Soft</p>
            </div>
            <div className="bg-slate/30 border border-slate/50 rounded-full px-4 py-1.5 w-max">
              <span className="text-slate-300 font-sans text-sm">Jan 2025 — Dec 2025</span>
            </div>
          </div>
          
          <motion.div 
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 space-y-4 font-sans text-slate-300 text-lg opacity-90 leading-relaxed"
          >
            <motion.div variants={listItemVariants} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2.5 shrink-0" />
              <p>Built the entire frontend of a Shopify mobile app builder from scratch in React + TypeScript — including a complex drag-and-drop interface with dynamic form handling for no-code widget configuration.</p>
            </motion.div>
            <motion.div variants={listItemVariants} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2.5 shrink-0" />
              <p>Developed 60% of the backend modules independently in Node.js + Express.js + MongoDB, including database modelling, REST API design, and feature research via reverse engineering of competing products.</p>
            </motion.div>
            <motion.div variants={listItemVariants} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2.5 shrink-0" />
              <p>Built a full React admin panel and a SEO-optimized Next.js landing page for the product.</p>
            </motion.div>
            <motion.div variants={listItemVariants} className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2.5 shrink-0" />
              <p>Worked within a product-based company contributing to a live SaaS application with a real user base.</p>
            </motion.div>
          </motion.div>

          <div className="pt-8 border-t border-slate/50">
            <h4 className="text-sm font-mono text-slate-400 mb-4 uppercase tracking-widest">Core Tech Used</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express.js</Badge>
              <Badge>MongoDB</Badge>
              <Badge>Next.js</Badge>
            </div>
          </div>

        </BackgroundGradient>
      </motion.div>
    </section>
  );
}

export default SingleExperience;

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="px-3 py-1 bg-obsidian border border-slate text-ivory text-xs font-mono rounded-full">
      {children}
    </span>
  );
}