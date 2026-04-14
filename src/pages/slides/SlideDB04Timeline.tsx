import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const platforms = [
  { name: "YouTube", kols: 16, cost: "$33,250", views: "1.02M", interactions: "10,852", regs: 495, color: "bg-red-500", barW: "90%" },
  { name: "Instagram", kols: 6, cost: "$8,330", views: "--", interactions: "2,912", regs: 46, color: "bg-purple-500", barW: "8%" },
  { name: "TikTok", kols: 5, cost: "$7,850", views: "1.22M", interactions: "5,891", regs: 8, color: "bg-cyan-500", barW: "1.5%" },
];

const agencies = [
  { name: "Inpander", kols: 13, cost: "$29,050", views: "1.25M", interactions: "13,183", regs: 349, cpm: "$23.31", cpe: "$2.20", cpa: "$83.24" },
  { name: "LUMINARY", kols: 14, cost: "$20,380", views: "1.00M", interactions: "6,472", regs: 200, cpm: "$20.37", cpe: "$3.15", cpa: "$101.90" },
];

export function SlideDB04Timeline() {
  return (
    <SlideLayout>
      <SlideHeader title="二、平台分布 & 三、Agency 对比" subtitle="重点：YouTube 贡献 90% 注册" />
      <div className="flex flex-col gap-[36px] px-[100px]">
        {/* Platform Table */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[32px]">
          <div className="text-[24px] font-semibold text-foreground/80 mb-[20px]">平台分布</div>
          {/* Header */}
          <div className="grid grid-cols-[140px_60px_100px_100px_100px_80px_1fr] gap-[8px] text-[16px] text-muted-foreground pb-[10px] border-b border-border/30">
            <span>平台</span><span>KOL</span><span>花费</span><span>播放量</span><span>互动数</span><span>注册</span><span>注册占比</span>
          </div>
          {platforms.map((p) => (
            <div key={p.name} className="grid grid-cols-[140px_60px_100px_100px_100px_80px_1fr] gap-[8px] items-center py-[14px] border-b border-border/10 text-[18px]">
              <div className="flex items-center gap-[8px]">
                <div className={`w-[10px] h-[10px] rounded-full ${p.color}`} />
                <span className="font-medium">{p.name}</span>
              </div>
              <span>{p.kols}</span>
              <span>{p.cost}</span>
              <span>{p.views}</span>
              <span>{p.interactions}</span>
              <span className="text-primary font-bold">{p.regs}</span>
              <div className="flex items-center gap-[8px]">
                <div className="flex-1 h-[18px] bg-muted/40 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} rounded-full`} style={{ width: p.barW }} />
                </div>
                <span className="text-[14px] text-muted-foreground w-[40px]">{p.barW}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Table */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[32px]">
          <div className="text-[24px] font-semibold text-foreground/80 mb-[20px]">Agency 管理对比</div>
          <div className="grid grid-cols-2 gap-[28px]">
            {agencies.map((a) => (
              <div key={a.name} className="bg-background/40 rounded-lg p-[24px]">
                <div className="text-[26px] font-bold text-foreground mb-[14px]">{a.name}</div>
                <div className="grid grid-cols-3 gap-y-[10px] gap-x-[12px] text-[17px]">
                  <div><span className="text-muted-foreground">KOL：</span>{a.kols}</div>
                  <div><span className="text-muted-foreground">花费：</span>{a.cost}</div>
                  <div><span className="text-muted-foreground">播放：</span>{a.views}</div>
                  <div><span className="text-muted-foreground">互动：</span>{a.interactions}</div>
                  <div><span className="text-muted-foreground">注册：</span><span className="text-primary font-bold">{a.regs}</span></div>
                  <div><span className="text-muted-foreground">CPA：</span><span className="text-primary font-bold">{a.cpa}</span></div>
                  <div><span className="text-muted-foreground">CPM：</span><span className="text-blue-400">{a.cpm}</span></div>
                  <div><span className="text-muted-foreground">CPE：</span><span className="text-green-400">{a.cpe}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}