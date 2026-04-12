import { SlideLayout } from "@/components/slides";
import { Sparkles, Rocket } from "lucide-react";

export const Slide02WhatIsShi = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col h-full justify-center px-4 md:px-12 w-full max-w-7xl">
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Column 1: What is Vibe Coding? */}
        <div className="group relative">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#e24d8f] via-purple-500 to-[#e24d8f] rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-[#1a1a1d]/90 to-[#0f0f11]/90 backdrop-blur-sm rounded-3xl p-8 border border-[#e24d8f]/20 hover:border-[#e24d8f]/40 transition-all duration-300 h-full">
            {/* Icon Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-[#e24d8f] to-purple-600 rounded-2xl shadow-lg shadow-[#e24d8f]/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                What is Vibe Coding?
              </h3>
            </div>

            {/* Content */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="text-white/90">
                Vibe coding is <span className="font-bold text-[#e24d8f]">building real products</span> by just describing what you want — in plain language.
              </p>
              
              <div className="space-y-2 pl-4 border-l-2 border-[#e24d8f]/40">
                <p className="text-white/80">No syntax.</p>
                <p className="text-white/80">No CS degree.</p>
                <p className="text-white/80">No developer needed.</p>
              </div>

              <p className="text-white/90">
                You bring the idea. <span className="font-semibold text-[#e24d8f]">AI writes the code</span>, connects the backend, and deploys it live.
              </p>

              <div className="pt-4">
                <p className="text-xl md:text-2xl font-bold text-[#e24d8f] leading-tight">
                  The barrier between idea and product is gone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: What You'll Walk Away With Tonight */}
        <div className="group relative">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-[#e24d8f] to-purple-500 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-[#1a1a1d]/90 to-[#0f0f11]/90 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
            {/* Icon Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-[#e24d8f] rounded-2xl shadow-lg shadow-purple-500/20">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                What You'll Walk Away With Tonight
              </h3>
            </div>

            {/* Content - List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#e24d8f] group-hover/item:scale-150 transition-transform"></div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  A clear understanding of what vibe coding actually is — and why it matters now
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#e24d8f] group-hover/item:scale-150 transition-transform"></div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  A hands-on look at <span className="font-semibold text-[#e24d8f]">Enter</span>, Vibe Coding you need to know about
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#e24d8f] group-hover/item:scale-150 transition-transform"></div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  <span className="font-bold text-[#e24d8f]">20 minutes</span> to build something real — from scratch, live, in this room
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#e24d8f] group-hover/item:scale-150 transition-transform"></div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  A <span className="font-semibold text-[#e24d8f]">live URL</span> you can share tonight
                </p>
              </div>

              <div className="flex items-start gap-3 group/item">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#e24d8f] group-hover/item:scale-150 transition-transform"></div>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  <span className="font-semibold text-[#e24d8f]">Free credits</span> to keep building after the session
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <p className="text-lg md:text-xl font-bold text-purple-400 leading-tight">
                  You don't need to know how to code. You just need an idea.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </SlideLayout>
);