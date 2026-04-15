import { SlideLayout } from "@/components/slides";

export function SlideDB19cContentBrand() {
  return (
    <SlideLayout title="">
      <div className="h-full flex flex-col px-16 py-12 justify-center">
        {/* Header */}
        <div className="mb-7">
          <p className="text-xs tracking-[0.3em] uppercase text-orange-400/60 mb-2">
            方向 2
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-foreground">
            通过内容打造<span className="font-bold text-orange-400">品牌影响力</span>
          </h2>
        </div>

        {/* 3 sections */}
        <div className="flex flex-col gap-5">
          {/* Section 1 - Sources & Hot Topics */}
          <div className="rounded-xl border border-border/30 bg-card/30 backdrop-blur p-5">
            <h3 className="text-base font-semibold text-foreground/85 mb-3">
              1. 内容来源 & 追热点
            </h3>
            <p className="text-sm text-muted-foreground/65 leading-relaxed mb-3">
              内容营销要有来源——批量化 AI App、各种活动、KOL 和大使物料。同时需要更快追热点，并有资源支撑。
            </p>
            <div className="flex gap-4">
              <div className="flex-1 rounded-lg bg-orange-400/[0.05] border border-orange-400/15 p-3">
                <p className="text-xs font-medium text-orange-400/80">通过热点把握即时流量</p>
              </div>
              <div className="flex-1 rounded-lg bg-orange-400/[0.05] border border-orange-400/15 p-3">
                <p className="text-xs font-medium text-orange-400/80">建立达人资源池：做广 + 做深</p>
                <p className="text-[11px] text-muted-foreground/50 mt-1">
                  探索激励合作模式，与 KOL 形成共同在 Vibe Coding 领域创作的叙事
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 - Brand Story */}
          <div className="rounded-xl border border-border/30 bg-card/30 backdrop-blur p-5">
            <h3 className="text-base font-semibold text-foreground/85 mb-2">
              2. 需要更好的故事
            </h3>
            <p className="text-sm text-muted-foreground/65 leading-relaxed">
              内容营销不能散。比如 Lovable 今年对"女性主义"的重视至少在商业收益上获利了。
              我们目前各种活动都做，看起来比较散。打 OPC 不是很特殊的叙事——
              <span className="font-medium text-foreground/75">要更有观点、更关注差异、赋予人设。</span>
            </p>
          </div>

          {/* Section 3 - Data-driven */}
          <div className="rounded-xl border border-border/30 bg-card/30 backdrop-blur p-5">
            <h3 className="text-base font-semibold text-foreground/85 mb-2">
              3. 回到数据，持续试错
            </h3>
            <p className="text-sm text-muted-foreground/65 leading-relaxed">
              还有很多可以继续往上做的空间，这是接下来重点探索的方向。
              持续试错——接触不同类型达人、看不同合作方式的反馈，找到更有效的方法。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
