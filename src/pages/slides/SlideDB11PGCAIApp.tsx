import { SlideLayout } from "@/components/slides";
import { useState } from "react";

const channels = [
  {
    key: "x",
    label: "X / Twitter",
    color: "#1DA1F2",
    url: "https://x.com/EnterProAI/status/2039916069582967043",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/16c5.png",
    stat: "830K",
    statLabel: "views",
    sub: "54 RT / 122 Likes",
  },
  {
    key: "blog",
    label: "Blog",
    color: "#F97316",
    url: "https://blog.enter.pro/blog/how-i-built-a-fully-autonomous-ai-dating-show-inspired-by-singles-inferno",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/e587.png",
    stat: "2.8K",
    statLabel: "reads",
    sub: "User Story feature",
  },
  {
    key: "forum",
    label: "Forum",
    color: "#A855F7",
    url: "https://forum.enter.pro/t/ed4dcf8e-893b-4323-95b0-5047a59c2a75?hl=activities",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/8bf3.png",
    stat: "1.2K",
    statLabel: "views",
    sub: "Community post",
  },
  {
    key: "youtube",
    label: "YouTube",
    color: "#FF0000",
    url: "https://www.youtube.com/watch?v=KfYa99r7UiY",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/3c52.png",
    stat: "4K",
    statLabel: "views",
    sub: "0:38 demo video",
  },
  {
    key: "tiktok",
    label: "TikTok",
    color: "#EE1D52",
    url: "https://www.tiktok.com/@enter.pro.ai/video/7624102436260564237",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/a8a6.png",
    stat: "5.2K",
    statLabel: "views",
    sub: "29 likes / 310 shares",
  },
];

export const SlideDB11PGCAIApp = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SlideLayout title="PGC 物料再利用">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-end justify-between mb-[16px]">
          <div>
            <p className="text-[11px] text-muted-foreground/50 tracking-widest uppercase mb-[2px]">
              Content Repurposing
            </p>
            <h2 className="text-[24px] font-bold tracking-tight text-foreground/90">
              一份内容 → <span className="text-primary">五渠道</span> 分发
            </h2>
          </div>
          <div className="flex items-baseline gap-[6px]">
            <span className="text-[32px] font-black text-primary leading-none">850K+</span>
            <span className="text-[12px] text-muted-foreground/60">total reach</span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex-1 flex gap-[10px] min-h-0">
          {channels.map((ch) => {
            const isHovered = hovered === ch.key;
            const hasHover = hovered !== null;
            const isCollapsed = hasHover && !isHovered;

            return (
              <div
                key={ch.key}
                className="relative rounded-[12px] overflow-hidden cursor-pointer"
                style={{
                  flex: isHovered ? 4 : isCollapsed ? 0.6 : 1,
                  transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
                  boxShadow: isHovered ? `0 0 50px ${ch.color}20` : "none",
                  border: `1px solid ${isHovered ? `${ch.color}40` : "rgba(255,255,255,0.06)"}`,
                }}
                onMouseEnter={() => setHovered(ch.key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => window.open(ch.url, "_blank")}
              >
                {/* Background image */}
                <img
                  src={ch.image}
                  alt={ch.label}
                  crossOrigin="anonymous"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500"
                  style={{
                    filter: isHovered ? "brightness(0.85)" : isCollapsed ? "brightness(0.3) blur(2px)" : "brightness(0.5)",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{
                    background: isHovered
                      ? `linear-gradient(to top, ${ch.color}60 0%, transparent 50%)`
                      : `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-[14px]">
                  {/* Collapsed: just icon + label vertical */}
                  {isCollapsed && (
                    <div className="flex-1 flex flex-col items-center justify-center gap-[8px]">
                      <div
                        className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center font-black text-[14px]"
                        style={{ backgroundColor: ch.color, color: "#fff" }}
                      >
                        {ch.label[0]}
                      </div>
                      <span
                        className="text-[10px] font-semibold tracking-wider"
                        style={{
                          writingMode: "vertical-lr",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {ch.label}
                      </span>
                    </div>
                  )}

                  {/* Normal / Hovered state */}
                  {!isCollapsed && (
                    <>
                      <div className="mt-auto">
                        {/* Platform badge */}
                        <div className="flex items-center gap-[6px] mb-[6px]">
                          <div
                            className="w-[24px] h-[24px] rounded-[6px] flex items-center justify-center font-black text-[11px]"
                            style={{ backgroundColor: ch.color, color: "#fff" }}
                          >
                            {ch.label[0]}
                          </div>
                          <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
                            {ch.label}
                          </span>
                        </div>

                        {/* Stats */}
                        <div className="flex items-baseline gap-[4px]">
                          <span
                            className="font-black leading-none"
                            style={{
                              fontSize: isHovered ? "36px" : "22px",
                              color: ch.color,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {ch.stat}
                          </span>
                          <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                            {ch.statLabel}
                          </span>
                        </div>

                        {/* Sub info on hover */}
                        {isHovered && (
                          <p
                            className="text-[12px] mt-[4px] font-medium"
                            style={{ color: "rgba(255,255,255,0.55)" }}
                          >
                            {ch.sub}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
};
