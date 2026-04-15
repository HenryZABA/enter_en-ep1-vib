import { SlideLayout } from "@/components/slides/SlideLayout";
import { Users, FileStack, Bug } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "高黏度用户与曝光",
    desc: "活动带来的用户转化率和付费率远高于普通渠道。Mini Camp 做起来以后，每天都有用户来找我说又充值了。",
    highlight: "转化率 & 付费率更高",
  },
  {
    icon: FileStack,
    title: "内容生产与资产沉淀",
    desc: "仅靠内部和 KOL 沉淀资产远远不够。从 Blog 讲解项目 → 变成视频文案资产 → 邀请成为大使 → 大使挖掘下一个大使，把闭环做起来。",
    highlight: "Blog → 视频 → 大使 → 闭环",
  },
  {
    icon: Bug,
    title: "验证产品与场景",
    desc: "就在这几天，我们通过用户反馈修改了不少 Bug。用户的脑洞永远比我们自己多。",
    highlight: "用户脑洞 > 我们自己",
  },
];

export function SlideDB12bActivityValue() {
  return (
    <SlideLayout title="做活动的价值">
      <div className="h-full flex flex-col px-16 py-12 justify-center">
        <h2 className="text-3xl font-light text-foreground/90 mb-10">
          做活动本身有<span className="font-semibold text-primary">非常高的价值</span>
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/30 bg-card/30 p-6 flex flex-col hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary/60" />
                </div>
                <span className="text-base font-semibold text-foreground/85">{item.title}</span>
              </div>

              <p className="text-sm text-muted-foreground/60 leading-relaxed flex-1 mb-4">
                {item.desc}
              </p>

              <div className="pt-3 border-t border-border/20">
                <span className="text-xs font-medium text-primary/70 tracking-wide">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
