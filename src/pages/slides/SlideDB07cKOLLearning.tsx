import { SlideLayout } from "@/components/slides/SlideLayout";
import { ArrowRight } from "lucide-react";

const chain = [
  { label: "数据选 KOL", detail: "以数据为基础选择合适的 KOL" },
  { label: "预算控制", detail: "严格把控每一笔投入" },
  { label: "成本计算", detail: "构建成本、支付成本等精细核算" },
  { label: "是否复购", detail: "数据验证决定是否继续合作" },
];

export function SlideDB07cKOLLearning() {
  return (
    <SlideLayout title="KOL 数据驱动方法论">
      <div className="h-full flex flex-col px-16 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
            Key Learning
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-foreground">
            KOL 是一份<span className="font-semibold text-primary">以数据为核心</span>的工作
          </h2>
          <p className="text-base text-muted-foreground/60 mt-2 max-w-2xl">
            尽管它的另一头是内容，但只有对数据足够较真，才能做到真正的内容营销，
            让产品进入<span className="font-medium text-foreground/80">被理解</span>的阶段。
          </p>
        </div>

        {/* Data Chain */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-stretch gap-3">
            {chain.map((step, i) => (
              <div key={i} className="contents">
                <div className="flex-1 group relative rounded-2xl border border-border/30 bg-card/40 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/60">
                  <span className="absolute top-3 right-4 text-[40px] font-black text-primary/[0.06] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-0.5 bg-primary/40 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                  <h3 className="text-lg font-semibold text-foreground/90 mb-1.5">
                    {step.label}
                  </h3>
                  <p className="text-sm text-muted-foreground/60 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                {i < chain.length - 1 && (
                  <div className="flex items-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom insight */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            <p className="text-sm text-muted-foreground/50 italic tracking-wide">
              从数据到内容，每一步都是精心规划
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
