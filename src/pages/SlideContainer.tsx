import { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  SlideHeader,
  SlideProgress,
  SlideNavigation,
  SlidePageIndicator
} from "@/components/slides";
import {
  slides,
  sectionNames,
  interactiveSlideIndices,
  slideNotes,
  slideTitles
} from "@/pages/slides";

export default function SlideContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentSlideIndex = parseInt(id || "1") - 1;
  const totalSlides = slides.length;
  const [blockNavigation, setBlockNavigation] = useState(false);
  
  // Touch handling for mobile swipe navigation
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Ensure valid slide index
  const safeIndex = Math.max(0, Math.min(currentSlideIndex, totalSlides - 1));
  const CurrentSlide = slides[safeIndex];
  const isInteractiveSlide = interactiveSlideIndices.includes(safeIndex);

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        navigate(`/slide/${index + 1}`);
      }
    },
    [navigate, totalSlides]
  );

  const nextSlide = useCallback(
    () => goToSlide(safeIndex + 1),
    [goToSlide, safeIndex]
  );
  const prevSlide = useCallback(
    () => goToSlide(safeIndex - 1),
    [goToSlide, safeIndex]
  );

  // Touch event handlers for swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;
    
    // Only trigger if horizontal swipe is dominant and exceeds threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (!blockNavigation) {
        if (deltaX < 0) {
          // Swipe left - next slide
          nextSlide();
        } else {
          // Swipe right - previous slide
          prevSlide();
        }
      }
    }
    
    touchStartX.current = null;
    touchStartY.current = null;
  }, [blockNavigation, nextSlide, prevSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate if we are on the last slide and pressing Enter (reserved for interaction)
      if (safeIndex === totalSlides - 1 && e.key === "Enter") {
        return;
      }

      // Don't navigate if current slide is blocking navigation (has internal steps)
      // Block ALL navigation keys when in interactive mode
      if (blockNavigation) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
        case "Enter":
          goToSlide(safeIndex + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          goToSlide(safeIndex - 1);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [safeIndex, goToSlide, totalSlides, blockNavigation]);

  // Reset blockNavigation when slide changes
  useEffect(() => {
    if (!isInteractiveSlide) {
      setBlockNavigation(false);
    }
  }, [safeIndex, isInteractiveSlide]);

  // Update document title based on current slide
  useEffect(() => {
    const title = slideTitles[safeIndex] || "Enter 2026";
    document.title = `${title} | Enter.pro`;
  }, [safeIndex]);

  // Check if page indicator should be shown (not on first or last slide)
  const showPageIndicator = safeIndex > 0 && safeIndex < totalSlides - 1;

  return (
    <div
      className="h-screen w-full bg-background text-foreground overflow-hidden relative selection:bg-primary/20"
      onClick={(e) => {
        // Only navigate if clicking the background, not interactive elements
        if (
          (e.target as HTMLElement).tagName !== "BUTTON" &&
          !blockNavigation
        ) {
          nextSlide();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Global Header */}
      <SlideHeader sectionName={sectionNames[safeIndex]} />

      {/* Progress Bar */}
      <SlideProgress current={safeIndex + 1} total={totalSlides} />

      {/* Page Number Indicator */}
      <SlidePageIndicator
        pageNumber={safeIndex + 1}
        note={slideNotes[safeIndex]}
        show={showPageIndicator}
      />

      {/* Slide Content */}
      <div className="h-full w-full p-4 md:p-12">
        {isInteractiveSlide ? (
          <CurrentSlide onBlockNavigation={setBlockNavigation} />
        ) : (
          <CurrentSlide />
        )}
      </div>

      {/* Navigation Controls */}
      <SlideNavigation
        current={safeIndex}
        total={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        slideTitles={slideTitles}
        sectionNames={sectionNames}
        onGoToSlide={goToSlide}
      />
    </div>
  );
}
