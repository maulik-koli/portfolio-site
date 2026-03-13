import { cn } from '@/lib/utils';
import React from 'react'

interface MagicButtonProps {
    label: string | React.ReactNode;
    icon?: React.ReactNode;
    hanldeClick?: () => void;
    className?: string;
    iconPosition?: "left" | "right";
}


const MagicButton: React.FC<MagicButtonProps> = ({ label, icon, hanldeClick, className, iconPosition }) => {
    return (
        <button 
            className={cn("relative inline-flex h-12 w-full rounded-lg overflow-hidden p-px focus:outline-none md:w-60 md:mt-10", className)}
            onClick={hanldeClick && hanldeClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
                {icon  && (
                    <span className={cn(iconPosition === "left" ? "order-first mr-2" : "order-last ml-2")}>
                        {icon}
                    </span>
                )}
                {label}
            </span>
        </button>
    )
}

export default MagicButton
