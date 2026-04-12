import { SlideLayout, ScrollStack, ScrollStackItem } from "@/components/slides";

export function Slide08bNewFeatures() {
  return (
    <SlideLayout title="Enter's New Features">
      <ScrollStack
        itemDistance={60}
        itemScale={0.04}
        itemStackDistance={20}
        baseScale={0.9}
      >
        {/* Skills Section */}
        <ScrollStackItem
          itemStyle={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              🧠 Skills
              <span className="text-base font-normal text-white/80">— An Agent That Brings Expertise</span>
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Enable a Skill and the agent doesn't approximate what good looks like — it already knows. Enable the <span className="font-semibold">Stripe Skill</span> and it configures payments correctly, first time. Enable the <span className="font-semibold">CRUD API Skill</span> and it generates a clean one, not a draft you have to rewrite.
            </p>
            <p className="text-sm md:text-base font-semibold text-white">
              Skills are permanent. Every one you add lives in your library, compounding across every future project.
            </p>
            <p className="text-sm md:text-base italic text-yellow-300 font-medium">
              You stop explaining what good looks like. The agent already knows.
            </p>
          </div>
        </ScrollStackItem>

        {/* MCP Section */}
        <ScrollStackItem
          itemStyle={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              🔌 MCP
              <span className="text-base font-normal text-white/80">— The World Plugged In</span>
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Configure one JSON snippet and your <span className="font-semibold" style={{ color: '#fff' }}>Enter</span> agent connects directly to external services — <span className="font-semibold">Notion</span>, <span className="font-semibold">Supabase</span>, any live API.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              It doesn't hand you a blueprint to wire up later. It builds the wired-up version, from day one.
            </p>
            <p className="text-sm md:text-base italic text-yellow-300 font-semibold">
              One configuration. The world opens up.
            </p>
          </div>
        </ScrollStackItem>

        {/* Cloud Section */}
        <ScrollStackItem
          itemStyle={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              ☁️ Cloud
              <span className="text-base font-normal text-white/80">— From Done to Deployed in One Click</span>
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              <span className="font-semibold">Database</span>, <span className="font-semibold">storage</span>, <span className="font-semibold">compute</span> — all managed inside <span className="font-semibold">Enter</span>. One click ships to a global edge network with your own custom domain.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              The agent that built the code runs on the same infrastructure. Same system, designed together.
            </p>
            <p className="text-sm md:text-base italic text-yellow-300 font-semibold">
              Done to deployed. One click.
            </p>
          </div>
        </ScrollStackItem>

        {/* The Combination Section */}
        <ScrollStackItem
          itemStyle={{
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
              🔗 The Combination Is the Point
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Skills, Cloud, and MCP together mean <span className="font-semibold">Enter</span> owns the full journey — from the first prompt to a live, connected, deployed product.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Quality is handled. Infrastructure is handled. External connectivity is handled.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              The agent stays in the room for all of it — carrying the build from idea to something real, without stepping back and handing you the wheel.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-bold text-white mt-2 bg-black/20 p-3 rounded-lg">
              Not a faster way to generate code. A complete environment for building actual products. That's what the vibe coding era actually looks like, all the way to the end.
            </p>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </SlideLayout>
  );
}
