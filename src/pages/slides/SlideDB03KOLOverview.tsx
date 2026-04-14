import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const metrics = [
  { label: "总投放费用", value: "$49,430", sub: "含 Instagram" },
  { label: "总播放量", value: "2.25M", sub: "非Instagram有效数据" },
  { label: "总互动数", value: "19,655", sub: "赞 + 评论" },
  { label: "总点击数", value: "4,966", sub: "UTM 触发" },
  { label: "总注册数", value: "549", sub: "UTM 拉新" },
];

const kpis = [
  { label: "CPM", value: "$16.53", note: "非Instagram 加权均值", color: "text-blue-400" },
  { label: "CPE", value: "$2.51", note: "全平台加权均值", color: "text-green-400" },
  { label: "CPA", value: "$90.04", note: "全平台加权均值", color: "text-primary" },
];

export function SlideDB03KOLOverview() {
  return (
    <SlideLayout>
      <SlideHeader title="整体投放规模" subtitle="数据截至 2026-04-14 | 已发布 KOL：27 个 | 总投放费用：$49,430" />
      <div className="flex flex-col gap-[40px] px-[80px]">
        {/* 5 metric cards */}
        <div className="grid grid-cols-5 gap-[20px]">
          {metrics.map((m) => (
            <div key={m.label} className="bg-muted/30 border border-border/40 rounded-xl p-[24px] text-center">
              <div className="text-[40px] font-bold text-foreground leading-tight">{m.value}</div>
              <div className="text-[17px] text-muted-foreground mt-[8px]">{m.label}</div>
              <div className="text-[13px] text-muted-foreground/60 mt-[4px]">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* 3 KPI cards */}
        <div>
          <div className="text-[24px] font-semibold text-foreground/80 mb-[16px]">核心效率指标</div>
          <div className="grid grid-cols-3 gap-[24px]">
            {kpis.map((k) => (
              <div key={k.label} className="bg-muted/20 border border-border/30 rounded-xl p-[32px] flex items-center justify-between">
                <div>
                  <div className={`text-[52px] font-bold ${k.color} leading-tight`}>{k.value}</div>
                  <div className="text-[16px] text-muted-foreground mt-[6px]">{k.note}</div>
                </div>
                <div className="text-[26px] font-semibold text-foreground/40">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}