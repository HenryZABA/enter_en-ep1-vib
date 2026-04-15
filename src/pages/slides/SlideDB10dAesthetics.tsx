import { SlideLayout } from "@/components/slides";

const insights = [
  {
    num: "1",
    title: "审美是创造性能力",
    desc: "即便写一个 Skill，Agent 自己动态规划的内容还是和人有差距",
  },
  {
    num: "2",
    title: '"抄" 是更快的方案',
    desc: "目的是做出好看的模板，而不是让 Agent 去创造好看的模板",
  },
  {
    num: "3",
    title: "按设计师逻辑拆解",
    desc: "好的网站都是网页设计师设计的，提示词的颗粒度要做到足够细",
  },
];

export function SlideDB10dAesthetics() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col px-20 py-16 justify-center">
        {/* Title */}
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
            Breakthrough
          </p>
          <h2 className="text-4xl font-extralight tracking-tight text-foreground">
            美观度：<span className="font-medium text-primary">一个看似边缘却致命的问题</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-10 flex-1 min-h-0">
          {/* Left: 3 insights */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm text-muted-foreground/60 uppercase tracking-widest mb-1">
              三个判断
            </p>
            {insights.map((item) => (
              <div
                key={item.num}
                className="group flex gap-5 items-start p-5 rounded-xl border border-border/30 bg-card/40 hover:border-primary/20 hover:bg-card/60 transition-all duration-300"
              >
                <span className="text-3xl font-extralight text-primary/30 leading-none mt-0.5 select-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground/90 mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Result */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-8 flex flex-col gap-4">
              <p className="text-sm text-primary/60 uppercase tracking-widest">Action</p>
              <p className="text-xl text-foreground/90 leading-relaxed">
                用 Enter 做了风格提取器
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed">
                不到 <span className="text-foreground font-medium">20 分钟</span>，
                一个案例被拆解得干干净净，Enter 可以完美复制
              </p>
            </div>

            <div className="rounded-2xl border border-border/30 bg-card/40 p-8 mt-5 flex-1 flex flex-col justify-center">
              <p className="text-sm text-muted-foreground/60 uppercase tracking-widest mb-4">Result</p>
              <div className="flex gap-10">
                <div>
                  <div className="text-4xl font-extralight text-foreground/80">70</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">高质量模板 / 2-3小时</div>
                </div>
                <div>
                  <div className="text-4xl font-extralight text-foreground/80">300+</div>
                  <div className="text-xs text-muted-foreground/60 mt-1">目前累计模板数</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground/60 mt-5 leading-relaxed">
                判断对方向 + AI 快速实现 = 难点瞬间解决
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
