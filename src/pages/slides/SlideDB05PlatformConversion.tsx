import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const platforms = [
  {
    name: "TikTok",
    kols: 5,
    cost: "$7,850",
    views: "1.22M",
    interactions: "5,891",
    regs: 8,
    cpm: "$6.42",
    cpe: "$1.33",
    cpa: "$981",
    color: "bg-cyan-500",
    highlight: "CPM 最低",
    verdict: "曝光效率极高，但 UTM 拉新极差",
  },
  {
    name: "YouTube",
    kols: 16,
    cost: "$33,250",
    views: "1.02M",
    interactions: "10,852",
    regs: 495,
    cpm: "$32.48",
    cpe: "$3.06",
    cpa: "$67",
    color: "bg-red-500",
    highlight: "CPA 最优",
    verdict: "拉新效率最高，核心渠道",
  },
  {
    name: "Instagram",
    kols: 6,
    cost: "$8,330",
    views: "N/A",
    interactions: "2,912",
    regs: 46,
    cpm: "N/A",
    cpe: "$2.86",
    cpa: "$181",
    color: "bg-purple-500",
    highlight: "质量最优",
    verdict: "API 无播放数据，ariacodez 用户质量极高",
  },
];

export function SlideDB05PlatformConversion() {
  return (
    <SlideLayout>
      <SlideHeader title="平台效率对比" subtitle="TikTok vs YouTube vs Instagram" />
      <div className="flex flex-col gap-[32px] px-[80px]">
        <div className="grid grid-cols-3 gap-[28px]">
          {platforms.map((p) => (
            <div key={p.name} className="bg-muted/20 border border-border/30 rounded-xl p-[32px] flex flex-col gap-[20px]">
              <div className="flex items-center gap-[12px]">
                <div className={`w-[14px] h-[14px] rounded-full ${p.color}`} />
                <span className="text-[32px] font-bold text-foreground">{p.name}</span>
                <span className="ml-auto text-[16px] px-[12px] py-[4px] rounded-full bg-primary/20 text-primary font-medium">{p.highlight}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-[14px] gap-x-[16px] text-[18px]">
                <div><span className="text-muted-foreground">KOL数：</span><span className="font-medium">{p.kols}</span></div>
                <div><span className="text-muted-foreground">花费：</span><span className="font-medium">{p.cost}</span></div>
                <div><span className="text-muted-foreground">播放量：</span><span className="font-medium">{p.views}</span></div>
                <div><span className="text-muted-foreground">互动数：</span><span className="font-medium">{p.interactions}</span></div>
                <div><span className="text-muted-foreground">注册数：</span><span className="font-bold text-primary">{p.regs}</span></div>
              </div>
              <div className="border-t border-border/30 pt-[16px] grid grid-cols-3 gap-[8px] text-center">
                <div>
                  <div className="text-[26px] font-bold text-blue-400">{p.cpm}</div>
                  <div className="text-[14px] text-muted-foreground">CPM</div>
                </div>
                <div>
                  <div className="text-[26px] font-bold text-green-400">{p.cpe}</div>
                  <div className="text-[14px] text-muted-foreground">CPE</div>
                </div>
                <div>
                  <div className="text-[26px] font-bold text-primary">{p.cpa}</div>
                  <div className="text-[14px] text-muted-foreground">CPA</div>
                </div>
              </div>
              <div className="text-[17px] text-muted-foreground italic">{p.verdict}</div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-[28px]">
          <div className="text-[22px] font-semibold text-primary mb-[10px]">核心发现</div>
          <div className="grid grid-cols-3 gap-[20px] text-[18px] text-foreground/80">
            <div>YouTube CPA $67 是 TikTok 的 <span className="text-primary font-bold">1/14</span>，是最高效拉新渠道</div>
            <div>TikTok CPM $6.42 最低，但注册仅 <span className="text-primary font-bold">8 人</span>，流量难以转化</div>
            <div>Instagram ariacodez 发布率 <span className="text-primary font-bold">34.2%</span>，用户质量全场最高</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}