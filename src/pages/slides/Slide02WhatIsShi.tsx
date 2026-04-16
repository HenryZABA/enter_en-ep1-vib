import { SlideLayout } from "@/components/slides";

export const Slide02WhatIsShi = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto w-full">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
        What is{" "}
        <span className="bg-gradient-to-r from-[#e24d8f] to-purple-500 bg-clip-text text-transparent">
          Vibe Coding
        </span>
        ?
      </h2>

      {/* Body */}
      <div className="space-y-6 text-xl md:text-2xl leading-relaxed">
        <p className="text-foreground/90">
          Vibe coding is <span className="font-bold text-[#e24d8f]">building real products</span> by just describing what you want — in plain language.
        </p>

        {/* No syntax / No CS degree / No developer */}
        <div className="flex flex-wrap gap-4 py-2">
          {["No syntax", "No CS degree", "No developer needed"].map((t) => (
            <span
              key={t}
              className="px-5 py-2 rounded-full border border-[#e24d8f]/30 bg-[#e24d8f]/10 text-foreground font-medium text-lg md:text-xl"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-foreground/90">
          You bring the idea. <span className="font-semibold text-[#e24d8f]">AI writes the code</span>, connects the backend, and deploys it live.
        </p>

        {/* Closing statement */}
        <div className="pt-4 border-t border-border">
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#e24d8f] to-purple-500 bg-clip-text text-transparent">
            The barrier between idea and product is gone.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
