import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const cpaTop = [
  { name: "oMatheusdaIA", platform: "YouTube", cost: "$650", regs: 19, cpa: "$34.21" },
  { name: "Ai Lockup", platform: "YouTube", cost: "$1,200", regs: 21, cpa: "$57.14" },
  { name: "ariacodez", platform: "Instagram", cost: "$2,300", regs: 38, cpa: "$60.53" },
  { name: "Mikkel Lassalle", platform: "YouTube", cost: "$3,300", regs: 46, cpa: "$71.74" },
  { name: "NexcopeAI", platform: "YouTube", cost: "$750", regs: 9, cpa: "$83.33" },
  { name: "BeerMoneyForum", platform: "YouTube", cost: "$2,900", regs: 33, cpa: "$87.88" },
];

export function SlideDB06StarKOLs() {
  return (
    <SlideLayout>
      <SlideHeader title="五、CPA 效率 Top KOL" subtitle="注册成本排名 | 越低越高效" />
      <div className="flex flex-col gap-[36px] px-[100px]">
        {/* CPA Table */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[32px]">
          {/* Header */}
          <div className="grid grid-cols-[200px_120px_120px_100px_120px_1fr] gap-[8px] text-[16px] text-muted-foreground pb-[12px] border-b border-border/40">
            <span>KOL</span><span>平台</span><span>花费</span><span>注册数</span><span>CPA</span><span>效率条</span>
          </div>
          {cpaTop.map((k, i) => {
            const maxCpa = 90;
            const barW = Math.max(5, Math.min(100, ((maxCpa - parseFloat(k.cpa.replace("$", ""))) / maxCpa) * 100));
            return (
              <div key={k.name} className={`grid grid-cols-[200px_120px_120px_100px_120px_1fr] gap-[8px] items-center py-[16px] text-[19px] ${i < cpaTop.length - 1 ? "border-b border-border/10" : ""}`}>
                <span className="font-medium text-foreground">{k.name}</span>
                <span className="text-muted-foreground">{k.platform}</span>
                <span>{k.cost}</span>
                <span className="font-medium">{k.regs}</span>
                <span className="text-primary font-bold">{k.cpa}</span>
                <div className="flex items-center gap-[8px]">
                  <div className="flex-1 h-[16px] bg-muted/40 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60 rounded-full transition-all" style={{ width: `${barW}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Insight */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-[32px]">
          <div className="text-[22px] font-semibold text-primary mb-[12px]">关键洞察</div>
          <div className="grid grid-cols-3 gap-[24px] text-[18px] text-foreground/80">
            <div>
              <div className="font-semibold text-foreground mb-[4px]">YouTube 主导拉新</div>
              Top 6 中 5 个来自 YouTube，占注册量 90%，是最高效转化平台
            </div>
            <div>
              <div className="font-semibold text-foreground mb-[4px]">oMatheusdaIA 性价比最高</div>
              $650 获得 19 个注册，CPA $34.21，是全场最低成本
            </div>
            <div>
              <div className="font-semibold text-foreground mb-[4px]">整体 CPA $90.04</div>
              Top 6 均低于均值，建议集中预算在优质 KOL 上续约
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}