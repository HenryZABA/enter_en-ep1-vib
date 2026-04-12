import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideThumbnailProps {
  Component: React.ComponentType;
  className?: string;
}

export function SlideThumbnail({ Component, className }: SlideThumbnailProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setScale(entry.contentRect.width / 1920);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("w-full aspect-video relative overflow-hidden", className)}
    >
      {scale > 0 && (
        <div
          className="absolute top-0 left-0 w-[1920px] h-[1080px] origin-top-left pointer-events-none bg-background"
          style={{ transform: `scale(${scale})` }}
        >
          <Component />
        </div>
      )}
    </div>
  );
}
