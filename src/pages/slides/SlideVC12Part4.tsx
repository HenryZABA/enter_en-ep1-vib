import { SlideLayout } from "@/components/slides";

export const SlideVC12Part4 = () => (
  <SlideLayout title="" centerContent>
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
      <p className="text-lg md:text-2xl font-medium text-primary tracking-wide">Part 4</p>
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-center">
        机会与展望
      </h2>
      <div className="mt-4 md:mt-8 h-1 w-24 md:w-32 bg-primary rounded-full" />
      <p className="text-xl md:text-3xl text-muted-foreground mt-6 max-w-3xl text-center">
        普通用户的<span className="text-primary font-bold">萌芽期</span>，运营的<span className="text-primary font-bold">窗口期</span>
      </p>
    </div>
  </SlideLayout>
);
