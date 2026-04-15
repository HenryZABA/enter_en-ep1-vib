import { SlideLayout } from "@/components/slides/SlideLayout";

const keyPoints = [
  {
    num: "01",
    title: "流程要顺",
    desc: "保证用户从看到活动到完成活动没有任何卡点。写 Brief、上线活动、社群运营、后续传播——整条链路流畅无阻。",
  },
  {
    num: "02",
    title: "拒绝钻空子",
    desc: "拒绝用户的任何钻空子行为。背后是对逻辑和规则的完整梳理——规则清晰，活动才能公平运作。",
  },
  {
    num: "03",
    title: "目的明确",
    highlight: true,
    desc: "最重要的一点。包括现在我也会有这样的担心：忙于过程而忘记目的，投入大量精力不一定有好的结果。",
  },
];

const experiences = [
  {
    title: "让用户感受到一起进步",
    desc: "用户不仅成为忠实用户、主动帮我们宣传，同时对我们的容忍度也很高。",
  },
  {
    title: "AI-native 办活动",
    desc: "AI 时代不能用老流程来办活动。这两天我一边听 Chris 老师讲座，一边 Vibe 了 5 个脚本让 Milo 帮我干活，比我自己快太多了。",
  },
];

export function SlideDB13cActivityLearning() {
  return (
    <SlideLayout title="活动执行心得">
      <div className="h-full flex flex-col px-16 py-12 justify-center">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
            实践是最好的老师
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-foreground">
            保证活动<span className="font-medium text-primary">不出错</span>的三个关键
          </h2>
        </div>

        {/* 3 Key Points */}
        <div className="flex gap-5 mb-8">
          {keyPoints.map((p) => (
            <div
              key={p.num}
              className={`flex-1 group relative rounded-xl border bg-card/40 backdrop-blur p-6 transition-all duration-300 ${
                p.highlight
                  ? "border-primary/30 bg-primary/[0.04]"
                  : "border-border/30 hover:border-primary/20"
              }`}
            >
              <div className="text-primary/10 text-[56px] font-black absolute top-0 right-3 select-none leading-none">
                {p.num}
              </div>
              <h3 className="text-base font-semibold text-foreground/90 mb-2 relative z-10">
                {p.title}
                {p.highlight && (
                  <span className="ml-2 text-xs font-normal text-primary/60">最重要</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground/65 leading-relaxed relative z-10">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Shared Experiences */}
        <div className="border-t border-border/20 pt-6">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-4">
            三个活动的共同经验
          </p>
          <div className="flex gap-6">
            {experiences.map((e) => (
              <div key={e.title} className="flex-1 flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-foreground/85 mb-1">{e.title}</h4>
                  <p className="text-sm text-muted-foreground/55 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
