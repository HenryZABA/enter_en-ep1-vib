import { SlideLayout } from "@/components/slides";
import { User, Megaphone, Palette, Bot, TrendingUp, Globe } from "lucide-react";

const skills = [
  { icon: Megaphone, label: "KOL 达人运营", desc: "Agency 对接 · 达人筛选 · 脚本审核 · 数据追踪" },
  { icon: Palette, label: "PGC 内容制作", desc: "落地页 · 模板分析 · 自动化批量生产" },
  { icon: TrendingUp, label: "运营活动策划", desc: "Hackathon · Solo Founder · 社群运营" },
  { icon: Bot, label: "AI 工具开发", desc: "Agent · 工作流自动化 · 知识库 · Skill" },
  { icon: Globe, label: "海外市场拓展", desc: "多平台内容分发 · 社群维护 · 线下活动" },
];

export const SlideDB01bSelfIntro = () => (
  <SlideLayout title="自我介绍">
    <div className="flex flex-col h-full justify-center px-2 md:px-8 space-y-8 md:space-y-10">
      {/* Header */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
          <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold">增长运营</h2>
          <p className="text-base md:text-xl text-muted-foreground mt-1">
            横向涉猎广泛，覆盖从内容到技术的全链路增长
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-3 md:space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl border border-border/50 bg-card/30"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
              <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm md:text-lg font-bold block">{skill.label}</span>
              <span className="text-xs md:text-sm text-muted-foreground">{skill.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs md:text-base text-muted-foreground/80 italic">
        "在 AI 赋能下，一人覆盖多岗位的全能型增长正在成为可能。"
      </p>
    </div>
  </SlideLayout>
);
