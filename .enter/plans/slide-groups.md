# 答辩 PPT 对齐逐字稿 — 修改计划

## Context
用户提供了完整的转正答辩逐字稿，需要对比现有 PPT slides 找出内容缺失和不匹配之处，进行新增和修改。

---

## 逐字稿 vs 现有 PPT 对比结论

### 已覆盖（无需改动）
- KOL 数据系列（投放规模/平台分布/CPA/优质KOL）
- KOL 工作流优化（两次流程调整）
- KOL 管理体系建设（4个系统）
- KOL 反思（被理解）& 方法论（数据到内容）
- PGC 自动化流程 & 展示 & Live Demo
- PGC 物料再利用 & PGC盈利模型
- AI 工具全景 + 展示 + Extractor + Dashboard
- AI 与岗位跨越
- 未来规划（4列）
- 学到了什么（4点）

### 缺失 — 需要新增 slides (2页)

**1. "发现问题" (SlideDB01cProblem)**
- 位置：自我介绍之后、KOL Part 之前
- 内容：入职后发现的 3 个关键问题
  1. 不知道该怎么用 Enter
  2. Enter 对外几乎没有内容和曝光
  3. 不知道它具体能用在什么场景
- 叙事作用：解释"为什么做 KOL"的动机

**2. "PGC 美学突破" (SlideDB10dAesthetics)**
- 位置：PGC 自动化流程之后、PGC Showcase 之前
- 内容：
  - 问题：美观度卡住批量化
  - 3 个洞察：审美是创造性能力 / "抄"是更快方案 / 提示词颗粒度要足够细
  - 行动：用 Enter 做了 vibesnap app（不到20分钟）
  - 结果：配合 openclaw，70个高质量模板 → 目前 300+
- 叙事作用：展示"判断方向 + AI 快速实现"的核心能力

### 不匹配 — 需要修改 slides (4页)

**3. SlideDB01bSelfIntro — 补充个人背景**
- 现状：只有工作模块概览，没有个人信息
- 逐字稿新增：
  - 吉林大学社会学系 → 华盛顿大学（圣路易斯）
  - 做过设计、策展、广告公司 marketing
  - 标签："横向跨度大" → AI native 公司中成为优势
  - "AI 帮我补深度，广度让我看到更多资源组合的可能性"

**4. SlideDB13Activities — 补充活动价值**
- 现状：3列（Hackathon/SoloFounder/近期行程）只有数据
- 逐字稿新增的活动价值（顶部或卡片中）：
  1. 获取高黏度用户，转换率和付费率更高
  2. 内容生产与资产沉淀（blog→视频文案→大使闭环）
  3. 验证产品与场景（用户反馈修bug）

**5. SlideDB13cActivityLearning — 重写为逐字稿内容**
- 现状：4步 journey（写Brief/上线/社群/线下）+ 闭环激励
- 改为逐字稿的 3 个关键执行点：
  1. 保证流程顺畅，用户没有卡点
  2. 拒绝钻空子行为——背后是逻辑和规则的梳理
  3. 目的明确，不要忙于过程而忘记目的
- 加 2 个共同经验：
  1. 让用户感受到是一起进步的一份子
  2. AI 时代不能用老流程办活动，用 AI-native 逻辑

**6. SlideDB19Suggestions — 重构为 2 大方向**
- 现状：3个卡片（追热点/PGC宣传/KOL优化）
- 改为逐字稿的 2 大方向：
  - 方向1: 做更加 AI native 的东西（KOL AI工程化：流程更顺/周期更短/专属达人池）
  - 方向2: 通过内容打造品牌影响力（热点即时流量/达人资源池做广做深/需要更好的故事和人设/回到数据持续试错）

---

## 文件变更清单

| 操作 | 文件 | 说明 |
|------|------|------|
| 新增 | `SlideDB01cProblem.tsx` | 发现问题 slide |
| 新增 | `SlideDB10dAesthetics.tsx` | PGC 美学突破 slide |
| 修改 | `SlideDB01bSelfIntro.tsx` | 补充个人背景 |
| 修改 | `SlideDB13Activities.tsx` | 补充活动价值 |
| 修改 | `SlideDB13cActivityLearning.tsx` | 重写3个关键点+2个经验 |
| 修改 | `SlideDB19Suggestions.tsx` | 重构2大方向 |
| 修改 | `slideConfig.ts` | 注册新 slides |
| 修改 | `index.ts` | 导出新 slides |
| DB更新 | `slide_groups` | 更新答辩 group indices |

## 验证
- 所有新 slide 使用 `SlideLayout` + 语义化 token
- `slideConfig.ts` 的 slides/sectionNames/slideTitles 三个数组长度一致
- 数据库答辩 group 包含所有新 indices
- `run_lint` 无 error
