import { SlideLayout } from "@/components/slides/SlideLayout";
import { MessageSquare } from "lucide-react";

const frameworkItems = [
  { label: "目的", desc: "我做这件事情的目的是什么" },
  { label: "资源", desc: "我手里有什么资源" },
  { label: "结果", desc: "我想达到什么样的结果" },
  { label: "串流", desc: "我希望其他环节是怎么串流起来的" },
];

export function SlideDB10eRequirements() {
  return (
    <SlideLayout title="把需求讲明白">
      <div className="h-full flex flex-col px-16 py-12 justify-center">
        {/* Context */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground/60 tracking-wide mb-3">
            做自动化的过程中，多次与技术同学沟通后的重要学习
          </p>
          <h2 className="text-3xl font-light text-foreground/90 leading-snug">
            要能<span className="font-semibold text-primary">把需求讲明白</span>
          </h2>
        </div>

        {/* Prerequisite */}
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-6 mb-8">
          <div className="flex items-start gap-4">
            <MessageSquare className="w-5 h-5 text-primary/50 shrink-0 mt-0.5" />
            <div>
              <p className="text-base text-foreground/80 leading-relaxed">
                前提是<span className="font-medium text-foreground">我知道自己要什么</span>——
                我要自己先去验证整个自动化流程，确认这个链条大概是可行的
              </p>
            </div>
          </div>
        </div>

        {/* Framework */}
        <p className="text-xs text-muted-foreground/50 uppercase tracking-[0.25em] mb-4">
          每次与技术同学开会的沟通框架
        </p>
        <div className="grid grid-cols-4 gap-4">
          {frameworkItems.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/30 bg-card/30 p-5 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-extralight text-primary/25 select-none">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-foreground/80">{item.label}</span>
              </div>
              <p className="text-xs text-muted-foreground/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
