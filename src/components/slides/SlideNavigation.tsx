import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface SlideNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  slideTitles: string[];
  sectionNames: string[];
  onGoToSlide: (index: number) => void;
  onBack?: () => void;
}

export const SlideNavigation = ({
  current,
  total,
  onPrev,
  onNext,
  slideTitles,
  sectionNames,
  onGoToSlide,
  onBack
}: SlideNavigationProps) => {
  const [open, setOpen] = useState(false);
  const currentItemRef = useRef<HTMLButtonElement>(null);

  // Scroll to current slide when drawer opens
  useEffect(() => {
    if (open && currentItemRef.current) {
      setTimeout(() => {
        currentItemRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 100);
    }
  }, [open]);

  const handleSlideClick = (index: number) => {
    onGoToSlide(index);
    setOpen(false);
  };

  // Group slides by section
  const groupedSlides: { section: string; slides: { index: number; title: string }[] }[] = [];
  let currentSection = "";

  slideTitles.forEach((title, index) => {
    const section = sectionNames[index] || "";
    if (section !== currentSection) {
      currentSection = section;
      groupedSlides.push({ section, slides: [] });
    }
    if (groupedSlides.length === 0) {
      groupedSlides.push({ section: "", slides: [] });
    }
    groupedSlides[groupedSlides.length - 1].slides.push({ index, title });
  });

  return (
    <>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-center space-x-2 md:space-x-4 z-50">
        {onBack && (
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onBack();
            }}
            className="rounded-full h-8 w-8 md:h-10 md:w-10"
            title="Back to editor"
          >
            <LogOut className="h-4 w-4 rotate-180" />
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={current === 0}
          className="rounded-full h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-lg hover:bg-secondary/50"
        >
          {current + 1} / {total}
        </button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={current === total - 1}
          className="rounded-full h-8 w-8 md:h-10 md:w-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="h-[85vh] max-h-[85vh]">
          <DrawerHeader className="flex items-center justify-between border-b pb-4">
            <DrawerTitle className="text-xl font-bold">幻灯片目录</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          
          <ScrollArea className="flex-1 px-4">
            <div className="py-4 space-y-6">
              {groupedSlides.map((group, groupIndex) => (
                <div key={groupIndex}>
                  {group.section && (
                    <div className="mb-3 px-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {group.section}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {group.slides.map(({ index, title }) => (
                      <button
                        key={index}
                        ref={index === current ? currentItemRef : null}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSlideClick(index);
                        }}
                        className={cn(
                          "group relative aspect-video rounded-lg border-2 overflow-hidden transition-all hover:scale-105",
                          index === current
                            ? "border-primary ring-2 ring-primary/30"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {/* Slide preview card */}
                        <div
                          className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center p-2 text-center",
                            index === current
                              ? "bg-primary/10"
                              : "bg-secondary/30 group-hover:bg-secondary/50"
                          )}
                        >
                          <span
                            className={cn(
                              "text-lg md:text-xl font-bold",
                              index === current ? "text-primary" : "text-muted-foreground"
                            )}
                          >
                            {index + 1}
                          </span>
                          <span
                            className={cn(
                              "text-[10px] md:text-xs line-clamp-2 mt-1",
                              index === current ? "text-primary" : "text-muted-foreground"
                            )}
                          >
                            {title}
                          </span>
                        </div>
                        {/* Current indicator */}
                        {index === current && (
                          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
};
