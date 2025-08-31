import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StatsCard({ value, label, className, style }: StatsCardProps) {
  return (
    <div 
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 animate-float",
        className
      )}
      style={style}
    >
      <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-muted-foreground text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
}