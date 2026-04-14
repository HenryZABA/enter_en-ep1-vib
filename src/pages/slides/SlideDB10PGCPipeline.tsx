import { SlideLayout } from "@/components/slides";
import { Layers, ArrowRight, Cpu, Zap } from "lucide-react";

const steps = [
  { icon: Layers, label: "模板分析", desc: "分析视觉效果" },
  { icon: ArrowRight, label: "素材拆解", desc: "网页设计颗粒度" },
  { icon: Cpu, label: "Enter Remix", desc: "AI 重新生成" },
  { icon: Zap, label: "批量产出", desc: "自动化后台" },
];

export const SlideDB10PGCPipeline = () => (
  <SlideLayout title="PGC 自动化生产流程">
    <div className="flex flex-col h-full justify-center space-y-8 md:space-y-10 px-2 md:px-8">
      {/* Evolution */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-2xl font-bold">演进路径</h3>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex-1 p-4 md:p-5 rounded-xl border border-border/50 bg-card/50">
            <span className="text-sm md:text-base font-bold text-muted-foreground">非自动化</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">手动制作，分类建设，逐个发布</p>
          </div>
          <ArrowRight className="w-6 h-6 text-primary shrink-0" />
          <div className="flex-1 p-4 md:p-5 rounded-xl border border-primary/30 bg-primary/10">
            <span className="text-sm md:text-base font-bold text-primary">自动化</span>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">模板分析 → AI 重新生成 → 批量产出</p>
          </div>
        </div>
      </div>

      {/* Automation pipeline */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-2xl font-bold">自动化流程</h3>
        <div className="flex items-center gap-2 md:gap-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-2 md:gap-3 flex-1">
                <div className="flex-1 flex flex-col items-center p-4 md:p-5 rounded-xl border border-border/50 bg-card/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-bold">{s.label}</span>
                  <span className="text-xs text-muted-foreground">{s.desc}</span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          工具：收集知名网站图片 → OpenCloud 批量分析 → 生成 Prompt → 自动化后台执行
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {[
          { value: "300+", label: "累计生成内容" },
          { value: "~2h", label: "单次准备时间" },
          { value: "2-4h", label: "生成时间（可并行）" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="flex flex-col items-center p-4 md:p-6 rounded-xl border border-primary/20 bg-primary/5"
          >
            <span className="text-2xl md:text-4xl font-bold text-primary">{kpi.value}</span>
            <span className="text-xs md:text-sm text-muted-foreground mt-1">{kpi.label}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
