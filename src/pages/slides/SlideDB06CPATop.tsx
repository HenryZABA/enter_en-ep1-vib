import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const cpaRank = [
  { name: "oMatheusdaIA", platform: "YouTube", spend: 650, regs: 19, cpa: 34.21 },
  { name: "Ai Lockup", platform: "YouTube", spend: 1200, regs: 21, cpa: 57.14 },
  { name: "ariacodez", platform: "Instagram", spend: 2300, regs: 38, cpa: 60.53 },
  { name: "Mikkel Lassalle", platform: "YouTube", spend: 3300, regs: 46, cpa: 71.74 },
  { name: "NexcopeAI", platform: "YouTube", spend: 750, regs: 9, cpa: 83.33 },
  { name: "BeerMoneyForum", platform: "YouTube", spend: 2900, regs: 33, cpa: 87.88 },
];

const maxCpa = 87.88;

export function SlideDB06CPATop() {
  return (
    <SlideLayout>
      <SlideHeader section="Part 1 KOL 合作" />
      <div className="flex-1 flex flex-col px-[120px] py-[40px] gap-[36px]">
        <div>
          <h2 className="text-[48px] font-bold text-foreground">五、CPA 效率 Top KOL</h2>
          <p className="text-[20px] text-muted-foreground mt-[8px]">按每注册成本从低到高排序，越低越高效</p>
        </div>

        {/* CPA horizontal bar chart */}
        <div className="flex-1 flex flex-col justify-center gap-[24px]">
          {cpaRank.map((k, i) => (
            <div key={k.name} className="flex items-center gap-[20px]">
              {/* Rank number */}
              <div className={`w-[48px] h-[48px] rounded-full flex items-center justify-center text-[22px] font-bold ${i < 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                {i + 1}
              </div>

              {/* Name */}
              <div className="w-[180px]">
                <div className="text-[22px] font-bold text-foreground">{k.name}</div>
                <div className="text-[14px] text-muted-foreground">{k.platform}</div>
              </div>

              {/* CPA bar - inversed: lower CPA = longer bar = better */}
              <div className="flex-1 relative h-[48px]">
                <div
                  className="h-full rounded-[8px] flex items-center justify-between px-[16px]"
                  style={{
                    width: `${100 - ((k.cpa / maxCpa) * 50)}%`,
                    background: i < 3
                      ? `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.6))`
                      : `linear-gradient(90deg, hsl(var(--muted-foreground) / 0.3), hsl(var(--muted-foreground) / 0.15))`,
                  }}
                >
                  <span className={`text-[20px] font-bold ${i < 3 ? "text-white" : "text-foreground"}`}>
                    ${k.cpa.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-[24px] w-[240px]">
                <div className="text-center">
                  <div className="text-[22px] font-bold text-foreground">${k.spend.toLocaleString()}</div>
                  <div className="text-[12px] text-muted-foreground">花费</div>
                </div>
                <div className="text-center">
                  <div className="text-[22px] font-bold text-primary">{k.regs}</div>
                  <div className="text-[12px] text-muted-foreground">注册</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key insights */}
        <div className="flex gap-[20px]">
          <div className="flex-1 bg-muted/30 border border-border rounded-[12px] p-[20px] text-center">
            <div className="text-[14px] text-muted-foreground">Top 3 平均 CPA</div>
            <div className="text-[32px] font-bold text-primary">$50.63</div>
          </div>
          <div className="flex-1 bg-muted/30 border border-border rounded-[12px] p-[20px] text-center">
            <div className="text-[14px] text-muted-foreground">Top 6 总注册</div>
            <div className="text-[32px] font-bold text-foreground">166</div>
          </div>
          <div className="flex-1 bg-muted/30 border border-border rounded-[12px] p-[20px] text-center">
            <div className="text-[14px] text-muted-foreground">YouTube 占比</div>
            <div className="text-[32px] font-bold text-foreground">5/6</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
