"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ABUOT_TRAITS } from "@/lib/data";
import { Code2, Server, Lightbulb } from "lucide-react";

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

const highlightCards = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable and readable code with clear structure, strong conventions, and best practices.",
    },
    {
        icon: Server,
        title: "Scalable Architecture",
        description: "Building backend systems that scale horizontally with efficient API architecture and real-time communication.",
    },
    {
        icon: Lightbulb,
        title: "Modern Technologies",
        description: "Using modern JavaScript technologies like React, Next.js, Node.js, and TypeScript to build efficient applications.",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
};


const AboutStack: React.FC = () => {
    return (
        <section id="about" className="relative py-24 px-4 max-w-5xl mx-auto w-full">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-muted/30 rounded-full blur-[100px] pointer-events-none -z-10 transform scale-x-150" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center text-center"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">About Me</motion.h2>
                <motion.div variants={itemVariants} className="h-1 w-20 bg-primary mb-12 rounded-full" />
                
                <motion.p variants={itemVariants} className="font-sans text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed max-w-3xl">
                    I am <span className="text-primary font-semibold">Maulik Koli</span>, a{" "}
                    <span className="text-foreground font-semibold">Full Stack Developer</span> based in{" "}
                    <span className="text-foreground font-medium">Rajkot, India</span>, with hands-on experience building{" "}
                    <span className="text-primary font-semibold">production-grade web applications</span>{" "}
                    end to end, from <span className="text-foreground font-medium">database architecture</span> and{" "}
                    <span className="text-foreground font-medium">API design</span> to{" "}
                    <span className="text-foreground font-medium">frontend implementation</span> and deployment. I take full ownership of the products I work on, and I bring a strong inclination toward{" "}
                    <span className="text-primary font-semibold">clean, scalable code</span> and well-thought-out{" "}
                    <span className="text-foreground font-medium">system design</span>.
                </motion.p>
                <motion.p variants={itemVariants} className="font-sans text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
                    I work best when given a <span className="text-foreground font-semibold">problem to solve</span> rather than a task to execute. Whether that means{" "}
                    <span className="text-foreground font-medium">reverse-engineering</span> a competitor&apos;s feature, designing a{" "}
                    <span className="text-primary font-semibold">data model from scratch</span>, or shipping an entire frontend independently, I approach every challenge with{" "}
                    <span className="text-foreground font-medium">research</span>,{" "}
                    <span className="text-foreground font-medium">precision</span>, and a consistent bias toward{" "}
                    <span className="text-primary font-semibold">delivery</span>.
                </motion.p>

                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mb-12"
                >
                    {highlightCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{ 
                                    y: -6,
                                    borderColor: "rgba(56,189,248,0.3)",
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group relative bg-muted rounded-2xl border border-border p-6 text-left overflow-hidden cursor-default"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <h4 className="text-foreground font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                                        {card.title}
                                    </h4>
                                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div variants={traitContainerVariants} className="flex flex-wrap justify-center gap-3 relative z-10">
                    {ABUOT_TRAITS.map((trait, idx) => (
                        <motion.span 
                            key={idx}
                            variants={traitItemVariants}
                            whileHover={{ 
                                scale: 1.08,
                                borderColor: "rgba(56,189,248,0.6)",
                                boxShadow: "0 0 20px rgba(56,189,248,0.15)",
                                transition: { type: "spring", stiffness: 300, damping: 15 }
                            }}
                            className="px-4 py-2 bg-background border-[0.5px] border-primary text-primary rounded-full font-mono text-xs md:text-sm shadow-inner uppercase tracking-wider cursor-default"
                        >
                            <span className="mr-1.5 text-primary/70">✦</span>
                            {trait}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default AboutStack;