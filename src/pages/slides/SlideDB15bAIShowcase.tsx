import { SlideLayout } from "@/components/slides/SlideLayout";
import { SlideHeader } from "@/components/slides/SlideHeader";

const tools = [
  {
    title: "自定义 Skills 体系",
    desc: "涵盖竞品分析、KOL 审核、文案编辑、邮件发送、数据导出等 15+ 个专属 Skill",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/0635.png",
  },
  {
    title: "Agents 管理台",
    desc: "EMD/Respond.io 邮件 Agent、youtuber-verifier V2、X-AI 趋势捕获等 8 个自研 Agent",
    img: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/4c50.png",
  },
];

export function SlideDB15bAIShowcase() {
  return (
    <SlideLayout>
      <SlideHeader title="AI 工具实战展示" subtitle="Agent + Skill 构建的自动化工作流" />
      <div className="grid grid-cols-2 gap-[40px] px-[80px]">
        {tools.map((t) => (
          <div key={t.title} className="flex flex-col bg-muted/20 border border-border/30 rounded-xl overflow-hidden">
            <div className="flex-1 bg-background/60 flex items-center justify-center p-[16px]">
              <img
                src={t.img}
                alt={t.title}
                crossOrigin="anonymous"
                className="w-full h-auto max-h-[460px] object-contain rounded-lg"
              />
            </div>
            <div className="p-[24px]">
              <div className="text-[24px] font-bold text-foreground mb-[6px]">{t.title}</div>
              <div className="text-[17px] text-muted-foreground leading-relaxed">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
