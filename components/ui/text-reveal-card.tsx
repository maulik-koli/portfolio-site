"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      setLeft(cardRef.current.getBoundingClientRect().left);
      setLocalWidth(cardRef.current.getBoundingClientRect().width);
    }
    
    const handleResize = () => {
        if (cardRef.current) {
            setLeft(cardRef.current.getBoundingClientRect().left);
            setLocalWidth(cardRef.current.getBoundingClientRect().width);
        }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#0A0A0F] border border-slate/30 w-full max-w-7xl mx-auto rounded-2xl p-8 relative overflow-hidden transition-all duration-300",
        className
      )}
    >
      {children}
      <div className="h-40 relative flex items-center overflow-hidden w-full">
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-[#0A0A0F] z-20 will-change-transform flex items-center h-full w-full"
        >
          <p className="text-2xl md:text-5xl lg:text-5xl font-serif py-10 font-bold bg-clip-text text-transparent bg-linear-to-b from-champagne to-champagne/50 whitespace-nowrap">
            {revealText}
          </p>
        </motion.div>
        
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-40 w-[2px] bg-linear-to-b from-transparent via-champagne to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden flex items-center h-full w-full">
          <p className="text-2xl md:text-5xl lg:text-5xl font-serif py-10 font-bold bg-clip-text text-transparent bg-[#2A2A35] whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
