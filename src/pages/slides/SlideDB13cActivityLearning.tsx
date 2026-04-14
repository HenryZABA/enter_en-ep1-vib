import { SlideLayout } from "@/components/slides/SlideLayout";

const journey = [
  { label: "写 Brief", desc: "明确活动目标与用户价值" },
  { label: "上线活动", desc: "确保流程闭环与激励机制" },
  { label: "社群运营", desc: "持续互动，引导用户参与" },
  { label: "线下参加", desc: "面对面传递产品价值观" },
];

export function SlideDB13cActivityLearning() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col px-20 py-16 justify-center">
        {/* Top quote */}
        <div className="mb-12">
          <div className="text-muted-foreground/40 text-[80px] font-serif leading-none select-none">"</div>
          <h1 className="text-[42px] font-light text-foreground/90 -mt-8 leading-tight max-w-[900px]">
            从<span className="text-primary font-normal">不懂怎么做活动</span>
            <br />
            到想通过活动传递 Enter 的
            <span className="text-primary font-normal">价值观</span>与
            <span className="text-primary font-normal">使用价值</span>
          </h1>
        </div>

        {/* Journey flow */}
        <div className="flex items-stretch gap-0 mb-12">
          {journey.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="group relative">
                <div className="relative bg-card/60 backdrop-blur border border-border/30 rounded-2xl px-8 py-6 min-w-[200px] hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
                  <div className="text-primary/30 text-[48px] font-black absolute -top-2 right-3 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-foreground/90 text-lg font-medium mb-1">{step.label}</div>
                  <div className="text-muted-foreground/70 text-sm">{step.desc}</div>
                </div>
              </div>
              {i < journey.length - 1 && (
                <div className="flex items-center px-3">
                  <div className="w-8 h-px bg-primary/20" />
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="border-t border-border/20 pt-8">
          <p className="text-foreground/60 text-xl font-light leading-relaxed max-w-[800px]">
            每一步都要确保<span className="text-foreground/90 font-normal">闭环</span>与
            <span className="text-foreground/90 font-normal">激励用户</span>，
            让参与者不只是来了，而是真正<span className="text-primary/80">被触动、被留下</span>。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
