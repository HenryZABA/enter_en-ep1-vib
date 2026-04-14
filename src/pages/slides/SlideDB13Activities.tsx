import { SlideLayout } from "@/components/slides";
import { useState } from "react";

const activities = [
  {
    key: "hackathon",
    num: "01",
    title: "对内 Hackathon",
    subtitle: "Internal Innovation Sprint",
    color: "#6366F1",
    stats: [
      { label: "项目产出", value: "10+" },
      { label: "参与团队", value: "内部全员" },
    ],
    points: [
      "快速将内容转化为物料，实现项目闭环",
      "配合 Activity 页面上线，开启首次正式活动",
    ],
  },
  {
    key: "solo",
    num: "02",
    title: "Solo Founder 专项赛",
    subtitle: "Community Competition",
    color: "#EC4899",
    badge: undefined,
    stats: [
      { label: "参赛人数", value: "130+" },
      { label: "有效提交", value: "39" },
    ],
    points: [
      "数据超过预期",
      "国内社群用户极具参与感和测评能力",
    ],
  },
  {
    key: "schedule",
    num: "03",
    title: "近期行程",
    subtitle: "Upcoming Events",
    color: "#F59E0B",
    badge: "进行中",
    stats: [
      { label: "Mini Camp", value: "进行中" },
      { label: "深圳 Workshop", value: "本周四" },
    ],
    points: [
      "正在进行 Mini Camp 活动",
      "本周四深圳线下 Workshop 演讲",
      "目标：进一步打出产品，做起国内社群",
    ],
  },
];

export const SlideDB13Activities = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SlideLayout title="活动总览">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-[32px]">
          <p className="text-[14px] text-muted-foreground/70 tracking-widest uppercase mb-[4px]">
            Operations Activities
          </p>
          <h2 className="text-[30px] font-bold tracking-tight text-foreground/90">
            三大核心活动板块
          </h2>
        </div>

        {/* Three columns */}
        <div className="flex-1 flex gap-[20px]">
          {activities.map((a) => {
            const isActive = hovered === a.key;
            return (
              <div
                key={a.key}
                className="relative flex-1 rounded-[20px] overflow-hidden transition-all duration-500 cursor-default"
                style={{
                  flex: isActive ? 1.4 : 1,
                  background: isActive
                    ? `linear-gradient(165deg, ${a.color}12 0%, transparent 60%)`
                    : "rgba(255,255,255,0.015)",
                  border: `1px solid ${isActive ? `${a.color}40` : "rgba(255,255,255,0.06)"}`,
                }}
                onMouseEnter={() => setHovered(a.key)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Large background number */}
                <div
                  className="absolute top-[16px] right-[16px] text-[80px] font-black leading-none select-none pointer-events-none transition-opacity duration-500"
                  style={{
                    color: a.color,
                    opacity: isActive ? 0.12 : 0.04,
                  }}
                >
                  {a.num}
                </div>

                <div className="relative z-10 p-[28px] flex flex-col h-full">
                  {/* Title block */}
                  <div className="mb-[24px]">
                    {a.badge && (
                      <span
                        className="inline-block text-[11px] font-semibold px-[10px] py-[3px] rounded-full mb-[10px]"
                        style={{ backgroundColor: `${a.color}18`, color: a.color }}
                      >
                        {a.badge}
                      </span>
                    )}
                    <h3 className="text-[22px] font-bold text-foreground/90 mb-[4px]">{a.title}</h3>
                    <p className="text-[12px] text-muted-foreground/50 tracking-wider">{a.subtitle}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-[16px] mb-[24px]">
                    {a.stats.map((s) => (
                      <div key={s.label}>
                        <div
                          className="text-[24px] font-black leading-tight transition-colors duration-300"
                          style={{ color: isActive ? a.color : "rgba(255,255,255,0.7)" }}
                        >
                          {s.value}
                        </div>
                        <div className="text-[11px] text-muted-foreground/50 mt-[2px]">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    className="h-[1px] mb-[20px] transition-all duration-500"
                    style={{
                      background: isActive
                        ? `linear-gradient(90deg, ${a.color}40, transparent)`
                        : "rgba(255,255,255,0.06)",
                    }}
                  />

                  {/* Points */}
                  <div className="flex-1 flex flex-col gap-[12px]">
                    {a.points.map((p, i) => (
                      <div key={i} className="flex items-start gap-[10px]">
                        <div
                          className="w-[6px] h-[6px] rounded-full mt-[7px] shrink-0 transition-all duration-300"
                          style={{
                            backgroundColor: isActive ? a.color : "rgba(255,255,255,0.15)",
                          }}
                        />
                        <span className="text-[13px] text-foreground/70 leading-[1.7]">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
};
