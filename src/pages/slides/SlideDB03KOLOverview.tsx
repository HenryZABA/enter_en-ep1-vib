import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const stats = [
  { label: "总投放费用", value: "$49,430", sub: "含 Instagram" },
  { label: "总播放量", value: "2.25M", sub: "非 IG 有效数据" },
  { label: "总互动数", value: "19,655", sub: "赞 + 评论" },
  { label: "总点击数", value: "4,966", sub: "UTM 触发" },
  { label: "总注册数", value: "549", sub: "UTM 拉新" },
];

const kpis = [
  { label: "CPM", value: "$16.53", desc: "非 Instagram 加权均值", color: "hsl(var(--primary))" },
  { label: "CPE", value: "$2.51", desc: "全平台加权均值", color: "#22c55e" },
  { label: "CPA", value: "$90.04", desc: "全平台加权均值", color: "#f59e0b" },
];

// Funnel data: views -> interactions -> clicks -> registrations
const funnel = [
  { label: "播放", value: 2250000, display: "2.25M", pct: 100 },
  { label: "互动", value: 19655, display: "19,655", pct: 0.87 },
  { label: "点击", value: 4966, display: "4,966", pct: 0.22 },
  { label: "注册", value: 549, display: "549", pct: 0.024 },
];

export function SlideDB03KOLOverview() {
  return (
    <SlideLayout>
      <SlideHeader section="Part 1 KOL 合作" />
      <div className="flex-1 flex flex-col px-[120px] py-[40px] gap-[40px]">
        <h2 className="text-[48px] font-bold text-foreground">整体投放规模</h2>
        <p className="text-[20px] text-muted-foreground -mt-[30px]">数据截至 2026-04-14 | 已发布 KOL：27 个</p>

        {/* 5 stat cards */}
        <div className="flex gap-[20px]">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 bg-muted/30 border border-border rounded-[16px] p-[24px] flex flex-col items-center">
              <span className="text-[36px] font-bold text-primary">{s.value}</span>
              <span className="text-[18px] text-foreground font-medium mt-[4px]">{s.label}</span>
              <span className="text-[14px] text-muted-foreground mt-[2px]">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-[40px] flex-1">
          {/* Left: KPI cards */}
          <div className="flex flex-col gap-[16px] w-[400px]">
            <h3 className="text-[24px] font-semibold text-foreground">核心效率指标</h3>
            {kpis.map((k) => (
              <div key={k.label} className="flex items-center gap-[16px] bg-muted/20 border border-border rounded-[12px] p-[20px]">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[18px] font-bold text-white" style={{ backgroundColor: k.color }}>
                  {k.label}
                </div>
                <div>
                  <div className="text-[32px] font-bold text-foreground">{k.value}</div>
                  <div className="text-[14px] text-muted-foreground">{k.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Funnel visualization */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-[24px] font-semibold text-foreground mb-[16px]">转化漏斗</h3>
            <div className="flex-1 flex flex-col justify-center gap-[12px]">
              {funnel.map((f, i) => {
                const widths = [100, 55, 30, 12];
                return (
                  <div key={f.label} className="flex items-center gap-[16px]">
                    <span className="text-[18px] text-muted-foreground w-[60px] text-right">{f.label}</span>
                    <div className="flex-1 relative h-[52px]">
                      <div
                        className="h-full rounded-[8px] flex items-center px-[16px] transition-all"
                        style={{
                          width: `${widths[i]}%`,
                          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.6) 100%)`,
                          opacity: 1 - i * 0.15,
                        }}
                      >
                        <span className="text-[20px] font-bold text-white">{f.display}</span>
                      </div>
                    </div>
                    {i < funnel.length - 1 && (
                      <span className="text-[14px] text-muted-foreground w-[80px]">
                        {((funnel[i + 1].value / f.value) * 100).toFixed(1)}%
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
