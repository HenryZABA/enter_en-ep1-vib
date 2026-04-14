import { SlideLayout } from "@/components/slides";
import { useState } from "react";

const items = [
  {
    num: "01",
    title: "追热点的能力",
    accent: "#f97316",
    points: [
      "目前的爆款内容几乎都是在提前押中潜在热点，或走在热点前面",
      "一旦热点出现，团队需要快速响应、迅速跟上",
    ],
  },
  {
    num: "02",
    title: "加大 PGC 宣传力度",
    accent: "#3b82f6",
    points: [
      "我们的产品力实际上非常有优势，但目前仍需要借助其他产品来带动流量",
      "让用户看到 Enter Pro 能干什么",
    ],
  },
  {
    num: "03",
    title: "KOL 优化方向",
    accent: "#eab308",
    points: [
      "当前 KOL 池子质量参差不齐，需要寻找更优质的达人资源",
      "重点筛选高项目发布率的 KOL，提升真实转化效率",
      "探索新平台、新圈层的优质创作者，拓宽获客渠道",
    ],
  },
];

export const SlideDB19Suggestions = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <SlideLayout title="">
      <div className="flex flex-col h-full relative overflow-hidden">
        {/* Animated bg glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-[140px] transition-all duration-700"
          style={{
            background:
              active !== null ? items[active].accent : "hsl(var(--primary))",
          }}
        />

        {/* Title area */}
        <div className="px-8 md:px-16 pt-6 md:pt-10 relative z-10">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
            INSIGHTS & REFLECTION
          </p>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight">
            运营
            <span className="font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              建议
            </span>
            <span className="text-muted-foreground/40 font-extralight">
              {" "}与反思
            </span>
          </h1>
        </div>

        {/* Main content - horizontal cards */}
        <div className="flex-1 flex items-center px-6 md:px-12 pb-8 relative z-10">
          <div className="w-full flex gap-4 md:gap-5 h-[70%]">
            {items.map((item, i) => {
              const isActive = active === i;
              return (
                <div
                  key={item.title}
                  className="relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer"
                  style={{
                    flex: isActive ? 2.2 : 1,
                    borderColor: isActive
                      ? `${item.accent}55`
                      : "hsl(var(--border) / 0.3)",
                    background: isActive
                      ? `linear-gradient(145deg, ${item.accent}12, transparent 50%)`
                      : "hsl(var(--card) / 0.15)",
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Large number watermark */}
                  <span
                    className="absolute -right-4 -bottom-8 text-[140px] md:text-[180px] font-black leading-none transition-all duration-500 select-none"
                    style={{
                      color: isActive
                        ? `${item.accent}18`
                        : `${item.accent}06`,
                    }}
                  >
                    {item.num}
                  </span>

                  <div className="relative z-10 h-full flex flex-col p-5 md:p-7">
                    {/* Top accent bar */}
                    <div
                      className="h-1 rounded-full mb-5 transition-all duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                        width: isActive ? "80px" : "40px",
                        opacity: isActive ? 1 : 0.4,
                      }}
                    />

                    {/* Number + Title */}
                    <div className="mb-auto">
                      <span
                        className="text-xs md:text-sm font-mono font-bold block mb-1 transition-colors duration-300"
                        style={{ color: isActive ? item.accent : `${item.accent}80` }}
                      >
                        {item.num}
                      </span>
                      <h3
                        className="text-lg md:text-2xl font-bold transition-colors duration-300"
                        style={{ color: isActive ? item.accent : undefined }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Points - expand on hover */}
                    <div className="space-y-3 mt-4">
                      {item.points.map((p, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-2.5 transition-all duration-500"
                          style={{
                            opacity: isActive ? 1 : 0.5,
                            transform: isActive
                              ? "translateY(0)"
                              : "translateY(6px)",
                            transitionDelay: isActive ? `${j * 80}ms` : "0ms",
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-300"
                            style={{
                              background: item.accent,
                              opacity: isActive ? 1 : 0.3,
                            }}
                          />
                          <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">
                            {p}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
