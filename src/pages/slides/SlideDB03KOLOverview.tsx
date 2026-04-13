import { SlideLayout } from "@/components/slides";

const kpis = [
  { value: "46", label: "KOL 合作总数" },
  { value: "27", label: "已成功发布" },
  { value: "210万+", label: "内容总曝光量" },
  { value: "540", label: "带来注册用户" },
  { value: "10.9%", label: "注册转化率" },
];

export const SlideDB03KOLOverview = () => (
  <SlideLayout title="KOL 项目总览">
    <div className="flex flex-col h-full justify-center space-y-8 md:space-y-12 px-2 md:px-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-3 md:gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border border-border/50 bg-card/50"
          >
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
              {kpi.value}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground mt-2 text-center">
              {kpi.label}
            </span>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-2xl font-bold">管道阶段分布</h3>
        <div className="space-y-3">
          {[
            { stage: "已发布", count: 27, pct: 58.7, color: "bg-primary" },
            { stage: "Idea 确认中", count: 9, pct: 19.6, color: "bg-primary/60" },
            { stage: "脚本撰写/审核", count: 5, pct: 10.9, color: "bg-primary/40" },
            { stage: "视频制作中", count: 4, pct: 8.7, color: "bg-primary/30" },
            { stage: "待发布确认", count: 1, pct: 2.2, color: "bg-primary/20" },
          ].map((item) => (
            <div key={item.stage} className="flex items-center gap-3 md:gap-4">
              <span className="text-xs md:text-sm text-muted-foreground w-28 md:w-36 shrink-0 text-right">
                {item.stage}
              </span>
              <div className="flex-1 h-6 md:h-8 bg-muted/30 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full flex items-center justify-end pr-2 md:pr-3 transition-all`}
                  style={{ width: `${Math.max(item.pct, 5)}%` }}
                >
                  <span className="text-xs md:text-sm font-bold text-primary-foreground">
                    {item.count}
                  </span>
                </div>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground w-12 shrink-0">
                {item.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs md:text-sm text-muted-foreground">数据截至 2026年4月13日</p>
    </div>
  </SlideLayout>
);
