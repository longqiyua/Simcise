# Simcise Design System

> Simple × Concise — 界面在你不需要它的时候消失，在你需要它的时候生长出来。

Simcise 是一套产品级 UI 设计系统。当构建、修改或审查任何产品的界面时，调用本 skill 确保设计一致性。

## When to Use

- 构建或修改任何产品的 UI 界面
- 生成前端 HTML/CSS 代码
- 审查 UI 设计是否符合规范
- 需要设计 Token、色值、间距、圆角、动画等参考

## Core Principles

1. **每一个元素的存在都需要理由** — 没有理由的元素不应该出现
2. **呼吸感** — 元素有微妙的生命节奏（3-5s 微动效），永不安静也永不焦虑
3. **流动变形** — 元素原地变形，不销毁重建（生长优先）
4. **无边界操作感** — 按钮不只是按钮，加号旋转变成叉号
5. **零弹窗** — 绝对禁止弹窗，一切通过卡片横/纵向延展实现
6. **陶瓷温润** — 暖渐变 + 内高光 + 柔光阴影，触感如釉面陶瓷
7. **光感统一** — 光源统一左上，所有表面响应同一方向的光

## Visual Rules

- **强调色 = 一个色系**：一个核心色相 → 7 级延展（50-700），默认黑白灰无色
- **颜色命名 = 变体名**：不能第一眼看出是什么颜色（Deep Sea Teal, Brick Rust...）
- **红色 = 仅危险**：#D94F4F 永远只用于 danger，绝不作为强调色
- **纯色始终有线**：拒绝脏兮兮的浅色，所有色块底部描边
- **大圆角统一**：min 8px · input 10px · btn 12px · card 14-16px · 全局一致
- **间距 = 4px 倍数**：4/8/12/16/24/32/48
- **阴影 = 层级非装饰**：最多 2 层，模糊差 ≥ 2×
- **毛玻璃 4 级**：10px / 16px / 32px / 48px+
- **强调色面积 ≤ 15%** 视觉重量

## Interaction Rules

- **动画时长**：微交互 100-150ms · 显隐 150-200ms · 展开 250-320ms · 变形 300-400ms · 呼吸 2-8s
- **主曲线**：`cubic-bezier(0.4, 0, 0.2, 1)`
- **生长优先**：状态变化通过同一元素形态延展，不销毁旧元素
- **呼吸感**：每个空闲元素有微妙呼吸动画，barely perceptible
- **无边界**：+ 旋转 → ×，卡片原地延展
- **陶瓷感**：`linear-gradient(160deg)` + `inset 0 1px 0 rgba(255,255,255,0.7)` + 多层柔光阴影
- **光感**：`radial-gradient(ellipse at 30% 20%)` 模拟左上光源
- **灵动光标**：隐藏原生 caret，1.8px 强调色细条，120ms ease 跟随
- **文本选择**：全局 `user-select: none`

## Component Rules

- **零弹窗**：详情/表单/面板 → 卡片原地延展，`max-height` + `opacity` 过渡
- **Toggle**：圆角矩形按钮（非滑条），On 发光 / Off 变暗，标签 1.5s 渐隐 → 柔光灯
- **按钮**：银行卡形长条圆角矩形 `padding: 10px 28px; radius: 12px`
- **加载**：轨道小球快慢交替（非匀速旋转）
- **卡片**：hover 浮起 + 边框 → 强调色，点击原地延展

## Vibe Coding Rules

当 AI 生成 UI 代码时，必须遵循以下硬性约束：

1. **先写 CSS 变量** — 所有色值、间距、圆角、阴影、缓动必须通过 `:root` 变量引用，禁止硬编码
2. **组件必须有状态机** — 每个交互组件（按钮/输入框/卡片/导航项）必须定义 default → hover → active → focus → disabled 全状态
3. **动画必须有曲线** — 禁止 `linear`（进度条除外），禁止无过渡的瞬变，所有 `transition` 必须指定 `timing-function`
4. **颜色必须走 Token** — 不使用 `#333`、`red` 等随意色值，必须引用 `--text`、`--accent`、`--danger` 等语义变量
5. **圆角必须统一** — 同一界面内圆角值不超过 3 种，嵌套容器内外差 2-4px
6. **边框不可缺** — 所有纯色色块必须有边框线（`1px solid var(--border)`），拒绝脏浅色
7. **弹窗 = 禁止** — 任何「查看详情」「设置」「新建」都通过卡片原地延展实现
8. **暗色模式必须适配** — 每个组件必须有 `[data-theme="dark"]` 对应样式

## Design Language References

Simcise 从以下大厂设计语言中汲取灵感，保持独立哲学但借鉴系统化方法：

| 设计语言 | 借鉴点 | Simcise 对应 |
|---|---|---|
| **Material Design 3** (Google) | Dynamic Color 色系延展、Motion System | 强调色 7 级延展 + 动画分类时长 |
| **Apple HIG** | 留白哲学、Deferred 层级、Depth | 呼吸感 + 负空间即内容 |
| **Ant Design** | 组件状态机、Design Token 体系 | 全组件状态机 + CSS 变量驱动 |
| **Shopify Polaris** | 组件驱动、无障碍优先 | `user-select`、`focus-visible`、对比度 |
| **IBM Carbon** | 系统化 Token、严格间距网格 | 4px 基础单位 + 全量 Token 表 |
| **GitHub Primer** | CSS Variables 主题切换、功能色 | `data-theme` 切换 + 语义色层 |
| **Atlassian Design** | 跨产品一致性、动效原则 | 主曲线 80% 统一 + 产品个性曲线 |

**核心差异**：大厂设计语言追求「面面俱到的规范文档」，Simcise 追求「AI 可直接执行的约束系统」。不是告诉你「可以怎么做」，而是告诉你「必须怎么做、禁止怎么做」。

## Files

- `Lesong Art：Simcise 设计规范.md` — 完整设计规范（1700 行），包含视觉/交互/组件/布局/品牌/无障碍全章节
- `Display.html` — 产品级展示页（AI 参考 + 设计预览），21 个章节，Light/Dark 主题
- `README.md` — 项目说明 + 设计语言参考表
- `SKILL.md` — 本文件，AI Skill 调用入口

## Reference

```
规范文档: Lesong Art：Simcise 设计规范.md
展示页面: Display.html
版本: v2.3
仓库: https://github.com/longqiyua/Simcise
```
