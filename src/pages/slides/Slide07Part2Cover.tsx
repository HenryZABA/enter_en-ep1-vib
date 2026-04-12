import { SlideLayout } from "@/components/slides";

export const Slide07Part2Cover = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
      <p className="text-lg md:text-2xl font-medium text-primary tracking-wide">Part 2</p>
      <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">Application Scenarios</h2>
      <div className="mt-4 md:mt-8 h-1 w-24 md:w-32 bg-primary rounded-full" />
      <p className="text-base md:text-xl text-muted-foreground mt-4 max-w-2xl text-center">
        "We" are the biggest disruptors, and you are the biggest beneficiaries
      </p>
    </div>
  </SlideLayout>
);
