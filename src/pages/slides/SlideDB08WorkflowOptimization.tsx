import { SlideLayout } from "@/components/slides";
import { FlaskConical, Workflow, MessageSquareOff, ShieldCheck } from "lucide-react";

const dimensions = [
  {
    icon: FlaskConical,
    title: "市场测试与反馈",
    desc: "不断测试不同市场方向，明确哪部分市场对品牌反应最强烈",
  },
  {
    icon: Workflow,
    title: "工作流迭代与完善",
    desc: "发现团队大量精力耗费在反复沟通和熟悉内容等基础环节，通过流程改造提效",
  },
];

const adjustments = [
  {
    icon: MessageSquareOff,
    title: "缩短沟通路径",
    problem: "Agency 多余确认导致反复沟通",
    solution: "优化流程，减少不必要的意图确认环节",
  },
  {
    icon: ShieldCheck,
    title: "内容质量把控",
    problem: "达人不按脚本拍摄、漏掉关键内容",
    solution: "重新规划流程，确保视频内容完整性与质量",
  },
];

export const SlideDB08WorkflowOptimization = () => (
  <SlideLayout title="工作流迭代与优化">
    <div className="flex flex-col h-full justify-center space-y-8 md:space-y-10 px-2 md:px-8">
      {/* Two dimensions */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-2xl font-bold">两个优化维度</h3>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {dimensions.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="flex gap-4 p-5 md:p-6 rounded-2xl border border-border/50 bg-card/50"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold mb-1">{d.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two major adjustments */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-2xl font-bold">两次重大流程调整</h3>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {adjustments.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="p-5 md:p-6 rounded-2xl border border-border/50 bg-card/50 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold">{a.title}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                      问题
                    </span>
                    <p className="text-sm text-muted-foreground">{a.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400 shrink-0 mt-0.5">
                      方案
                    </span>
                    <p className="text-sm text-muted-foreground">{a.solution}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-xs md:text-sm text-muted-foreground">
          <span className="font-bold text-primary">核心思路：</span>
          与其投入更多人力，不如通过优化工作流提高单位效率。每次流程调整都带来了可衡量的效率提升。
        </p>
      </div>
    </div>
  </SlideLayout>
);
