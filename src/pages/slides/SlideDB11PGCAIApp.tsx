import { SlideLayout } from "@/components/slides";

const channels = [
  {
    key: "x",
    label: "X / Twitter",
    color: "#1DA1F2",
    url: "https://x.com/EnterProAI/status/2039916069582967043",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/34ba.png",
    metrics: [
      { label: "Views", value: "830K" },
      { label: "Retweets", value: "54" },
      { label: "Likes", value: "122" },
    ],
    desc: "Singles Inferno AI Dating Show",
  },
  {
    key: "youtube",
    label: "YouTube",
    color: "#FF0000",
    url: "https://www.youtube.com/watch?v=KfYa99r7UiY",
    img: null,
    metrics: [
      { label: "Views", value: "12K+" },
      { label: "Likes", value: "380+" },
      { label: "Comments", value: "45" },
    ],
    desc: "In-depth walkthrough tutorial",
  },
  {
    key: "tiktok",
    label: "TikTok",
    color: "#EE1D52",
    url: "https://www.tiktok.com/@enter.pro.ai/video/7624102436260564237",
    img: null,
    metrics: [
      { label: "Views", value: "5.2K" },
      { label: "Likes", value: "210" },
      { label: "Shares", value: "32" },
    ],
    desc: "Short-form viral content",
  },
  {
    key: "blog",
    label: "Blog",
    color: "#F97316",
    url: "https://blog.enter.pro/blog/how-i-built-a-fully-autonomous-ai-dating-show-inspired-by-singles-inferno",
    img: null,
    metrics: [
      { label: "Reads", value: "2.8K" },
      { label: "Avg Time", value: "4m" },
    ],
    desc: "SEO long-form article",
  },
  {
    key: "forum",
    label: "Forum",
    color: "#A855F7",
    url: "https://forum.enter.pro/t/ed4dcf8e-893b-4323-95b0-5047a59c2a75?hl=activities",
    img: null,
    metrics: [
      { label: "Views", value: "1.2K" },
      { label: "Replies", value: "28" },
    ],
    desc: "Community showcase thread",
  },
];

export const SlideDB11PGCAIApp = () => (
  <SlideLayout title="PGC 物料再利用">
    <div className="flex flex-col h-full">
      {/* Header row */}
      <div className="flex items-end justify-between mb-[28px]">
        <div>
          <p className="text-[13px] text-muted-foreground/60 tracking-widest uppercase mb-[4px]">
            Content Repurposing Pipeline
          </p>
          <h2 className="text-[28px] font-bold tracking-tight text-foreground/90">
            一份内容 <span className="text-primary">五渠道</span> 分发效果
          </h2>
        </div>
        {/* Total highlight */}
        <div className="flex items-baseline gap-[6px]">
          <span className="text-[42px] font-black text-primary leading-none">850K+</span>
          <span className="text-[14px] text-muted-foreground/70">total reach</span>
        </div>
      </div>

      {/* Main content: featured card + grid */}
      <div className="flex-1 flex gap-[20px]">
        {/* Featured: X / Twitter with image */}
        <div
          className="w-[42%] rounded-[20px] overflow-hidden border border-[#1DA1F2]/20 cursor-pointer group relative"
          style={{ background: "linear-gradient(165deg, #1DA1F212 0%, transparent 60%)" }}
          onClick={() => window.open(channels[0].url, "_blank")}
        >
          {/* Image */}
          <div className="h-[55%] overflow-hidden">
            <img
              src={channels[0].img!}
              alt="X Post"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              crossOrigin="anonymous"
            />
          </div>
          {/* Info */}
          <div className="p-[24px]">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#1DA1F2] flex items-center justify-center text-white font-black text-[16px]">
                X
              </div>
              <div>
                <div className="text-[16px] font-bold text-foreground/90">X / Twitter</div>
                <div className="text-[11px] text-muted-foreground/60">{channels[0].desc}</div>
              </div>
            </div>
            {/* Metrics row */}
            <div className="flex gap-[20px]">
              {channels[0].metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-[26px] font-black text-[#1DA1F2] leading-tight">{m.value}</div>
                  <div className="text-[10px] text-muted-foreground/50 mt-[2px]">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-[12px] right-[12px] text-[11px] text-[#1DA1F2] opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur px-[8px] py-[3px] rounded-full">
            Open →
          </div>
        </div>

        {/* Right grid: 2x2 */}
        <div className="flex-1 grid grid-cols-2 gap-[14px]">
          {channels.slice(1).map((ch) => (
            <div
              key={ch.key}
              className="rounded-[16px] border border-foreground/[0.06] p-[20px] cursor-pointer group/card hover:border-opacity-30 transition-all duration-300 flex flex-col justify-between"
              style={{
                background: "rgba(255,255,255,0.015)",
              }}
              onClick={() => window.open(ch.url, "_blank")}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = `${ch.color}08`;
                (e.currentTarget as HTMLDivElement).style.borderColor = `${ch.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.015)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top: label + letter icon */}
              <div>
                <div className="flex items-center gap-[10px] mb-[12px]">
                  <div
                    className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-white font-black text-[14px]"
                    style={{ backgroundColor: ch.color }}
                  >
                    {ch.label[0]}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-foreground/85">{ch.label}</div>
                    <div className="text-[10px] text-muted-foreground/50">{ch.desc}</div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-[14px] flex-wrap">
                {ch.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      className="text-[22px] font-black leading-tight"
                      style={{ color: ch.color }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground/50 mt-[1px]">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);
