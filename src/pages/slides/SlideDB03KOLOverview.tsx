import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const kpis = [
  { label: "已发布 KOL", value: "27", sub: "个" },
  { label: "总投放费用", value: "$49,430", sub: "" },
  { label: "CPM 播放量", value: "2.25M", sub: "非IG" },
  { label: "总互动数", value: "19,655", sub: "赞+评论" },
  { label: "总点击数", value: "4,966", sub: "UTM" },
  { label: "总注册数", value: "549", sub: "UTM 拉新" },
];

const metrics = [
  { label: "CPM", value: "$16.53", desc: "非IG加权均值", color: "text-blue-400" },
  { label: "CPE", value: "$2.51", desc: "全平台加权", color: "text-green-400" },
  { label: "CPA", value: "$90.04", desc: "全平台加权", color: "text-primary" },
];

const agencies = [
  { name: "Inpander", kols: 13, cost: "$29,050", views: "1.25M", regs: 349, cpm: "$23.31", cpa: "$83.24" },
  { name: "LUMINARY", kols: 14, cost: "$20,380", views: "1.00M", regs: 200, cpm: "$20.37", cpa: "$101.90" },
];

export function SlideDB03KOLOverview() {
  return (
    <SlideLayout>
      <SlideHeader title="KOL 投放数据总览" subtitle="数据截至 2026-04-14" />
      <div className="flex flex-col gap-[40px] px-[80px]">
        {/* KPI Cards */}
        <div className="grid grid-cols-6 gap-[20px]">
          {kpis.map((k) => (
            <div key={k.label} className="bg-muted/30 border border-border/40 rounded-xl p-[24px] text-center">
              <div className="text-[42px] font-bold text-primary leading-tight">{k.value}</div>
              {k.sub && <div className="text-[18px] text-muted-foreground mt-[4px]">{k.sub}</div>}
              <div className="text-[18px] text-muted-foreground mt-[8px]">{k.label}</div>
            </div>
          ))}
        </div>

        {/* Core Metrics */}
        <div className="grid grid-cols-3 gap-[24px]">
          {metrics.map((m) => (
            <div key={m.label} className="bg-muted/20 border border-border/30 rounded-xl p-[28px] flex items-center gap-[24px]">
              <div>
                <div className={`text-[48px] font-bold ${m.color} leading-tight`}>{m.value}</div>
                <div className="text-[20px] text-muted-foreground">{m.desc}</div>
              </div>
              <div className="text-[24px] font-semibold text-foreground/70 ml-auto">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Agency Comparison */}
        <div>
          <div className="text-[24px] font-semibold text-foreground/80 mb-[16px]">Agency 对比</div>
          <div className="grid grid-cols-2 gap-[24px]">
            {agencies.map((a) => (
              <div key={a.name} className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
                <div className="text-[28px] font-bold text-foreground mb-[16px]">{a.name}</div>
                <div className="grid grid-cols-3 gap-y-[12px] text-[18px]">
                  <div><span className="text-muted-foreground">KOL数：</span><span className="text-foreground font-medium">{a.kols}</span></div>
                  <div><span className="text-muted-foreground">花费：</span><span className="text-foreground font-medium">{a.cost}</span></div>
                  <div><span className="text-muted-foreground">播放：</span><span className="text-foreground font-medium">{a.views}</span></div>
                  <div><span className="text-muted-foreground">注册：</span><span className="text-foreground font-medium">{a.regs}</span></div>
                  <div><span className="text-muted-foreground">CPM：</span><span className="text-blue-400 font-medium">{a.cpm}</span></div>
                  <div><span className="text-muted-foreground">CPA：</span><span className="text-primary font-medium">{a.cpa}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}