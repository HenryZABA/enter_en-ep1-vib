import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const cpaTop = [
  { name: "oMatheusdaIA", platform: "YouTube", cost: "$650", regs: 19, cpa: 34.21 },
  { name: "Ai Lockup", platform: "YouTube", cost: "$1,200", regs: 21, cpa: 57.14 },
  { name: "ariacodez", platform: "Instagram", cost: "$2,300", regs: 38, cpa: 60.53 },
  { name: "Mikkel Lassalle", platform: "YouTube", cost: "$3,300", regs: 46, cpa: 71.74 },
  { name: "NexcopeAI", platform: "YouTube", cost: "$750", regs: 9, cpa: 83.33 },
  { name: "BeerMoneyForum", platform: "YouTube", cost: "$2,900", regs: 33, cpa: 87.88 },
];

export function SlideDB06StarKOLs() {
  const maxCpa = 90;
  return (
    <SlideLayout>
      <SlideHeader title="CPA 效率 Top KOL" subtitle="注册成本排名 | 均低于全平台均值 $90.04" />
      <div className="flex flex-col gap-[32px] px-[80px]">
        {/* CPA Table */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
          <div className="grid grid-cols-[180px_100px_100px_80px_90px_1fr] gap-x-[12px] text-[15px] text-muted-foreground pb-[10px] border-b border-border/40">
            <span>KOL</span><span>平台</span><span>花费</span><span>注册数</span><span>CPA</span><span>效率（越长越高效）</span>
          </div>
          {cpaTop.map((k, i) => {
            const barW = Math.max(8, ((maxCpa - k.cpa) / maxCpa) * 100);
            return (
              <div key={k.name} className={`grid grid-cols-[180px_100px_100px_80px_90px_1fr] gap-x-[12px] items-center py-[14px] text-[17px] ${i < cpaTop.length - 1 ? "border-b border-border/10" : ""}`}>
                <span className="font-medium text-foreground">{k.name}</span>
                <span className="text-muted-foreground">{k.platform}</span>
                <span>{k.cost}</span>
                <span className="font-medium">{k.regs}</span>
                <span className="text-primary font-bold">${k.cpa.toFixed(2)}</span>
                <div className="flex items-center gap-[8px]">
                  <div className="flex-1 h-[14px] bg-muted/40 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60 rounded-full" style={{ width: `${barW}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 key insights */}
        <div className="grid grid-cols-3 gap-[20px]">
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-[24px]">
            <div className="text-[18px] font-bold text-primary mb-[6px]">YouTube 主导拉新</div>
            <div className="text-[15px] text-foreground/80">Top 6 中 5 个来自 YouTube，贡献 90%+ 注册，是最高效转化平台</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-[24px]">
            <div className="text-[18px] font-bold text-green-400 mb-[6px]">oMatheusdaIA 性价比最高</div>
            <div className="text-[15px] text-foreground/80">$650 获得 19 个注册，CPA $34.21 全场最低</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-[24px]">
            <div className="text-[18px] font-bold text-blue-400 mb-[6px]">集中预算建议</div>
            <div className="text-[15px] text-foreground/80">Top 6 均低于均值 $90.04，建议集中预算在优质 KOL 续约</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}