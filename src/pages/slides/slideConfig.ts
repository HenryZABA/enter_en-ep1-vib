import { Slide01Cover } from "./Slide01Cover";
import { Slide02WhatIsShi } from "./Slide02WhatIsShi";
import { Slide03Preview } from "./Slide03Preview";
import { Slide04Part1Cover } from "./Slide04Part1Cover";
import { Slide05Evolution } from "./Slide05Evolution";
import { Slide06Conclusion1 } from "./Slide06Conclusion1";
import { Slide06bWhatIsEnter } from "./Slide06bWhatIsEnter";
import { Slide07Part2Cover } from "./Slide07Part2Cover";
import { Slide07bWhatItDoes } from "./Slide07bWhatItDoes";
import { Slide08bNewFeatures } from "./Slide08bNewFeatures";
import { Slide08Players } from "./Slide08Players";
import { Slide09Scenarios } from "./Slide09Scenarios";
import { Slide10Opportunity } from "./Slide10Opportunity";
import { Slide11Part3Cover } from "./Slide11Part3Cover";
import { Slide12TwoMindsets } from "./Slide12TwoMindsets";
import { Slide17cAttitude } from "./Slide17cAttitude";
import { Slide22Part5Cover } from "./Slide22Part5Cover";
import { Slide22bFramework } from "./Slide22bFramework";
import { Slide23Step12 } from "./Slide23Step12";
import { Slide24Step34 } from "./Slide24Step34";
import { Slide25Step56 } from "./Slide25Step56";
import { Slide26Step78 } from "./Slide26Step78";
import { Slide27Part6Cover } from "./Slide27Part6Cover";
import { Slide27bWorkshop } from "./Slide27bWorkshop";
import { Slide28End } from "./Slide28End";
import { Slide29Evolution } from "./Slide29Evolution";

// All slides in order
export const slides = [
  Slide01Cover,
  Slide02WhatIsShi,
  Slide03Preview,
  Slide04Part1Cover,
  Slide05Evolution,
  Slide06Conclusion1,
  Slide06bWhatIsEnter,
  Slide07bWhatItDoes,
  Slide08bNewFeatures,
  Slide07Part2Cover,
  Slide08Players,
  Slide09Scenarios,
  Slide10Opportunity,
  Slide11Part3Cover,
  Slide12TwoMindsets,
  Slide17cAttitude,
  Slide22Part5Cover,
  Slide22bFramework,
  Slide23Step12,
  Slide24Step34,
  Slide25Step56,
  Slide26Step78,
  Slide27Part6Cover,
  Slide29Evolution,
  Slide27bWorkshop,
  Slide28End
];

// Section names for each slide (empty string means no indicator)
export const sectionNames: string[] = [
  "", // Slide 1: Cover
  "", // Slide 2: What is Momentum
  "", // Slide 3: Preview
  "Part 1 Industry Trends", // Slide 4: Part 1 Cover
  "Part 1 Industry Trends", // Slide 5: Evolution
  "Part 1 Industry Trends", // Slide 6: Conclusion 1
  "", // Slide 6b: What is Enter
  "", // Slide 7b: What It Actually Does
  "", // Slide 8b: New Features
  "Part 2 Application Scenarios", // Slide 7: Part 2 Cover
  "Part 2 Application Scenarios", // Slide 8: Players
  "Part 2 Application Scenarios", // Slide 9: Scenarios
  "Part 2 Application Scenarios", // Slide 10: Opportunity
  "Part 3 Two Mindsets", // Slide 11: Part 3 Cover
  "Part 3 Two Mindsets", // Slide 12: Two Mindsets
  "Part 3 Two Mindsets", // Slide 17c: Attitude
  "Part 5 LEGO Building", // Slide 22: Part 5 Cover
  "Part 5 LEGO Building", // Slide 23: Framework
  "Part 5 LEGO Building", // Slide 24: Step 1-2
  "Part 5 LEGO Building", // Slide 24: Step 3-4
  "Part 5 LEGO Building", // Slide 25: Step 5-6
  "Part 5 LEGO Building", // Slide 26: Step 7-8
  "", // Slide 27: Part 6 Cover
  "", // Slide 28: Evolution (duplicate)
  "", // Slide 29: Workshop Time
  "" // Slide 30: End
];

// Slides that have internal navigation (step-based)
export const interactiveSlideIndices = [25]; // Slide28End (now index 25)

// Slide-specific notes (key is slide index, value is note text)
export const slideNotes: Record<number, string> = {
  3: "Went through the evolution from statistical probability prediction to deep context understanding, then to autonomous task planning",
  4: "Technology moves forward, products move forward too, no one is absolutely safe from being eliminated by the times",
  6: "Vibe Coding is still very early, the first wave has just begun",
  10: "Learning to code is not the focus of this course, first feel the Vibe, then gradually deepen. Trust me, in the future 50%-60% of products can be built through them",
  11: "For product people, the most important is the user; for engineers, the most important is the product"
};

// Slide titles for browser tab
export const slideTitles: string[] = [
  "EP1 | Vibe Coding - The Tide is Irreversible, Those Who Ride It Will Prevail",
  "What is 'Momentum'",
  "Course Overview",
  "Part 1 Industry Trends",
  "AI Coding Three-Stage Evolution",
  "Industry Momentum Summary",
  "What is Enter?",
  "What It Actually Does",
  "Enter's New Features",
  "Part 2 Application Scenarios",
  "Player Categories",
  "Typical Application Scenarios",
  "Potential and Opportunities",
  "Part 3 Two Key Mindsets for Super Individuals",
  "Product Thinking vs Engineering Thinking",
  "Attitude",
  "Part 5 Building Products Like LEGO",
  "Build Products with Product Framework Thinking",
  "Steps 1-2: Form + Version Control",
  "Steps 3-4: Data + Service",
  "Steps 5-6: Distribution + Analytics",
  "Steps 7-8: SEO + Payment",
  "Part 6 Enter Product Demo",
  "How to get started on Enter.pro",
  "Workshop Time",
  "Thank You All"
];
