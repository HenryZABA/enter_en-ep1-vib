import { SlideLayout } from "@/components/slides";
import { Landmark, Wrench } from "lucide-react";

export const SlideVC03Abstract = () => (
  <SlideLayout title="">
    <div className="flex flex-col h-full px-4 md:px-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          从<span className="text-primary">抽象</span>到<span className="text-primary">具体</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2">
          一年时间里，什么让我把形而上的构思变成了具体的场景？
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 flex-1">
        {/* Left: Before */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-muted rounded-xl">
              <Landmark className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Before</p>
              <h3 className="text-xl md:text-2xl font-bold">毕业设计时期</h3>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-sm font-semibold mb-1">Future Archaeology</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                站在未来视角 — 想象20年、50年、100年后，AI已经成为历史。未来的人回看我们这个时代，会有哪些历史遗产？
              </p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border">
              <p className="text-sm font-semibold mb-1">形而上学</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GPT等工具能做文字工作，但如何落地到具体场景？从场景到空间产品的转换，本质上非常抽象。
              </p>
            </div>
            <div className="px-4 py-3 rounded-xl border border-dashed border-muted-foreground/30">
              <p className="text-sm text-muted-foreground italic">"在空中" 的构思，缺乏落地抓手</p>
            </div>
          </div>
        </div>

        {/* Right: After */}
        <div className="flex flex-col border-l pl-6 md:pl-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-primary/20 rounded-xl">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-primary tracking-widest uppercase">After</p>
              <h3 className="text-xl md:text-2xl font-bold">毕业后一年</h3>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm font-semibold mb-1 text-primary">用 Enter 构建 AI 工具</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                在运营工作中，以构建AI工具的方式去解决痛点。场景自然而然地出现，不再需要刻意寻找。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm font-semibold mb-1 text-primary">场景变得清晰</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                比如设计一个AI主题空间 — 语音输入场景带来的隔音设计、流线设计、建筑立面的全新演绎。
              </p>
            </div>
            <div className="px-4 py-3 rounded-xl border border-primary/30 bg-primary/10">
              <p className="text-sm text-primary font-medium">从工具出发，场景自然浮现</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
