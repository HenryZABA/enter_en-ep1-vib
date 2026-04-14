import { SlideLayout } from "@/components/slides";
import { Flame, Megaphone, AlertTriangle } from "lucide-react";

const suggestions = [
  {
    icon: Flame,
    title: "追热点的能力",
    color: "text-orange-400",
    bg: "bg-orange-400/15",
    points: [
      "目前的爆款内容几乎都是在提前押中潜在热点，或走在热点前面",
      "一旦热点出现，团队需要快速响应、迅速跟上",
      "目前 Enter 在热点追踪和快速反应方面的能力还比较初期，需要建立机制",
    ],
  },
  {
    icon: Megaphone,
    title: "加大 PGC 宣传力度",
    color: "text-blue-400",
    bg: "bg-blue-400/15",
    points: [
      "我们的产品力实际上非常有优势，但目前仍需要借助其他产品来带动流量",
      "如果自有账号短期内无法快速成长，增长空间会比较受限",
      "建议：加大 PGC 内容的分发力度，展示产品能力 → 自然吸引用户",
    ],
  },
  {
    icon: AlertTriangle,
    title: "风险与瓶颈",
    color: "text-yellow-400",
    bg: "bg-yellow-400/15",
    points: [
      "过度依赖外部 KOL 带量，自有渠道增长速度不足",
      "热点响应链路偏长，从发现到产出内容需要缩短周期",
      "解决方案：PGC 自动化 + 热点监控机制 + 社群裂变组合拳",
    ],
  },
];

export const SlideDB19Suggestions = () => (
  <SlideLayout title="运营建议与反思">
    <div className="flex flex-col h-full justify-center px-2 md:px-8 space-y-5 md:space-y-8">
      {suggestions.map((s) => (
        <div
          key={s.title}
          className="p-4 md:p-6 rounded-xl border border-border/50 bg-card/30 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 md:w-11 md:h-11 rounded-lg ${s.bg} flex items-center justify-center shrink-0`}>
              <s.icon className={`w-5 h-5 md:w-6 md:h-6 ${s.color}`} />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">{s.title}</h3>
          </div>
          <ul className="space-y-1.5 md:space-y-2 ml-12 md:ml-14">
            {s.points.map((p, i) => (
              <li key={i} className="text-xs md:text-base text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">-</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SlideLayout>
);
