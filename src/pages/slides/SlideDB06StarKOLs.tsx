import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const topQuality = [
  { name: "ariacodez", platform: "IG", users: 38, createRate: "60.5%", publishRate: "34.2%", stars: 5, note: "最优质流量" },
  { name: "NexcopeAI", platform: "YT", users: 9, createRate: "66.7%", publishRate: "33.3%", stars: 5, note: "小而精" },
  { name: "oMatheusdaIA", platform: "YT", users: 144, createRate: "41.7%", publishRate: "13.9%", stars: 4, note: "最大真实流量" },
  { name: "Mikkel Lassalle", platform: "YT", users: 47, createRate: "55.3%", publishRate: "10.6%", stars: 4, note: "参与度高" },
  { name: "BeerMoneyForum", platform: "YT", users: 34, createRate: "29.4%", publishRate: "11.8%", stars: 4, note: "有真实基础" },
];

const topCPA = [
  { name: "CryptoSanky", platform: "YT", cost: "$1,000", regs: 93, cpa: "$10.75", cvr: "53.5%" },
  { name: "Krrish", platform: "YT", cost: "$3,700", regs: 189, cpa: "$19.58", cvr: "50.3%" },
  { name: "oMatheusdaIA", platform: "YT", cost: "$650", regs: 19, cpa: "$34.21", cvr: "55.9%" },
  { name: "ariacodez", platform: "IG", cost: "$2,300", regs: 38, cpa: "$60.53", cvr: "16.6%" },
];

const fakeKOLs = [
  { name: "Krrish", regs: 192, real: "~12", fakeRate: "~92%", signal: "俄语邮箱24个，注册间隔2.7秒" },
  { name: "Web3World(TT)", regs: 31, real: "0", fakeRate: "100%", signal: "机器邮箱，0产品参与" },
  { name: "CryptoSanky", regs: "93/4", real: "~1", fakeRate: "~99%", signal: "DB仅4人 vs 系统93次" },
];

export function SlideDB06StarKOLs() {
  return (
    <SlideLayout>
      <SlideHeader title="KOL 质量深度分析" subtitle="基于后端数据实测 | 项目创建率 & 发布率" />
      <div className="flex flex-col gap-[28px] px-[80px]">
        <div className="grid grid-cols-2 gap-[28px]">
          {/* Quality Rankings */}
          <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
            <div className="text-[22px] font-semibold text-green-400 mb-[16px]">优质 KOL（发布率 Top 5）</div>
            <div className="flex flex-col gap-[12px]">
              {topQuality.map((k) => (
                <div key={k.name} className="flex items-center gap-[12px] text-[17px]">
                  <span className="text-yellow-400 w-[80px] text-[14px]">{"*".repeat(k.stars)}</span>
                  <span className="font-medium text-foreground w-[160px] truncate">{k.name}</span>
                  <span className="text-muted-foreground w-[36px]">{k.platform}</span>
                  <span className="text-foreground/70 w-[60px]">{k.users}人</span>
                  <span className="text-primary font-bold w-[60px]">{k.publishRate}</span>
                  <span className="text-muted-foreground text-[14px] ml-auto">{k.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CPA Rankings */}
          <div className="bg-muted/20 border border-border/30 rounded-xl p-[28px]">
            <div className="text-[22px] font-semibold text-blue-400 mb-[16px]">CPA Top 4（注册成本最低）</div>
            <div className="flex flex-col gap-[14px]">
              {topCPA.map((k) => (
                <div key={k.name} className="flex items-center gap-[12px] text-[17px]">
                  <span className="font-medium text-foreground w-[150px] truncate">{k.name}</span>
                  <span className="text-muted-foreground w-[36px]">{k.platform}</span>
                  <span className="text-foreground/70 w-[72px]">{k.cost}</span>
                  <span className="text-foreground/70 w-[56px]">{k.regs}人</span>
                  <span className="text-primary font-bold w-[72px]">{k.cpa}</span>
                  <span className="text-green-400 ml-auto">CVR {k.cvr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fake KOLs Warning */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-[28px]">
          <div className="text-[22px] font-semibold text-red-400 mb-[16px]">虚假数据 KOL 识别</div>
          <div className="grid grid-cols-3 gap-[20px]">
            {fakeKOLs.map((k) => (
              <div key={k.name} className="bg-background/40 rounded-lg p-[20px]">
                <div className="text-[20px] font-bold text-foreground mb-[8px]">{k.name}</div>
                <div className="text-[16px] text-muted-foreground space-y-[4px]">
                  <div>注册：<span className="text-foreground">{k.regs}</span> | 真实：<span className="text-green-400">{k.real}</span></div>
                  <div>虚假率：<span className="text-red-400 font-bold">{k.fakeRate}</span></div>
                  <div className="text-[14px] italic">{k.signal}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}