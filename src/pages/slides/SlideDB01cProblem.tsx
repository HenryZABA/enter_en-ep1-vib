import { SlideLayout } from "@/components/slides";

const problems = [
  {
    num: "01",
    title: "不知道该怎么用 Enter",
    desc: "YouTube 上搜不到完整教程，只有零散片段，看完基础操作后想了解更多就没有了",
  },
  {
    num: "02",
    title: "对外几乎没有内容和曝光",
    desc: "与 Lovable 等竞品相比，Enter 有差异化竞争点，但外部几乎看不到任何内容",
  },
  {
    num: "03",
    title: "不知道具体能用在什么场景",
    desc: "产品有无限可能性，但正因为无限，用户反而不知道从哪里开始",
  },
];

export function SlideDB01cProblem() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col px-20 py-16 justify-center">
        {/* Title */}
        <div className="mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
            Starting Point
          </p>
          <h2 className="text-4xl font-extralight tracking-tight text-foreground">
            发现<span className="font-medium text-primary">三个关键问题</span>
          </h2>
          <p className="text-base text-muted-foreground/70 mt-3">
            刚入职时，我以一个新用户的视角看到了这些问题 —— 这也成为了我后续所有工作的起点
          </p>
        </div>

        {/* Problem cards */}
        <div className="flex gap-6">
          {problems.map((p) => (
            <div
              key={p.num}
              className="flex-1 group relative rounded-2xl border border-border/30 bg-card/40 backdrop-blur p-8 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="text-primary/15 text-[72px] font-black absolute top-2 right-4 select-none leading-none">
                {p.num}
              </div>
              <h3 className="text-xl font-semibold text-foreground/90 mb-3 relative z-10">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground/70 leading-relaxed relative z-10">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom connection */}
        <div className="mt-10 border-t border-border/20 pt-6">
          <p className="text-muted-foreground/60 text-base font-light">
            而我接手的第一个工作刚好是做 KOL —— "搜不到内容"正是我想解决的问题
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
