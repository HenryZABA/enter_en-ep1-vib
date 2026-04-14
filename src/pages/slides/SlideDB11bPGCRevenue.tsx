import { SlideLayout } from "@/components/slides/SlideLayout";

export function SlideDB11bPGCRevenue() {
  return (
    <SlideLayout>
      <div className="h-full flex flex-col px-20 py-16">

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[1400px] flex gap-12 items-stretch">
            {/* Left — Core insight */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
                Beyond the Product
              </p>

              <h2 className="text-[42px] font-extralight leading-[1.2] text-foreground mb-4">
                PGC 不只是内容，
              </h2>
              <h2 className="text-[42px] font-medium leading-[1.2] text-primary mb-8">
                如果它本身就是一个盈利项目
              </h2>

              <div className="h-px w-24 bg-primary/30 mb-8" />

              <p className="text-lg text-muted-foreground/70 leading-relaxed max-w-[520px]">
                我们不一定只有 Enter 在赚钱。用 Enter 做出来的东西，本身也可以赚钱。
                这正是 <span className="text-foreground font-medium">OPC</span> 最好的说明。
              </p>
            </div>

            {/* Right — Visual model */}
            <div className="w-[480px] flex flex-col gap-5 justify-center">
              {/* Traditional model */}
              <div className="relative rounded-2xl border border-border/30 bg-card/20 backdrop-blur-sm p-6 overflow-hidden">
                <span className="absolute top-3 right-4 text-[64px] font-black text-foreground/[0.03] leading-none select-none">
                  A
                </span>
                <p className="text-xs text-muted-foreground/50 tracking-wider uppercase mb-3">
                  传统模式
                </p>
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm text-muted-foreground">
                    产品
                  </div>
                  <div className="text-muted-foreground/30">&#8594;</div>
                  <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm text-muted-foreground">
                    用户付费
                  </div>
                  <div className="text-muted-foreground/30">&#8594;</div>
                  <div className="px-4 py-2 rounded-lg bg-muted/30 text-sm text-muted-foreground">
                    收入
                  </div>
                </div>
              </div>

              {/* OPC model */}
              <div className="relative rounded-2xl border border-primary/20 bg-primary/[0.03] backdrop-blur-sm p-6 overflow-hidden group hover:border-primary/40 transition-all duration-300">
                <span className="absolute top-3 right-4 text-[64px] font-black text-primary/[0.06] leading-none select-none">
                  B
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs text-primary/60 tracking-wider uppercase">
                    OPC 模式
                  </p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-primary/10 text-primary/70">
                    NEW
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm text-primary/80 font-medium">
                    Enter
                  </div>
                  <div className="text-primary/30">&#8594;</div>
                  <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm text-primary/80 font-medium">
                    PGC 内容
                  </div>
                  <div className="text-primary/30">&#8594;</div>
                  <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm text-primary/80 font-medium">
                    独立收入
                  </div>
                </div>
                <p className="text-xs text-muted-foreground/50 leading-relaxed">
                  用户用 Enter 创作的产品自带商业价值，形成平台生态外的第二增长曲线
                </p>
              </div>

              {/* Bottom highlight */}
              <div className="flex items-center gap-4 px-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
                <p className="text-xs text-muted-foreground/40 italic">
                  产品即渠道，内容即收入
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
