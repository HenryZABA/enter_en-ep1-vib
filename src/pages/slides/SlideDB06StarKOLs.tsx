import { SlideLayout } from "@/components/slides";

const topKOLs = [
  { name: "Krrish", platform: "YouTube", clicks: 367, signups: 184, rate: "50.1%", niche: "AI 编程" },
  { name: "CryptoSanky", platform: "YouTube", clicks: 174, signups: 93, rate: "53.4%", niche: "Crypto+AI" },
  { name: "BeerMoneyForum", platform: "YouTube", clicks: 60, signups: 33, rate: "55.0%", niche: "AI 变现" },
  { name: "oMatheusdaIA", platform: "YouTube", clicks: 34, signups: 19, rate: "55.9%", niche: "AI 工具" },
  { name: "NexcopeAI", platform: "YouTube", clicks: 14, signups: 9, rate: "64.3%", niche: "AI 垂类" },
  { name: "Ai Lockup", platform: "YouTube", clicks: 44, signups: 21, rate: "47.7%", niche: "AI 工具" },
];

const exposureTop = [
  { name: "alex.webnux", platform: "TikTok", views: "661,500", pct: "31.5%" },
  { name: "Web3World", platform: "YT+TT", views: "509,064", pct: "24.3%" },
  { name: "Eliana Pacheco", platform: "TT+IG", views: "455,169", pct: "21.7%" },
];

export const SlideDB06StarKOLs = () => (
  <SlideLayout title="明星 KOL 分析">
    <div className="flex flex-col h-full justify-center space-y-6 md:space-y-8 px-2 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Top Conversion KOLs */}
        <div className="space-y-3">
          <h3 className="text-base md:text-xl font-bold">
            注册转化 Top 6 <span className="text-primary">(全部 YouTube)</span>
          </h3>
          <div className="space-y-2">
            {topKOLs.map((kol) => (
              <div
                key={kol.name}
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg border border-border/40 bg-card/30"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-bold truncate">{kol.name}</span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-primary/20 text-primary shrink-0">
                      {kol.niche}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {kol.signups} 注册 / {kol.clicks} 点击
                  </span>
                </div>
                <span className="text-lg md:text-2xl font-bold text-primary shrink-0">
                  {kol.rate}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Exposure + Insights */}
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="text-base md:text-xl font-bold">
              曝光量 Top 3 <span className="text-muted-foreground">(占全网 77.5%)</span>
            </h3>
            {exposureTop.map((kol, i) => (
              <div
                key={kol.name}
                className="flex items-center gap-3 p-2 md:p-3 rounded-lg border border-border/40 bg-card/30"
              >
                <span className="text-lg md:text-2xl font-bold text-primary/60 w-6">#{i + 1}</span>
                <div className="flex-1">
                  <span className="text-sm md:text-base font-bold">{kol.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{kol.platform}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm md:text-lg font-bold">{kol.views}</span>
                  <span className="text-xs text-muted-foreground ml-1">({kol.pct})</span>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
            <h4 className="text-sm md:text-base font-bold text-primary">KOL 选择方法论</h4>
            <ul className="text-xs md:text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
              <li>频道垂直度 &gt; 粉丝数量</li>
              <li>AI 工具/编程/变现垂类转化率普遍 50%+</li>
              <li>5万精准粉 &gt; 100万泛粉</li>
              <li>中粉丝+高垂直+高互动 = 最佳组合</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
