import { SlideLayout } from "@/components/slides/SlideLayout";
import { Sparkles, AlertTriangle } from "lucide-react";

const values = [
  {
    title: "让用户看到赚钱的可能性",
    desc: "以 OPC 一人公司为例，展示真实的盈利路径——这是最核心的驱动力",
    highlight: true,
  },
  {
    title: "驱动用户复刻与产品粘性",
    desc: "有了动力，用户才会主动去复刻，对产品产生真正的依赖",
  },
  {
    title: "提供视野与场景",
    desc: "通过我们的内容让用户看到更多可能性，拓展他们的想象空间",
  },
];

const problems = [
  "数量太少——内容供给远远不够",
  "分类虽不乱，但很寒酸——缺乏体系感和丰富度",
];

export function SlideDB09bPGCValue() {
  return (
    <SlideLayout title="PGC 的价值与现状">
      <div className="h-full flex flex-col px-16 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
            Why PGC Matters
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-foreground">
            PGC 对我而言<span className="font-semibold text-primary">最重要的作用</span>
          </h2>
        </div>

        <div className="flex-1 flex gap-8">
          {/* Left: Value */}
          <div className="flex-[3] flex flex-col gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 ${
                  v.highlight
                    ? "border-primary/30 bg-primary/[0.04]"
                    : "border-border/30 bg-card/30 hover:border-primary/20 hover:bg-card/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  {v.highlight && (
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  )}
                  <div>
                    <h3 className={`text-lg font-medium mb-1 ${v.highlight ? "text-primary" : "text-foreground/90"}`}>
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/60 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Problems */}
          <div className="flex-[2] flex flex-col">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="w-4 h-4 text-destructive/60" />
                <p className="text-sm font-medium text-destructive/70 tracking-wide uppercase">
                  Current Problems
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-1 justify-center">
                {problems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-bold text-destructive/40 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground/70 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
