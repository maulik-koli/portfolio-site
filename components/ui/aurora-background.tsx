"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col min-h-screen z-0 items-center justify-center bg-obsidian transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,transparent_10%,transparent_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,transparent_10%,transparent_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--champagne)_10%,transparent_20%,var(--slate)_30%,transparent_40%,var(--champagne)_50%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            bg-size-[300%,200%]
            bg-position-[50%_50%,50%_50%]
            filter blur-[15px] invert-0
            after:content-[''] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:bg-size-[200%,100%]
            after:animate-aurora after:bg-fixed after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-[0.15] will-change-transform`,
              showRadialGradient &&
                `mask-[radial-gradient(ellipse_at_center,black_10%,transparent_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
