import { SlideLayout } from "@/components/slides/SlideLayout";

const platforms = [
  { name: "YouTube", kols: 16, spend: 33250, views: "1.02M", interactions: 10852, regs: 495, cpa: "$67.17", color: "#ef4444", regPct: 90.2 },
  { name: "Instagram", kols: 6, spend: 8330, views: "—", interactions: 2912, regs: 46, cpa: "$181.09", color: "#a855f7", regPct: 8.4 },
  { name: "TikTok", kols: 5, spend: 7850, views: "1.22M", interactions: 5891, regs: 8, cpa: "—", color: "#06b6d4", regPct: 1.5 },
];

const agencies = [
  { name: "Inpander", kols: 13, spend: "$29,050", views: "1.25M", interactions: "13,183", regs: 349, cpm: "$23.31", cpe: "$2.20", cpa: "$83.24" },
  { name: "LUMINARY", kols: 14, spend: "$20,380", views: "1.00M", interactions: "6,472", regs: 200, cpm: "$20.37", cpe: "$3.15", cpa: "$101.90" },
];

export function SlideDB04Timeline() {
  const maxSpend = 33250;
  const maxRegs = 495;

  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col px-[120px] py-[40px] gap-[36px]">
        <h2 className="text-[48px] font-bold text-foreground">平台分布 & Agency 对比</h2>

        {/* Platform visual comparison */}
        <div className="flex gap-[24px]">
          {platforms.map((p) => (
            <div key={p.name} className="flex-1 border border-border rounded-[16px] p-[24px] bg-muted/20">
              <div className="flex items-center gap-[10px] mb-[16px]">
                <div className="w-[12px] h-[12px] rounded-full" style={{ backgroundColor: p.color }} />
                <span className="text-[24px] font-bold text-foreground">{p.name}</span>
                <span className="text-[16px] text-muted-foreground ml-auto">{p.kols} KOL</span>
              </div>

              {/* Spend bar */}
              <div className="mb-[12px]">
                <div className="flex justify-between text-[14px] text-muted-foreground mb-[4px]">
                  <span>花费</span>
                  <span className="font-semibold text-foreground">${p.spend.toLocaleString()}</span>
                </div>
                <div className="h-[8px] bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(p.spend / maxSpend) * 100}%`, backgroundColor: p.color }} />
                </div>
              </div>

              {/* Reg bar */}
              <div className="mb-[16px]">
                <div className="flex justify-between text-[14px] text-muted-foreground mb-[4px]">
                  <span>注册数</span>
                  <span className="font-semibold text-foreground">{p.regs}</span>
                </div>
                <div className="h-[8px] bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(p.regs / maxRegs) * 100}%`, backgroundColor: p.color }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[8px] text-[14px]">
                <div className="bg-background/50 rounded-[8px] p-[8px] text-center">
                  <div className="text-muted-foreground">播放量</div>
                  <div className="font-bold text-foreground">{p.views}</div>
                </div>
                <div className="bg-background/50 rounded-[8px] p-[8px] text-center">
                  <div className="text-muted-foreground">互动</div>
                  <div className="font-bold text-foreground">{p.interactions.toLocaleString()}</div>
                </div>
                <div className="bg-background/50 rounded-[8px] p-[8px] text-center">
                  <div className="text-muted-foreground">CPA</div>
                  <div className="font-bold" style={{ color: p.color }}>{p.cpa}</div>
                </div>
                <div className="bg-background/50 rounded-[8px] p-[8px] text-center">
                  <div className="text-muted-foreground">注册占比</div>
                  <div className="font-bold text-foreground">{p.regPct}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div className="bg-primary/10 border border-primary/30 rounded-[12px] px-[24px] py-[14px] text-[18px]">
          <span className="text-primary font-bold">核心发现：</span>
          <span className="text-foreground">YouTube CPA $67.17，贡献 90%+ 有效注册，是当前拉新效率最高的平台</span>
        </div>

        {/* Agency comparison table */}
        <div>
          <h3 className="text-[28px] font-semibold text-foreground mb-[16px]">Agency 管理对比</h3>
          <div className="grid grid-cols-9 gap-[2px] text-[16px]">
            {["Agency", "KOL数", "花费", "播放量", "互动数", "注册数", "CPM", "CPE", "CPA"].map((h) => (
              <div key={h} className="bg-muted/60 px-[12px] py-[10px] font-semibold text-muted-foreground text-center first:text-left first:rounded-tl-[8px] last:rounded-tr-[8px]">{h}</div>
            ))}
            {agencies.map((a, i) => (
              [a.name, a.kols, a.spend, a.views, a.interactions, a.regs, a.cpm, a.cpe, a.cpa].map((v, j) => (
                <div key={`${i}-${j}`} className={`px-[12px] py-[10px] text-center first:text-left ${i % 2 === 0 ? "bg-muted/20" : "bg-muted/10"} ${j === 0 ? "font-semibold text-foreground" : "text-foreground"} ${j === 8 ? "font-bold text-primary" : ""}`}>
                  {v}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
