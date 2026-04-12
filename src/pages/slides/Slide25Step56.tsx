import { SlideLayout, ImagePreview, ProductCard, PRODUCTS } from "@/components/slides";

export const Slide25Step56 = () => (
  <SlideLayout 
    title="Steps 5-6: Distribution + Analytics" 
    subtitle="Goal: Product launch + Data visualization"
  >
    <div className="flex-1 flex items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* 步骤 5 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              5
            </div>
            <h3 className="text-xl font-bold">Distribution: Make Internet Visible</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            Product only working on your computer isn't enough, must distribute it so people on the internet can open it via link
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_6b7e.png"
            alt="Push product out with Vercel"
            caption="Push product out with Vercel!"
            aspectRatio="video"
          />

          <div className="mt-4">
            <ProductCard {...PRODUCTS.vercel} />
          </div>
        </div>

        {/* 步骤 6 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              6
            </div>
            <h3 className="text-xl font-bold">Analytics: See User Behavior</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            Users came and used it, but you can't see how they use it. You need a digital solution to see user usage
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_6db2.png"
            alt="Data is the beginning of scientific decisions"
            caption="Data is the beginning of scientific decisions (but remember not all of the decision)"
            aspectRatio="video"
          />

          <div className="mt-4 space-y-2">
            <ProductCard {...PRODUCTS.ga} />
            <ProductCard {...PRODUCTS.posthog} />
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
