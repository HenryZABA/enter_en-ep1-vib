import { SlideLayout } from "@/components/slides";

const milestones = [
  { date: "2024.02", value: 0, label: "频道创建", color: "#6b7280" },
  { date: "2025.02", value: 50000, label: "快速增长", color: "#8b5cf6" },
  { date: "2025 Mid", value: 120000, label: "用户翻倍", color: "#3b82f6" },
  { date: "2025.10", value: 150000, label: "月均+1万", color: "#06b6d4" },
  { date: "2026.03", value: 210000, label: "当前", color: "#e24d8f" },
];

const maxValue = 210000;

function formatNum(n: number) {
  if (n === 0) return "0";
  return (n / 10000).toFixed(0) + "万";
}

export const SlideVC11Timeline = () => (
  <SlideLayout title="Reddit Vibe Coding 增长数据">
    <div className="flex flex-col px-4 md:px-12 h-full justify-center">
      {/* Key stats row */}
      <div className="flex flex-wrap gap-6 md:gap-12 mb-8 md:mb-10">
        <div>
          <p className="text-3xl md:text-5xl font-bold text-primary">21万+</p>
          <p className="text-sm text-muted-foreground">当前成员数</p>
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-bold">~1万</p>
          <p className="text-sm text-muted-foreground">月均新增</p>
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-bold">13个月</p>
          <p className="text-sm text-muted-foreground">达到15万用户</p>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-4 md:space-y-5">
        {milestones.map((m) => {
          const widthPercent = m.value === 0 ? 2 : Math.max(4, (m.value / maxValue) * 100);
          const isLast = m.value === maxValue;

          return (
            <div key={m.date} className="flex items-center gap-3 md:gap-4">
              <span className="w-20 md:w-24 text-right text-xs md:text-sm font-mono text-muted-foreground shrink-0">
                {m.date}
              </span>

              <div className="flex-1 relative h-9 md:h-11 bg-secondary/40 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-lg flex items-center justify-end pr-3 transition-all duration-700"
                  style={{
                    width: `${widthPercent}%`,
                    backgroundColor: m.color,
                    boxShadow: isLast ? `0 0 20px ${m.color}40` : undefined,
                  }}
                >
                  {widthPercent > 15 && (
                    <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                      {formatNum(m.value)}
                    </span>
                  )}
                </div>
                {widthPercent <= 15 && (
                  <span
                    className="absolute left-[calc(var(--w)+0.75rem)] top-1/2 -translate-y-1/2 text-xs md:text-sm font-bold whitespace-nowrap"
                    style={{ "--w": `${widthPercent}%` } as React.CSSProperties}
                  >
                    {formatNum(m.value)}
                  </span>
                )}
              </div>

              <span
                className="text-xs px-2 py-1 rounded-full shrink-0 font-medium whitespace-nowrap"
                style={{
                  backgroundColor: `${m.color}20`,
                  color: m.color,
                }}
              >
                {m.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Comparison */}
      <div className="mt-6 md:mt-8 p-4 rounded-xl bg-secondary/30 border border-border/50">
        <p className="text-sm md:text-base">
          对比：同等规模的 <span className="font-bold">Web Developer</span> 频道达到相同用户量花了{" "}
          <span className="font-bold text-primary">10年以上</span>
        </p>
      </div>
    </div>
  </SlideLayout>
);
