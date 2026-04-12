import { SlideLayout } from "@/components/slides";

const segments = [
  { label: "学习调研式", pct: 50, color: "#3b82f6", desc: "快速试错、持续迭代" },
  { label: "自助餐式", pct: 35, color: "#f59e0b", desc: "快速随性、简短指令" },
  { label: "专业用户", pct: 15, color: "#10b981", desc: "完整PRD、需求清晰" },
];

export const SlideVC09DonutChart = () => {
  // Build conic-gradient stops
  let cumulative = 0;
  const stops = segments.map((s) => {
    const start = cumulative;
    cumulative += s.pct;
    return `${s.color} ${start}% ${cumulative}%`;
  });
  const gradient = `conic-gradient(from 180deg, ${stops.join(", ")})`;

  return (
    <SlideLayout title="Enter 用户画像分布">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-12 h-full">
        {/* Donut chart */}
        <div className="relative flex-shrink-0">
          <div
            className="w-56 h-56 md:w-72 md:h-72 rounded-full"
            style={{ background: gradient }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-background flex flex-col items-center justify-center">
              <p className="text-3xl md:text-4xl font-bold">100%</p>
              <p className="text-xs md:text-sm text-muted-foreground">用户总量</p>
            </div>
          </div>
        </div>

        {/* Legend & Details */}
        <div className="space-y-6 md:space-y-8">
          {segments.map((s) => (
            <div key={s.label} className="flex items-start gap-4">
              <div
                className="w-4 h-4 rounded-sm mt-1 flex-shrink-0"
                style={{ backgroundColor: s.color }}
              />
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-bold">{s.pct}%</span>
                  <span className="text-lg md:text-xl font-semibold">{s.label}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground border-t pt-4">
            数据来源：Milo 高消耗高频项目调研
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};
