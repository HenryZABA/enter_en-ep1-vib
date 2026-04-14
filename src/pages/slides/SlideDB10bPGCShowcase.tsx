import { SlideLayout } from "@/components/slides";
import { useEffect, useRef, useState } from "react";

const images = [
  { src: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/498e.png", alt: "PGC 模板成果 1" },
  { src: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/b7b2.png", alt: "PGC 模板成果 2" },
  { src: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/8ca4.png", alt: "PGC 模板成果 3" },
];

export const SlideDB10bPGCShowcase = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <SlideLayout title="PGC 自动化成果展示">
      <div className="flex flex-col h-full px-[80px] py-[30px] gap-[24px]">
        {/* Stats banner */}
        <div className="flex items-center justify-center gap-[48px]">
          <div className="text-center">
            <span className="text-[48px] font-bold text-primary">300+</span>
            <p className="text-[16px] text-muted-foreground mt-[2px]">已生成内容</p>
          </div>
          <div className="w-px h-[48px] bg-border/50" />
          <div className="text-center">
            <span className="text-[48px] font-bold text-primary">~2h</span>
            <p className="text-[16px] text-muted-foreground mt-[2px]">单批准备时间</p>
          </div>
          <div className="w-px h-[48px] bg-border/50" />
          <div className="text-center">
            <span className="text-[48px] font-bold text-primary">7+</span>
            <p className="text-[16px] text-muted-foreground mt-[2px]">内容类型覆盖</p>
          </div>
        </div>

        {/* Scrolling image showcase */}
        <div className="flex-1 min-h-0 relative overflow-hidden rounded-[16px] border border-border/40 bg-card/20">
          {/* All 3 images stacked, sliding up */}
          <div
            className="absolute inset-x-0 top-0 flex flex-col transition-transform duration-[800ms] ease-in-out"
            style={{ transform: `translateY(-${active * 33.333}%)` }}
          >
            {images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                crossOrigin="anonymous"
                className="w-full object-cover object-top"
                style={{ minHeight: "100%" }}
              />
            ))}
          </div>

          {/* Top + bottom fade */}
          <div className="absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-background/60 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-[40px] bg-gradient-to-t from-background/60 to-transparent pointer-events-none z-10" />

          {/* Dots indicator */}
          <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex gap-[8px] z-20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  if (timerRef.current) clearInterval(timerRef.current);
                  timerRef.current = setInterval(() => {
                    setActive((prev) => (prev + 1) % images.length);
                  }, 3500);
                }}
                className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary scale-125" : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-[14px] text-muted-foreground text-center">
          Landing Page / Portfolio / AI App / Dashboard 等多品类模板 — Enter.pro Discover 页面实拍
        </p>
      </div>
    </SlideLayout>
  );
};
