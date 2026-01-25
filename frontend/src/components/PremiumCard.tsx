
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const PremiumCard = ({ children, className, onClick }: PremiumCardProps) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "bg-card text-card-foreground rounded-xl p-6 md:p-8",
                "border border-border/50 shadow-sm hover:shadow-hover hover:border-primary/30 transition-all duration-500 ease-out",
                "relative overflow-hidden group backdrop-blur-sm",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default PremiumCard;
