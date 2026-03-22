"use client";

import React from "react";
import { track } from "@vercel/analytics";

interface ResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const ResumeButton = ({ children, className, onClick, ...props }: ResumeButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      track("Resume Downloaded");
    } catch (error) {
      console.error("Vercel Analytics track failed", error);
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href="/resume.pdf"
      download
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
