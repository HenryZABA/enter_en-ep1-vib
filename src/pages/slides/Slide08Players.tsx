import { SlideLayout, ImagePreview } from "@/components/slides";

export const Slide08Players = () => (
  <SlideLayout title="Player Categories: From Efficiency Tools to Creation Platforms">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 flex-1">
      {/* 左侧：工具型产品 */}
      <div className="flex flex-col">
        <div className="inline-flex self-start px-4 py-1.5 rounded-full border text-sm mb-6">
          Target: Professional Developers
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tool-Type Products <span className="text-muted-foreground font-normal">/ Maximum Efficiency</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">Deep into development flow, pursuing ultimate context and control</p>
        
        <div className="space-y-6">
          <div className="flex gap-5 items-start">
            <div className="w-40 h-24 rounded-lg overflow-hidden shrink-0 border">
              <ImagePreview 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/cursor-app_cf24.jpg"
                alt="IDE"
                aspectRatio="auto"
                className="w-full h-full [&_img]:object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">IDE: Integrated Development Environment</h4>
              <p className="text-base text-muted-foreground">Desktop software, feature-rich and powerful.</p>
              <p className="text-base text-muted-foreground/70 mt-1">VSCode, Cursor, Trae, Windsurf...</p>
            </div>
          </div>
          
          <div className="flex gap-5 items-start">
            <div className="w-40 h-24 rounded-lg overflow-hidden shrink-0 border">
              <ImagePreview 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/vscode-ext_523d.png"
                alt="Extension"
                aspectRatio="auto"
                className="w-full h-full [&_img]:object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Extension: Editor Plugins</h4>
              <p className="text-base text-muted-foreground">Provide services via external integration, context limited.</p>
              <p className="text-base text-muted-foreground/70 mt-1">GitHub Copilot, Cline, Trae...</p>
            </div>
          </div>
          
          <div className="flex gap-5 items-start">
            <div className="w-40 h-24 rounded-lg overflow-hidden shrink-0 border">
              <ImagePreview 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/claudecode-cli_d345.png"
                alt="CLI"
                aspectRatio="auto"
                className="w-full h-full [&_img]:object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">CLI: Command Line Terminal</h4>
              <p className="text-base text-muted-foreground">Strong Agent capability, manual editing limited.</p>
              <p className="text-base text-muted-foreground/70 mt-1">Claude Code, Codex</p>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧：创作型平台 */}
      <div className="flex flex-col">
        <div className="inline-flex self-start px-4 py-1.5 rounded-full bg-foreground text-background text-sm mb-6">
          Target: Non-Technical Users
        </div>
        
        <div className="flex items-end justify-between mb-2">
          <h2 className="text-3xl md:text-4xl font-bold">Creation Platforms</h2>
          <p className="text-xl md:text-2xl font-serif italic text-muted-foreground">Vibe First, Coding Later.</p>
        </div>
        <p className="text-lg mb-6">Primary mission: Experience the magic of Vibe Coding</p>
        
        <div className="p-4 rounded-lg bg-muted/50 border mb-8">
          <p className="text-base">In the future, 50%-60% of products will be built through such platforms. No installation needed, natively integrated hosting.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 flex-1">
          <div>
            <div className="h-48 rounded-lg overflow-hidden mb-4 border">
              <ImagePreview 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/image_5f3c.png"
                alt="Web 网页端平台"
                aspectRatio="auto"
                className="w-full h-full [&_img]:object-cover"
              />
            </div>
            <h4 className="font-bold text-lg mb-1">Web: Web-based Platforms</h4>
            <p className="text-base text-muted-foreground">No setup needed, instant use.</p>
            <p className="text-base text-muted-foreground/70 mt-1">Lovable, Replit, V0, Bolt, Enter.pro...</p>
          </div>
          
          <div>
            <div className="h-48 rounded-lg overflow-hidden mb-4 border">
              <ImagePreview 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/youware_69_4_88a4.jpg"
                alt="App 移动端延伸"
                aspectRatio="auto"
                className="w-full h-full [&_img]:object-contain [&_img]:bg-muted"
              />
            </div>
            <h4 className="font-bold text-lg mb-1">App: Mobile Extensions</h4>
            <p className="text-base text-muted-foreground">Edit anywhere, anytime, advantage in portability.</p>
            <p className="text-base text-muted-foreground/70 mt-1">Replit, Youware</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
