import { SlideLayout } from "@/components/slides";
import { useState } from "react";
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";

const TOOL_URL = "https://c747b5206c1c4ce184b660632986bd13.prod.enter.pro/extractor";

export const SlideDB15cExtractor = () => {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return (
      <div className="relative w-full h-full bg-background">
        <iframe
          src={TOOL_URL}
          className="w-full h-full border-0"
          allow="clipboard-write"
          title="Template Extractor"
        />
        <button
          onClick={() => setExpanded(false)}
          className="absolute top-[16px] right-[16px] z-50 flex items-center gap-[6px] px-[14px] py-[8px] rounded-[10px] bg-background/80 backdrop-blur-sm border border-border/60 text-foreground text-[14px] font-medium hover:bg-background transition-colors shadow-lg"
        >
          <Minimize2 className="w-[16px] h-[16px]" />
          退出全屏
        </button>
      </div>
    );
  }

  return (
    <SlideLayout title="模板提取器 · 实时演示">
      <div className="flex flex-col h-full px-[60px] py-[20px] gap-[16px]">
        <div className="flex items-center justify-between">
          <p className="text-[16px] text-muted-foreground">
            自动提取项目模板结构，支持交互操作
          </p>
          <div className="flex items-center gap-[10px]">
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center gap-[6px] px-[14px] py-[7px] rounded-[8px] bg-primary/10 text-primary text-[14px] font-medium hover:bg-primary/20 transition-colors"
            >
              <Maximize2 className="w-[15px] h-[15px]" />
              全屏
            </button>
            <a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[6px] px-[14px] py-[7px] rounded-[8px] border border-border/60 text-muted-foreground text-[14px] hover:text-foreground hover:border-border transition-colors"
            >
              <ExternalLink className="w-[15px] h-[15px]" />
              新窗口打开
            </a>
          </div>
        </div>

        <div className="flex-1 min-h-0 rounded-[14px] border border-border/50 overflow-hidden bg-card/20 shadow-lg">
          <div className="flex items-center gap-[8px] px-[16px] py-[10px] bg-card/60 border-b border-border/30">
            <div className="flex gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-full bg-red-400/70" />
              <div className="w-[10px] h-[10px] rounded-full bg-yellow-400/70" />
              <div className="w-[10px] h-[10px] rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 mx-[12px] px-[14px] py-[4px] rounded-[6px] bg-background/50 text-[12px] text-muted-foreground font-mono truncate">
              {TOOL_URL}
            </div>
          </div>
          <iframe
            src={TOOL_URL}
            className="w-full border-0"
            style={{ height: "calc(100% - 38px)" }}
            allow="clipboard-write"
            title="Template Extractor"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
