import { SlideLayout } from "@/components/slides/SlideLayout";

export function SlideDB07bKOLReflection() {
  return (
    <SlideLayout>
      <div className="flex-1 flex items-center justify-center px-[120px] relative overflow-hidden">
        {/* Subtle radial glow background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--primary)), transparent)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] w-full">
          {/* Main quote area */}
          <div className="flex flex-col gap-[64px]">
            {/* Top quote */}
            <div className="relative">
              <div
                className="absolute -left-[40px] -top-[20px] text-[160px] font-black leading-none select-none"
                style={{ color: "hsl(var(--primary) / 0.06)" }}
              >
                &ldquo;
              </div>
              <p className="text-[36px] leading-[1.6] text-foreground/90 font-light tracking-wide pl-[20px]">
                当一个真实的人开始
                <span className="font-semibold text-foreground">使用</span>、
                <span className="font-semibold text-foreground">表达</span>、
                <span className="font-semibold text-foreground">推荐</span>，
              </p>
              <p className="text-[36px] leading-[1.6] text-foreground/90 font-light tracking-wide pl-[20px] mt-[8px]">
                产品才真正进入
                <span
                  className="font-bold text-[40px]"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  「被理解」
                </span>
                的阶段。
              </p>
            </div>

            {/* Divider with dot */}
            <div className="flex items-center gap-[24px] pl-[20px]">
              <div className="h-[1px] w-[120px] bg-foreground/10" />
              <div className="w-[6px] h-[6px] rounded-full bg-primary/40" />
              <div className="h-[1px] flex-1 bg-foreground/10" />
            </div>

            {/* Bottom statement */}
            <div className="pl-[20px]">
              <p className="text-[24px] text-muted-foreground font-light tracking-wider mb-[32px]">
                KOL 运营不只是投放，而是在构建一种 ——
              </p>
              <div className="flex gap-[48px]">
                {["被相信", "被传播", "被记住"].map((word, i) => (
                  <div key={word} className="group relative">
                    <span
                      className="text-[56px] font-bold tracking-[0.05em]"
                      style={{
                        color: `hsl(var(--foreground) / ${0.95 - i * 0.1})`,
                      }}
                    >
                      {word}
                    </span>
                    <div
                      className="absolute -bottom-[8px] left-0 h-[3px] rounded-full"
                      style={{
                        width: `${100 - i * 10}%`,
                        background: `linear-gradient(90deg, hsl(var(--primary) / ${0.6 - i * 0.15}), transparent)`,
                      }}
                    />
                    {i < 2 && (
                      <span className="absolute -right-[30px] top-[50%] -translate-y-[50%] text-[28px] text-muted-foreground/30 font-light">
                        /
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
