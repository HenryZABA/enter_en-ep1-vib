import { SlideLayout } from "@/components/slides";
import { BarChart3, Eye, Lightbulb, Layers } from "lucide-react";

const learnings = [
  {
    icon: BarChart3,
    title: "对数据的深度关注",
    color: "text-primary",
    bg: "bg-primary/15",
    detail: "从「感觉有效」到「数据证明有效」。每一个运营动作都需要数据闭环：投放 → 追踪 → 归因 → 优化。KOL 管理系统的核心价值就在于让数据可视化、可追溯。",
  },
  {
    icon: Eye,
    title: "用户视角的产品思维",
    detail: "做增长不是做广告，而是理解用户为什么来、为什么留。PGC 内容本质上是在回答一个问题：「Enter 能帮你做出什么？」",
    color: "text-blue-400",
    bg: "bg-blue-400/15",
  },
  {
    icon: Layers,
    title: "工作流思维",
    detail: "遇到效率瓶颈时，不是加人力，而是优化流程。两次工作流重大调整带来的效率提升远超预期。把重复性工作交给系统、把创造性工作留给人。",
    color: "text-green-400",
    bg: "bg-green-400/15",
  },
  {
    icon: Lightbulb,
    title: "AI 不是工具，是协作者",
    detail: "从使用 AI 辅助写文案，到让 AI 成为最了解业务的「同事」——知识库 + Agent + 自动化工作流的组合，让一个人能覆盖过去需要一个小团队才能完成的工作。",
    color: "text-purple-400",
    bg: "bg-purple-400/15",
  },
];

export const SlideDB20Learnings = () => (
  <SlideLayout title="我学到了什么">
    <div className="flex flex-col h-full justify-center px-2 md:px-8 space-y-4 md:space-y-6">
      {learnings.map((l) => (
        <div
          key={l.title}
          className="flex items-start gap-4 md:gap-5 p-4 md:p-5 rounded-xl border border-border/50 bg-card/30"
        >
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${l.bg} flex items-center justify-center shrink-0 mt-0.5`}>
            <l.icon className={`w-5 h-5 md:w-6 md:h-6 ${l.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-xl font-bold">{l.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
              {l.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  </SlideLayout>
);
