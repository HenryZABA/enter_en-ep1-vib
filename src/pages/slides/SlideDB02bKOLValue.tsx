import { SlideLayout } from "@/components/slides";

const values = [
  { num: "01", title: "潜在渠道", desc: "常见且带量快的获客方式" },
  { num: "02", title: "信任感", desc: "建立产品的长期资产" },
  { num: "03", title: "教育功能", desc: "把复杂产品讲清楚" },
  { num: "04", title: "内容生产与复用", desc: "一次合作，多次使用" },
  { num: "05", title: "验证市场与用户", desc: "真实反馈驱动产品迭代" },
];

export function SlideDB02bKOLValue() {
  return (
    <SlideLayout title="KOL 的价值">
      <div className="h-full flex flex-col justify-center px-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
          Why KOL Matters
        </p>
        <h2 className="text-3xl font-extralight tracking-tight text-foreground mb-12">
          做 KOL 对产品而言有<span className="font-semibold">很多价值</span>
        </h2>

        <div className="grid grid-cols-5 gap-4">
          {values.map((v) => (
            <div
              key={v.num}
              className="relative p-6 rounded-2xl border border-border/30 bg-card/40 hover:bg-card/70 transition-all duration-300 group"
            >
              <span className="text-[48px] font-black text-primary/[0.06] absolute top-2 right-4 select-none">
                {v.num}
              </span>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
