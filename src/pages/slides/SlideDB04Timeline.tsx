import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const platforms = [
  { name: "YouTube", kols: 16, cost: "$33,250", views: "1.02M", interactions: "10,852", regs: 495, cpa: "$67.17", color: "bg-red-500" },
  { name: "Instagram", kols: 6, cost: "$8,330", views: "—", interactions: "2,912", regs: 46, cpa: "$181.09", color: "bg-purple-500" },
  { name: "TikTok", kols: 5, cost: "$7,850", views: "1.22M", interactions: "5,891", regs: 8, cpa: "—", color: "bg-cyan-500" },
];

const agencies = [
  { name: "Inpander", kols: 13, cost: "$29,050", views: "1.25M", interactions: "13,183", regs: 349, cpm: "$23.31", cpe: "$2.20", cpa: "$83.24" },
  { name: "LUMINARY", kols: 14, cost: "$20,380", views: "1.00M", interactions: "6,472", regs: 200, cpm: "$20.37", cpe: "$3.15", cpa: "$101.90" },
];

export function SlideDB04Timeline() {
  return (
    <SlideLayout>
      <SlideHeader title="平台分布 & Agency 对比" subtitle="重点：YouTube CPA $67.17，贡献 90%+ 有效注册" />
      <div className="flex flex-col gap-[32px] px-[80px]">
        {/* Platform Table */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
          <div className="text-[22px] font-semibold text-foreground/80 mb-[16px]">平台分布</div>
          <div className="grid grid-cols-[120px_50px_90px_80px_80px_70px_80px] gap-x-[12px] text-[15px] text-muted-foreground pb-[10px] border-b border-border/40">
            <span>平台</span><span>KOL</span><span>花费</span><span>播放量</span><span>互动数</span><span>注册数</span><span>CPA</span>
          </div>
          {platforms.map((p) => (
            <div key={p.name} className="grid grid-cols-[120px_50px_90px_80px_80px_70px_80px] gap-x-[12px] items-center py-[12px] border-b border-border/10 text-[17px]">
              <div className="flex items-center gap-[8px]">
                <div className={`w-[8px] h-[8px] rounded-full ${p.color} shrink-0`} />
                <span className="font-medium">{p.name}</span>
              </div>
              <span>{p.kols}</span>
              <span>{p.cost}</span>
              <span>{p.views}</span>
              <span>{p.interactions}</span>
              <span className="text-primary font-bold">{p.regs}</span>
              <span className="font-semibold">{p.cpa}</span>
            </div>
          ))}
          <div className="mt-[12px] text-[15px] text-primary/80 bg-primary/5 rounded-lg p-[12px]">
            YouTube 是当前拉新效率最高的平台：CPA $67.17，贡献了 90% 以上的有效注册
          </div>
        </div>

        {/* Agency Cards */}
        <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
          <div className="text-[22px] font-semibold text-foreground/80 mb-[16px]">Agency 管理对比</div>
          <div className="grid grid-cols-[160px_60px_100px_90px_90px_70px_80px_80px_80px] gap-x-[8px] text-[14px] text-muted-foreground pb-[10px] border-b border-border/40">
            <span>Agency</span><span>KOL</span><span>花费</span><span>播放量</span><span>互动数</span><span>注册</span><span>CPM</span><span>CPE</span><span>CPA</span>
          </div>
          {agencies.map((a) => (
            <div key={a.name} className="grid grid-cols-[160px_60px_100px_90px_90px_70px_80px_80px_80px] gap-x-[8px] items-center py-[14px] border-b border-border/10 text-[17px]">
              <span className="font-bold">{a.name}</span>
              <span>{a.kols}</span>
              <span>{a.cost}</span>
              <span>{a.views}</span>
              <span>{a.interactions}</span>
              <span className="text-primary font-bold">{a.regs}</span>
              <span className="text-blue-400">{a.cpm}</span>
              <span className="text-green-400">{a.cpe}</span>
              <span className="text-primary font-semibold">{a.cpa}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}