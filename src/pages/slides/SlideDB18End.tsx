import { SlideLayout } from "@/components/slides";

export const SlideDB18End = () => (
  <SlideLayout title="">
    <div className="h-full flex flex-col items-center justify-center px-16 text-center">
      {/* Main insight */}
      <p className="text-lg md:text-xl text-muted-foreground/60 mb-6 max-w-2xl leading-relaxed">
        我们有很多岗位，但事实是环境变化太快了。
        与其定死一个方向，倒不如选一个首先让自己爽的方向——
      </p>

      <p className="text-base md:text-lg text-muted-foreground/50 mb-8 max-w-xl leading-relaxed">
        因为产生颠覆的可能性，往往来自于外界。
      </p>

      {/* Formula */}
      <div className="flex items-center gap-4 mb-12">
        <span className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/[0.04] text-sm font-medium text-primary">
          选定一个方向
        </span>
        <span className="text-muted-foreground/30 text-lg">+</span>
        <span className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/[0.04] text-sm font-medium text-primary">
          专业技能积累
        </span>
        <span className="text-muted-foreground/30 text-lg">+</span>
        <span className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/[0.04] text-sm font-medium text-primary">
          AI 辅助
        </span>
      </div>

      <p className="text-sm text-muted-foreground/40 mb-16">
        这可能才是未来 AI 时代打工人的画像
      </p>

      {/* Thank you */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
        谢谢
      </h1>
      <div className="mt-6 h-1 w-24 bg-primary rounded-full" />
    </div>
  </SlideLayout>
);
