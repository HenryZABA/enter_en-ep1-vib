import { SlideLayout } from "@/components/slides";

const roles = [
  { label: "创业者 / Founder", min: 25, max: 30, highlight: true, note: "核心群体，部分数据显示占 30%-40%" },
  { label: "产品经理", min: 15, max: 20 },
  { label: "营销和增长", min: 15, max: 20 },
  { label: "设计师", min: 10, max: 15 },
  { label: "教育从业者", min: 5, max: 10 },
  { label: "运营行政", min: 5, max: 10 },
];

const maxVal = 35;

export const SlideVC10BarChart = () => (
  <SlideLayout title="非开发者身份画像">
    <div className="flex flex-col px-4 md:px-8 h-full">
      <p className="text-sm text-muted-foreground mb-6">
        数据来源：Y Combinator, Gartner 等机构 2025-2026 年发布
      </p>

      <div className="space-y-4 md:space-y-5 flex-1">
        {roles.map((role) => {
          const avg = (role.min + role.max) / 2;
          const widthPct = (avg / maxVal) * 100;
          return (
            <div key={role.label} className="flex items-center gap-4">
              <div className="w-28 md:w-40 text-right flex-shrink-0">
                <p className={`text-sm md:text-base font-medium ${role.highlight ? "text-primary" : ""}`}>
                  {role.label}
                </p>
              </div>
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-1 h-8 md:h-10 bg-secondary/30 rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full rounded-lg transition-all duration-1000 ${
                      role.highlight
                        ? "bg-gradient-to-r from-primary to-primary/70"
                        : "bg-gradient-to-r from-muted-foreground/40 to-muted-foreground/20"
                    }`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
                <span className={`text-sm md:text-base font-bold w-24 ${role.highlight ? "text-primary" : ""}`}>
                  {role.min}%-{role.max}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Founder callout */}
      <div className="mt-6 p-4 rounded-xl border border-primary/30 bg-primary/5">
        <p className="text-sm md:text-base">
          <span className="font-bold text-primary">Founder 群体</span> 占据了整个 Vibe Coding 最主流、最核心的部分，比例基本在{" "}
          <span className="font-bold text-primary">30%-40%</span> 之间
        </p>
      </div>
    </div>
  </SlideLayout>
);
