import { SlideLayout, ImagePreview, ProductCard, PRODUCTS } from "@/components/slides";

export const Slide26Step78 = () => (
  <SlideLayout title="Steps 7-8: SEO + Payment" subtitle="Goal: Get traffic + Monetization">
    <div className="flex-1 flex items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* 步骤 7 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              7
            </div>
            <h3 className="text-xl font-bold">SEO: Let Search Engines Know You</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            No new users coming to your site? Can't find it on Baidu or Google? Because you haven't submitted your site to search engines
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_d09d.png" 
            alt="Let users find you on search engines" 
            caption="Let users find you on search engines" 
            aspectRatio="video" 
          />

          <div className="mt-4 space-y-2">
            <ProductCard {...PRODUCTS.google} />
            <ProductCard {...PRODUCTS.baidu} />
            <ProductCard {...PRODUCTS.bing} />
          </div>
        </div>

        {/* 步骤 8 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              8
            </div>
            <h3 className="text-xl font-bold">Payment: Start Collecting Money</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            Product launched for a month and validated well enough, next step is to start collecting money
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_c46f.png" 
            alt="Payment integration" 
            caption="The happiest is the phone 'ding' sound, that's what we're striving for" 
            aspectRatio="video" 
          />

          <div className="mt-4 space-y-2">
            <ProductCard {...PRODUCTS.stripe} />
            <ProductCard {...PRODUCTS.alipay} />
            <ProductCard {...PRODUCTS.wechatpay} />
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
