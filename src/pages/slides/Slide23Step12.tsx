import { SlideLayout, ImagePreview, ProductCard, PRODUCTS } from "@/components/slides";

export const Slide23Step12 = () => (
  <SlideLayout 
    title="Steps 1-2: Form + Version Control" 
    subtitle="Goal: Complete validation of product shell"
  >
    <div className="flex-1 flex items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* 步骤 1 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              1
            </div>
            <h3 className="text-xl font-bold">Form: Build the Shell</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            Use Cursor, Lovable, Enter to quickly create the product shell, get your first version running at the interaction level
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/20260109130014_rec__c280.gif"
            alt="High school Indian student Sohan made restaurant order product with Enter"
            caption="High school Indian student Sohan made restaurant order product with Enter"
            aspectRatio="video"
          />

          <div className="mt-4 space-y-2">
            <ProductCard {...PRODUCTS.enter} />
            <ProductCard {...PRODUCTS.cursor} />
            <ProductCard {...PRODUCTS.claude} />
          </div>
        </div>

        {/* 步骤 2 */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
              2
            </div>
            <h3 className="text-xl font-bold">Version Control: Save Your Progress</h3>
          </div>
          
          <p className="text-base text-muted-foreground mb-4">
            Building the shell won't always be smooth, might be back-and-forth, need to use Github to manage code versions
          </p>

          <ImagePreview 
            src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_e3ff.png"
            alt="Code version management based on Github"
            caption="Code version management based on Github"
            aspectRatio="video"
          />

          <div className="mt-4">
            <ProductCard {...PRODUCTS.github} />
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
