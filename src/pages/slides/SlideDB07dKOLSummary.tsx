import { SlideLayout } from "@/components/slides/SlideLayout";

export function SlideDB07dKOLSummary() {
  return (
    <SlideLayout>
      <div className="flex-1 flex flex-col items-center justify-center px-[120px] py-[60px] gap-[48px]">
        {/* Opening statement */}
        <p className="text-[28px] text-muted-foreground leading-[1.6] text-center max-w-[900px]">
          当一个真实的人开始使用、表达、推荐，
          <br />
          产品才真正进入「<span className="text-foreground font-semibold">被理解</span>」的阶段。
        </p>

        {/* Core message */}
        <div className="text-center">
          <p className="text-[24px] text-muted-foreground mb-[20px]">
            KOL 运营不只是投放，而是在构建一种 ——
          </p>
          <div className="flex items-center justify-center gap-[32px]">
            {["被相信", "被传播", "被记住"].map((word, i) => (
              <div key={word} className="flex items-center gap-[32px]">
                <span className="text-[44px] font-bold text-primary">{word}</span>
                {i < 2 && <span className="text-[32px] text-muted-foreground/40">/</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="border-t border-border pt-[32px] max-w-[800px]">
          <p className="text-[22px] text-foreground text-center leading-[1.8]">
            只有我们对这些数据足够较真，才能做到真正的内容营销，
            <br />
            让产品进入<span className="font-bold text-primary">被理解</span>的阶段。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
