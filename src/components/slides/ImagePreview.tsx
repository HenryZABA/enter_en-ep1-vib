import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export interface ImagePreviewProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  aspectRatio?: "video" | "square" | "auto";
}
export const ImagePreview = ({
  src,
  alt,
  caption,
  className,
  aspectRatio = "video"
}: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
      }
    };
    if (isOpen) {
      // Use capture phase to intercept before other handlers
      window.addEventListener("keydown", handleKeyDown, true);
    }
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen]);
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: ""
  };
  return <>
      <div className={cn("flex flex-col space-y-2 md:space-y-4 cursor-pointer group", className)} onClick={handleOpen}>
        <div className={cn("rounded-lg md:rounded-xl overflow-hidden border bg-muted/50 relative transition-transform duration-200 group-hover:scale-[1.02] group-hover:shadow-lg", aspectClasses[aspectRatio])}>
          <img src={src} alt={alt} className={cn("w-full", aspectRatio === "auto" ? "h-auto" : "h-full object-cover")} crossOrigin="anonymous" />
        </div>
        {caption && <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{caption}</p>}
      </div>

      {/* Modal */}
      {isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in p-4" onClick={handleClose}>
          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button onClick={handleClose} className="absolute -top-10 md:-top-12 right-0 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="rounded-xl md:rounded-2xl overflow-hidden border shadow-2xl bg-card">
              <img src={src} alt={alt} className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain" crossOrigin="anonymous" />
            </div>

            <h3 className="mt-4 md:mt-6 text-base md:text-xl font-medium text-center">{caption}</h3>
          </div>
        </div>}
    </>;
};