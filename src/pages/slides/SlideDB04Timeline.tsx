import { SlideLayout } from "@/components/slides";

const months = [
  { month: "2月", count: 1, note: "从0突破，验证完整链路", growth: "" },
  { month: "3月", count: 16, note: "规模化爆发，批量推进", growth: "+1500%" },
  { month: "4月", count: 9, note: "高速巡航，预计超越3月", growth: "月中数据" },
];

const platforms = [
  { name: "YouTube", count: 18, pct: 66.7, desc: "长视频 7-20min", color: "bg-red-500/80" },
  { name: "TikTok", count: 8, pct: 29.6, desc: "短视频 30-90s", color: "bg-cyan-500/80" },
  { name: "Instagram", count: 8, pct: 29.6, desc: "Reels", color: "bg-purple-500/80" },
  { name: "Facebook", count: 2, pct: 7.4, desc: "Reels", color: "bg-blue-500/80" },
];

export const SlideDB04Timeline = () => (
  <SlideLayout title="发布时间线 & 平台分布">
    <div className="flex flex-col h-full justify-center space-y-8 md:space-y-10 px-2 md:px-8">
      {/* Timeline */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-2xl font-bold">月度发布趋势</h3>
        <div className="flex items-end gap-4 md:gap-8 h-40 md:h-52">
          {months.map((m) => {
            const maxH = 16; // max count for scaling
            const heightPct = (m.count / maxH) * 100;
            return (
              <div key={m.month} className="flex flex-col items-center flex-1 h-full justify-end">
                <span className="text-lg md:text-3xl font-bold text-primary mb-1">{m.count}</span>
                {m.growth && (
                  <span className="text-xs text-green-400 font-medium mb-1">{m.growth}</span>
                )}
                <div
                  className="w-full max-w-24 md:max-w-32 bg-primary/80 rounded-t-lg transition-all"
                  style={{ height: `${heightPct}%` }}
                />
                <span className="text-sm md:text-base font-medium mt-2">{m.month}</span>
                <span className="text-xs text-muted-foreground text-center mt-1">{m.note}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform Distribution */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-2xl font-bold">平台分布（已发布）</h3>
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center p-3 md:p-5 rounded-xl border border-border/50 bg-card/50 space-y-2"
            >
              <div className={`w-3 h-3 rounded-full ${p.color}`} />
              <span className="text-sm md:text-lg font-bold">{p.name}</span>
              <span className="text-2xl md:text-3xl font-bold text-primary">{p.count}</span>
              <span className="text-xs text-muted-foreground">{p.pct}%</span>
              <span className="text-xs text-muted-foreground">{p.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">* 部分 KOL 覆盖多平台，合计超过27</p>
      </div>
    </div>
  </SlideLayout>
);
