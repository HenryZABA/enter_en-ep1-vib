import { SlideLayout } from "@/components/slides";
import { useState } from "react";
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";

const PGC_URL = "https://abb919002eaf4485ae6426962479bc2a.prod.enter.pro/";

export const SlideDB10cPGCLive = () => {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return (
      <div className="relative w-full h-full bg-background">
        <iframe
          src={PGC_URL}
          className="w-full h-full border-0"
          allow="clipboard-write"
          title="PGC Live Demo"
        />
        {/* Collapse button */}
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
    <SlideLayout title="PGC 内容实时展示">
      <div className="flex flex-col h-full px-[60px] py-[20px] gap-[16px]">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <p className="text-[16px] text-muted-foreground">
            点击下方窗口可直接交互浏览 PGC 产出内容
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
              href={PGC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[6px] px-[14px] py-[7px] rounded-[8px] border border-border/60 text-muted-foreground text-[14px] hover:text-foreground hover:border-border transition-colors"
            >
              <ExternalLink className="w-[15px] h-[15px]" />
              新窗口打开
            </a>
          </div>
        </div>

        {/* iframe container */}
        <div className="flex-1 min-h-0 rounded-[14px] border border-border/50 overflow-hidden bg-card/20 shadow-lg relative">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-[8px] px-[16px] py-[10px] bg-card/60 border-b border-border/30">
            <div className="flex gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-full bg-red-400/70" />
              <div className="w-[10px] h-[10px] rounded-full bg-yellow-400/70" />
              <div className="w-[10px] h-[10px] rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 mx-[12px] px-[14px] py-[4px] rounded-[6px] bg-background/50 text-[12px] text-muted-foreground font-mono truncate">
              {PGC_URL}
            </div>
          </div>
          <iframe
            src={PGC_URL}
            className="w-full border-0"
            style={{ height: "calc(100% - 38px)" }}
            allow="clipboard-write"
            title="PGC Live Demo"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
