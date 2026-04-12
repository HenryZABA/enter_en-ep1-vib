import { SlideLayout } from "@/components/slides";
export const Slide10Opportunity = () => <SlideLayout title="">
    <div className="flex flex-col h-full max-h-[75vh] px-4 md:px-8">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Unlocking potential is fundamentally about recalibrating "people"
        </h2>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 border-t border-b py-4 md:py-6  min-h-[40vh]">
        {/* Left column - Problem Set */}
        <div>
          <p className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase mb-3">Problem</p>
          <p className="text-sm md:text-lg leading-relaxed mb-3">
            From my perspective, its potential has not been fully tapped yet.
          </p>
          <p className="text-base md:text-xl font-medium leading-relaxed">
            The main reason lies in "people": people's potential hasn't been unleashed, or rather hasn't been properly directed toward "building products".
          </p>
        </div>

        {/* Right column - Evolution Logic */}
        <div className="border-l border-border pl-4 md:pl-8">
          <p className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase mb-3">Evolution</p>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-sm text-muted-foreground">01</span>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-1">Technology Democratization</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Making technology accessible without barriers. This is "feasible" today.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <span className="text-sm text-muted-foreground">02</span>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-1">Proper Usage</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Technology being used correctly. This needs to be achieved through "<span className="underline">cultivation</span>".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      {/* <div className="flex-1 min-h-[30px]" /> */}

      {/* Footer */}
      <div className="flex justify-between items-end pt-10">
        <p className="text-sm md:text-base text-primary"></p>
        <div className="text-right">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Conclusion</p>
          <p className="text-2xl md:text-4xl font-bold">
            "Individual Momentum"
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>;