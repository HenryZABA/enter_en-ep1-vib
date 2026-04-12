import { SlideLayout } from "@/components/slides";

const milestones = [
  { date: "2024.02", label: "创建", value: "0", desc: "Reddit Vibe Coding 频道创建" },
  { date: "2025.02", label: "暴增", value: "~5万", desc: "频道创建一年，用户快速增长" },
  { date: "2025 Mid", label: "爆发", value: "12万", desc: "半年内用户量翻倍" },
  { date: "2025.10", label: "持续", value: "15万", desc: "月均增长 ~1万人" },
  { date: "2026.03", label: "当前", value: "21万", desc: "增长势头不减" },
];

export const SlideVC11Timeline = () => (
  <SlideLayout title="Reddit Vibe Coding 增长数据">
    <div className="flex flex-col px-4 md:px-8 h-full">
      {/* Key stat */}
      <div className="flex flex-wrap gap-6 md:gap-12 mb-8">
        <div>
          <p className="text-3xl md:text-5xl font-bold text-primary">21万+</p>
          <p className="text-sm text-muted-foreground">当前成员数</p>
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-bold">~1万</p>
          <p className="text-sm text-muted-foreground">月均新增</p>
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-bold">13个月</p>
          <p className="text-sm text-muted-foreground">达到15万用户</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-5 md:space-y-6">
          {milestones.map((m, i) => (
            <div key={m.date} className="flex items-start gap-4 md:gap-6 relative">
              <div className={`w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                i === milestones.length - 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary border"
              }`}>
                <span className="text-xs md:text-sm font-bold">{i + 1}</span>
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs md:text-sm text-muted-foreground font-mono">{m.date}</span>
                  <span className="text-lg md:text-xl font-bold">{m.value}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    i === milestones.length - 1
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    {m.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="mt-4 p-4 rounded-xl bg-secondary/30 border">
        <p className="text-sm md:text-base">
          对比：同等规模的 <span className="font-bold">Web Developer</span> 频道达到相同用户量花了{" "}
          <span className="font-bold text-primary">10年以上</span>
        </p>
      </div>
    </div>
  </SlideLayout>
);
