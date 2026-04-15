import { SlideLayout } from "@/components/slides";

export const SlideDB19Suggestions = () => {
  return (
    <SlideLayout title="">
      <div className="h-full flex flex-col items-center justify-center px-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground/50 mb-6">
          Next Steps
        </p>
        <h1 className="text-5xl font-extralight tracking-tight text-foreground text-center leading-tight">
          接下来，怎么<span className="font-bold text-primary">继续做好</span>运营
        </h1>
        <div className="mt-10 flex gap-8">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/[0.04]">
            <span className="text-sm font-semibold text-primary">方向 1</span>
            <span className="text-sm text-foreground/70">AI Native 工程化</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-orange-400/20 bg-orange-400/[0.04]">
            <span className="text-sm font-semibold text-orange-400">方向 2</span>
            <span className="text-sm text-foreground/70">内容品牌影响力</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
