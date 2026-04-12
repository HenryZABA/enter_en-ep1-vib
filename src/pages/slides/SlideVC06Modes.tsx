import { SlideLayout } from "@/components/slides";
import { UtensilsCrossed, Search, FileText } from "lucide-react";

const modes = [
  {
    icon: UtensilsCrossed,
    title: "自助餐式构建",
    percent: 35,
    color: "#f59e0b",
    trackColor: "rgba(245,158,11,0.15)",
    tagline: "快速随性，碰到问题再解决",
    detail: "2-3 轮简短对话",
  },
  {
    icon: Search,
    title: "学习调研式构建",
    percent: 50,
    color: "#3b82f6",
    trackColor: "rgba(59,130,246,0.15)",
    tagline: "快速试错，与 AI 一起探索",
    detail: "持续迭代反馈",
  },
  {
    icon: FileText,
    title: "专业模式",
    percent: 15,
    color: "#10b981",
    trackColor: "rgba(16,185,129,0.15)",
    tagline: "完整 PRD 文档，需求清晰",
    detail: "高阶用户画像",
  },
];

function DonutRing({ percent, color, trackColor, size = 140, stroke = 10 }: { percent: number; color: string; trackColor: string; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl md:text-4xl font-bold" style={{ color }}>{percent}%</span>
      </div>
    </div>
  );
}

export const SlideVC06Modes = () => (
  <SlideLayout title="三种构建模式">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-12">
      {modes.map((mode) => (
        <div
          key={mode.title}
          className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-secondary/30 border border-border/50 transition-all hover:scale-[1.02]"
        >
          <DonutRing percent={mode.percent} color={mode.color} trackColor={mode.trackColor} />

          <div className="flex items-center gap-2 mt-5 mb-2">
            <mode.icon className="w-5 h-5" style={{ color: mode.color }} />
            <h3 className="text-xl md:text-2xl font-bold">{mode.title}</h3>
          </div>

          <p className="text-sm text-muted-foreground">{mode.tagline}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">{mode.detail}</p>
        </div>
      ))}
    </div>

    <p className="text-xs text-muted-foreground/50 text-center mt-6 px-4">
      数据来源：Milo 针对平台内高消耗、高频率使用项目的调研
    </p>
  </SlideLayout>
);
