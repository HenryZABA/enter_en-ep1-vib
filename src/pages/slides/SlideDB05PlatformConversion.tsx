import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const qualityKOLs = [
  { name: "ariacodez", platform: "Instagram", users: 38, createRate: "60.5%", publishRate: "34.2%", stars: 5 },
  { name: "NexcopeAI", platform: "YouTube", users: 9, createRate: "66.7%", publishRate: "33.3%", stars: 5 },
  { name: "oMatheusdaIA", platform: "YouTube", users: 144, createRate: "41.7%", publishRate: "13.9%", stars: 4 },
  { name: "Mikkel Lassalle", platform: "YouTube", users: 47, createRate: "55.3%", publishRate: "10.6%", stars: 4 },
  { name: "BeerMoneyForum", platform: "YouTube", users: 34, createRate: "29.4%", publishRate: "11.8%", stars: 4 },
];

const starLabel = (n: number) => Array(n).fill("★").join("");

export function SlideDB05PlatformConversion() {
  return (
    <SlideLayout>
      <SlideHeader title="四、优质 KOL 表现" subtitle="后端数据库实测 | 项目发布率 = 用户真实参与最强信号" />
      <div className="flex flex-col gap-[36px] px-[100px]">
        {/* Table */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[32px]">
          {/* Header */}
          <div className="grid grid-cols-[180px_100px_100px_120px_120px_120px] gap-[8px] text-[16px] text-muted-foreground pb-[12px] border-b border-border/40">
            <span>KOL</span><span>平台</span><span>实测用户</span><span>项目创建率</span><span>项目发布率</span><span>评级</span>
          </div>
          {qualityKOLs.map((k, i) => (
            <div key={k.name} className={`grid grid-cols-[180px_100px_100px_120px_120px_120px] gap-[8px] items-center py-[16px] text-[19px] ${i < qualityKOLs.length - 1 ? "border-b border-border/10" : ""}`}>
              <span className="font-medium text-foreground">{k.name}</span>
              <span className="text-muted-foreground">{k.platform}</span>
              <span className="font-medium">{k.users}</span>
              <span>{k.createRate}</span>
              <span className="text-primary font-bold">{k.publishRate}</span>
              <span className="text-yellow-400 text-[16px]">{starLabel(k.stars)}</span>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-[28px]">
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-[28px]">
            <div className="text-[22px] font-bold text-primary mb-[10px]">ariacodez — 质量之王</div>
            <div className="text-[18px] text-foreground/80 leading-relaxed">
              38 个注册用户中 13 个成功发布项目，发布率 34.2%，接近正常渠道水平。所有邮箱均为 gmail.com / hotmail.com，注册时间分布自然（平均间隔 ~13.7 小时）。
            </div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-[28px]">
            <div className="text-[22px] font-bold text-blue-400 mb-[10px]">oMatheusdaIA — 流量之王</div>
            <div className="text-[18px] text-foreground/80 leading-relaxed">
              单 KOL 带来 144 个实测用户，20 人成功发布项目，是最大真实流量来源。虽发布率一般（13.9%），但绝对数量可观，建议续约。
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}