"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Frontend Architecture",
    description: "Building responsive, cinematic, and fast interfaces. I leverage Next.js App Router for server-side rendering, while utilizing Tailwind CSS and Framer Motion for pixel-perfect layouts.",
    content: (
      <div className="h-full w-full bg-linear-to-br from-champagne/20 to-obsidian flex flex-col items-center justify-center text-ivory p-6 font-mono text-sm border border-champagne/10">
        <div className="bg-obsidian w-full rounded p-4 text-xs font-mono border border-slate/40 text-left">
            <span className="text-champagne">import</span> {`{ motion }`} <span className="text-champagne">from</span> <span className="text-slate-300">&quot;framer-motion&quot;</span>;<br/><br/>
            {`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <h1>Next.js + Tailwind</h1>
</motion.div>`}
        </div>
      </div>
    ),
  },
  {
    title: "Backend & Systems",
    description: "Designing reliable pipelines. Deep expertise in Node.js, Express, and PostgreSQL. Implementing asynchronous workflows with Redis and Bull MQ for handling spikes in traffic seamlessly.",
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center text-ivory bg-linear-to-br from-obsidian to-slate p-6 font-mono text-sm border border-champagne/10">
        <div className="bg-[#0A0A0F] w-full rounded p-4 text-xs font-mono border border-slate/40 text-left">
            <span className="text-blue-300">const</span> queue = <span className="text-blue-300">new</span> Queue(<span className="text-champagne">&apos;emails&apos;</span>, {`{
  redis: {
    port: 6379,
    host: `}<span className="text-slate-300">&apos;127.0.0.1&apos;</span>{`
  }
}`});<br/><br/>
queue.add({`{ user: `}<span className="text-slate-300">&apos;maulik&apos;</span>{` }`});
        </div>
      </div>
    ),
  },
  {
    title: "SaaS Integration",
    description: "Connecting the dots for robust platforms. Experience integrating with standard providers like Stripe for billing, AWS for infrastructure, and configuring secure user-authentication layers.",
    content: (
      <div className="h-full w-full bg-linear-to-br from-slate to-[#0A0A0F] flex flex-col items-center justify-center text-ivory p-6 font-mono text-sm border border-champagne/10">
        <div className="bg-obsidian w-full rounded p-4 text-xs font-mono border border-slate/40 text-left">
            stripe.charges.create({`{
  amount: `}<span className="text-green-300">2000</span>{`,
  currency: `}<span className="text-slate-300">&quot;usd&quot;</span>{`,
  source: `}<span className="text-slate-300">&quot;tok_visa&quot;</span>{`,
  description: `}<span className="text-slate-300">&quot;Charge&quot;</span>{`
}`});
        </div>
      </div>
    ),
  },
];

export function TheArsenal() {
  return (
    <section id="arsenal" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-ivory mb-4 tracking-tight">The Arsenal</h2>
        <div className="h-1 w-20 bg-champagne mb-6 rounded-full" />
        <p className="font-sans text-slate-300 text-lg max-w-2xl opacity-80">
          My primary technologies for engineering end-to-end solutions. Scroll to discover the stack.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
