import { cn } from "@/lib/utils";

export interface SlideLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  centerContent?: boolean;
}

export const SlideLayout = ({
  title,
  subtitle,
  children,
  centerContent = false
}: SlideLayoutProps) => (
  <div
    className={cn(
      "flex flex-col h-full animate-fade-in px-2 md:px-4",
      centerContent && !title ? "justify-center" : "pt-10 md:pt-8"
    )}
  >
    {/* Title Area - Only show if there's a title OR not centering content */}
    {(title || !centerContent) && (
      <div className="shrink-0 mb-4 md:mb-8">
        {title ? (
          <>
            <h2 className="text-xl md:text-4xl font-bold tracking-tight text-left leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg text-muted-foreground mt-2">
                {subtitle}
              </p>
            )}
          </>
        ) : (
          <div className="h-8 md:h-12" />
        )}
      </div>
    )}
    {/* Content Area */}
    <div
      className={cn(
        "flex-1 flex flex-col min-h-0",
        centerContent ? "items-center justify-center" : ""
      )}
    >
      {children}
    </div>
  </div>
);
