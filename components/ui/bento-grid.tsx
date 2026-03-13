import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  tags,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tags?: string[];
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl group/bento hover:shadow-2xl transition duration-500 p-4 border border-slate/50 bg-obsidian flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-champagne/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition duration-500" />
      
      {header && <div className="flex-1 overflow-hidden rounded-lg">{header}</div>}

      <div className="group-hover/bento:translate-x-2 transition duration-200 z-10 flex flex-col flex-1 justify-end">
        {icon}
        <div className="font-serif font-bold text-ivory text-xl mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-300 text-sm opacity-80">
          {description}
        </div>
        
        {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono bg-slate/50 text-champagne px-2 py-1 rounded-sm border border-champagne/10">
                        {tag}
                    </span>
                ))}
            </div>
        )}

        {link && (
            <div className="mt-4">
               <a href={link} className="text-sm font-sans text-champagne hover:underline">View Project &rarr;</a>
            </div>
        )}
      </div>
    </div>
  );
};
