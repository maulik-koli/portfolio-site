"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ContactForm } from "../ui/contact-form";
import { Download } from "lucide-react";
import { ResumeButton } from "../ui/resume-button";

const contactContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const contactItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20 flex flex-col items-center text-center">
            <motion.div 
                variants={contactContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="w-full flex flex-col items-center"
            >
                <motion.h2 
                    variants={contactItemVariants}
                    className="text-4xl md:text-6xl font-serif text-foreground font-bold mb-6 tracking-tight"
                >
                    Get In Touch
                </motion.h2>
                
                <motion.p
                    variants={contactItemVariants}
                    className="text-muted-foreground font-sans text-lg mb-6 max-w-xl"
                >
                    Currently open to full-time roles and selective freelance projects. I typically respond within 24 hours.
                </motion.p>
                
                <motion.div variants={contactItemVariants} className="w-full">
                    <ContactForm />
                </motion.div>

                <motion.div 
                    variants={contactItemVariants}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-4"
                >
                    <ResumeButton 
                        className="px-8 py-3 rounded bg-transparent border border-primary text-primary font-sans font-bold hover:bg-primary/10 transition-colors text-sm flex items-center justify-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </ResumeButton>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
