import { SlideLayout } from "@/components/slides";
import { Megaphone, Palette, Bot, TrendingUp } from "lucide-react";

const skills = [
  {
    icon: Megaphone,
    label: "KOL 达人运营",
    tags: ["Agency 对接", "达人筛选", "脚本审核", "数据追踪"],
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
  },
  {
    icon: Palette,
    label: "PGC 内容制作",
    tags: ["落地页", "模板分析", "自动化批量生产"],
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
  },
  {
    icon: TrendingUp,
    label: "运营活动策划",
    tags: ["Hackathon", "Solo Founder", "社群运营"],
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
  {
    icon: Bot,
    label: "AI 工具开发",
    tags: ["Agent", "工作流自动化", "知识库", "Skill"],
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
];

export const SlideDB01bSelfIntro = () => (
  <SlideLayout title="自我介绍">
    <div className="flex flex-col h-full px-[60px] py-[20px]">
      {/* Top section */}
      <div className="flex items-end gap-[24px] mb-[40px]">
        {/* Avatar area */}
        <div className="relative">
          <div className="w-[100px] h-[100px] rounded-[20px] bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-[42px] font-black bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
              G
            </span>
          </div>
          <div className="absolute -bottom-[6px] -right-[6px] w-[24px] h-[24px] rounded-full bg-green-500 border-[3px] border-background" />
        </div>
        <div className="flex-1">
          <h2 className="text-[38px] font-black leading-tight tracking-tight">
            增长运营
          </h2>
          <p className="text-[17px] text-muted-foreground mt-[4px]">
            横向覆盖从内容到技术的全链路增长
          </p>
        </div>
        {/* Stats */}
        <div className="flex gap-[20px]">
          {[
            { n: "27", l: "KOL 合作" },
            { n: "300+", l: "PGC 产出" },
            { n: "15+", l: "AI Skills" },
          ].map((s) => (
            <div
              key={s.l}
              className="text-center px-[16px] py-[10px] rounded-[12px] bg-card/50 border border-border/40"
            >
              <div className="text-[26px] font-black text-primary leading-none">
                {s.n}
              </div>
              <div className="text-[12px] text-muted-foreground mt-[4px]">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill cards - 2x2 grid */}
      <div className="grid grid-cols-2 gap-[16px] flex-1">
        {skills.map((skill, i) => (
          <div
            key={skill.label}
            className={`relative overflow-hidden rounded-[16px] border ${skill.border} ${skill.bg} p-[24px] flex flex-col justify-between group`}
          >
            {/* Background number */}
            <span className="absolute top-[10px] right-[16px] text-[72px] font-black leading-none text-foreground/[0.04] select-none">
              0{i + 1}
            </span>

            <div>
              <div className="flex items-center gap-[12px] mb-[12px]">
                <div
                  className={`w-[40px] h-[40px] rounded-[10px] bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                >
                  <skill.icon className="w-[20px] h-[20px] text-white" />
                </div>
                <h3 className="text-[20px] font-bold">{skill.label}</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-[8px]">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-[12px] py-[5px] rounded-full text-[13px] font-medium bg-background/60 border border-border/40 text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom quote */}
      <div className="mt-[16px] text-center">
        <p className="text-[14px] text-muted-foreground/70 italic">
          "AI 赋能下，一人覆盖多岗位的全能型增长正在成为可能。"
        </p>
      </div>
    </div>
  </SlideLayout>
);
