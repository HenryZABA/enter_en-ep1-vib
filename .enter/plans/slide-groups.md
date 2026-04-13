# 转正答辩 PPT 完整规划

## Context
用户需要一套完整的转正答辩 PPT，包含 5 大部分：KOL 达人运营、PGC 内容制作、运营活动、AI 工具使用、未来规划。目前已有 7 页 KOL 相关的 DB 系列 slides（DB01-DB07），需要补充其余部分并整合为完整答辩。

## 现有 DB Slides（保留 & 微调）
- `SlideDB01Cover` - 封面 ✅
- `SlideDB02KOLPart` - Part 1 KOL 封面 ✅
- `SlideDB03KOLOverview` - KOL 总览 KPI ✅
- `SlideDB04Timeline` - 时间线 & 平台分布 ✅
- `SlideDB05PlatformConversion` - 平台转化效率 ✅
- `SlideDB06StarKOLs` - 明星 KOL ✅
- `SlideDB07SystemBuilding` - 体系建设 ✅（微调：增加 KOL 管理系统的 3 个功能亮点）

## 新增 Slides（共 12 页）

### Part 1 补充：KOL 工作流优化（1 页）
**`SlideDB08WorkflowOptimization.tsx`** - 工作流迭代
- 左侧：两个维度卡片（市场测试 + 工作流迭代）
- 右侧：两次重大调整（缩短沟通路径 + 内容质量把控）
- 底部：关键洞察 callout

### Part 2：PGC 内容制作（3 页）
**`SlideDB09PGCPart.tsx`** - Part 2 封面
- 标题：PGC 内容制作
- 副标题：从分类化建设到自动化批量生产

**`SlideDB10PGCPipeline.tsx`** - PGC 自动化流程
- 上半：早期分类化建设 → Landing Page 为主
- 中间：自动化流程图（模板分析 → 素材拆解 → Enter remix → 批量生成）
- 底部 KPI：300+ 内容、准备 2h、生成 2-4h 并行

**`SlideDB11PGCAIApp.tsx`** - AI App 功能展示
- 核心观点：功能太强 → 用户不知道怎么用 → PGC 告诉用户"你可以做这样的东西"
- 目标：孵化具有商业可能性的可用方案
- 展示近期产出成果（可嵌入 iframe 或图片网格）

### Part 3：运营活动（2 页）
**`SlideDB12ActivityPart.tsx`** - Part 3 封面
- 标题：运营活动
- 副标题：从队内黑客松到 Solo Founder 专项赛

**`SlideDB13Activities.tsx`** - 活动总览
- 4 个活动卡片网格：
  1. 队内 Hackathon（10 个项目 → 物料转化 → Activity 页面）
  2. Solo Founder 比赛（130+ 参赛、39 有效提交、远超预期）
  3. 国内社群 & 大使计划（高黏度用户、品牌大使培养）
  4. 近期行程（Mini Camp + 深圳 Workshop 演讲）

### Part 4：AI 工具使用（2 页）
**`SlideDB14AIToolsPart.tsx`** - Part 4 封面
- 标题：AI 工具的使用与探索
- 副标题：非技术背景，用 AI 走得更深

**`SlideDB15AITools.tsx`** - AI 工具全景
- 5 个工具卡片（icon + 名称 + 描述）：
  1. 模板提取工具（分析视觉效果 → 拆解为网页素材 → Enter remix）
  2. KOL 管理系统（可视化追踪 + 文案审核 + Agent 智能化）
  3. 工作流 & Agent（Milo Agent、Skill、自动化工作流）
  4. 邮件系统自动化（API 接入 + 模板库 + Milo 动态规划）
  5. 知识库建设（Enter pro 资料库 → Milo 最了解业务的 AI）

### Part 5：未来规划（3 页）
**`SlideDB16FuturePart.tsx`** - Part 5 封面
- 标题：未来发展规划
- 副标题：工程化 · 自动化 · 全能型进化

**`SlideDB17FuturePlans.tsx`** - 未来规划详解
- 3 列布局：
  1. KOL 工程化（精准画像 + 质量核心 + 多样化合作）
  2. AI & Agent 应用（内容自动化 + PGC 批量化 + 活动经验沉淀）
  3. 个人职业（不设限 + AI 赋能全能型新岗位）

**`SlideDB18End.tsx`** - 结束页
- 谢谢 / Q&A

## 需修改的现有文件
| 文件 | 修改内容 |
|------|---------|
| `src/pages/slides/slideConfig.ts` | 新增 12 个 slide import + 注册到 slides 数组 + sectionNames + slideTitles |
| `src/pages/slides/index.ts` | 新增 12 个 export |
| `src/hooks/useGroups.ts` | 答辩 group 改为 19 slides（DB01-DB18 共 19 页），版本号 bump |
| `src/pages/slides/SlideDB07SystemBuilding.tsx` | 微调：补充 KOL 管理系统的 3 个功能细节（可视化追踪、文案审核平台、Agent 智能化） |

## 最终答辩 slides 顺序（共 19 页）
1. DB01 封面
2. DB02 Part 1 KOL 封面
3. DB03 KOL 总览
4. DB08 工作流优化 ← NEW
5. DB04 时间线 & 平台
6. DB05 平台转化效率
7. DB06 明星 KOL
8. DB07 体系建设（微调）
9. DB09 Part 2 PGC 封面 ← NEW
10. DB10 PGC 自动化流程 ← NEW
11. DB11 PGC AI App ← NEW
12. DB12 Part 3 活动封面 ← NEW
13. DB13 活动总览 ← NEW
14. DB14 Part 4 AI 工具封面 ← NEW
15. DB15 AI 工具全景 ← NEW
16. DB16 Part 5 未来规划封面 ← NEW
17. DB17 未来规划详解 ← NEW
18. DB18 结束页 ← NEW

注意：在 slides 数组中，DB08 要插入在 DB04 之前（即 DB03 之后），保证逻辑顺序正确。

## 验证
1. 运行 `pnpm lint` 确认无错误
2. 在 Dashboard 检查答辩 group 包含 18 页
3. 播放答辩 group 确认顺序正确、内容完整
