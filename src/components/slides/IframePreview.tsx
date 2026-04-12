import { useState, useEffect } from "react";
import { X, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IframePreviewProps {
  url: string;
  title: string;
  caption?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "auto";
}

export const IframePreview = ({
  url,
  title,
  caption,
  className,
  aspectRatio = "video"
}: IframePreviewProps) => {
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
      window.addEventListener("keydown", handleKeyDown, true);
    }
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [isOpen]);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "min-h-[200px]"
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col space-y-2 group",
          className
        )}
      >
        <div
          className={cn(
            "rounded-lg md:rounded-xl overflow-hidden relative transition-transform duration-200 hover:shadow-lg",
            aspectClasses[aspectRatio]
          )}
        >
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0 pointer-events-none"
            loading="lazy"
          />
          {/* Overlay button */}
          <button
            onClick={handleOpen}
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-colors group/btn cursor-pointer"
          >
            <div className="p-3 rounded-full bg-background/90 shadow-lg opacity-0 group-hover/btn:opacity-100 transition-opacity">
              <Maximize2 className="w-5 h-5" />
            </div>
          </button>
        </div>
        {caption && (
          <p className="text-xs md:text-sm text-muted-foreground text-center">{caption}</p>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-6xl h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg md:text-xl font-medium">{title}</h3>
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden border shadow-2xl bg-card">
              <iframe
                src={url}
                title={title}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {caption && (
              <p className="mt-4 text-sm md:text-base text-muted-foreground text-center">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
