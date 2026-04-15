import { SlideLayout } from "@/components/slides";
import { useState } from "react";

export const SlideDB08WorkflowOptimization = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout title="遇到的问题与解法">
      <div className="h-full flex gap-6 px-8 py-6">
        {/* Problem 1 */}
        <div
          className="flex-1 rounded-2xl border border-border/30 bg-card/40 p-6 flex flex-col overflow-hidden cursor-pointer transition-all duration-500 hover:bg-card/60"
          style={{ flex: expanded === 1 ? 1.6 : 1 }}
          onMouseEnter={() => setExpanded(0)}
          onMouseLeave={() => setExpanded(null)}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[56px] font-black text-primary/[0.08] leading-none select-none">01</span>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground/50">Problem</p>
              <h3 className="text-lg font-semibold text-foreground/90">Agency 反复确认拉长流程</h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
            大量精力被浪费在不必要的意图确认环节，整个 KOL 合作流程被拉长。
          </p>

          <div className="border-t border-border/20 pt-4 mt-auto">
            <p className="text-xs tracking-widest uppercase text-muted-foreground/50 mb-2">Solution</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              与其"温水煮青蛙"，不如<span className="font-semibold text-primary">一锅直接烧开</span>。
              与 Agency 做流程优化和知识对齐，避免不必要的确认环节。
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2 italic">
              问题有所改善，但远远不够 &rarr;
            </p>
          </div>
        </div>

        {/* Problem 2 */}
        <div
          className="flex-[1.8] rounded-2xl border border-border/30 bg-card/40 p-6 flex flex-col overflow-hidden transition-all duration-500 hover:bg-card/60"
          style={{ flex: expanded === 0 ? 1.4 : 1.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[56px] font-black text-primary/[0.08] leading-none select-none">02</span>
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground/50">Problem</p>
              <h3 className="text-lg font-semibold text-foreground/90">内容质量差 + 大量反复沟通</h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">
            更严格、更有掌控感地抓每一个环节。做了两件主要的事情：
          </p>

          <div className="flex-1 flex gap-4 min-h-0">
            {/* Solution A: Workflow */}
            <div className="flex-1 flex flex-col rounded-xl border border-border/20 bg-background/30 p-4 overflow-hidden">
              <p className="text-xs tracking-widest uppercase text-muted-foreground/50 mb-1">Solution A</p>
              <h4 className="text-sm font-semibold text-foreground/80 mb-3">重新规划流程，从源头解决</h4>
              <div className="flex-1 min-h-0 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
                <img
                  src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/e9e0.png"
                  alt="KOL workflow"
                  className="max-w-full max-h-full object-contain"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Solution B: Visualization */}
            <div className="flex-1 flex flex-col rounded-xl border border-border/20 bg-background/30 p-4">
              <p className="text-xs tracking-widest uppercase text-muted-foreground/50 mb-1">Solution B</p>
              <h4 className="text-sm font-semibold text-foreground/80 mb-3">用 AI-native 思路做可视化闭环</h4>
              <div className="flex-1 space-y-2">
                {[
                  { problem: "数据看不到要反复问", solve: "可视化 Dashboard" },
                  { problem: "大量文件找不到", solve: "集合到每日 Focus" },
                  { problem: "Agency 反复填表", solve: "Milo 脚本自动跑" },
                  { problem: "内容审核无标准", solve: "Agent + 知识库审核" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground/60 flex-1 truncate">{item.problem}</span>
                    <span className="text-muted-foreground/30">&rarr;</span>
                    <span className="text-foreground/80 font-medium flex-1 truncate">{item.solve}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border/15">
                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                  运营第一个 KOL 管理系统，快速辐射到 Framia 项目
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
