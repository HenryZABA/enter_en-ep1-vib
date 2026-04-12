import { SlideLayout } from "@/components/slides";
export const Slide03Preview = () => <SlideLayout title="Course Overview">
    <div className="flex flex-col justify-start pt-4 md:pt-8 flex-1 max-w-4xl">
      <div className="space-y-4 md:space-y-6">
        {[{
        num: "01",
        title: "Industry trends and player distribution",
        tag: "Industry"
      }, {
        num: "02",
        title: "Application Scenarios",
        tag: "Industry"
      }, {
        num: "03",
        title: "Key Mindsets",
        tag: "Individual"
      }, {
        num: "04",
        title: "Build in LEGO",
        tag: "Individual"
      }, {
        num: "05",
        title: "Product Demo",
        tag: "Demo"
      }, {
        num: "06",
        title: "Workshop",
        tag: "Individual"
      }].map((item, i) => <div key={i} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl bg-secondary/30 border">
            <div className="text-lg md:text-2xl font-bold text-primary min-w-[40px]">{item.num}</div>
            <div className="flex-1">
              <span className="text-sm md:text-lg font-medium">{item.title}</span>
            </div>
            <div className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full ${item.tag === "Industry" ? "bg-blue-500/30 text-blue-500" : item.tag === "Demo" ? "bg-orange-500/30 text-orange-500" : "bg-green-500/30 text-green-600"}`}>
              {item.tag}
            </div>
          </div>)}
      </div>

      
    </div>
  </SlideLayout>;