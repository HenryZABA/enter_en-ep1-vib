import { SlideLayout } from "@/components/slides";

export const SlideVC04Insight = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center px-4 md:px-12 max-w-5xl">
      <div className="space-y-8 md:space-y-12 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight">
          无限的可能性
          <br />
          <span className="text-primary">{"\u2260"}</span>
          <br />
          知道该干什么
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-base md:text-xl text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            <span>理解 AI 有门槛</span>
            <span className="text-primary font-bold">{">"}</span>
            <span>理解 Vibe Coding 门槛更高</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
            用户不清楚 Vibe Coding 的<span className="text-primary font-semibold">能力边界</span>在哪里
            <br />
            恰恰因为无限的可能性，让他们无法确定<span className="text-primary font-semibold">自己能干什么</span>
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
