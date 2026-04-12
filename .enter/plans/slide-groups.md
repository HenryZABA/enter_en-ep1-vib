# Plan: Vibe Coding 用户画像分析 PPT

## Context
用户需要基于一份关于 Vibe Coding 用户分析的文稿，制作一套新的 PPT slides。风格需要与现有 slides 保持一致（暗色主题、粉色主色调、SlideLayout 组件）。

## Slide 结构（共 15 页）

### Slide VC01: Cover
- 标题: "Vibe Coding 用户画像分析"
- 副标题: "从抽象到具体，从可能性到确定性"
- 风格: 与 Slide01Cover 一致

### Slide VC02: Part 1 Cover - 个人感悟
- "Part 1 / 个人感悟"
- 副标题: "从 Future Archaeology 到 Enter"

### Slide VC03: 从抽象到具体（两列对比卡片）
- 左列: 毕业设计 - Future Archaeology（形而上学、空中构思）
- 右列: 毕业后一年 - 用 Enter 构建 AI 工具（场景自然出现）
- 底部: 核心疑问 — 什么让抽象变成具体？

### Slide VC04: 核心洞察（大字强调页）
- 主句: "无限的可能性 ≠ 知道该干什么"
- 副文: 理解AI有门槛 → 理解Vibe Coding门槛更高 → 不清楚能力边界

### Slide VC05: Part 2 Cover - 构建模式
- "Part 2 / 用户构建模式"
- 副标题: "如何把不确定性转化为确定性"

### Slide VC06: 三种构建模式总览（三列卡片）
- 01 自助餐式: 想要什么拿什么，快速随性
- 02 学习调研式: 利用AI请教学习，调研后构建
- 03 专业模式: 完整PRD，需求清晰
- 每个卡片带简短特点描述

### Slide VC07: 自助餐式 vs 学习调研式（两列详细对比）
- 左: 自助餐式 — 特点/好处/缺点/观察
- 右: 学习调研式 — 画像/核心/案例/结果
- 包含"简单提示词反而效果更好"这个洞察

### Slide VC08: Part 3 Cover - 数据洞察
- "Part 3 / 数据洞察"
- 副标题: "Enter 内部数据 & 行业数据"

### Slide VC09: Enter 用户画像（环形图）
- 自助餐式 35% / 学习调研式 50% / 专业用户 15%
- 使用 CSS 实现环形图（conic-gradient）
- 数据来源注释: Milo 高消耗高频项目调研

### Slide VC10: 非开发者身份画像（横向柱状图）
- 创业者 25%-30%
- 产品经理 15%-20%
- 营销和增长 15%-20%
- 设计师 10%-15%
- 教育/运营行政 5%-10%
- 数据来源: YC, Gartner
- Founder 占比特别标注 30%-40%

### Slide VC11: Reddit 增长时间线
- 时间线: 2024.2 创建 → 2025.2 暴增 → 2025 mid 12万 → 2025.10 15万 → 2026.3 21万
- 对比: Web Developer 频道 10年+ 才达到同等规模
- 关键数据: 每月+1万, 13个月达到15万

### Slide VC12: Part 4 Cover
- "Part 4 / 机会与展望"

### Slide VC13: 社交媒体趋势 & 运营机会
- 要点:
  1. 普通用户萌芽期
  2. 很多用户分享项目
  3. 热门帖子互动率极高（4-5千赞）
  4. 抓住这波流量池的机会

### Slide VC14: 项目展示引导
- 标题: "看看大家在做什么"
- 两个方向: 内部运营工具 / 用户项目
- 口述为主的展示引导页

### Slide VC15: End
- "谢谢 / Q&A"

## 文件规划

### 新建文件
- `src/pages/slides/SlideVC01Cover.tsx` ~ `SlideVC15End.tsx`（15个文件）

### 修改文件
- `src/pages/slides/slideConfig.ts` — 注册新 slides
- `src/pages/slides/index.ts` — 导出新 slides
- `src/hooks/useGroups.ts` — 在默认 groups 中添加新 group

## 技术实现
- 图表: 使用纯 CSS（conic-gradient 环形图、flex 柱状图、timeline）, 不引入额外依赖
- 风格: 复用 SlideLayout 组件、保持暗色主题 + 粉色主色调
- 动画: 使用 animate-fade-in 等现有动画类

## 验证
- 所有新 slides 在 SlideContainer 中正确渲染
- 图表数据准确
- 新 group "用户画像分析" 出现在 Dashboard
- lint 无错误
