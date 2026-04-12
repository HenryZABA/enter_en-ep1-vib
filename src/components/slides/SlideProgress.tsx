export interface SlideProgressProps {
  current: number;
  total: number;
}

export const SlideProgress = ({ current, total }: SlideProgressProps) => (
  <div className="absolute top-0 left-0 w-full h-1 bg-muted z-50">
    <div
      className="h-full bg-primary transition-all duration-300 ease-out"
      style={{ width: `${(current / total) * 100}%` }}
    />
  </div>
);
