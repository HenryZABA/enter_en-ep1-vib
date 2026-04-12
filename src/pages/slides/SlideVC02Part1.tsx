import { SlideLayout } from "@/components/slides";

export const SlideVC02Part1 = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
      <p className="text-lg md:text-2xl font-medium text-primary tracking-wide">Part 1</p>
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-center">
        个人感悟
      </h2>
      <div className="mt-4 md:mt-8 h-1 w-24 md:w-32 bg-primary rounded-full" />
      <p className="text-xl md:text-3xl text-muted-foreground mt-6 max-w-2xl text-center">
        从 <span className="text-primary font-bold">Future Archaeology</span> 到 <span className="text-primary font-bold">Enter</span>
      </p>
    </div>
  </SlideLayout>
);
