import { SlideLayout } from "@/components/slides";

const images = [
  { src: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/498e.png", alt: "PGC 模板成果 1" },
  { src: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/b7b2.png", alt: "PGC 模板成果 2" },
  { src: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100006299/8ca4.png", alt: "PGC 模板成果 3" },
];

export const SlideDB10bPGCShowcase = () => (
  <SlideLayout title="PGC 自动化成果展示">
    <div className="flex flex-col h-full justify-center px-2 md:px-6 space-y-4 md:space-y-5">
      {/* Stats banner */}
      <div className="flex items-center justify-center gap-6 md:gap-12">
        <div className="text-center">
          <span className="text-3xl md:text-5xl font-bold text-primary">300+</span>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">已生成内容</p>
        </div>
        <div className="w-px h-10 bg-border/50" />
        <div className="text-center">
          <span className="text-3xl md:text-5xl font-bold text-primary">~2h</span>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">单批准备时间</p>
        </div>
        <div className="w-px h-10 bg-border/50" />
        <div className="text-center">
          <span className="text-3xl md:text-5xl font-bold text-primary">7+</span>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">内容类型覆盖</p>
        </div>
      </div>

      {/* Image gallery - 3 stacked screenshots */}
      <div className="flex-1 min-h-0 grid grid-rows-3 gap-3 md:gap-4">
        {images.map((img) => (
          <div
            key={img.alt}
            className="rounded-xl border border-border/50 overflow-hidden bg-card/30"
          >
            <img
              src={img.src}
              alt={img.alt}
              crossOrigin="anonymous"
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      <p className="text-[10px] md:text-xs text-muted-foreground text-center">
        Landing Page / Portfolio / AI App / Dashboard 等多品类模板 — Enter.pro Discover 页面实拍
      </p>
    </div>
  </SlideLayout>
);
