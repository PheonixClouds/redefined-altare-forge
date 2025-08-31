import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ icon: Icon, title, description, className, style }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group",
        className
      )}
      style={style}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg gradient-gaming group-hover:animate-pulse-glow">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}