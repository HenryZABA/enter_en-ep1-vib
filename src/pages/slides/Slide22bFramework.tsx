import { SlideLayout } from "@/components/slides";

export const Slide22bFramework = () => (
  <SlideLayout centerContent>
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
        The normal workflow for traditional developers
      </h2>
      <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-center">
        Form - Data - Service - Distribution - Reach
      </p>
    </div>
  </SlideLayout>
);
