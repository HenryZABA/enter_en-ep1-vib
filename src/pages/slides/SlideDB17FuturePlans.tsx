import { SlideLayout } from "@/components/slides";
import { Cog, Bot, User } from "lucide-react";

const columns = [
  {
    icon: Cog,
    title: "KOL 工程化",
    items: [
      { label: "精准画像", desc: "经 QE 测试后画像更清晰，正在落实" },
      { label: "质量核心", desc: "达人质量是本质，从源头提升" },
      { label: "多样化合作", desc: "不同达人不同结算，社群达人专属方案" },
    ],
    color: "bg-blue-500/10 border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Bot,
    title: "AI & Agent 落地",
    items: [
      { label: "内容自动化", desc: "让 Agent 胜任更多内容生产工作" },
      { label: "PGC 批量化", desc: "批量做出更多可直接使用的 Agent" },
      { label: "活动经验沉淀", desc: "成功经验做成 AI 可执行的标准流程" },
    ],
    color: "bg-purple-500/10 border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: User,
    title: "个人职业发展",
    items: [
      { label: "不设限", desc: "不预设具体传统岗位方向" },
      { label: "全能型进化", desc: "AI 赋能下多种能力融为一岗" },
      { label: "新岗位趋势", desc: "大厂对岗位要求越来越宽泛，AI 让这成为可能" },
    ],
    color: "bg-primary/10 border-primary/30",
    iconColor: "text-primary",
  },
];

export const SlideDB17FuturePlans = () => (
  <SlideLayout title="未来规划">
    <div className="flex flex-col h-full justify-center space-y-6 md:space-y-8 px-2 md:px-8">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {columns.map((col) => {
          const Icon = col.icon;
          return (
            <div
              key={col.title}
              className={`flex flex-col p-5 md:p-7 rounded-2xl border ${col.color} space-y-5`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background/50 flex items-center justify-center">
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${col.iconColor}`} />
                </div>
                <h3 className="text-lg md:text-2xl font-bold">{col.title}</h3>
              </div>
              <div className="space-y-4">
                {col.items.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <span className="text-sm md:text-base font-bold">{item.label}</span>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 md:p-5 rounded-xl bg-primary/5 border border-primary/20 text-center">
        <p className="text-sm md:text-lg text-muted-foreground">
          <span className="font-bold text-primary">核心信念：</span>
          成功关键不是技术，而是{" "}
          <span className="text-primary font-bold">懂用户 + 会清晰描述需求 + 善用 AI</span>
        </p>
      </div>
    </div>
  </SlideLayout>
);
