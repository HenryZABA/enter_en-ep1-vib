import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const cpmData = [
  { name: "alex.webnux", platform: "TikTok", cost: "$750", views: "661.5K", cpm: "$1.13" },
  { name: "Eliana Pacheco", platform: "TikTok", cost: "$1,200", views: "455.2K", cpm: "$2.64" },
  { name: "Web3World", platform: "YouTube", cost: "$5,500", views: "509.1K", cpm: "$10.80" },
  { name: "techvorld", platform: "YouTube", cost: "$1,600", views: "114.5K", cpm: "$13.97" },
  { name: "fatihlyfe", platform: "TikTok", cost: "$1,800", views: "91.4K", cpm: "$19.69" },
  { name: "BeerMoneyForum", platform: "YouTube", cost: "$2,900", views: "105.3K", cpm: "$27.53" },
];

const cpmHigh = [
  { name: "Fatih Kilic", platform: "TikTok", cpm: "$213.33" },
  { name: "Krrish", platform: "YouTube", cpm: "$391.49" },
];

const cpeTop = [
  { name: "fatihlyfe", platform: "TikTok", interactions: "3,307", rate: "3.6%", cpe: "$0.54" },
  { name: "Eliana Pacheco", platform: "TikTok", interactions: "2,163", rate: "0.5%", cpe: "$0.55" },
  { name: "Web3World", platform: "YouTube", interactions: "8,955", rate: "1.8%", cpe: "$0.61" },
  { name: "NexcopeAI", platform: "YouTube", interactions: "714", rate: "4.2%", cpe: "$1.05" },
  { name: "ariacodez", platform: "Instagram", interactions: "1,657", rate: "7.8%", cpe: "$1.39" },
];

export function SlideDB04Timeline() {
  return (
    <SlideLayout>
      <SlideHeader title="CPM & CPE 详细排名" subtitle="花费/播放量 x 1000 | 花费/互动数" />
      <div className="flex flex-col gap-[28px] px-[80px]">
        <div className="grid grid-cols-2 gap-[28px]">
          {/* CPM Best */}
          <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
            <div className="text-[22px] font-semibold text-blue-400 mb-[16px]">CPM Top 6（曝光效率最高）</div>
            <div className="flex flex-col gap-[10px]">
              {cpmData.map((k, i) => (
                <div key={k.name} className="flex items-center gap-[8px] text-[17px]">
                  <span className="text-muted-foreground w-[24px]">{i + 1}.</span>
                  <span className="font-medium text-foreground w-[150px] truncate">{k.name}</span>
                  <span className="text-muted-foreground text-[14px] w-[72px]">{k.platform}</span>
                  <span className="text-foreground/70 w-[72px]">{k.views}</span>
                  <span className="text-blue-400 font-bold ml-auto">{k.cpm}</span>
                </div>
              ))}
            </div>
            <div className="mt-[16px] pt-[12px] border-t border-border/30">
              <div className="text-[16px] text-red-400">CPM 异常高：{cpmHigh.map(k => `${k.name} ${k.cpm}`).join("、")}</div>
            </div>
          </div>

          {/* CPE Best */}
          <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
            <div className="text-[22px] font-semibold text-green-400 mb-[16px]">CPE Top 5（互动效率最高）</div>
            <div className="flex flex-col gap-[10px]">
              {cpeTop.map((k, i) => (
                <div key={k.name} className="flex items-center gap-[8px] text-[17px]">
                  <span className="text-muted-foreground w-[24px]">{i + 1}.</span>
                  <span className="font-medium text-foreground w-[150px] truncate">{k.name}</span>
                  <span className="text-muted-foreground text-[14px] w-[72px]">{k.platform}</span>
                  <span className="text-foreground/70 w-[80px]">{k.interactions}</span>
                  <span className="text-foreground/60 w-[48px]">{k.rate}</span>
                  <span className="text-green-400 font-bold ml-auto">{k.cpe}</span>
                </div>
              ))}
            </div>
            <div className="mt-[16px] pt-[12px] border-t border-border/30 text-[16px] text-muted-foreground">
              TikTok 互动效率最高（fatihlyfe $0.54），YouTube Web3World 绝对互动量最大（8,955）
            </div>
          </div>
        </div>

        {/* Summary bar */}
        <div className="bg-muted/10 border border-border/20 rounded-xl p-[24px] grid grid-cols-3 gap-[20px] text-center">
          <div>
            <div className="text-[32px] font-bold text-blue-400">$16.53</div>
            <div className="text-[16px] text-muted-foreground">整体 CPM 加权均值</div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-green-400">$2.51</div>
            <div className="text-[16px] text-muted-foreground">整体 CPE 加权均值</div>
          </div>
          <div>
            <div className="text-[32px] font-bold text-primary">21</div>
            <div className="text-[16px] text-muted-foreground">非IG有效CPM KOL数</div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}