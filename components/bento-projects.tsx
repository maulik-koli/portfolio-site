"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { motion } from "framer-motion";

export function BentoProjects() {
  return (
    <div id="work" className="py-24 px-4 bg-obsidian">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">The Work</h2>
        <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
        <p className="font-sans text-slate-300 text-lg max-w-2xl opacity-80">
          A showcase of recent SaaS systems, combining scalable backend architectures with cinematic frontend experiences.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.2,
                }
            }
        }}
      >
        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <motion.div
                key={i}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={i === 0 ? "md:col-span-2" : "md:col-span-1"}
            >
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                tags={item.tags}
                link={item.link}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
}

const Skeleton = ({ bgColor, pulse }: { bgColor: string, pulse?: boolean }) => (
  <div className={`flex flex-1 w-full h-full min-h-40 rounded-xl ${bgColor} border border-slate/30 ${pulse ? 'animate-pulse' : ''} shadow-inner`}></div>
);

const items = [
  {
    title: "High-Performance Ecommerce Engine",
    description: "Built an end-to-end commerce solution featuring an advanced admin panel. Engineered for scale using asynchronous job queues and in-memory caching to handle high traffic spikes.",
    header: <Skeleton bgColor="bg-gradient-to-br from-champagne/10 to-obsidian" pulse />,
    icon: null,
    tags: ["PostgreSQL", "Redis", "Bull MQ", "Next.js"],
    link: "#"
  },
  {
    title: "Global Tourism Platform",
    description: "A full-stack tourism portal with a custom admin CRM. Features integrated payment gateways for seamless, secure booking workflows.",
    header: <Skeleton bgColor="bg-gradient-to-br from-slate to-obsidian" />,
    icon: null,
    tags: ["MERN Stack", "Stripe", "React", "Express"],
    link: "#"
  },
];
