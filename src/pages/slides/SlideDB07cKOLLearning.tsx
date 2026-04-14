import SlideLayout from "./SlideLayout";
import SlideHeader from "./SlideHeader";

const steps = [
  {
    num: "01",
    title: "选择合适的 KOL",
    desc: "以数据为核心，用 CPA、发布率、互动质量筛选真正能带来转化的创作者",
  },
  {
    num: "02",
    title: "沟通与进度管理",
    desc: "建立标准化流程，从 Brief 到审核到发布，每个节点可追踪、可量化",
  },
  {
    num: "03",
    title: "寻找传播热点",
    desc: "关注平台趋势与用户兴趣，找到大家真正关注的内容方向",
  },
  {
    num: "04",
    title: "高效内容创作",
    desc: "以最广传播为目标反推内容形式，让每一份素材发挥最大价值",
  },
];

export default function SlideDB07cKOLLearning() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col px-20 py-16">
        <SlideHeader section="KOL 达人运营" />

        <div className="flex-1 flex flex-col justify-center gap-12">
          {/* Title area */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
              What I Learned
            </p>
            <h2 className="text-4xl font-extralight tracking-tight text-foreground">
              从数据到内容，<span className="font-medium text-primary">每一步都是精心规划</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="group relative rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
              >
                {/* Big number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-black text-foreground/[0.04] leading-none select-none">
                  {s.num}
                </span>

                {/* Top accent bar */}
                <div className="w-8 h-0.5 bg-primary/40 mb-5 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />

                <h3 className="text-lg font-medium text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="flex items-center gap-4 pt-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            <p className="text-sm text-muted-foreground/50 italic tracking-wide">
              不是随机选择，而是让一份资源更高效地利用
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
