import { SlideLayout } from "@/components/slides";
import { Megaphone, Palette, TrendingUp, Bot, Rocket } from "lucide-react";

const sections = [
  { num: "01", icon: Megaphone, title: "KOL 达人运营", sub: "Agency 对接 / 达人筛选 / 脚本审核 / 数据追踪" },
  { num: "02", icon: Palette, title: "PGC 内容制作", sub: "落地页 / 模板分析 / 自动化批量生产" },
  { num: "03", icon: TrendingUp, title: "运营活动策划", sub: "Hackathon / Solo Founder / 社群运营" },
  { num: "04", icon: Bot, title: "AI 工具开发", sub: "Agent / 工作流自动化 / 知识库 / Skill" },
  { num: "05", icon: Rocket, title: "未来规划", sub: "KOL 工程化 / AI 自动化 / 职业进化" },
];

export const SlideDB01bSelfIntro = () => (
  <SlideLayout title="自我介绍">
    <div className="relative flex h-full overflow-hidden">
      {/* Left panel */}
      <div className="w-[420px] shrink-0 flex flex-col justify-center px-[60px] relative z-10">
        <div className="mb-[36px]">
          <p className="text-[13px] uppercase tracking-[4px] text-muted-foreground/80 mb-[16px]">
            Henry
          </p>
          <h2 className="text-[40px] font-extralight leading-[1.1] tracking-tight text-foreground/90">
            增长
          </h2>
          <h2 className="text-[40px] font-black leading-[1.1] tracking-tight text-foreground">
            运营
          </h2>
        </div>

        {/* Personal background */}
        <div className="space-y-[10px] mb-[28px]">
          <p className="text-[13px] leading-[1.7] text-muted-foreground/80 font-light">
            吉林大学 社会学系 → 华盛顿大学（圣路易斯）
          </p>
          <p className="text-[13px] leading-[1.7] text-muted-foreground/80 font-light">
            设计 · 策展 · 广告公司 Marketing · Vibe Coding
          </p>
        </div>

        <div className="w-[40px] h-[1px] bg-foreground/20 mb-[24px]" />

        <p className="text-[14px] leading-[1.8] text-muted-foreground font-light">
          标签：<span className="text-foreground/80 font-medium">横向跨度大</span>
          <br />
          AI 帮我补足深度
          <br />
          广度让我看到更多可能性
        </p>

        <div className="mt-[36px] flex gap-[32px]">
          {[
            { v: "27", l: "KOL" },
            { v: "300+", l: "PGC" },
            { v: "15+", l: "Skills" },
          ].map((d) => (
            <div key={d.l}>
              <div className="text-[28px] font-extralight text-foreground/80 leading-none">{d.v}</div>
              <div className="text-[11px] uppercase tracking-[2px] text-muted-foreground/70 mt-[6px]">{d.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="w-[1px] bg-foreground/[0.06] my-[60px]" />

      {/* Right panel - TOC style */}
      <div className="flex-1 flex flex-col justify-center px-[60px]">
        {sections.map((s, i) => (
          <div key={s.num}>
            <div className="group flex items-center gap-[24px] py-[22px] px-[24px] rounded-[16px] transition-all duration-300 hover:bg-foreground/[0.03] hover:backdrop-blur-sm cursor-default">
              <span className="text-[36px] font-extralight text-foreground/25 w-[56px] shrink-0 tabular-nums select-none">
                {s.num}
              </span>
              <div className="w-[44px] h-[44px] rounded-[12px] bg-foreground/[0.06] backdrop-blur-sm border border-foreground/[0.08] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-foreground/[0.10]">
                <s.icon className="w-[20px] h-[20px] text-foreground/60 transition-colors group-hover:text-foreground/80" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[20px] font-medium tracking-tight text-foreground/80 transition-colors group-hover:text-foreground">
                  {s.title}
                </h3>
                <p className="text-[13px] text-muted-foreground/70 mt-[4px] font-light">
                  {s.sub}
                </p>
              </div>
              <div className="w-[24px] h-[1px] bg-foreground/[0.08] transition-all duration-300 group-hover:w-[40px] group-hover:bg-foreground/20" />
            </div>
            {i < sections.length - 1 && (
              <div className="mx-[24px] h-[1px] bg-foreground/[0.04]" />
            )}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
