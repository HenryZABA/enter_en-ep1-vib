import { SlideLayout, ImagePreview } from "@/components/slides";
export const Slide29Evolution = () => <SlideLayout title="How to get started on Enter.pro">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-h-[82vh] overflow-auto">
      {/* Phase 1 */}
      <div className="flex flex-col p-4 md:p-6 rounded-2xl bg-secondary/30 border gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-bold text-sky-600">01</div>
          <div className="text-xs md:text-sm text-muted-foreground">Main Space
</div>
        </div>
        <h3 className="text-lg md:text-xl font-bold"></h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Before starting a project - you can check our library to get inspiration</p>
        
        {/* Images with caption */}
        <div className="flex-1 flex flex-col gap-3">
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/ef50.png" alt="Enter Templates" caption="We also have a components section where you can directly select cool UI for your platform" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/bbd8.png" alt="Enter Components" caption="When starting a project - I recommend you to activate the plan mode : the agent based on your idea will architect the overall platform structure - and organize your project into blocks to build directly" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/6533.png" alt="Enter Plan Mode" caption="It also helps to manage the credits efficiently -After this workshop - our students are encourage to join our community and share their project and experience -- you will be able to deblock a pro plan" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/3262.png" alt="Enter Pricing" caption="" aspectRatio="auto" />
        </div>


      </div>

      {/* Phase 2 */}
      <div className="flex flex-col p-4 md:p-6 rounded-2xl bg-secondary/30 border gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-bold text-violet-600">02</div>
          <div className="text-xs md:text-sm text-muted-foreground">Creation Space</div>
        </div>
        <h3 className="text-lg md:text-xl font-bold"></h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Once you start building with plan mode -- the left hand side will be the agent doing the all architecture of your app -The agent asks you questions - to make sure to align with your thinking </p>
        
        {/* Images with caption */}
        <div className="flex-1 flex flex-col gap-3">
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/0e6e.png" alt="Enter Plan Mode" caption="" aspectRatio="auto" />
          
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">When needed - you can integrate tools directly on your platform - and you dont need to call API keys, as its already embedded in your project</p>
            <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/0547.png" alt="Enter Skills and MCPs" caption="" aspectRatio="auto" />
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">You press Build Now -- and you will see your project appear on your screen As the agent build - he will automatically ask you preferences and questions - and give you recommendations</p>
            <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/3381.png" alt="Build Now" caption="" aspectRatio="auto" />
          </div>
        </div>

      </div>

      {/* Phase 3 */}
      <div className="flex flex-col p-4 md:p-6 rounded-2xl bg-secondary/30 border gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-bold text-emerald-600">03</div>
          <div className="text-xs md:text-sm text-muted-foreground">Deploy</div>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">The first version can be seen in preview - you can modify by adding some prompts - components features and play around your project </p>
        
        {/* Image with caption */}
        <div className="flex-1 flex flex-col gap-3">
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/fa35.png" alt="Research AI" caption="Once you are done - you only have to press one button - and your platform is live" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/338d.png" alt="Research AI Chat" caption="" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100012664/2fc8.png" alt="Share Link" caption="" aspectRatio="auto" />
        </div>

      </div>
    </div>
  </SlideLayout>;