import { SlideLayout } from "@/components/slides";

export const Slide02Opening = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16 max-w-5xl mx-auto">
      {/* Opening statement */}
      <div className="mb-12 text-center">
        <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-6">
          I believe most of you have used <span className="font-semibold text-[#e24d8f]">ChatGPT</span>, <span className="font-semibold text-purple-500">Gemini</span>, or <span className="font-semibold text-blue-500">Doubao</span> before.
        </p>
        <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed">
          But today, we're going <span className="font-bold text-[#e24d8f]">one step further</span>.
        </p>
        <div className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-[#e24d8f]/15 to-purple-500/15 rounded-2xl border border-[#e24d8f]/30">
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e24d8f] to-purple-500 bg-clip-text text-transparent">
            Our topic today is Vibe Coding
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full">
        <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
          In the next <span className="text-[#e24d8f]">45 minutes</span>, I'll walk you through:
        </p>
        
        <div className="space-y-4">
          {[
            "A clear understanding of what vibe coding actually is - and why it matters now",
            "The potential application scenarios in all industries - and what mindset you should prepare",
            "Build something cool - 20 minutes to build - from scratch, live, in this room",
            "A live URL you can share tonight",
            "Free credits to keep building after the session"
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#e24d8f] to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#e24d8f]/30 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed pt-1.5">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);
