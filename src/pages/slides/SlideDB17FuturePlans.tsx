import { SlideLayout } from "@/components/slides";
import { useState, useRef, useEffect, useCallback } from "react";

const columns = [
  {
    num: "01",
    title: "KOL 工程化",
    accent: "#3b82f6",
    items: [
      { label: "精准画像", desc: "经 QE 测试后画像更清晰，正在落实" },
      { label: "质量核心", desc: "达人质量是本质，从源头提升" },
      { label: "多样化合作", desc: "不同达人不同结算，社群达人专属方案" },
    ],
  },
  {
    num: "02",
    title: "AI App 批量化",
    accent: "#a855f7",
    items: [
      { label: "内容自动化", desc: "让 Agent 胜任更多内容生产工作" },
      { label: "PGC 批量化", desc: "批量做出更多可直接使用的 AI App" },
      { label: "形成 Agent Market", desc: "沉淀为可复用的 Agent 产品" },
    ],
  },
  {
    num: "03",
    title: "活动经验沉淀",
    accent: "#10b981",
    items: [
      { label: "重复工作自动化", desc: "将运营活动中大量重复性工作用 AI 替代" },
      { label: "流程标准化", desc: "把成功的活动经验抽象为可复用的标准流程" },
      { label: "AI 化运营", desc: "从人工驱动转为 AI 驱动，释放人力聚焦策略" },
    ],
  },
  {
    num: "04",
    title: "个人职业发展",
    accent: "#e24d8f",
    items: [],
  },
];

export const SlideDB17FuturePlans = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<
    { x: number; y: number; vx: number; vy: number; r: number; alpha: number; decay: number }[]
  >([]);
  const isCard4Hovered = hovered === 3;

  const initParticles = useCallback((w: number, h: number) => {
    const pts = [];
    for (let i = 0; i < 80; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.15,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.1,
        decay: Math.random() * 0.003 + 0.001,
      });
    }
    particlesRef.current = pts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(2, 2);
      if (particlesRef.current.length === 0) initParticles(rect.width, rect.height);
    };
    resize();

    const draw = () => {
      const w = canvas.width / 2;
      const h = canvas.height / 2;
      ctx.clearRect(0, 0, w, h);

      if (!isCard4Hovered) {
        // Fade out slowly
        particlesRef.current.forEach((p) => {
          p.alpha = Math.max(0, p.alpha - 0.02);
        });
      }

      // Draw connections
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            const lineAlpha = ((1 - dist / 60) * Math.min(pts[i].alpha, pts[j].alpha)) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(226, 77, 143, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      pts.forEach((p) => {
        if (isCard4Hovered && p.alpha < 0.6) {
          p.alpha = Math.min(0.6, p.alpha + 0.01);
        }

        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
        grad.addColorStop(0, `rgba(226, 77, 143, ${p.alpha})`);
        grad.addColorStop(0.5, `rgba(168, 85, 247, ${p.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(168, 85, 247, 0)`);
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [isCard4Hovered, initParticles]);

  return (
    <SlideLayout title="">
      <div className="flex flex-col h-full relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] transition-all duration-700"
          style={{
            background:
              hovered !== null
                ? columns[hovered].accent
                : "hsl(var(--primary))",
          }}
        />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-purple-500" />

        {/* Title */}
        <div className="px-8 md:px-16 pt-6 md:pt-10 relative z-10">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground/60 mb-2">
            FUTURE ROADMAP
          </p>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight">
            未来
            <span className="font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              规划
            </span>
          </h1>
        </div>

        {/* Cards */}
        <div className="flex-1 flex items-center px-6 md:px-12 pb-6 relative z-10">
          <div className="w-full flex gap-3 md:gap-4 h-[75%]">
            {columns.map((col, i) => {
              const isActive = hovered === i;
              const hasItems = col.items.length > 0;
              return (
                <div
                  key={col.title}
                  className="relative flex-1 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden group"
                  style={{
                    flex: isActive ? 1.8 : 1,
                    borderColor: isActive
                      ? `${col.accent}66`
                      : "hsl(var(--border) / 0.3)",
                    background: isActive
                      ? `linear-gradient(160deg, ${col.accent}15, transparent 60%)`
                      : "hsl(var(--card) / 0.2)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Big number bg */}
                  <span
                    className="absolute -right-2 -top-6 text-[120px] md:text-[160px] font-black leading-none transition-all duration-500 select-none"
                    style={{
                      color: isActive ? `${col.accent}20` : `${col.accent}08`,
                    }}
                  >
                    {col.num}
                  </span>

                  <div className="relative z-10 h-full flex flex-col p-4 md:p-6">
                    {/* Accent line */}
                    <div
                      className="w-8 h-1 rounded-full mb-4 transition-all duration-500"
                      style={{
                        background: col.accent,
                        width: isActive ? "48px" : "32px",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    />

                    <h3 className="text-base md:text-xl font-bold mb-1 transition-colors duration-300"
                      style={{ color: isActive ? col.accent : undefined }}
                    >
                      {col.title}
                    </h3>

                    {hasItems ? (
                      <div
                        className="flex-1 flex flex-col justify-center space-y-3 md:space-y-4 transition-all duration-500"
                        style={{
                          opacity: isActive ? 1 : 0.6,
                          transform: isActive
                            ? "translateY(0)"
                            : "translateY(4px)",
                        }}
                      >
                        {col.items.map((item, j) => (
                          <div
                            key={item.label}
                            className="transition-all duration-500"
                            style={{
                              transitionDelay: isActive ? `${j * 60}ms` : "0ms",
                              opacity: isActive ? 1 : 0.7,
                              transform: isActive
                                ? "translateX(0)"
                                : "translateX(-4px)",
                            }}
                          >
                            <div className="flex items-center gap-2 mb-0.5">
                              <div
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: col.accent }}
                              />
                              <span className="text-xs md:text-sm font-semibold">
                                {item.label}
                              </span>
                            </div>
                            <p className="text-[10px] md:text-xs text-muted-foreground/70 ml-3.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex-1 relative overflow-hidden">
                        <canvas
                          ref={canvasRef}
                          className="absolute inset-0 w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p
                            className="text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-700"
                            style={{
                              color: isActive ? `${col.accent}90` : `${col.accent}30`,
                              letterSpacing: isActive ? "0.35em" : "0.2em",
                            }}
                          >
                            INFINITE
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="px-8 md:px-16 pb-6 relative z-10">
          <p className="text-xs md:text-sm text-muted-foreground/50 tracking-wide">
            <span className="text-primary/80 font-medium">核心信念</span>
            <span className="mx-2 text-border">|</span>
            成功关键不是技术，而是懂用户 + 会清晰描述需求 + 善用 AI
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};
