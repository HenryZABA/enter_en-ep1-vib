import { SlideLayout } from "@/components/slides";
import { Database, Link, BarChart3, FileCheck } from "lucide-react";

const systems = [
  {
    icon: Database,
    title: "KOL 管理系统",
    desc: "基于 Supabase 构建，全阶段进度追踪，支持实时 API 查询",
  },
  {
    icon: Link,
    title: "数据追踪链路",
    desc: "UTM + Bitly 专属链接，完整归因追踪，点击→注册→付费漏斗",
  },
  {
    icon: BarChart3,
    title: "自动化日报系统",
    desc: "每日自动拉取视频指标和转化数据，生成结构化报告",
  },
  {
    icon: FileCheck,
    title: "脚本审核标准化",
    desc: "KOL 脚本审核手册 v3：4项核心检查 + 3大额外维度",
  },
];

export const SlideDB07SystemBuilding = () => (
  <SlideLayout title="KOL 管理体系建设">
    <div className="flex flex-col h-full justify-center space-y-8 md:space-y-10 px-2 md:px-8">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {systems.map((sys) => {
          const Icon = sys.icon;
          return (
            <div
              key={sys.title}
              className="flex flex-col gap-3 md:gap-4 p-5 md:p-8 rounded-2xl border border-border/50 bg-card/50"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold">{sys.title}</h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">{sys.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Conversion funnel summary */}
      <div className="space-y-3">
        <h3 className="text-base md:text-xl font-bold">转化漏斗全景</h3>
        <div className="flex items-center gap-2 md:gap-3">
          {[
            { label: "曝光", value: "210万+", w: "100%" },
            { label: "点击", value: "4,951", w: "60%" },
            { label: "注册", value: "540", w: "30%" },
            { label: "付费", value: "2", w: "10%" },
          ].map((step, i) => (
            <div key={step.label} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-lg bg-primary flex items-center justify-center py-2 md:py-3"
                style={{ opacity: 1 - i * 0.2 }}
              >
                <span className="text-sm md:text-xl font-bold text-primary-foreground">
                  {step.value}
                </span>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">{step.label}</span>
              {i < 3 && (
                <span className="text-xs text-muted-foreground">
                  {i === 0 ? "→" : i === 1 ? "10.9%" : "0.4%"}
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          * 付费转化率受产品阶段和时间滞后影响，需产品侧协同优化
        </p>
      </div>
    </div>
  </SlideLayout>
);
