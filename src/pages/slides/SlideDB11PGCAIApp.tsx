import { SlideLayout } from "@/components/slides";
import { Lightbulb, Rocket, Eye } from "lucide-react";

export const SlideDB11PGCAIApp = () => (
  <SlideLayout title="AI App 功能展示与孵化">
    <div className="flex flex-col h-full justify-center space-y-8 md:space-y-10 px-2 md:px-8">
      {/* Core insight */}
      <div className="flex items-center justify-center">
        <div className="px-8 py-5 md:px-12 md:py-6 rounded-2xl bg-primary/10 border border-primary/30 max-w-3xl text-center">
          <p className="text-lg md:text-2xl font-bold leading-relaxed">
            功能太强大 → 用户不知道怎么操作
            <br />
            <span className="text-primary">
              PGC 的核心价值：告诉用户「你可以做出这样的东西」
            </span>
          </p>
        </div>
      </div>

      {/* Three pillars */}
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {[
          {
            icon: Eye,
            title: "功能可视化",
            desc: "每周上线新功能，通过 AI App 直观展示产品能力，降低用户理解门槛",
          },
          {
            icon: Lightbulb,
            title: "商业孵化",
            desc: "希望 PGC 能孵化出具有商业可能性的可用方案，不只是展示而是真正可用",
          },
          {
            icon: Rocket,
            title: "深度挖掘",
            desc: "正在深度挖掘新功能的核心功能点，将它们转化为高质量的 PGC 内容",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col p-5 md:p-8 rounded-2xl border border-border/50 bg-card/50 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="p-3 md:p-4 rounded-xl bg-green-500/10 border border-green-500/30">
        <p className="text-xs md:text-sm text-green-400">
          <span className="font-bold">目标：</span>
          让 PGC 成为连接产品功能与用户需求的桥梁，同时探索可规模化的商业应用
        </p>
      </div>
    </div>
  </SlideLayout>
);
