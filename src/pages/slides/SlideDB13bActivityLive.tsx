import { SlideLayout } from "@/components/slides";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const activities = [
  {
    label: "Solo Founder Brand",
    url: "https://forum.enter.pro/activities/build-your-solo-founder-brand-with-enter",
    accent: "from-violet-500/20 to-fuchsia-500/20",
    border: "border-violet-500/40",
    tag: "Solo Founder",
  },
  {
    label: "OPC Challenge",
    url: "https://forum.enter.pro/activities/opc",
    accent: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/40",
    tag: "OPC",
  },
];

export const SlideDB13bActivityLive = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideLayout title="核心活动 · 实时展示">
      <div className="flex h-full px-[40px] py-[16px] gap-[12px]">
        {activities.map((act, i) => {
          const isHovered = hovered === i;
          const otherHovered = hovered !== null && hovered !== i;

          return (
            <div
              key={act.url}
              className="relative flex flex-col rounded-[14px] border border-border/50 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                flex: isHovered ? 3 : otherHovered ? 1 : 1,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Header bar */}
              <div className={`flex items-center justify-between px-[14px] py-[8px] bg-gradient-to-r ${act.accent} border-b border-border/30 shrink-0`}>
                <div className="flex items-center gap-[8px] min-w-0">
                  <div className="flex gap-[5px] shrink-0">
                    <div className="w-[9px] h-[9px] rounded-full bg-red-400/70" />
                    <div className="w-[9px] h-[9px] rounded-full bg-yellow-400/70" />
                    <div className="w-[9px] h-[9px] rounded-full bg-green-400/70" />
                  </div>
                  <span className={`text-[13px] font-semibold text-foreground truncate transition-opacity duration-300 ${otherHovered ? "opacity-50" : "opacity-100"}`}>
                    {act.label}
                  </span>
                </div>
                <a
                  href={act.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`shrink-0 p-[4px] rounded-[6px] hover:bg-background/40 text-muted-foreground hover:text-foreground transition-all ${otherHovered ? "opacity-0" : "opacity-100"}`}
                >
                  <ExternalLink className="w-[14px] h-[14px]" />
                </a>
              </div>

              {/* iframe */}
              <div className="flex-1 min-h-0 relative">
                <iframe
                  src={act.url}
                  className="w-full h-full border-0"
                  title={act.label}
                />

                {/* Overlay when collapsed */}
                <div
                  className={`absolute inset-0 bg-background/40 backdrop-blur-[2px] transition-opacity duration-500 pointer-events-none ${otherHovered ? "opacity-100" : "opacity-0"}`}
                />
              </div>

              {/* Collapsed label overlay */}
              {otherHovered && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className={`px-[16px] py-[8px] rounded-[10px] ${act.border} border bg-background/80 backdrop-blur-sm`}>
                    <span className="text-[15px] font-bold text-foreground">{act.tag}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
};
