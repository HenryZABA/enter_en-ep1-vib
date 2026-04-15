import { SlideLayout } from "@/components/slides";

const points = [
  { label: "让整个流程更顺", desc: "减少人工环节，AI 接管筛选、沟通、审核等重复流程" },
  { label: "让发布周期更短", desc: "从筛选到发布的时间大幅缩短" },
  { label: "形成专属达人池", desc: "一片专属于 Converge AI 的达人资源" },
  { label: "工具即产品", desc: "AI native 公司不止主要产品可以卖，这些内部工具本身也是产品" },
];

export function SlideDB19bAINative() {
  return (
    <SlideLayout title="">
      <div className="h-full flex flex-col px-16 py-14 justify-center">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-2">
            方向 1
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-foreground">
            做更加 <span className="font-bold text-primary">AI Native</span> 的东西
          </h2>
        </div>

        {/* Context */}
        <div className="rounded-xl border border-border/30 bg-card/30 backdrop-blur p-5 mb-8">
          <p className="text-sm text-muted-foreground/70 leading-relaxed">
            KOL 还面临很多问题：Q1 达人画像我们不满意，想找更优质的 KOL、提升真实转化效率。
            但这势必投入更多人力——而这种复杂系统，恰好适合被 AI 干掉。
          </p>
          <p className="text-sm font-medium text-foreground/80 mt-3">
            所以 KOL 要 AI 工程化：
          </p>
        </div>

        {/* 4 Points */}
        <div className="grid grid-cols-2 gap-4">
          {points.map((p) => (
            <div
              key={p.label}
              className="flex gap-4 items-start rounded-xl border border-primary/15 bg-primary/[0.03] p-5"
            >
              <div className="w-2 h-2 rounded-full bg-primary/50 mt-2 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground/85">{p.label}</p>
                <p className="text-xs text-muted-foreground/60 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
