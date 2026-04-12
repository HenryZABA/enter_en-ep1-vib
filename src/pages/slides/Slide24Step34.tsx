import { SlideLayout, ImagePreview, ProductCard, PRODUCTS } from "@/components/slides";

export const Slide24Step34 = () => (
  <SlideLayout 
    title="Steps 3-4: Data + Service" 
    subtitle="Goal: Complete data storage design + Connect shell with data"
  >
    <div className="flex-1 flex items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* 步骤 3 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              3
            </div>
            <h3 className="text-xl font-bold">Data: Where to Store</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            After basic validation flow works, start imagining what data the product needs to store and where
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_6b9c.png"
            alt="Product data stored in cloud"
            caption="Product data stored in cloud (live in database online)"
            aspectRatio="video"
          />

          <div className="mt-4 space-y-2">
            <ProductCard {...PRODUCTS.supabase} />
            <ProductCard {...PRODUCTS.cloudflare} />
            <ProductCard {...PRODUCTS.alibabacloud} />
          </div>
        </div>

        {/* 步骤 4 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              4
            </div>
            <h3 className="text-xl font-bold">Service: Connect Shell with Data</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            Connect the shell with data, and an initial product with template takes shape
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_93c0.png"
            alt="Data exposed to product via services"
            caption="Data exposed to product via services"
            aspectRatio="video"
          />

          <div className="mt-4 space-y-2">
            <ProductCard {...PRODUCTS.supabase} />
            <ProductCard {...PRODUCTS.cloudflare} />
            <ProductCard {...PRODUCTS.alibabacloud} />
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
