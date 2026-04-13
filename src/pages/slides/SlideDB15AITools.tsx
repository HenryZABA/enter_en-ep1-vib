import { SlideLayout } from "@/components/slides";
import { Palette, Database, Bot, Mail, BookOpen } from "lucide-react";

const tools = [
  {
    icon: Palette,
    title: "模板提取工具",
    desc: "分析模板视觉效果 → 拆解为网页设计颗粒度素材 → 喂给 Enter 进行 Remix，效果非常好",
    tag: "Vibe Coding 自研",
  },
  {
    icon: Database,
    title: "KOL 管理系统",
    desc: "可视化追踪数据变化和 KOL 状态；内部 & Agency 共用的文案审核平台；内置 Agent 导入知识库，越用越了解需求",
    tag: "Vibe Coding 自研",
  },
  {
    icon: Bot,
    title: "工作流 & Agent",
    desc: "利用 Milo 开发了许多 Agent、Skill 和工作流，覆盖审核文案、内容生成等多个场景",
    tag: "Milo + Enter",
  },
  {
    icon: Mail,
    title: "邮件系统自动化",
    desc: "接入 API，邮件模板存储在 Milo 资料库中，实现批量发送，由 Milo 根据上下文动态规划内容",
    tag: "API + Milo",
  },
  {
    icon: BookOpen,
    title: "知识库建设",
    desc: "建立 Enter pro 资料库并存储在 Milo 中，让 Milo 成为最了解业务的 AI，同时开发审核 Skill 等",
    tag: "Milo 知识库",
  },
];

export const SlideDB15AITools = () => (
  <SlideLayout title="AI 工具全景">
    <div className="flex flex-col h-full justify-center space-y-6 md:space-y-8 px-2 md:px-8">
      <div className="space-y-3 md:space-y-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.title}
              className="flex items-start gap-4 p-4 md:p-5 rounded-xl border border-border/50 bg-card/50"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm md:text-lg font-bold">{tool.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/20">
        <p className="text-xs md:text-sm text-muted-foreground">
          <span className="font-bold text-primary">核心价值：</span>
          Marketing 是一个广度极大的岗位，AI 帮助在各个领域走得更深。对于刚入行的人来说，有了这些工具的辅助，应对复杂市场变得更有可能。
        </p>
      </div>
    </div>
  </SlideLayout>
);
