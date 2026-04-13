import { SlideLayout } from "@/components/slides";
import { Trophy, Users, Heart, MapPin } from "lucide-react";

const activities = [
  {
    icon: Trophy,
    title: "队内 Hackathon",
    highlights: [
      "在 VB 老师帮助下开展队内黑客松",
      "收集约 10 个项目产出",
      "快速将内容转化为物料，实现项目闭环",
      "配合 Activity 页面上线，开启首次正式活动",
    ],
  },
  {
    icon: Users,
    title: "Solo Founder 专项赛",
    highlights: [
      "在周周老师指导下理清办赛逻辑",
      "130+ 人参赛，39 个有效提交",
      "数据表现远超预期",
      "依靠社群黏度一点点做出数据",
    ],
    badge: "远超预期",
  },
  {
    icon: Heart,
    title: "国内社群 & 大使计划",
    highlights: [
      "用户极具参与感和测评能力",
      "对产品高度认可且非常有主见",
      "重点维护核心用户为品牌大使",
      "创造更多物料实现更广传播",
    ],
  },
  {
    icon: MapPin,
    title: "近期行程",
    highlights: [
      "正在进行 Mini Camp 活动",
      "本周四深圳线下 Workshop 演讲",
      "目标：进一步打出产品，做起国内社群",
    ],
    badge: "进行中",
  },
];

export const SlideDB13Activities = () => (
  <SlideLayout title="活动总览">
    <div className="flex flex-col h-full justify-center px-2 md:px-8">
      <div className="grid grid-cols-2 gap-4 md:gap-5">
        {activities.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className="flex flex-col p-4 md:p-6 rounded-2xl border border-border/50 bg-card/50 space-y-3 relative"
            >
              {a.badge && (
                <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                  {a.badge}
                </span>
              )}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <h3 className="text-base md:text-xl font-bold">{a.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {a.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-xs md:text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </SlideLayout>
);
