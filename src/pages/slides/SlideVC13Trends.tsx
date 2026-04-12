import { SlideLayout } from "@/components/slides";
import { TrendingUp, Users, Heart, Target } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "用户自发分享",
    desc: "大量用户开始在社交媒体上分享自己的 Vibe Coding 项目",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "小红书趋势",
    desc: "从今年1月尤其是2月过年后，用户展示的自研项目明显增多",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Heart,
    title: "互动率极高",
    desc: "号召分享项目的帖子仅六七个，但每个都有四五千高赞，回复极多",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Target,
    title: "运营窗口",
    desc: "目前仍处于普通用户的萌芽期，抓好这波是一个非常有潜力的流量池",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export const SlideVC13Trends = () => (
  <SlideLayout title="社交媒体趋势 & 运营机会">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-8">
      {points.map((p) => (
        <div
          key={p.title}
          className="flex gap-4 p-5 md:p-6 rounded-2xl bg-secondary/30 border hover:border-primary/30 transition-colors"
        >
          <div className={`p-3 rounded-xl ${p.bg} flex-shrink-0 h-fit`}>
            <p.icon className={`w-6 h-6 ${p.color}`} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="px-4 md:px-8 mt-6">
      <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/30 bg-primary/5">
        <div className="flex-1">
          <p className="text-base md:text-lg font-semibold">
            Vibe Coding 黑客松活动也越来越多，大家展示产品的行为正在成为新趋势
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
