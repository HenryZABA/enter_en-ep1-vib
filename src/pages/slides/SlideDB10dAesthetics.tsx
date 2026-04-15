import { SlideLayout } from "@/components/slides/SlideLayout";
import { ArrowRight } from "lucide-react";

const actions = [
  {
    num: "01",
    title: "合并分类，制定阶段性计划",
    desc: "先大批量做简单 Web 网页；等 Cloud 上线后再做 AI App，届时细分更多分类",
  },
  {
    num: "02",
    title: "大批量产出 Web 网页",
    desc: "一开始以为很简单——最多需要技术同学做个批量化工具就行",
  },
];

const insights = [
  "审美是创造性能力，不只是经验内容——即便写了 Skill，Agent 动态规划的结果与人仍有差距",
  '"抄" 才是更快的方案——目的是做出好看的模板，不是让 Agent 去创造好看的模板',
  "按网页设计师逻辑拆解——好的网站都是设计师做的，提示词颗粒度要做到足够细",
];

export function SlideDB10dAesthetics() {
  return (
    <SlideLayout title="PGC 行动与美学突破">
      <div className="h-full flex flex-col px-14 py-8 overflow-hidden">
        {/* Top: Two actions */}
        <div className="flex gap-4 mb-5">
          {actions.map((a) => (
            <div
              key={a.num}
              className="flex-1 rounded-xl border border-border/30 bg-card/30 p-4"
            >
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-xs font-bold text-primary/40">{a.num}</span>
                <h3 className="text-sm font-semibold text-foreground/90">{a.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground/60 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Problem arrow */}
        <div className="flex items-center gap-3 mb-4">
          <ArrowRight className="w-4 h-4 text-destructive/50 shrink-0" />
          <p className="text-sm text-destructive/70 font-medium">
            问题卡在了看似边缘、但用户一眼就能看到的东西——<span className="font-bold">美观度</span>
          </p>
        </div>

        {/* Middle: Main content - 2 columns */}
        <div className="flex-1 flex gap-5 min-h-0">
          {/* Left: 3 insights */}
          <div className="flex-[3] flex flex-col">
            <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.25em] mb-3">
              重新拆解问题 — 三个判断
            </p>
            <div className="flex flex-col gap-2.5 flex-1">
              {insights.map((text, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start p-3.5 rounded-lg border border-border/20 bg-card/30 hover:border-primary/20 transition-colors duration-300"
                >
                  <span className="text-2xl font-extralight text-primary/25 leading-none select-none shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-xs text-foreground/70 leading-relaxed pt-1">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Action + Result */}
          <div className="flex-[2] flex flex-col gap-4">
            {/* Vibesnap action */}
            <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex-1">
              <p className="text-[10px] text-primary/50 uppercase tracking-[0.25em] mb-2">
                Action — Vibesnap
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                用 Enter Vibe 做了风格提取器
              </p>
              <p className="text-xs text-muted-foreground/60 leading-relaxed">
                不到 <span className="text-foreground font-medium">20 分钟</span>，一个案例被拆解得干干净净，Enter 可以完美复制
              </p>
              <p className="text-xs text-muted-foreground/50 leading-relaxed mt-3 italic">
                判断对方向 + AI 快速实现工具 = 难点瞬间解决
              </p>
            </div>

            {/* Results */}
            <div className="rounded-xl border border-border/30 bg-card/30 p-4">
              <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.25em] mb-3">
                Result
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl font-extralight text-foreground/80">70</div>
                  <div className="text-[10px] text-muted-foreground/50 mt-0.5">
                    高质量 Website / 2-3h
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extralight text-foreground/80">300+</div>
                  <div className="text-[10px] text-muted-foreground/50 mt-0.5">
                    目前累计模板
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
