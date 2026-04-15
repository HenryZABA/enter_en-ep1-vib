import { SlideLayout } from "@/components/slides";

const items = [
  "A clear understanding of what vibe coding actually is - and why it matters now",
  "The potential application scenarios in all industries - and what mindset you should prepare",
  "Build something cool - 20 minutes to build - from scratch, live, in this room",
  "A live URL you can share tonight",
  "Free credits to keep building after the session",
];

export const Slide02Opening = () => (
  <SlideLayout title="In the next 45 minutes" centerContent>
    <div className="flex flex-col justify-center h-full w-full max-w-4xl mx-auto -mt-8">
      <div className="space-y-5">
        {items.map((text, i) => (
          <div key={i} className="flex items-start gap-5">
            <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-semibold text-muted-foreground">
              {i + 1}
            </span>
            <p className="text-lg md:text-2xl text-foreground/85 leading-relaxed pt-0.5">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
