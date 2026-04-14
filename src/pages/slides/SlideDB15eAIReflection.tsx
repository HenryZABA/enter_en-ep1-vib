import { SlideLayout } from "@/components/slides/SlideLayout";

export function SlideDB15eAIReflection() {
  return (
    <SlideLayout>
      <div className="h-full flex items-center justify-center px-20">
        <div className="max-w-[1100px] w-full">
          {/* Two opposing forces */}
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Replace */}
            <div className="text-right">
              <div className="text-primary/10 text-[120px] font-black leading-none select-none mb-4">
                AI
              </div>
              <p className="text-foreground/50 text-2xl font-light leading-relaxed">
                让基础的岗位
              </p>
              <p className="text-foreground/80 text-[36px] font-light mt-2">
                被更容易<span className="text-foreground font-medium">取代</span>
              </p>
            </div>

            {/* Divider */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              <div className="text-primary/60 text-sm font-medium tracking-widest">BUT</div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            </div>

            {/* Right: Leap */}
            <div className="text-left">
              <div className="text-primary/10 text-[120px] font-black leading-none select-none mb-4">
                AI
              </div>
              <p className="text-foreground/50 text-2xl font-light leading-relaxed">
                也让基础的岗位有了
              </p>
              <p className="text-[36px] mt-2 font-light">
                <span className="text-primary font-medium">跨越</span>
                <span className="text-foreground/80">的可能性</span>
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-20 border-t border-border/20 pt-8 text-center">
            <p className="text-muted-foreground/60 text-lg font-light">
              不是被 AI 淘汰，而是借 AI 重新定义自己能做到的事
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
