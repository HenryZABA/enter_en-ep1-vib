import { SlideLayout } from "@/components/slides";
import { Briefcase, Globe } from "lucide-react";

export const SlideVC14Projects = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center px-4 md:px-12 max-w-5xl">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-8 md:mb-12">
        看看大家在做什么
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl">
        <div className="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-secondary/30 border hover:border-primary/30 transition-all">
          <div className="p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">内部运营工具</h3>
          <p className="text-sm text-muted-foreground text-center">
            为运营部门构建的 AI 工具，解决实际工作痛点
          </p>
        </div>

        <div className="group flex flex-col items-center p-6 md:p-8 rounded-2xl bg-secondary/30 border hover:border-primary/30 transition-all">
          <div className="p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">用户项目展示</h3>
          <p className="text-sm text-muted-foreground text-center">
            所有正在做 Vibe Coding 的用户，他们在做什么好玩的东西
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
