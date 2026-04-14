import { SlideLayout } from "@/components/slides";
import { useState } from "react";

const channels = [
  {
    key: "x",
    label: "X / Twitter",
    color: "#1DA1F2",
    url: "https://x.com/EnterProAI/status/2039916069582967043",
    stat: "830K views",
  },
  {
    key: "youtube",
    label: "YouTube",
    color: "#FF0000",
    url: "https://www.youtube.com/watch?v=KfYa99r7UiY",
    stat: "12K+ views",
  },
  {
    key: "tiktok",
    label: "TikTok",
    color: "#EE1D52",
    url: "https://www.tiktok.com/@enter.pro.ai/video/7624102436260564237",
    stat: "5.2K views",
  },
  {
    key: "blog",
    label: "Blog",
    color: "#F97316",
    url: "https://blog.enter.pro/blog/how-i-built-a-fully-autonomous-ai-dating-show-inspired-by-singles-inferno",
    stat: "2.8K reads",
  },
  {
    key: "forum",
    label: "Forum",
    color: "#A855F7",
    url: "https://forum.enter.pro/t/ed4dcf8e-893b-4323-95b0-5047a59c2a75?hl=activities",
    stat: "1.2K views",
  },
];

export const SlideDB11PGCAIApp = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SlideLayout title="PGC 物料再利用">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-end justify-between mb-[20px]">
          <div>
            <p className="text-[12px] text-muted-foreground/50 tracking-widest uppercase mb-[2px]">
              Content Repurposing
            </p>
            <h2 className="text-[26px] font-bold tracking-tight text-foreground/90">
              一份内容 → <span className="text-primary">五渠道</span> 分发
            </h2>
          </div>
          <div className="flex items-baseline gap-[6px]">
            <span className="text-[36px] font-black text-primary leading-none">850K+</span>
            <span className="text-[13px] text-muted-foreground/60">total reach</span>
          </div>
        </div>

        {/* Preview grid */}
        <div className="flex-1 flex gap-[12px]">
          {channels.map((ch) => {
            const isHovered = hovered === ch.key;
            return (
              <div
                key={ch.key}
                className="relative rounded-[14px] overflow-hidden border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"
                style={{
                  flex: isHovered ? 3 : 1,
                  borderColor: isHovered ? `${ch.color}50` : "rgba(255,255,255,0.06)",
                  boxShadow: isHovered ? `0 0 40px ${ch.color}15` : "none",
                }}
                onMouseEnter={() => setHovered(ch.key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => window.open(ch.url, "_blank")}
              >
                {/* Browser chrome bar */}
                <div
                  className="h-[32px] flex items-center px-[10px] gap-[6px] shrink-0 transition-colors duration-300"
                  style={{
                    backgroundColor: isHovered ? `${ch.color}18` : "rgba(255,255,255,0.03)",
                    borderBottom: `1px solid ${isHovered ? `${ch.color}25` : "rgba(255,255,255,0.04)"}`,
                  }}
                >
                  <div className="flex gap-[4px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-foreground/10" />
                    <div className="w-[7px] h-[7px] rounded-full bg-foreground/10" />
                    <div className="w-[7px] h-[7px] rounded-full bg-foreground/10" />
                  </div>
                  {isHovered && (
                    <div className="flex-1 mx-[8px] h-[18px] rounded-[4px] bg-foreground/[0.04] flex items-center px-[6px]">
                      <span className="text-[9px] text-muted-foreground/40 truncate">
                        {ch.url.replace("https://", "")}
                      </span>
                    </div>
                  )}
                </div>

                {/* iframe preview */}
                <div className="relative flex-1" style={{ height: "calc(100% - 32px)" }}>
                  <iframe
                    src={ch.url}
                    title={ch.label}
                    className="absolute inset-0 border-none pointer-events-none"
                    style={{
                      width: "1440px",
                      height: "900px",
                      transform: isHovered ? "scale(0.48)" : "scale(0.22)",
                      transformOrigin: "top left",
                      transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                  />

                  {/* Collapsed overlay with label + stat */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400"
                    style={{
                      opacity: isHovered ? 0 : 1,
                      pointerEvents: isHovered ? "none" : "auto",
                      background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)`,
                    }}
                  >
                    <div
                      className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center text-white font-black text-[18px] mb-[8px]"
                      style={{ backgroundColor: ch.color }}
                    >
                      {ch.label[0]}
                    </div>
                    <span className="text-[13px] font-semibold text-white/90">{ch.label}</span>
                    <span
                      className="text-[18px] font-black mt-[4px]"
                      style={{ color: ch.color }}
                    >
                      {ch.stat}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
};
