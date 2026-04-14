import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const scale = [
  { label: "总投放费用", value: "$49,430" },
  { label: "总播放量", value: "2.25M" },
  { label: "总互动数", value: "19,655" },
  { label: "总点击数", value: "4,966" },
  { label: "总注册数", value: "549" },
];

const efficiency = [
  { label: "CPM", value: "$16.53", desc: "非Instagram加权均值", color: "text-blue-400" },
  { label: "CPE", value: "$2.51", desc: "全平台加权均值", color: "text-green-400" },
  { label: "CPA", value: "$90.04", desc: "全平台加权均值", color: "text-primary" },
];

export function SlideDB03KOLOverview() {
  return (
    <SlideLayout>
      <SlideHeader title="一、整体投放规模" subtitle="数据截至 2026-04-14 | 已发布 KOL：27 个" />
      <div className="flex flex-col gap-[48px] px-[100px]">
        {/* Scale Cards */}
        <div className="grid grid-cols-5 gap-[24px]">
          {scale.map((s) => (
            <div key={s.label} className="bg-muted/30 border border-border/40 rounded-xl p-[28px] text-center">
              <div className="text-[44px] font-bold text-foreground leading-tight">{s.value}</div>
              <div className="text-[18px] text-muted-foreground mt-[10px]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Core Efficiency */}
        <div>
          <div className="text-[26px] font-semibold text-foreground/80 mb-[20px]">核心效率指标</div>
          <div className="grid grid-cols-3 gap-[32px]">
            {efficiency.map((e) => (
              <div key={e.label} className="bg-muted/20 border border-border/30 rounded-xl p-[36px] flex items-center justify-between">
                <div>
                  <div className={`text-[56px] font-bold ${e.color} leading-tight`}>{e.value}</div>
                  <div className="text-[18px] text-muted-foreground mt-[6px]">{e.desc}</div>
                </div>
                <div className="text-[28px] font-semibold text-foreground/50">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}