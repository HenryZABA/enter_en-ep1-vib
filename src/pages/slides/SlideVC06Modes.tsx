import { SlideLayout } from "@/components/slides";
import { UtensilsCrossed, Search, FileText } from "lucide-react";

const modes = [
  {
    num: "01",
    icon: UtensilsCrossed,
    title: "自助餐式构建",
    color: "text-amber-500",
    bgColor: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-500/20",
    desc: "像吃自助餐一样，想要什么就拿什么",
    traits: ["快速且随性", "碰到问题再解决", "2-3轮简短对话", "\"OK\"、\"继续\"等指令"],
  },
  {
    num: "02",
    icon: Search,
    title: "学习调研式构建",
    color: "text-blue-500",
    bgColor: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/20",
    desc: "利用 AI 请教和学习，调研后再构建",
    traits: ["快速试错、持续迭代", "与AI一起探索", "跳出来调研问题", "找最佳技术方案"],
  },
  {
    num: "03",
    icon: FileText,
    title: "专业模式",
    color: "text-emerald-500",
    bgColor: "from-emerald-500/10 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
    desc: "完整的 PRD 文档，需求清晰明确",
    traits: ["高阶用户画像", "需求非常明确", "完整PRD文档", "全局性框架思维"],
  },
];

export const SlideVC06Modes = () => (
  <SlideLayout title="三种构建模式">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-8">
      {modes.map((mode) => (
        <div
          key={mode.num}
          className={`flex flex-col p-5 md:p-6 rounded-2xl bg-gradient-to-br ${mode.bgColor} border ${mode.borderColor} transition-all hover:scale-[1.02]`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`text-2xl md:text-3xl font-bold ${mode.color}`}>{mode.num}</div>
            <mode.icon className={`w-5 h-5 ${mode.color}`} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">{mode.title}</h3>
          <p className="text-sm text-muted-foreground mb-5">{mode.desc}</p>

          <div className="space-y-2 flex-1">
            {mode.traits.map((trait, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${mode.color.replace("text-", "bg-")}`} />
                <p className="text-sm">{trait}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </SlideLayout>
);
