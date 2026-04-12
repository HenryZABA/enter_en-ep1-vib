import { SlideLayout } from "@/components/slides";
export const Slide06bWhatIsEnter = () => <SlideLayout title="What is Enter?">
    <div className="flex flex-col h-full px-4 md:px-8">
      {/* Mission Section */}
      <div className="mb-3 md:mb-4">
        <p className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase mb-2">🎯 The Mission</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-3">
          "Just Press <span className="text-[#D64C61FF]">Enter</span>, Ship Like a Pro."
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-2.5 border-t border-border pt-2.5">
        <p className="text-sm md:text-lg leading-relaxed">
          <span className="font-semibold text-[#D54755FF]">Enter</span>'s mission is to <span className="font-bold text-[#D54755FF]">collapse the distance between idea and product</span>.
        </p>

        {/* Visual "For Everyone" Section */}
        <div className="relative py-3 px-4 rounded-2xl bg-gradient-to-br from-[#e24d8f]/10 via-[#e24d8f]/5 to-transparent border-2 border-[#e24d8f]/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(226,77,143,0.1),transparent_50%)]" />
          <div className="relative space-y-2">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center leading-tight">
              For <span className="inline-block animate-pulse text-[#D6495AFF]">everyone</span> with an idea.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[#e24d8f]/30 text-xs md:text-sm">
                MBA students
              </div>
              <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[#e24d8f]/30 text-xs md:text-sm">
                Architects
              </div>
              <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[#e24d8f]/30 text-xs md:text-sm">
                Researchers
              </div>
              <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[#e24d8f]/30 text-xs md:text-sm">
                Designers
              </div>
              <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[#e24d8f]/30 text-xs md:text-sm">
                Founders
              </div>
              <div className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-[#e24d8f]/30 text-xs md:text-sm">
                You
              </div>
            </div>
          </div>
        </div>

        {/* Example Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="p-3 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors">
            <p className="text-sm font-semibold mb-1 text-[#D33C42FF]">Logistics Startup</p>
            <p className="text-xs text-muted-foreground">MBA student building a supply chain optimizer</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors">
            <p className="text-sm font-semibold mb-1 text-[#D6495BFF]">Design Tool</p>
            <p className="text-xs text-muted-foreground">Architecture student creating a 3D visualization platform</p>
          </div>
          <div className="p-3 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors">
            <p className="text-sm font-semibold mb-1 text-[#D5414BFF]">Data Workflow</p>
            <p className="text-xs text-muted-foreground">Biochem researcher automating lab analysis</p>
          </div>
        </div>

        {/* The Bet */}
        <div className="space-y-1.5">
          <p className="text-sm md:text-lg font-bold leading-snug">
            <span className="font-medium text-[#D6495BFF]">The bet <span className="text-[#D6495BFF]">Enter</span> is making:</span> The next generation of great products won't be built by whoever knows the most code — 
            they'll be built by <span className="text-[#D54655FF]">whoever has the best ideas and the right tools.</span>
          </p>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            When everyone can build, the best ideas win. When technical barriers disappear, 
            innovation comes from unexpected places. That's the world <span className="text-[#e24d8f] font-semibold">Enter</span> is creating.
          </p>
        </div>

        <div className="text-center pt-1">
          <p className="text-lg md:text-xl font-bold text-[#D6495BFF]">
            Enter wants to be that tool.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>;