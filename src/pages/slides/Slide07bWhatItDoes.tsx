import { SlideLayout } from "@/components/slides";
export const Slide07bWhatItDoes = () => <SlideLayout title="What It Actually Does">
    <div className="flex flex-col h-full px-4 md:px-8">
      {/* Header */}
      <div className="mb-3">
        <p className="text-sm md:text-base text-muted-foreground mb-2">⚙️ Three things, end to end:</p>
      </div>

      {/* Content */}
      <div className="space-y-4 border-t border-border pt-3">
        {/* Section 1 */}
        <div className="space-y-2 pb-3 border-b border-border/50">
          <h3 className="text-lg md:text-2xl font-bold text-[#D44758FF]">
            1. Design → Code → Deploy, in one place
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            You describe what you want. <span className="font-semibold text-[#D54654FF]">Enter</span>'s AI Agent doesn't just generate code — 
            it <span className="font-semibold">plans first</span> (Plan Mode), asks clarifying questions, structures the architecture, then builds.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            React + Tailwind output. Clean, exportable, yours.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-2 pb-3 border-b border-border/50">
          <h3 className="text-lg md:text-2xl font-bold text-[#D54655FF]">
            2. Full-stack out of the box
          </h3>
          <p className="text-sm md:text-base leading-relaxed mb-2">
            This isn't a website builder. <span className="text-[#e24d8f] font-semibold">Enter</span> gives you:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="px-3 py-2 rounded-lg bg-[#e24d8f]/10 border border-[#e24d8f]/20">
              <p className="text-xs md:text-sm font-medium">Real database (Supabase)</p>
            </div>
            <div className="px-3 py-2 rounded-lg bg-[#e24d8f]/10 border border-[#e24d8f]/20">
              <p className="text-xs md:text-sm font-medium">Authentication</p>
            </div>
            <div className="px-3 py-2 rounded-lg bg-[#e24d8f]/10 border border-[#e24d8f]/20">
              <p className="text-xs md:text-sm font-medium">Payments (Stripe)</p>
            </div>
            <div className="px-3 py-2 rounded-lg bg-[#e24d8f]/10 border border-[#e24d8f]/20">
              <p className="text-xs md:text-sm font-medium">Storage</p>
            </div>
            <div className="px-3 py-2 rounded-lg bg-[#e24d8f]/10 border border-[#e24d8f]/20">
              <p className="text-xs md:text-sm font-medium">Serverless functions</p>
            </div>
            <div className="px-3 py-2 rounded-lg bg-[#e24d8f]/10 border border-[#e24d8f]/20">
              <p className="text-xs md:text-sm font-medium">Cron jobs</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground pt-2">
            You can build a SaaS with login, user data, and billing — <span className="font-semibold">without touching a terminal</span>.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-2xl font-bold text-[#D54755FF]">
            3. AI at the core, not bolted on
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Every major model — <span className="font-semibold">GPT, Claude, Gemini</span> — available in one place. 
            You can even build your own AI-powered products inside <span className="font-semibold text-[#D6495AFF]">Enter</span>.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            The platform isn't just built with AI. <span className="font-semibold text-[#D54655FF]">It lets you build AI things.</span>
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>;