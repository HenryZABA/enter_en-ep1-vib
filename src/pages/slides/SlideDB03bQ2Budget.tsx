import { SlideLayout } from "@/components/slides";

const audienceSegments = [
  { persona: "Tech YouTuber (10-50万粉)", budget: "$2,500", count: 8, conversion: "12.3%", priority: "高" },
  { persona: "Indie Hacker / 创业博主", budget: "$800", count: 12, conversion: "18.5%", priority: "高" },
  { persona: "No-Code 教育类", budget: "$1,200", count: 6, conversion: "15.1%", priority: "中" },
  { persona: "设计 / 创意工具评测", budget: "$1,500", count: 5, conversion: "9.7%", priority: "中" },
  { persona: "TikTok 短视频 (5-20万粉)", budget: "$400", count: 10, conversion: "6.2%", priority: "低" },
];

const q2Goals = [
  { metric: "Q2 总预算", value: "$45,000", sub: "较 Q1 +35%" },
  { metric: "目标发布数", value: "40+", sub: "覆盖 4 个平台" },
  { metric: "目标注册转化", value: "800+", sub: "较 Q1 +48%" },
  { metric: "CPR 目标", value: "<$15", sub: "Cost Per Registration" },
];

export const SlideDB03bQ2Budget = () => (
  <SlideLayout title="Q2 KOL 预算 & 人群画像规划">
    <div className="flex flex-col h-full justify-center px-2 md:px-8 space-y-6 md:space-y-8">
      {/* Q2 Goal Cards */}
      <div className="grid grid-cols-4 gap-3 md:gap-5">
        {q2Goals.map((g) => (
          <div
            key={g.metric}
            className="flex flex-col items-center justify-center p-3 md:p-5 rounded-xl border border-border/50 bg-card/50"
          >
            <span className="text-xl md:text-3xl font-bold text-primary">{g.value}</span>
            <span className="text-xs md:text-sm font-medium mt-1">{g.metric}</span>
            <span className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{g.sub}</span>
          </div>
        ))}
      </div>

      {/* Audience Segments Table */}
      <div className="space-y-3">
        <h3 className="text-base md:text-xl font-bold">目标人群画像 & 预算分配</h3>
        <div className="rounded-xl border border-border/50 overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_0.7fr_1fr_0.7fr] gap-0 text-xs md:text-sm">
            {/* Header */}
            <div className="p-2 md:p-3 bg-primary/10 font-bold">人群画像</div>
            <div className="p-2 md:p-3 bg-primary/10 font-bold text-center">单价预算</div>
            <div className="p-2 md:p-3 bg-primary/10 font-bold text-center">计划数量</div>
            <div className="p-2 md:p-3 bg-primary/10 font-bold text-center">预估转化率</div>
            <div className="p-2 md:p-3 bg-primary/10 font-bold text-center">优先级</div>
            {/* Rows */}
            {audienceSegments.map((seg, i) => (
              <>
                <div key={`p-${i}`} className="p-2 md:p-3 border-t border-border/30">{seg.persona}</div>
                <div key={`b-${i}`} className="p-2 md:p-3 border-t border-border/30 text-center font-medium text-primary">{seg.budget}</div>
                <div key={`c-${i}`} className="p-2 md:p-3 border-t border-border/30 text-center">{seg.count}</div>
                <div key={`cv-${i}`} className="p-2 md:p-3 border-t border-border/30 text-center">{seg.conversion}</div>
                <div key={`pr-${i}`} className="p-2 md:p-3 border-t border-border/30 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    seg.priority === "高" ? "bg-primary/20 text-primary" :
                    seg.priority === "中" ? "bg-yellow-500/20 text-yellow-500" :
                    "bg-muted text-muted-foreground"
                  }`}>{seg.priority}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[10px] md:text-xs text-muted-foreground italic">
        * 以上为占位数据，实际数据待 Q2 KOL/KLC 文件确认后更新
      </p>
    </div>
  </SlideLayout>
);
