export const Slide01Cover = () => <div className="flex flex-col justify-between h-full animate-fade-in p-4 md:p-12">
    {/* Top Left: Title */}
    <div className="space-y-2 md:space-y-4 mt-8 md:mt-20">
      <p className="text-lg md:text-2xl font-medium text-primary tracking-wide"></p>
      <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none">
        Vibe Coding
      </h1>
      <p className="text-xl md:text-4xl lg:text-6xl font-medium text-muted-foreground tracking-tight">Workshop</p>
    </div>

    {/* Bottom Right: Info */}
    <div className="flex flex-col items-start space-y-1 md:space-y-2 text-base md:text-xl lg:text-2xl font-medium text-muted-foreground mb-4 md:mb-12">
      <p>Enter.pro</p>
      <p>2026-04-01
</p>
    </div>
  </div>;