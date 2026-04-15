import { SlideLayout } from "@/components/slides";

export const Slide11Part3Cover = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
      <p className="text-lg md:text-2xl font-medium text-primary tracking-wide">Part 2</p>
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-center">
        Two Key Mindsets for Super Individuals
      </h2>
      <div className="mt-4 md:mt-8 h-1 w-24 md:w-32 bg-primary rounded-full" />
      <p className="text-xl md:text-3xl text-muted-foreground mt-6 max-w-2xl text-center">
        All products are about <span className="text-primary font-bold">"users"</span>, all engineering is about <span className="text-primary font-bold">"products"</span>
      </p>
    </div>
  </SlideLayout>
);
