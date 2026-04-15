import { SlideLayout } from "@/components/slides/SlideLayout";

const keyPoints = [
  {
    num: "01",
    title: "保证流程顺畅",
    desc: "用户从看到活动到完成活动没有卡点，流程要顺",
  },
  {
    num: "02",
    title: "拒绝钻空子行为",
    desc: "背后是对逻辑和规则的梳理，规则清晰才能公平运作",
  },
  {
    num: "03",
    title: "目的明确",
    desc: "忙于过程而忘记目的，投入大量精力不一定有好结果",
  },
];

const experiences = [
  {
    title: "让用户感受到是一起进步的一份子",
    desc: "用户不仅成为忠实用户，会主动宣传，同时对我们的容忍度也更高",
  },
  {
    title: "AI 时代不能用老流程办活动",
    desc: "尤其是线下活动非常重，要用 AI-native 逻辑来解决问题，效率远超传统方式",
  },
];

export function SlideDB13cActivityLearning() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col px-20 py-16 justify-center">
        {/* Title */}
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
            Execution Principles
          </p>
          <h2 className="text-4xl font-extralight tracking-tight text-foreground">
            活动执行的<span className="font-medium text-primary">三个关键点</span>
          </h2>
        </div>

        {/* 3 Key Points */}
        <div className="flex gap-5 mb-10">
          {keyPoints.map((p) => (
            <div
              key={p.num}
              className="flex-1 group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur p-7 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="text-primary/15 text-[64px] font-black absolute top-1 right-3 select-none leading-none">
                {p.num}
              </div>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2 relative z-10">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground/70 leading-relaxed relative z-10">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Shared Experiences */}
        <div className="border-t border-border/20 pt-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mb-5">
            共同经验
          </p>
          <div className="flex gap-6">
            {experiences.map((e) => (
              <div
                key={e.title}
                className="flex-1 flex gap-4 items-start"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                <div>
                  <h4 className="text-base font-medium text-foreground/85 mb-1">{e.title}</h4>
                  <p className="text-sm text-muted-foreground/60 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
