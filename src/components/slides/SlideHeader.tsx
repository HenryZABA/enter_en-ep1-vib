export interface SlideHeaderProps {
  sectionName?: string;
}

const ENTER_URL = "https://enter.pro?link_id=5&utm_campaign=vibecoding&utm_medium=course&utm_source=waytoagi&utm_term=ep1";

export const SlideHeader = ({ sectionName }: SlideHeaderProps) => (
  <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50 flex items-center space-x-2 md:space-x-3">
    <a 
      href={ENTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity"
    >
      <img
        src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/tab-icon_4837.png"
        alt="Enter Logo"
        className="w-5 h-5 md:w-6 md:h-6 rounded-[4px]"
        crossOrigin="anonymous"
      />
      <span className="text-base md:text-xl font-bold tracking-tight">Enter</span>
    </a>
  </div>
);
