import { SlideLayout } from "@/components/slides";
export const Slide12TwoMindsets = () => <SlideLayout title="Two Mindsets">
    <div className="flex flex-col h-full px-4 md:px-8">
      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* 产品思维 */}
        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">FINDING THE RIGHT IDEA
</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Product Thinking <span className="text-muted-foreground font-normal">/ Insight</span>
          </h3>
          <p className="text-base md:text-lg text-blue-500 mb-6">
            Focus on "users", products are born from user needs
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl text-muted-foreground">?</span>
              <p className="text-lg md:text-xl font-medium">What are the user's problems?</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl text-muted-foreground">?</span>
              <p className="text-lg md:text-xl font-medium">What do users really need?</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl text-muted-foreground">?</span>
              <p className="text-lg md:text-xl font-medium">What product should I use to satisfy users?</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base text-muted-foreground">Keywords:</span>
            <span className="px-4 py-1.5 text-base border rounded">Understanding</span>
            <span className="px-4 py-1.5 text-base border rounded">Insight</span>
          </div>
        </div>

        {/* 工程思维 */}
        <div className="flex flex-col border-l pl-6 md:pl-10">
          <p className="text-sm text-muted-foreground tracking-widest mb-3">BUILDING THE RIGHT PRODUCT
</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Engineering Thinking <span className="text-muted-foreground font-normal">/ Building</span>
          </h3>
          <p className="text-base md:text-lg text-green-500 mb-6">
            Focus on "product", users are the embodiment of the product
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-xl text-muted-foreground">?</span>
              <p className="text-lg md:text-xl font-medium">How do I build my product?</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl text-muted-foreground">?</span>
              <p className="text-lg md:text-xl font-medium">What can I use to create my product?</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl text-muted-foreground">?</span>
              <p className="text-lg md:text-xl font-medium">How else can I build my product?</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base text-muted-foreground">Keywords:</span>
            <span className="px-4 py-1.5 text-base border rounded">Building</span>
            <span className="px-4 py-1.5 text-base border rounded">Order</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>;