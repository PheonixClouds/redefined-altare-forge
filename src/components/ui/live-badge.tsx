import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function LiveBadge({ className, children }: LiveBadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-live/20 border border-live/30 text-live font-semibold text-sm animate-live-pulse",
      className
    )}>
      <div className="w-2 h-2 bg-live rounded-full live-glow animate-pulse" />
      {children}
    </div>
  );
}