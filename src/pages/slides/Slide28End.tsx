import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
export const Slide28End = () => {
  const triggerFireworks = useCallback(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 35,
      spread: 360,
      ticks: 80,
      zIndex: 1000
    };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 80 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        }
      });
      confetti({
        ...defaults,
        particleCount: particleCount * 0.6,
        origin: {
          x: randomInRange(0.4, 0.6),
          y: Math.random() - 0.2
        }
      });
    }, 120);
  }, []);

  // Trigger confetti automatically when slide loads
  useEffect(() => {
    triggerFireworks();
  }, [triggerFireworks]);
  return <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in relative overflow-hidden px-4">
      <div className="space-y-6 md:space-y-8 max-w-5xl">
        <p className="text-lg md:text-2xl text-primary"> Vibe Coding Workshop x ENTER</p>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
          Thank You All
        </h2>
        <p className="text-lg md:text-2xl text-muted-foreground">
          The tide is irreversible, those who ride it will prevail
        </p>

        {/* Social Media & Support Section */}
        <div className="pt-6 space-y-4 border-t border-border/50 mt-8">
          <div className="p-6 rounded-2xl bg-secondary/30 border space-y-3">
            <p className="text-base md:text-lg font-semibold">
              🎁 Want to keep building with Enter Pro?
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Tag us on social media and get <span className="font-bold">one month free Enter professional pricing</span>! We'd love to see what you learned and built tonight.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/20 space-y-2">
            <p className="text-sm md:text-base leading-relaxed">
              We're happy to keep in touch and provide help and assistance with this <span className="font-semibold">next generation of builders</span>.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              Let's build the future together. 🚀
            </p>
          </div>

          {/* Upcoming Event Section */}
          <div className="p-6 rounded-2xl bg-secondary/30 border space-y-4">
            <p className="text-base md:text-lg font-semibold">
              Wanting more? 🌟
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We are currently hosting another online event — more details in the WeChat group!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <img 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/e00a.png" 
                alt="Solo Founder Brand Event" 
                className="w-full h-auto rounded-lg border"
                crossOrigin="anonymous"
              />
              <img 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/cc50.png" 
                alt="Remix Challenge Rewards" 
                className="w-full h-auto rounded-lg border"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </div>
    </div>;
};