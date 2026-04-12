import { SlideLayout, ImagePreview } from "@/components/slides";
export const Slide05Evolution = () => <SlideLayout title="The industry has always been evolving, but only recently has it become 'fast and fierce'">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-h-[82vh] overflow-auto">
      {/* Phase 1 */}
      <div className="flex flex-col p-4 md:p-6 rounded-2xl bg-secondary/30 border gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-bold text-sky-600">01</div>
          <div className="text-xs md:text-sm text-muted-foreground">2015-2020</div>
        </div>
        <h3 className="text-lg md:text-xl font-bold">Statistical Auto-Completion</h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          Based on N-gram, LSTM and other statistical models, the core logic is "predicting the next word", lacking long-context understanding
        </p>
        
        {/* Images with caption */}
        <div className="flex-1 flex flex-col gap-3">
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/kite-bye_b15f.jpg" alt="Kite farewell" caption="Heartbreaking" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/tabnine-demo_a8f1.png" alt="Tabnine" caption="" aspectRatio="auto" />
        </div>

        {/* Logos with names */}
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="/logos/kite.svg" alt="Kite" className="h-5 w-auto object-contain" />
            <span className="text-xs font-medium">Kite</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/tabnine logo_c4c3.png" alt="Tabnine" className="h-5 w-auto object-contain" />
            <span className="text-xs font-medium">Tabnine</span>
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="flex flex-col p-4 md:p-6 rounded-2xl bg-secondary/30 border gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-bold text-violet-600">02</div>
          <div className="text-xs md:text-sm text-muted-foreground">2021-2024</div>
        </div>
        <h3 className="text-lg md:text-xl font-bold">Copilot Era</h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          Transformer architecture brings file-level context understanding, Ghost Text interaction mode, Chat features emerge, AI IDE products proliferate
        </p>
        
        {/* Images with caption */}
        <div className="flex-1 flex flex-col gap-3">
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/copilot-demo_bd4d.png" alt="GitHub Copilot" caption="VS Code was my first love in my student days" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/cursor-ghost-text_00f9.png" alt="Ghost Text" caption="" aspectRatio="auto" />
        </div>

        {/* Logos with names */}
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/github copilot logo_2dcd.jpg" alt="GitHub Copilot" className="h-5 w-5 object-cover rounded" />
            <span className="text-xs font-medium">Copilot</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/vscode_22bc.jpg" alt="VSCode" className="h-5 w-5 object-cover rounded" />
            <span className="text-xs font-medium">VSCode</span>
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="flex flex-col p-4 md:p-6 rounded-2xl bg-secondary/30 border gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl md:text-3xl font-bold text-emerald-600">03</div>
          <div className="text-xs md:text-sm text-muted-foreground">2024-2026</div>
        </div>
        <h3 className="text-lg md:text-xl font-bold">Agentic & Vibe Coding</h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          AI gains Agent capabilities: autonomous planning, multi-step execution, tool invocation and self-correction, the era of everyone being a developer arrives
        </p>
        
        {/* Image with caption */}
        <div className="flex-1 flex flex-col gap-3">
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/lovable-demo_1c6c.png" alt="Lovable" caption="Lovable has become the new AI love for many" aspectRatio="auto" />
          <ImagePreview src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/cursor-demo_5b8e.png" alt="Cursor" caption="" aspectRatio="auto" />
        </div>

        {/* Logos with names */}
        <div className="flex flex-wrap gap-3 pt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/cursor logo_30f4.jpg" alt="Cursor" className="h-5 w-5 object-cover rounded" />
            <span className="text-xs font-medium">Cursor</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/claude-logo_5fac.png" alt="Claude Code" className="h-5 w-5 object-cover rounded" />
            <span className="text-xs font-medium">Claude</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border">
            <img src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100000002/lovable_7983.jpg" alt="Lovable" className="h-5 w-5 object-cover rounded" />
            <span className="text-xs font-medium">Lovable</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>;