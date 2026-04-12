import { useEffect, useCallback, useState, useRef, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGroups } from "@/hooks/useGroups";
import {
  slides,
  sectionNames,
  interactiveSlideIndices,
  slideNotes,
  slideTitles,
} from "@/pages/slides/slideConfig";
import {
  SlideHeader,
  SlideProgress,
  SlideNavigation,
  SlidePageIndicator,
} from "@/components/slides";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GroupPlayer() {
  const { groupId, slideIndex } = useParams();
  const navigate = useNavigate();
  const { getGroup } = useGroups();
  const group = getGroup(groupId || "");

  const currentIndex = parseInt(slideIndex || "1") - 1;
  const [blockNavigation, setBlockNavigation] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSlides = group?.slideIndices.length ?? 0;
  const safeIndex = Math.max(0, Math.min(currentIndex, totalSlides - 1));
  const masterIndex = group?.slideIndices[safeIndex] ?? 0;
  const isInteractiveSlide = interactiveSlideIndices.includes(masterIndex);

  const groupTitles = useMemo(
    () => (group?.slideIndices ?? []).map((i) => slideTitles[i] || ""),
    [group?.slideIndices]
  );
  const groupSections = useMemo(
    () => (group?.slideIndices ?? []).map((i) => sectionNames[i] || ""),
    [group?.slideIndices]
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        navigate(`/group/${groupId}/play/${index + 1}`);
      }
    },
    [navigate, totalSlides, groupId]
  );

  const nextSlide = useCallback(
    () => goToSlide(safeIndex + 1),
    [goToSlide, safeIndex]
  );
  const prevSlide = useCallback(
    () => goToSlide(safeIndex - 1),
    [goToSlide, safeIndex]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (!blockNavigation) {
          if (deltaX < 0) nextSlide();
          else prevSlide();
        }
      }
      touchStartX.current = null;
      touchStartY.current = null;
    },
    [blockNavigation, nextSlide, prevSlide]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(`/group/${groupId}`);
        return;
      }
      if (blockNavigation) return;
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
  }, [safeIndex, goToSlide, blockNavigation, navigate, groupId]);

  useEffect(() => {
    if (!isInteractiveSlide) setBlockNavigation(false);
  }, [safeIndex, isInteractiveSlide]);

  useEffect(() => {
    const title = slideTitles[masterIndex] || "Presentation";
    document.title = `${title} | ${group?.name ?? ""}`;
  }, [masterIndex, group?.name]);

  // Early return AFTER all hooks
  if (!group || group.slideIndices.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-muted-foreground">Group not found or empty.</p>
      </div>
    );
  }

  const CurrentSlide = slides[masterIndex];
  const showPageIndicator = safeIndex > 0 && safeIndex < totalSlides - 1;

  return (
    <div
      className="h-screen w-full bg-background text-foreground overflow-hidden relative selection:bg-primary/20"
      onClick={(e) => {
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
      <SlideHeader sectionName={groupSections[safeIndex]} />
      <SlideProgress current={safeIndex + 1} total={totalSlides} />
      <SlidePageIndicator
        pageNumber={safeIndex + 1}
        note={slideNotes[masterIndex]}
        show={showPageIndicator}
      />

      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-3 left-3 z-50 opacity-0 hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/group/${groupId}`);
        }}
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back
      </Button>

      <div className="h-full w-full p-4 md:p-12">
        {isInteractiveSlide ? (
          <CurrentSlide onBlockNavigation={setBlockNavigation} />
        ) : (
          <CurrentSlide />
        )}
      </div>

      <SlideNavigation
        current={safeIndex}
        total={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        slideTitles={groupTitles}
        sectionNames={groupSections}
        onGoToSlide={goToSlide}
      />
    </div>
  );
}
