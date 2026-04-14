import { SlideLayout } from "@/components/slides";
import { useState, useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

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

const NUM_STARS = 200;

function createStar(): Star {
  return {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
    z: Math.random() * 1,
    pz: 0,
  };
}

export const SlideDB17FuturePlans = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const speedRef = useRef(0);
  const isCard4Hovered = hovered === 3;

  useEffect(() => {
    if (starsRef.current.length === 0) {
      starsRef.current = Array.from({ length: NUM_STARS }, createStar);
    }
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
    };
    resize();

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Target speed based on hover
      const targetSpeed = isCard4Hovered ? 0.015 : 0.001;
      speedRef.current += (targetSpeed - speedRef.current) * 0.05;
      const speed = speedRef.current;

      // Trail effect - dark fill with low alpha
      ctx.fillStyle = isCard4Hovered
        ? "rgba(10, 10, 14, 0.25)"
        : "rgba(10, 10, 14, 0.4)";
      ctx.fillRect(0, 0, w, h);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.pz = s.z;
        s.z -= speed;

        if (s.z <= 0.001) {
          s.x = (Math.random() - 0.5) * 2;
          s.y = (Math.random() - 0.5) * 2;
          s.z = 1;
          s.pz = 1;
          continue;
        }

        // Current position
        const sx = (s.x / s.z) * cx + cx;
        const sy = (s.y / s.z) * cy + cy;

        // Previous position (for streak)
        const px = (s.x / s.pz) * cx + cx;
        const py = (s.y / s.pz) * cy + cy;

        // Size & brightness based on depth
        const depth = 1 - s.z;
        const r = Math.max(0.3, depth * 2);
        const alpha = Math.min(1, depth * 1.5);

        if (isCard4Hovered && speed > 0.005) {
          // Draw streaks when flying
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = `rgba(180, 180, 195, ${alpha * 0.7})`;
          ctx.lineWidth = r * 0.8;
          ctx.stroke();
        }

        // Draw star dot
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        const grey = Math.floor(120 + depth * 100);
        ctx.fillStyle = `rgba(${grey}, ${grey}, ${grey + 15}, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [isCard4Hovered]);

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
                    background: hasItems
                      ? isActive
                        ? `linear-gradient(160deg, ${col.accent}15, transparent 60%)`
                        : "hsl(var(--card) / 0.2)"
                      : "transparent",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Big number bg - hide for card 4 */}
                  {hasItems && (
                    <span
                      className="absolute -right-2 -top-6 text-[120px] md:text-[160px] font-black leading-none transition-all duration-500 select-none"
                      style={{
                        color: isActive ? `${col.accent}20` : `${col.accent}08`,
                      }}
                    >
                      {col.num}
                    </span>
                  )}

                  <div className="relative z-10 h-full flex flex-col p-4 md:p-6">
                    {hasItems && (
                      <>
                        {/* Accent line */}
                        <div
                          className="w-8 h-1 rounded-full mb-4 transition-all duration-500"
                          style={{
                            background: col.accent,
                            width: isActive ? "48px" : "32px",
                            opacity: isActive ? 1 : 0.5,
                          }}
                        />
                        <h3
                          className="text-base md:text-xl font-bold mb-1 transition-colors duration-300"
                          style={{ color: isActive ? col.accent : undefined }}
                        >
                          {col.title}
                        </h3>
                      </>
                    )}

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
                      /* Starfield card */
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <canvas
                          ref={canvasRef}
                          className="absolute inset-0 w-full h-full"
                          style={{ background: "#0a0a0e" }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <h3
                            className="text-lg md:text-2xl font-bold transition-all duration-700 text-center"
                            style={{
                              color: isActive
                                ? "rgba(255,255,255,0.9)"
                                : "rgba(255,255,255,0.4)",
                              textShadow: isActive
                                ? "0 0 30px rgba(226,77,143,0.4), 0 0 60px rgba(226,77,143,0.15)"
                                : "none",
                              letterSpacing: isActive ? "0.15em" : "0.05em",
                            }}
                          >
                            {col.title}
                          </h3>
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
