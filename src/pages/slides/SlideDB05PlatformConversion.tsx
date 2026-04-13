import { SlideLayout } from "@/components/slides";

const platforms = [
  { name: "YouTube", clicks: "2,208", signups: 455, rate: "20.6%", highlight: true },
  { name: "Instagram", clicks: "464", signups: 50, rate: "10.8%", highlight: false },
  { name: "TikTok", clicks: "2,276", signups: 35, rate: "1.5%", highlight: false },
];

const reasons = [
  { title: "内容深度", desc: "YouTube 7-20min 深度内容 → 注册意向被充分激活" },
  { title: "用户意图", desc: "YouTube 用户主动搜索学习，TikTok 用户以娱乐为主" },
  { title: "链接可达性", desc: "YouTube 描述区直接放链接，TikTok 需跳转 Bio" },
  { title: "长尾效应", desc: "YouTube 搜索属性带来持续流量，TikTok 72h 后衰减" },
];

export const SlideDB05PlatformConversion = () => (
  <SlideLayout title="平台转化效率对比">
    <div className="flex flex-col h-full justify-center space-y-6 md:space-y-8 px-2 md:px-8">
      {/* Core finding */}
      <div className="flex items-center justify-center">
        <div className="px-6 py-3 md:px-10 md:py-4 rounded-2xl bg-primary/10 border border-primary/30">
          <span className="text-lg md:text-3xl font-bold">
            YouTube 转化率是 TikTok 的{" "}
            <span className="text-primary text-2xl md:text-5xl">13.7x</span>
          </span>
        </div>
      </div>

      {/* Platform comparison bars */}
      <div className="space-y-4">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-center gap-3 md:gap-4">
            <span className="text-sm md:text-lg font-bold w-24 md:w-28 shrink-0 text-right">
              {p.name}
            </span>
            <div className="flex-1 h-10 md:h-14 bg-muted/30 rounded-xl overflow-hidden relative">
              <div
                className={`h-full rounded-xl flex items-center px-3 md:px-4 ${
                  p.highlight ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                style={{ width: `${(parseFloat(p.rate) / 20.6) * 100}%` }}
              >
                <span
                  className={`text-sm md:text-lg font-bold ${
                    p.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {p.rate}
                </span>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs md:text-sm text-muted-foreground">
                {p.signups} 注册 / {p.clicks} 点击
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why YouTube wins */}
      <div className="space-y-3">
        <h3 className="text-base md:text-xl font-bold text-muted-foreground">
          YouTube 转化率远超 TikTok 的 4 个核心原因
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-3 md:p-4 rounded-xl border border-border/50 bg-card/50 space-y-1"
            >
              <span className="text-sm md:text-base font-bold text-primary">{r.title}</span>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 md:p-4 rounded-xl bg-green-500/10 border border-green-500/30">
        <p className="text-xs md:text-sm text-green-400">
          <span className="font-bold">战略结论：</span>
          未来 KOL 资源配置应明显向 YouTube 倾斜，短视频平台定位为「品牌曝光」而非「用户获取」
        </p>
      </div>
    </div>
  </SlideLayout>
);
