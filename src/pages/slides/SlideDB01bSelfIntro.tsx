import { SlideLayout } from "@/components/slides";

export const SlideDB01bSelfIntro = () => (
  <SlideLayout title="自我介绍">
    <div className="h-full flex items-center justify-center px-20">
      <div className="max-w-[700px] w-full">
        {/* Name & role */}
        <p className="text-sm uppercase tracking-[4px] text-muted-foreground/80 mb-4">
          Henry
        </p>
        <h2 className="text-[48px] font-extralight leading-[1.1] tracking-tight text-foreground/90">
          增长
        </h2>
        <h2 className="text-[48px] font-black leading-[1.1] tracking-tight text-foreground mb-8">
          运营
        </h2>

        {/* Education */}
        <div className="space-y-2 mb-8">
          <p className="text-base leading-[1.7] text-muted-foreground/80 font-light">
            吉林大学 社会学系 → 华盛顿大学（圣路易斯）
          </p>
          <p className="text-base leading-[1.7] text-muted-foreground/80 font-light">
            设计 · 策展 · 广告公司 Marketing · Vibe Coding
          </p>
        </div>

        <div className="w-10 h-px bg-foreground/20 mb-8" />

        {/* Core tag */}
        <p className="text-lg leading-[1.8] text-muted-foreground font-light">
          标签：<span className="text-foreground/80 font-medium">横向跨度大</span>
        </p>
        <p className="text-base leading-[1.8] text-muted-foreground/70 font-light mt-1">
          AI 帮我补足深度，广度让我看到更多可能性
        </p>


      </div>
    </div>
  </SlideLayout>
);
