import { SlideLayout } from "@/components/slides";

export const SlideVC07Compare = () => (
  <SlideLayout title="">
    <div className="flex flex-col h-full px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        深入对比：两种最常见的构建方式
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-1">
        {/* Buffet Style */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl font-bold text-amber-500">01</span>
            <h3 className="text-xl md:text-2xl font-bold">自助餐式构建</h3>
          </div>

          <div className="space-y-3 flex-1">
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">特点</p>
              <p className="text-sm leading-relaxed">像吃自助餐一样，一个一个去拿，想要什么就拿什么。普通人最常见的形式。</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">好处</p>
              <p className="text-sm leading-relaxed">最贴合使用习惯。先碰到问题再解决问题，想到需求再加需求。</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">缺点</p>
              <p className="text-sm leading-relaxed">不如直接给PRD文档，Agent的Planned Mode会更具全局性。</p>
            </div>
            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
              <p className="text-xs text-amber-500 tracking-widest uppercase mb-1">关键发现</p>
              <p className="text-sm leading-relaxed font-medium">
                简单提示词反而效果更好 — 普通人没有技术背景，不确定最佳实现方式。
              </p>
            </div>
          </div>
        </div>

        {/* Research Style */}
        <div className="flex flex-col border-l pl-6 md:pl-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl md:text-3xl font-bold text-blue-500">02</span>
            <h3 className="text-xl md:text-2xl font-bold">学习调研式构建</h3>
          </div>

          <div className="space-y-3 flex-1">
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">用户画像</p>
              <p className="text-sm leading-relaxed">比普通用户更懂一些，但还没达到产品算法专家的程度。</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">核心特点</p>
              <p className="text-sm leading-relaxed">利用AI进行请教和学习。遇到问题时，跳出来先把问题拎出来直接调研。</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">案例</p>
              <p className="text-sm leading-relaxed">选择技术栈时，先调研问题的几种最佳解决方式，整个过程由AI完成。</p>
            </div>
            <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
              <p className="text-xs text-blue-500 tracking-widest uppercase mb-1">结果</p>
              <p className="text-sm leading-relaxed font-medium">
                既符合个人想象，也是AI推荐的方案 — 整体效果更好。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
