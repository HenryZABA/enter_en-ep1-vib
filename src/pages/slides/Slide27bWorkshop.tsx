import { Rocket } from "lucide-react";

export function Slide27bWorkshop() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 md:px-8 space-y-6 md:space-y-8">
      {/* Simple Title */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
        WORKSHOP TIME
      </h1>

      {/* Main Heading */}
      <div className="flex items-center gap-3 justify-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          It's Your Turn — Let's Vibe Code
        </h2>
        <Rocket className="w-8 h-8 md:w-12 md:h-12" />
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-4 md:space-y-5 text-left">
        <p className="text-base md:text-xl leading-relaxed">
          We now have <span className="font-bold">20 minutes</span> to try Enter hands-on.
        </p>

        <p className="text-base md:text-xl leading-relaxed">
          Open <span className="font-bold">enter.pro</span>, sign up if you haven't yet, and start building. 
          Just describe what you want to create — a portfolio, a startup landing page, a tool, anything — and let the AI build it for you. 
          <span className="font-semibold"> No code required. No experience needed.</span>
        </p>

        <p className="text-base md:text-xl leading-relaxed">
          This is your chance to experience vibe coding in real time — from <span className="font-bold">idea to live product</span>, in one session.
        </p>

        <p className="text-base md:text-xl leading-relaxed">
          The goal is simple: <span className="font-semibold">Get comfortable with the platform. See how fast you can go from a sentence to something real.</span>
        </p>

        <p className="text-base md:text-xl leading-relaxed">
          At the end of the 20 minutes, a few of you will have the chance to <span className="font-bold">share what you built</span> with the room.
        </p>

        {/* Gift Section */}
        <div className="pt-4 p-6 rounded-2xl bg-secondary/30 border">
          <p className="text-lg md:text-2xl font-bold leading-relaxed">
            🎁 For everyone who wants to keep building after tonight — we'll provide an <span className="font-bold">Enter Pro plan</span> so you can take your project further.
          </p>
        </div>
      </div>
    </div>
  );
}
