import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const tools = [
  {
    title: "youtuber-verifier V2",
    desc: "YouTube 博主带货能力鉴定器，基于 Claude Sonnet 4.5，支持 Thinking 模式",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/546b.png",
  },
  {
    title: "EMD / Respond.io 专用 Agent",
    desc: "邮件自动化 Agent，管理联系人、模板匹配、批量发送、追踪结果",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/bdb0.png",
  },
  {
    title: "自定义 Skills 体系",
    desc: "涵盖竞品分析、KOL 审核、文案编辑、数据导出等 15+ 个专属 Skill",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/a5a1.png",
  },
];

export function SlideDB15bAIShowcase() {
  return (
    <SlideLayout>
      <SlideHeader title="AI 工具实战展示" subtitle="Agent + Skill 构建的自动化工作流" />
      <div className="grid grid-cols-3 gap-[28px] px-[80px]">
        {tools.map((t) => (
          <div key={t.title} className="flex flex-col bg-muted/20 border border-border/30 rounded-xl overflow-hidden">
            <div className="flex-1 bg-background/60 flex items-center justify-center p-[12px]">
              <img
                src={t.img}
                alt={t.title}
                crossOrigin="anonymous"
                className="w-full h-auto max-h-[420px] object-contain rounded-lg"
              />
            </div>
            <div className="p-[24px]">
              <div className="text-[22px] font-bold text-foreground mb-[6px]">{t.title}</div>
              <div className="text-[16px] text-muted-foreground leading-relaxed">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}