export interface SlidePageIndicatorProps {
  pageNumber: number;
  note?: string;
  show?: boolean;
}

export const SlidePageIndicator = ({
  pageNumber,
  note,
  show = true
}: SlidePageIndicatorProps) => {
  if (!show) return null;

  return (
    <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-center gap-2 md:gap-4">
      <span className="text-xs md:text-sm font-medium text-muted-foreground">
        {pageNumber}
      </span>
      {note && (
        <span className="hidden">{note}</span>
      )}
    </div>
  );
};
