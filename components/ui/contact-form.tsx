"use client";
import React from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";

export const ContactForm: React.FC = () => {
    const { status, message, handleSubmit } = useContactForm();


    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto flex flex-col gap-4 mt-8 mb-8 text-left">
            <input type="hidden" name="subject" value="New Contact from Portfolio!" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label htmlFor="name" className="text-sm font-sans text-muted-foreground mb-1 block">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        required 
                        className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="email" className="text-sm font-sans text-muted-foreground mb-1 block">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required 
                        className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="text-sm font-sans text-muted-foreground mb-1 block">Message</label>
                <textarea 
                    name="message" 
                    id="message"
                    required 
                    rows={4}
                    className="w-full bg-card border border-border rounded-lg px-4 py-2.5 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Hello Maulik, I'd like to discuss..."
                ></textarea>
            </div>

            <button 
                type="submit" 
                disabled={status === "submitting" || status === "success"}
                className={cn(
                    "w-full py-3 rounded-lg font-sans font-bold transition-all text-sm flex items-center justify-center gap-2 mt-2",
                    status === "success" 
                        ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/50" 
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
            >
                {status === "submitting" && <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />}
                {status === "success" && <CheckCircle2 className="w-4 h-4" />}
                {status === "idle" && <Send className="w-4 h-4" />}
                {status === "error" && <AlertCircle className="w-4 h-4" />}
                
                {status === "submitting" ? "Sending..." : 
                 status === "success" ? "Sent!" : 
                 status === "error" ? "Try Again" : "Send Message"}
            </button>

            {message && (
                <p className={cn(
                    "text-xs text-center mt-2 font-mono",
                    status === "success" ? "text-emerald-500" : "text-destructive"
                )}>
                    {message}
                </p>
            )}
        </form>
    );
};
