import { SlideLayout } from "@/components/slides";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const scenarios = [
  { 
    num: "01", 
    title: "Small-scale production-grade applications", 
    url: "https://blog.framia.pro/" 
  },
  { 
    num: "02", 
    title: "Minimum Viable Product (MVP) validation", 
    url: "https://f9bee0dd9d4e4157af732adb4af50c5c.prod.enter.pro/" 
  },
  { 
    num: "03", 
    title: "Creating simple tool websites", 
    url: "https://cfdb190d04474a6c968ba88a9026076e.prod.enter.pro/" 
  },
  { 
    num: "04", 
    title: "Product prototypes and design delivery", 
    url: "https://3171642be0354b7e934796544f935c03.prod.enter.pro/" 
  },
];

export const Slide09Scenarios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScenario = scenarios[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? scenarios.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === scenarios.length - 1 ? 0 : prev + 1));
  };

  return (
    <SlideLayout title="More than half of future products will come from this">
      <div className="flex flex-col flex-1 w-full">
        {/* 场景标题 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl md:text-4xl font-bold text-primary">{currentScenario.num}</span>
            <h3 className="text-xl md:text-2xl font-semibold">{currentScenario.title}</h3>
            <a 
              href={currentScenario.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-muted transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
          
          {/* 指示器 */}
          <div className="flex items-center gap-2">
            {scenarios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* iframe 展示区域 */}
        <div className="flex-1 relative min-h-0 h-[calc(100vh-280px)]">
          <div className="h-full rounded-lg overflow-hidden border">
            <iframe
              src={currentScenario.url}
              title={currentScenario.title}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
          
          {/* 左右切换按钮 */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </SlideLayout>
  );
};
