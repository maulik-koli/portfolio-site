"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export function DeveloperManifesto() {
  return (
    <section id="manifesto" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">The Manifesto</h2>
            <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
        </div>
        
      <div className="flex items-center justify-center">
        <TextRevealCard
          text="Hover over this card to see what drives me."
          revealText="I build scalable systems, not just pretty interfaces."
        >
          <p className="text-sm font-sans text-slate-300 uppercase tracking-widest mb-4 opacity-80">
            Core Philosophy
          </p>
        </TextRevealCard>
      </div>
    </section>
  );
}
