import { SlideLayout } from "@/components/slides/SlideLayout";

const topKOLs = [
  { name: "ariacodez", platform: "Instagram", users: 38, createRate: 60.5, publishRate: 34.2, stars: 5 },
  { name: "NexcopeAI", platform: "YouTube", users: 9, createRate: 66.7, publishRate: 33.3, stars: 5 },
  { name: "oMatheusdaIA", platform: "YouTube", users: 144, createRate: 41.7, publishRate: 13.9, stars: 4 },
  { name: "Mikkel Lassalle", platform: "YouTube", users: 47, createRate: 55.3, publishRate: 10.6, stars: 4 },
  { name: "BeerMoneyForum", platform: "YouTube", users: 34, createRate: 29.4, publishRate: 11.8, stars: 4 },
];

const maxPublishRate = 34.2;

export function SlideDB05PlatformConversion() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col px-[120px] py-[40px] gap-[32px]">
        <div>
          <h2 className="text-[48px] font-bold text-foreground">优质 KOL 表现</h2>
          <p className="text-[20px] text-muted-foreground mt-[8px]">通过后端数据库实测，以「项目发布率」衡量用户真实参与</p>
        </div>

        {/* Horizontal bar chart */}
        <div className="flex-1 flex flex-col gap-[20px]">
          {topKOLs.map((k) => (
            <div key={k.name} className="flex items-center gap-[20px]">
              {/* Name + platform */}
              <div className="w-[200px] text-right">
                <div className="text-[20px] font-bold text-foreground">{k.name}</div>
                <div className="text-[14px] text-muted-foreground">{k.platform}</div>
              </div>

              {/* Bars */}
              <div className="flex-1 flex flex-col gap-[4px]">
                {/* Create rate bar */}
                <div className="flex items-center gap-[8px]">
                  <div className="h-[24px] rounded-[6px] bg-primary/30 flex items-center px-[8px]" style={{ width: `${(k.createRate / 70) * 100}%` }}>
                    <span className="text-[12px] font-semibold text-primary whitespace-nowrap">创建 {k.createRate}%</span>
                  </div>
                </div>
                {/* Publish rate bar */}
                <div className="flex items-center gap-[8px]">
                  <div className="h-[32px] rounded-[6px] flex items-center px-[10px]" style={{ width: `${(k.publishRate / maxPublishRate) * 80}%`, background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))` }}>
                    <span className="text-[14px] font-bold text-white whitespace-nowrap">发布 {k.publishRate}%</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="w-[120px] text-center">
                <div className="text-[28px] font-bold text-foreground">{k.users}</div>
                <div className="text-[12px] text-muted-foreground">实测用户</div>
              </div>

              {/* Stars */}
              <div className="w-[80px] text-[18px] text-primary">
                {"★".repeat(k.stars)}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="flex gap-[24px]">
          <div className="flex-1 bg-primary/10 border border-primary/30 rounded-[16px] p-[24px]">
            <div className="text-[22px] font-bold text-primary mb-[8px]">ariacodez</div>
            <p className="text-[16px] text-foreground">38 个注册用户中 <strong>13 个成功发布项目</strong>，发布率 34.2%。邮箱健康，注册时间分布自然（平均间隔 ~13.7 小时）。</p>
          </div>
          <div className="flex-1 bg-primary/10 border border-primary/30 rounded-[16px] p-[24px]">
            <div className="text-[22px] font-bold text-primary mb-[8px]">oMatheusdaIA</div>
            <p className="text-[16px] text-foreground">单 KOL 带来 <strong>144 个实测用户，20 人成功发布</strong>，是最大真实流量来源。建议续约。</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
