import { SlideLayout } from "@/components/slides";
import { useState } from "react";

const channels = [
  {
    key: "x",
    label: "X / Twitter",
    tag: "830K views",
    color: "#1DA1F2",
    url: "https://x.com/EnterProAI/status/2039916069582967043",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/34ba.png",
    desc: "Single's Inferno AI Dating Show — 54 RT, 122 Likes",
  },
  {
    key: "blog",
    label: "Blog",
    tag: "SEO",
    color: "#F97316",
    url: "https://blog.enter.pro/blog/how-i-built-a-fully-autonomous-ai-dating-show-inspired-by-singles-inferno",
    img: null,
    desc: "How I Built a Fully Autonomous AI Dating Show",
  },
  {
    key: "forum",
    label: "Forum",
    tag: "Community",
    color: "#A855F7",
    url: "https://forum.enter.pro/t/ed4dcf8e-893b-4323-95b0-5047a59c2a75?hl=activities",
    img: null,
    desc: "Forum showcase & community discussion thread",
  },
  {
    key: "tiktok",
    label: "TikTok",
    tag: "Short Video",
    color: "#EE1D52",
    url: "https://www.tiktok.com/@enter.pro.ai/video/7624102436260564237",
    img: null,
    desc: "Short-form video content for viral reach",
  },
  {
    key: "youtube",
    label: "YouTube",
    tag: "Long Video",
    color: "#FF0000",
    url: "https://www.youtube.com/watch?v=KfYa99r7UiY",
    img: null,
    desc: "In-depth walkthrough & tutorial video",
  },
];

export const SlideDB11PGCAIApp = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <SlideLayout title="PGC 物料再利用">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-[28px]">
          <p className="text-[14px] text-muted-foreground mb-[6px]">
            一份 PGC 内容 → 五个渠道分发
          </p>
          <h2 className="text-[32px] font-bold tracking-tight">
            Content <span className="text-primary">Repurposing</span> Pipeline
          </h2>
        </div>

        {/* Flow line + cards */}
        <div className="flex-1 flex items-center">
          <div className="w-full flex gap-[14px]">
            {channels.map((ch, i) => {
              const isActive = active === ch.key;
              return (
                <div
                  key={ch.key}
                  className="relative flex-1 group cursor-pointer"
                  onMouseEnter={() => setActive(ch.key)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => window.open(ch.url, "_blank")}
                  style={{ transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1)", flex: isActive ? 2.2 : 1 }}
                >
                  {/* Step number connector */}
                  <div className="flex items-center justify-center mb-[12px]">
                    <div
                      className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0 transition-transform duration-300"
                      style={{
                        backgroundColor: ch.color,
                        transform: isActive ? "scale(1.2)" : "scale(1)",
                      }}
                    >
                      {i + 1}
                    </div>
                    {i < channels.length - 1 && (
                      <div className="absolute top-[16px] left-[calc(50%+20px)] right-[-10px] h-[2px] bg-foreground/10" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="relative rounded-[16px] border border-foreground/[0.08] overflow-hidden transition-all duration-400"
                    style={{
                      backgroundColor: isActive ? `${ch.color}10` : "rgba(255,255,255,0.02)",
                      borderColor: isActive ? `${ch.color}40` : undefined,
                      height: isActive ? "340px" : "280px",
                    }}
                  >
                    {/* Image area */}
                    <div
                      className="w-full overflow-hidden bg-foreground/[0.03] flex items-center justify-center transition-all duration-400"
                      style={{ height: isActive ? "180px" : "120px" }}
                    >
                      {ch.img ? (
                        <img
                          src={ch.img}
                          alt={ch.label}
                          className="w-full h-full object-cover object-top"
                          crossOrigin="anonymous"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-[8px]">
                          <div
                            className="w-[48px] h-[48px] rounded-[12px] flex items-center justify-center text-[20px] font-black text-white"
                            style={{ backgroundColor: ch.color }}
                          >
                            {ch.label[0]}
                          </div>
                          <span className="text-[11px] text-muted-foreground/60">{ch.url.split("/")[2]}</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-[16px] flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[15px] font-bold text-foreground/90">{ch.label}</span>
                        <span
                          className="text-[10px] px-[6px] py-[2px] rounded-full font-medium"
                          style={{ backgroundColor: `${ch.color}20`, color: ch.color }}
                        >
                          {ch.tag}
                        </span>
                      </div>
                      <p className="text-[12px] text-muted-foreground leading-[1.6]">{ch.desc}</p>
                      {isActive && (
                        <div className="mt-[6px] text-[11px] font-medium" style={{ color: ch.color }}>
                          Click to open →
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="mt-[20px] flex items-center justify-center gap-[24px] text-[13px] text-muted-foreground">
          <span>
            Single content → <strong className="text-foreground">5 channels</strong>
          </span>
          <span className="w-[1px] h-[14px] bg-foreground/10" />
          <span>
            X post: <strong className="text-foreground">830K views</strong>
          </span>
          <span className="w-[1px] h-[14px] bg-foreground/10" />
          <span>
            ROI: <strong className="text-primary">maximize reach per content</strong>
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
