import { SlideLayout } from "@/components/slides/SlideLayout";

const dimensions = [
  {
    num: "01",
    title: "市场测试与反馈",
    desc: "不断测试不同市场方向，明确哪部分市场对品牌反应最强烈",
  },
  {
    num: "02",
    title: "工作流迭代与完善",
    desc: "发现团队大量精力耗费在反复沟通和熟悉内容等基础环节，通过流程改造提效",
  },
];

const adjustments = [
  {
    num: "A",
    title: "缩短沟通路径",
    problem: "Agency 多余确认导致反复沟通",
    solution: "优化流程，减少不必要的意图确认环节",
  },
  {
    num: "B",
    title: "内容质量把控",
    problem: "达人不按脚本拍摄、漏掉关键内容",
    solution: "重新规划流程，确保视频内容完整性与质量",
  },
];

export const SlideDB08WorkflowOptimization = () => (
  <SlideLayout>
    <div className="flex-1 flex flex-col px-[120px] py-[40px] gap-[36px]">
      <div>
        <h2 className="text-[48px] font-bold text-foreground">工作流迭代与优化</h2>
        <p className="text-[20px] text-muted-foreground mt-[8px]">
          与其投入更多人力，不如通过优化工作流提高单位效率
        </p>
      </div>

      {/* Two dimensions */}
      <div>
        <h3 className="text-[24px] font-semibold text-foreground mb-[16px]">两个优化维度</h3>
        <div className="flex gap-[24px]">
          {dimensions.map((d) => (
            <div
              key={d.num}
              className="flex-1 border border-border rounded-[16px] p-[32px] bg-muted/20 relative overflow-hidden"
            >
              <span className="absolute top-[16px] right-[20px] text-[64px] font-black text-foreground/[0.04] leading-none">
                {d.num}
              </span>
              <div className="text-[14px] font-semibold text-primary tracking-wider mb-[12px]">
                维度 {d.num}
              </div>
              <h4 className="text-[24px] font-bold text-foreground mb-[8px]">{d.title}</h4>
              <p className="text-[18px] text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two adjustments */}
      <div>
        <h3 className="text-[24px] font-semibold text-foreground mb-[16px]">两次流程调整</h3>
        <div className="flex gap-[24px]">
          {adjustments.map((a) => (
            <div
              key={a.num}
              className="flex-1 border border-border rounded-[16px] p-[32px] bg-muted/20 relative overflow-hidden"
            >
              <span className="absolute top-[16px] right-[20px] text-[64px] font-black text-foreground/[0.04] leading-none">
                {a.num}
              </span>
              <h4 className="text-[24px] font-bold text-foreground mb-[16px]">{a.title}</h4>
              <div className="space-y-[12px]">
                <div className="flex items-start gap-[12px]">
                  <span className="shrink-0 text-[13px] px-[10px] py-[3px] rounded-[6px] bg-red-500/10 text-red-400 font-medium">
                    问题
                  </span>
                  <p className="text-[18px] text-muted-foreground">{a.problem}</p>
                </div>
                <div className="flex items-start gap-[12px]">
                  <span className="shrink-0 text-[13px] px-[10px] py-[3px] rounded-[6px] bg-green-500/10 text-green-400 font-medium">
                    方案
                  </span>
                  <p className="text-[18px] text-foreground font-medium">{a.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom insight */}
      <div className="bg-primary/5 border border-primary/20 rounded-[12px] px-[24px] py-[14px]">
        <p className="text-[18px] text-foreground">
          <span className="font-bold text-primary">核心思路：</span>
          每次流程调整都带来了可衡量的效率提升
        </p>
      </div>
    </div>
  </SlideLayout>
);
