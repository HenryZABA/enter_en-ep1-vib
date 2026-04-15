import { SlideLayout } from "@/components/slides";
import { useState } from "react";

const directions = [
  {
    num: "01",
    title: "做更加 AI Native 的东西",
    subtitle: "KOL AI 工程化",
    accent: "#3b82f6",
    points: [
      { label: "流程更顺", desc: "让整个 KOL 合作流程被 AI 接管，减少人工环节" },
      { label: "周期更短", desc: "从筛选到发布的时间大幅缩短" },
      { label: "专属达人池", desc: "形成一片专属于 Converge AI 的达人资源" },
      { label: "工具即产品", desc: "AI native 公司不止主要产品可以卖，工具本身也是产品" },
    ],
  },
  {
    num: "02",
    title: "通过内容打造品牌影响力",
    subtitle: "Content-Driven Growth",
    accent: "#f97316",
    points: [
      { label: "通过热点把握即时流量", desc: "一旦热点出现，团队需要快速响应、迅速跟上" },
      { label: "达人资源池做广做深", desc: "探索更多有激励机制的合作模式，与 KOL 形成共同创作叙事" },
      { label: "需要更好的故事", desc: "要更有观点、更关注差异、赋予人设，不能散" },
      { label: "回到数据，持续试错", desc: "接触不同类型达人、看不同合作方式的反馈，找到更有效的方法" },
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
            background: active !== null ? directions[active].accent : "hsl(var(--primary))",
          }}
        />

        {/* Title */}
        <div className="px-8 md:px-16 pt-6 md:pt-10 relative z-10">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
            Next Steps
          </p>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight">
            运营能提升的
            <span className="font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              两个方向
            </span>
          </h1>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center px-6 md:px-12 pb-8 relative z-10">
          <div className="w-full flex gap-5 h-[75%]">
            {directions.map((dir, i) => {
              const isActive = active === i;
              return (
                <div
                  key={dir.title}
                  className="relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer flex flex-col"
                  style={{
                    flex: isActive ? 1.8 : 1,
                    borderColor: isActive ? `${dir.accent}55` : "hsl(var(--border) / 0.3)",
                    background: isActive
                      ? `linear-gradient(135deg, ${dir.accent}08, ${dir.accent}15)`
                      : "hsl(var(--card) / 0.3)",
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  {/* Watermark number */}
                  <div
                    className="absolute -right-4 -top-6 text-[140px] font-black leading-none select-none transition-opacity duration-500"
                    style={{ color: isActive ? `${dir.accent}15` : "hsl(var(--foreground) / 0.03)" }}
                  >
                    {dir.num}
                  </div>

                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    {/* Direction title */}
                    <div className="mb-6">
                      <p
                        className="text-xs tracking-widest uppercase mb-2 transition-colors duration-300"
                        style={{ color: isActive ? dir.accent : "hsl(var(--muted-foreground) / 0.5)" }}
                      >
                        Direction {dir.num}
                      </p>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 mb-1">
                        {dir.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/60">{dir.subtitle}</p>
                    </div>

                    {/* Points */}
                    <div className="flex-1 flex flex-col gap-4">
                      {dir.points.map((pt) => (
                        <div key={pt.label} className="flex gap-3 items-start">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors duration-300"
                            style={{ background: isActive ? dir.accent : "hsl(var(--primary) / 0.3)" }}
                          />
                          <div>
                            <p className="text-sm font-medium text-foreground/80">{pt.label}</p>
                            <p className="text-xs text-muted-foreground/60 mt-0.5 leading-relaxed">
                              {pt.desc}
                            </p>
                          </div>
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
