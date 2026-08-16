

> Simcise = Simple × Concise 界面在你不需要它的时候消失，在你需要它的时候生长出来。

---

## 一、设计哲学

**Simcise** 是全产品线的统一设计语言，核心主张只有一句话：

> **每一个元素的存在都需要理由，没有理由的元素不应该出现。**

这不是极简主义的审美偏好，而是对用户注意力的尊重。界面的复杂度应该跟随任务的复杂度，而不是跑在任务前面。

Simcise 拒绝两种极端：装饰性的过度设计，和冷漠的功能堆砌。它追求的是**有温度的克制**——每一处留白都是呼吸，每一次动画都是回应。

---

## 二、视觉规范

### 2.1 色彩系统

Simcise 色彩体系由四个层级构成：

#### 基础层：暖灰底色体系

所有产品的底色体系，承载界面的结构和层次。Simcise 的灰不是冷灰，而是**带暖调的灰**——像未漂白的棉纸，有温度但不抢眼。灰度梯度不超过五级，避免色阶混乱。

**浅色模式（Canonical Values）：**

| Token | 色值 | 用途 | 使用产品 |
|---|---|---|---|
| `--bg` | `#FAFAF8` | 页面主背景 | Fifo, HTMLBook |
| `--bg-warm` | `#F5F5F0` | 暖白背景 | Yuich, Shore (light) |
| `--bg-cream` | `#F0EDE8` | 次级背景/卡片底 | Shore `--color-bg-light` |
| `--bg-stone` | `#E6E1DA` | 三级背景/输入框 | Shore `--color-bg-secondary-light` |
| `--surface` | `#FFFFFF` | 卡片/面板表面（亮色模式下可用纯白） | Lindo, Fifo |
| `--surface-alt` | `#F4F4F5` | 次级表面（hover、输入框） | Fifo |
| `--border` | `#E5E5E5` | 默认边框 | 全局统一 |
| `--border-warm` | `#D8D6D0` | 暖调边框 | Shore, Yuich |
| `--border-strong` | `#D4D4D8` | 强边框（focus 态内层） | Fifo |
| `--text` | `#1A1A1A` | 主文字 | 全局统一 |
| `--text-warm` | `#2D2D2D` | 暖调主文字 | Yuich |
| `--text-secondary` | `#666666` | 次要文字 | Lindo, GOTO |
| `--text-muted` | `#999999` | 弱化文字/占位符 | 全局统一 |
| `--text-faint` | `#AAAAAA` | 极弱文字（仅装饰） | Fifo |

**暗色模式（Canonical Values）：**

| Token | 色值 | 用途 | 使用产品 |
|---|---|---|---|
| `--bg-dark` | `#0A0A0A` | 纯黑背景 | Lindo |
| `--bg-dark-soft` | `#141519` | 暗色主背景 | Route |
| `--bg-dark-warm` | `#1B1A18` | 暖调暗色背景 | Shore |
| `--bg-dark-neutral` | `#16171A` | 中性暗色背景 | Fifo |
| `--surface-dark` | `#121212` | 暗色卡片表面 | Lindo |
| `--surface-dark-2` | `#1C1D21` | 暗色次级表面 | Fifo |
| `--surface-dark-3` | `#24262B` | 暗色三级表面/输入框 | Fifo |
| `--border-dark` | `rgba(255,255,255,0.06)` | 暗色默认边框 | 全局统一 |
| `--border-dark-strong` | `rgba(255,255,255,0.12)` | 暗色强边框 | 全局统一 |
| `--text-dark` | `#E8E8EA` | 暗色主文字 | GOTO, Route |
| `--text-dark-warm` | `#DED9D2` | 暖调暗色文字 | Shore |
| `--text-dark-neutral` | `#DDE3EB` | 中性暗色文字 | Fifo |
| `--text-secondary-dark` | `#888888` | 暗色次要文字 | 全局统一 |
| `--text-muted-dark` | `#555555` | 暗色弱化文字 | Lindo |

**各产品完整调色板速查：**

<details>
<summary><b>Shore — 暖灰 + 深海绿</b></summary>

| Token | Light | Dark |
|---|---|---|
| bg | `#F0EDE8` | `#1B1A18` |
| bg-secondary | `#E6E1DA` | `#24221F` |
| bg-tertiary | `#D8D1C8` | `#2E2B27` |
| surface | `#F8F5F0` | `#292723` |
| border | `#C8BFB5` | `#46413A` |
| text | `#211E1B` | `#DED9D2` |
| text-secondary | `#665D55` | `#AAA29A` |
| text-tertiary | `#91867B` | `#817A73` |
| accent | `#1A6B66` | `#2A8D84` |
| accent-hover | `#15766F` | `#349E96` |
</details>

<details>
<summary><b>Lindo — 暖米 + 暗砖红</b></summary>

| Token | Light | Dark |
|---|---|---|
| bg | `#F8F5ED` | `#0A0A0A` |
| bg-secondary | `#FFFFFF` | `#121212` |
| bg-tertiary | `#F5F5F5` | `#1A1A1A` |
| border | `#E5E5E5` | `#262626` |
| text | `#000000` | `#FFFFFF` |
| text-secondary | `#666666` | `#888888` |
| text-muted | `#999999` | `#555555` |
| accent (brick-red) | `#8B3A36` | `#B5524D` |
| accent-hover | `#7A3430` | `#C4605B` |
| accent-accent (AI) | `#00E5CC` | `#00E5CC` |
</details>

<details>
<summary><b>Fifo Music — 中性灰 + 动态强调</b></summary>

| Token | Light | Dark |
|---|---|---|
| bg | `#FAFAFA` | `#16171A` |
| surface | `#FFFFFF` | `#1C1D21` |
| surface-2 | `#F4F4F5` | `#24262B` |
| border | `#E4E4E7` | `#34373E` |
| border-strong | `#D4D4D8` | `#454852` |
| text | `#14161A` | `#DDE3EB` |
| text-dim | `#5A5A62` | `#9099A6` |
| text-faint | `#9A9AA3` | `#6A7280` |
| accent (blue) | `#1C3B6E` | `#A0B8DE` |
| accent (amber) | `#B45309` | `#E0B07A` |
| accent (emerald) | `#047857` | `#7FCFA8` |
| accent (rose) | `#9F1239` | `#D88DA0` |
| accent (violet) | `#6D28D9` | `#B5A0E2` |
| accent (slate) | `#334155` | `#A8B0BD` |
</details>

<details>
<summary><b>Route — 暖灰 + 薰衣草紫（严格扁平）</b></summary>

| Token | Light | Dark |
|---|---|---|
| bg (ink-900) | `#EFEEEC` | `#141519` |
| card (ink-850) | `#E7E6E3` | `#181A1F` |
| sidebar (ink-800) | `#DDDCD8` | `#1C1E24` |
| input (ink-700) | `#D2D1CC` | `#21242B` |
| hairline | `#D0CEC8` | `#2A2D35` |
| hairline-2 | `#C0BDB5` | `#34373F` |
| text (fg) | `#1A1A1A` | `#E8E8E8` |
| fg-muted | `#555555` | `#909090` |
| fg-dim | `#808080` | `#6A6A6A` |
| accent | `#8479D2` | `#B4AEEA` |
| accent-bright | `#6B5FC8` | `#CCC6F0` |
| accent-soft | `#E8E5F0` | `#1E1D28` |
</details>

<details>
<summary><b>GOTO Page — 冷灰 + 琥珀橙</b></summary>

| Token | Light | Dark |
|---|---|---|
| bg | `#F5F5F7` | `rgba(36,38,44,0.62)` |
| surface | `#FFFFFF` | `rgba(60,62,70,0.55)` |
| surface-alt | `#F0F0F2` | `rgba(48,50,56,0.48)` |
| line | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.06)` |
| line-strong | `#D4D4D8` | `rgba(255,255,255,0.12)` |
| ink (text) | `#18181B` | `#E8E8EA` |
| ink-soft | `#52525B` | `#B8B8BC` |
| muted | `#777780` | `#808084` |
| accent | `#FF7E00` | `#FFA240` |
| accent-dark | `#CC6500` | `#FF7E00` |
</details>

<details>
<summary><b>Yuich — 暖米 + 森林绿</b></summary>

| Token | Light | Dark |
|---|---|---|
| bg | `#FAF8F5` | `#0D0D0D` |
| bg-secondary | `#F5F5F0` | `#1A1A1A` |
| bg-tertiary | `#EEEAE4` | `#252525` |
| border | `#DCD5CC` | `#353535` |
| text | `#2D2D2D` | `#F0F0F0` |
| text-secondary | `#5A5A5A` | `#A8A8A8` |
| text-muted | `#888888` | `#666666` |
| accent | `#3A925F` | `#5AB87A` |
</details>

**原则：**
- 浅色模式背景偏暖（米白/奶白），暗色模式背景偏中性（不偏蓝也不偏棕）
- Shore/Lindo/Yuich 走暖调路线；Fifo/GOTO/Route 走中性/冷调路线——两者都允许，但同一产品内不混用
- 所有背景色不使用纯白 `#FFFFFF`（surface 除外）或纯黑 `#000000`，保留质感
- 边框优先使用半透明色（`rgba` / `color-mix()`），而非实色，让层次更自然
- 新产品立项时，从上述 Canonical Values 中选取起点，不允许自创灰度色值

#### `color-mix()` 使用规范

Simcise 产品广泛使用现代 CSS `color-mix(in srgb, ...)` 函数动态派生颜色，减少硬编码色值：

```css
/* 强调色浅底（用于选中态背景、活跃项底色） */
background: color-mix(in srgb, var(--accent) 8%, transparent);

/* 强调色半透明边框 */
border-color: color-mix(in srgb, var(--accent) 30%, transparent);

/* hover 背景（基于当前背景加一点文字色） */
background: color-mix(in srgb, var(--text) 5%, var(--bg));

/* 暗色模式强调色提亮 */
--accent-bright: color-mix(in srgb, var(--accent) 70%, white);
```

**原则：**
- `color-mix` 的百分比必须是 5 的倍数（`5%`, `10%`, `15%`...），便于统一
- 不使用 `color-mix` 混合两个不同色相的颜色（仅用于透明度/明度派生）
- 关键色值（accent、danger）仍然硬编码，不通过 mix 生成

#### 辅助层：产品 Accent Color

每款产品拥有唯一的强调色，该颜色应满足一个条件：**让人看两次才能准确叫出它的名字**。

| 产品 | Accent Color | 色值 | 深色模式色值 |
|---|---|---|---|
| Shore | 深海绿 | `#1A6B66` | `#2A8D84` |
| Lindo | 暗砖红 | `#9D3A33` | `#C45A52` |
| Yuich | 森林绿 | `#3A925F` | `#5AB87A` |
| Qubi | 午夜蓝灰 | `#3A3F5C` | `#5A6080` |
| Fifo Music | 动态取色（6 预设 + 封面提取） | 见下方说明 | — |
| GOTO | 琥珀橙 | `#FF7E00` | `#FFA240` |
| Route | 薰衣草紫 | `#8479D2` | `#B4AEEA` |
| 母品牌（默认） | 黑白灰，无强调色 | — | — |

**Fifo Music 多强调色系统：** Fifo 作为音乐播放器，支持 6 种预设强调色（Blue `#1C3B6E`、Amber `#B45309`、Emerald `#047857`、Rose `#9F1239`、Violet `#6D28D9`、Slate `#334155`）以及从专辑封面自动提取主色的动态模式。深色模式下所有强调色需提亮去饱和。

**原则：**

- Accent Color 只用于最需要强调的核心元素，不大面积铺色
- 同一界面中 Accent Color 出现面积不超过视觉重量的 15%
- 深色模式下 Accent Color 必须重新校验对比度，通常需要提亮 20-30%
- 每个 Accent Color 需要配套 `accent-hover`（悬停态，更深/更亮）和 `accent-soft`（浅底色，透明度 8-12%）

#### 语义层：功能色

跨产品统一的语义色，不随 Accent Color 变化：

| 语义 | 色值 | 用途 |
|---|---|---|
| 危险 / 删除 | `#D94F4F` ~ `#E5484D` | 破坏性操作、错误状态 |
| 成功 | `#059669` ~ `#4ADE80` | 完成、连接成功 |
| 警告 | `#F59E0B` ~ `#FBBF24` | 注意、待处理 |
| 信息 | `#3B82F6` | 提示、链接 |

**原则：** 语义色在所有产品中含义固定，不受产品 Accent Color 影响。用户在任何产品中看到红色，都应该立刻意识到「这是危险/删除」。

**优先级色（Lindo 任务系统专用）：**

| 优先级 | 色值 | 卡片背景 | 说明 |
|---|---|---|---|
| 高 | `#B5838D` | `#F3E9E9` | 莫兰迪玫瑰红 |
| 中 | `#D4B5A0` | `#FFF9E6` | 莫兰迪米黄 |
| 低 | `#A8B5A0` | `#F2F9F7` | 莫兰迪灰绿 |

优先级色仅在 Lindo 的任务系统中使用，其他产品不涉及。Lindo 暗色模式下优先级色直接使用语义色（danger/warning/success）。

#### 质感层：毛玻璃与半透明

Simcise 产品大量使用半透明 + 毛玻璃效果建立空间层级，而非依赖阴影。

| 层级 | backdrop-filter | 用途 |
|---|---|---|
| 轻度模糊 | `blur(10px) saturate(1.1)` | 悬浮卡片、工具提示 |
| 中度模糊 | `blur(16px) saturate(1.2)` | 右键菜单、下拉面板 |
| 高度模糊 | `blur(32px) saturate(1.3)` | 模态弹窗遮罩 |
| 极致模糊 | `blur(48~80px) saturate(1.3~2.0)` | 沉浸模式背景、全屏遮罩 |

**典型半透明背景色：**

| 场景 | 浅色模式 | 暗色模式 |
|---|---|---|
| 右键菜单 | `rgba(232, 228, 222, 0.98)` | `rgba(52, 51, 48, 0.97)` |
| 弹窗遮罩 | `rgba(0, 0, 0, 0.40)` | `rgba(0, 0, 0, 0.55)` |
| 浮动面板 | `rgba(252, 250, 246, 0.92)` | `rgba(28, 29, 33, 0.92)` |

**原则：**
- 毛玻璃效果在性能受限设备上可降级（`data-perf="low"` 时关闭 `backdrop-filter`）
- 模糊值不高于 `80px`，过高的模糊会导致渲染性能问题
- 半透明背景的透明度在暗色模式下需要更低（更不透明），避免文字穿透

---

### 2.2 字体系统

**正文字体（主要使用）**

| 场景 | 中文 | 英文 |
|---|---|---|
| 界面 UI 文字 | 思源黑体 (Source Han Sans SC) | Nunito |
| 正文阅读内容 | 思源黑体 / Noto Sans SC | Nunito |

**特殊字体（特定场景使用）**

| 场景 | 中文 | 英文 |
|---|---|---|
| 品牌标题 / 展示性文字 | 霞鹜文楷 (LXGW WenKai) | Geist / Poppins |
| 数字展示 / 时间 | — | Outfit |
| 代码 / 技术内容 | — | JetBrains Mono / Geist Mono |
| 品牌 Logo | — | Poppins (font-weight: 696) |

**字体回退链（统一）：**

```css
/* 中文 UI */
--font-cjk: 'Source Han Sans SC', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;

/* 英文 UI */
--font-latin: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* 展示/品牌 */
--font-display: 'Outfit', 'Nunito', 'Source Han Sans SC', sans-serif;

/* 等宽/代码 */
--font-mono: 'JetBrains Mono', 'Geist Mono', 'SF Mono', 'Consolas', monospace;

/* 文楷/艺术 */
--font-artistic: 'LXGW WenKai', 'STKaiti', 'KaiTi', serif;
```

**字号层级**

| 层级 | 大小 | 用途 | 产品实例 |
|---|---|---|---|
| 超大标题 | 28–36pt | 品牌展示、Onboarding | Lindo Logo 42px, GOTO 36px |
| 大标题 | 24–28pt | 页面主标题、空状态 | Shore 24px, Lindo h1 24px |
| 节标题 | 16–20pt | 区块标题、侧边栏分组 | Shore 20px, Fifo 20px |
| 正文 | 13–15pt | 卡片内容、描述文字 | 全局基准 13px |
| 辅助文字 | 11–12pt | 时间戳、标签、元数据 | Shore 12px, Lindo 11px |
| 极小字 | 9–10px | 角标、快捷键标签、版权 | GOTO 8-10px, Lindo 9px |

**字重层级：**

| Token | 值 | 用途 |
|---|---|---|
| `--font-weight-regular` | `400` | 正文、描述 |
| `--font-weight-medium` | `500` | 按钮、导航项、卡片标题 |
| `--font-weight-semibold` | `600` | 区块标题、Logo 文字 |
| `--font-weight-bold` | `700` | 页面主标题、CTA 按钮 |
| 特殊：Logo | `696` | Poppins 品牌字重（GOTO Logo） |

**行高规范：**

| 场景 | line-height | 说明 |
|---|---|---|
| 全局基准 | `1.5` | 界面 UI 文字 |
| 正文阅读 | `1.55~1.6` | 长文本、编辑器 |
| 卡片标题 | `1.3` | 单行标题，紧凑 |
| 设置标签 | `1.45` | 设置页标签 |
| 大标题 | `1.2` | 页面主标题 |
| 辅助文字 | `1.4` | 小字、标签 |

**字间距（letter-spacing）：**

| 场景 | 值 |
|---|---|
| 正文/标题 | `normal`（不设置） |
| 全大写英文标题 | `0.05~0.1em` |
| 快捷键标签 | `0.16em`（GOTO 风格） |
| 品牌 Logo | `normal` |

**字体渲染优化：**

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
font-variant-ligatures: common-ligatures;
```

**原则：**

- 层级之间字号差距不小于 2pt，保证可识别的视觉差异
- 不在同一段落内混用超过两种字重
- 英文排版优先使用 Nunito Regular / Medium，避免过度使用 Bold
- 全局基准字号 `13px`，行高 `1.5~1.55`
- 中文排版行高比英文多 0.1~0.15，保证阅读舒适度
- 不在产品界面中使用斜体（中文字体不支持斜体渲染）
- 同一产品内字重种类不超过 3 种（regular + medium + semibold 为常见组合）

---

### 2.3 圆角

Simcise 统一使用**大圆角**风格，形态接近银行卡的长条圆角矩形，有量感但不是完整胶囊。

| 元素 | 圆角值 | 备注 |
|---|---|---|
| 大卡片 / 弹窗 | `12~16px` | 版本面板、模态框 |
| 卡片 / 面板 | `12px` | 标准卡片、ShorePoint Card |
| 菜单 / 浮层 | `8~10px` | 右键菜单、下拉面板 |
| 按钮 | `8px` | 主要按钮、操作按钮 |
| 输入框 | `8px` | 文本输入、搜索框 |
| 标签 / Badge | `6px` | 状态标签、分类标签 |
| 图标容器 | `6px` | 图标按钮、小控件 |
| 极小元素 | `4~5px` | 快捷键标签、关闭按钮 |
| 胶囊 / Toggle | `999px` 或 `50%` | 开关、药丸按钮 |

**特殊场景圆角：**

| 产品/场景 | 圆角值 | 说明 |
|---|---|---|
| GOTO 手机容器 | `48px` | 模拟手机外框 |
| Quick Chat 收起态 | `30px` | 胶囊形悬浮条 |
| 消息气泡 | `16px`（对角 `4px`） | 非对称圆角，指向发送者 |
| 搜索框聚焦态 | `18px` | 从 `12px` 生长到 `18px` |

**原则：**
- 同一界面中圆角值不超过三种，避免视觉噪声
- 嵌套容器内外圆角差保持 `2~4px`（如外 `12px` 内 `10px`）
- 菜单项内部圆角统一为 `4~6px`

---

### 2.4 间距

Simcise 的留白不是均匀分配的，而是**有呼吸节奏的**——该紧致紧，该松则松。

基础间距单位：`4px`，所有间距值为 4 的倍数（部分微调场景允许 2px 增量）。

| 场景 | 间距值 | 产品实例 |
|---|---|---|
| 组件内部元素间距 | `4~8px` | 按钮内 icon + 文字 `5~8px` |
| 卡片内边距 | `10~16px` | Lindo 任务卡 `10px`，Shore 卡片 `12px` |
| 卡片之间间距 | `8~12px` | 网格 gap `10~12px` |
| 区块之间间距 | `16~24px` | 设置区块 `16~24px` |
| 页面边距 | `16~24px` | Shore 内容区 `16px`，Lindo `20px` |
| 列表项间距 | `2~6px` | 菜单项间 `2~4px`，导航项 `4~6px` |

**典型内边距模式：**

| 组件 | padding |
|---|---|
| 按钮（标准） | `8px 12px` |
| 按钮（大） | `12px 24px` |
| 输入框 | `8~10px 12px` |
| 右键菜单项 | `6~9px 12~14px` |
| 模态框头部 | `16px 20px` |
| 模态框主体 | `20px` |

**原则：**

- 相关元素靠近，不相关元素拉开，通过间距传递信息层级
- 不追求四边均匀，垂直方向的节奏比水平方向更重要
- 大留白用于呼吸，不是因为没有内容
- 紧凑模式（如 Fifo 专业模式）可缩小到 `2~3px` 增量，但仅限信息密度极高的场景

---

### 2.5 阴影

阴影用于建立层级关系，不用于装饰。Simcise 产品的阴影整体偏**柔和扩散**，不使用生硬的硬阴影。

| 层级 | 用途 | 参考值 |
|---|---|---|
| 无阴影 | 同层元素，卡片默认状态 | — |
| 浅阴影 | 悬停状态、轻微浮起 | `0 2px 8px rgba(0,0,0,0.08)` |
| 中阴影 | 浮层、菜单、下拉面板 | `0 4px 16px rgba(0,0,0,0.12)` |
| 深阴影 | 模态弹窗 | `0 8px 32px rgba(0,0,0,0.18)` |
| 超深阴影 | 全屏手机容器等 | `0 24px 64px rgba(0,0,0,0.35)` |

**强调色阴影：** 当阴影需要传递「活跃/选中」信息时，使用 Accent Color 的半透明色替代黑色：

| 产品 | 强调色阴影 |
|---|---|
| Shore | `0 8px 18px rgba(26, 107, 102, 0.2)` |
| Lindo | `0 4px 12px rgba(139, 58, 54, 0.15)` |
| Yuich | `0 2px 8px rgba(58, 146, 95, 0.25)` |
| Fifo | `0 2px 8px rgba(0,0,0,0.10)` + 强调色 glow |

**内阴影：** 用于输入框聚焦、Toggle 开关等需要「凹陷」感的场景：

| 场景 | 参考值 |
|---|---|
| 输入框聚焦 | `0 0 0 3px rgba(accent, 0.1)` |
| Toggle 轨道 | `inset 0 1px 2px rgba(0,0,0,0.18)` |
| 搜索栏激活 | `inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.16)` |

**暗色模式阴影：** 暗色模式下黑色阴影不可见，需要加大透明度和模糊半径：

| 层级 | 浅色模式 | 暗色模式 |
|---|---|---|
| 浅阴影 | `0 2px 8px rgba(0,0,0,0.08)` | `0 2px 8px rgba(0,0,0,0.30)` |
| 中阴影 | `0 4px 16px rgba(0,0,0,0.12)` | `0 4px 16px rgba(0,0,0,0.35)` |
| 深阴影 | `0 8px 32px rgba(0,0,0,0.18)` | `0 8px 32px rgba(0,0,0,0.45)` |
| 超深阴影 | `0 24px 64px rgba(0,0,0,0.35)` | `0 24px 64px rgba(0,0,0,0.60)` |

**原则：**
- Route 项目采用**严格扁平**风格，完全不使用阴影，用 1px hairline 边框替代——这是有意的设计选择，不代表通用规范
- 强调色阴影的面积同样遵循 15% 原则
- 多层阴影叠加时，最多两层，且模糊半径差距不小于 2 倍

### 2.6 边框与分割线

边框是 Simcise 建立层级的核心手段之一，尤其在扁平风格产品（Route）中完全替代阴影。

**边框类型：**

| 类型 | 样式 | 用途 |
|---|---|---|
| 默认边框 | `1px solid var(--border)` | 卡片、输入框、面板 |
| 暖调边框 | `1px solid var(--border-warm)` | Shore/Yuich 暖调产品 |
| Hairline 边框 | `1px solid rgba(0,0,0,0.06)` | GOTO 风格，更轻 |
| 暗色边框 | `1px solid rgba(255,255,255,0.06~0.12)` | 暗色模式统一 |
| 强调边框 | `1px solid var(--accent)` | 聚焦态、活跃态 |
| 内发光边框 | `inset 0 1px 0 rgba(255,255,255,0.06)` | 搜索栏、高级控件 |

**分割线：**

| 场景 | 样式 |
|---|---|
| 内容区分割 | `1px solid var(--border)` ，`margin: 4px 8px` |
| 菜单分隔 | `1px solid var(--border)` ，上下 `margin: 4px 8px` |
| 侧边栏分割 | `inset -1px 0 0 rgba(255,255,255,0.02)` 内阴影 | Shore 侧边栏 |

**原则：**
- 边框始终 `1px`，不使用 `2px` 以上（强调态左边框除外）
- 浅色模式边框用实色，暗色模式边框用半透明白色
- 边框色永远不比背景色深超过 20% 亮度差

---

### 2.7 渐变模式

渐变在 Simcise 中用于增加质感，不用于装饰。

| 场景 | 渐变 | 产品 |
|---|---|---|
| 侧边栏背景 | `linear-gradient(180deg, #3A3834, #302E2A)` | Shore 暗色 |
| 侧边栏背景 | `linear-gradient(180deg, #E5DED5, #D3CBC1)` | Shore 亮色 |
| 卡片顶部强调条 | `linear-gradient(90deg, accent, accent-light)` ，`height: 3px` | Shore ShorePoint |
| 强调色顶部光 | `inset 0 1px 0 rgba(255,255,255,0.06)` | 通用 |
| 沉浸模式背景 | 径向渐变，从封面色到深色 | Fifo |
| 金属质感（经典风格） | `inset 0 1px 0 metal-hi, inset 0 -1px 0 metal-lo` | Fifo classic |

**金属高光色值：**

| Token | 值 |
|---|---|
| `--metal-hi` | `rgba(255,255,255,0.55)` |
| `--metal-lo` | `rgba(0,0,0,0.18)` |

**原则：**
- 渐变方向以垂直（`180deg`）和水平（`90deg`）为主，不使用对角渐变
- 渐变色彩不超过 2 色，不使用多色渐变
- 渐变仅用于背景/质感，不用于文字

---

### 2.8 z-index 层级系统

所有产品共享统一的 z-index 层级，避免层级混乱：

| 层级 | z-index | 用途 |
|---|---|---|
| 基础内容 | `0~9` | 普通卡片、文本 |
| 侧边栏 | `10~19` | 侧边栏、导航 |
| 顶栏 | `20~29` | 顶栏、标题栏 |
| 浮动元素 | `100~199` | 浮动按钮、侧边笔记栏 |
| 下拉菜单 | `1000~1999` | 右键菜单、下拉面板 |
| 模态弹窗 | `2000~2999` | 模态框、对话框 |
| Toast | `3000~3999` | 提示消息 |
| 最高层 | `9999~10000` | 右键菜单（Fifo）、全屏覆盖 |

**产品实例：**

| 产品 | 侧边栏 | 菜单 | 弹窗 | 最高层 |
|---|---|---|---|---|
| Shore | — | — | — | — |
| Lindo | — | — | — | `1200` (FAB) |
| Fifo | `100` | `10000` | `2000` | `10000` (ctx-menu) |
| GOTO | `600` (status-bar) | — | — | `10000` |
| Yuich | — | — | — | `1200` (FAB) |

**原则：**
- 新元素使用最近的层级，不随意分配 z-index
- 不使用 `z-index: 99999` 这类极端值
- 同一层级内用 `+1/+2` 微调，不跳跃

---

## 三、交互规范

### 3.1 动画哲学

> 动画是界面的呼吸，不是表演。

所有动画遵循一个原则：**连贯、一致、有意图**。动画不应该打断用户的思路，而应该顺着用户的操作意图流动。

### 3.2 动画时长

以 Shore 侧边栏延展为基准速度，略微偏向灵动。

| 场景 | 时长 | 产品实例 |
|---|---|---|
| 微交互（hover、focus） | `100~150ms` | 按钮背景变化 `120~150ms` |
| 元素显隐（渐入渐出） | `150~200ms` | 菜单项显隐 `150ms` |
| 面板展开 / 收起 | `250~320ms` | 侧边栏展开 `250~350ms` |
| 生长变形（菜单→面板） | `300~400ms` | 搜索框延展 `400~550ms` |
| 页面级过渡 | `350~450ms` | 视图切换 `350ms` |
| 呼吸 / 脉冲循环 | `2~8s` | 休眠呼吸灯 `7s`，LED 脉冲 `2.4s` |

**原则：**
- 用户操作反馈（hover/active）不超过 `200ms`，超过会感觉迟钝
- 展开/收起动画不超过 `500ms`，超过会感觉拖沓
- 装饰性动画（呼吸灯、光斑漂移）周期不低于 `2s`，避免视觉焦虑

### 3.3 缓动曲线

| 场景 | 曲线 | 说明 |
|---|---|---|
| 元素进入 | `ease-out` | 快进慢出，有落地感 |
| 元素退出 | `ease-in` | 慢出快消，干净利落 |
| 形态变形 | `ease-in-out` | 平滑过渡 |
| 弹性感微交互 | `cubic-bezier(0.34, 1.56, 0.64, 1)` | 过冲回弹，Logo 弹入 |
| **主曲线（Simcise 通用）** | `cubic-bezier(0.4, 0, 0.2, 1)` | Material 标准曲线，全局最常用 |
| 阻尼减速 | `cubic-bezier(0.18, 0.82, 0.24, 1)` | Fifo 默认缓动，跟手无过冲 |
| iOS 弹性 | `cubic-bezier(0.32, 1.45, 0.45, 1)` | GOTO 搜索框延展 |
| 物理弹性 | `cubic-bezier(0.22, 1.2, 0.36, 1)` | GOTO 卡片微弹 |
| 平滑收敛 | `cubic-bezier(0.2, 0.7, 0.2, 1)` | Route 全局缓动 |

**原则：**
- 每个产品选定一条**主曲线**，全局 80% 以上的过渡使用它
- 弹性曲线仅用于入场/弹出，不用于退出/收起
- 不使用 `linear` 做 UI 过渡（进度条填充除外）

### 3.4 生长优先原则

状态变化通过**同一元素的形态延展**实现，不销毁旧元素再创建新元素。

- ✅ 侧边栏通过宽度变化展开内容（Shore: `300px → 0`，可扩展到 `50vw`）
- ✅ 搜索框聚焦时圆角从 `12px` 生长到 `18px`，高度从 `62px` 展开到 `130px`（GOTO）
- ✅ 右键菜单原地生长为选择面板
- ✅ 操作按钮通过 opacity + transform 按需浮现
- ✅ Quick Chat 从 `60px` 胶囊生长到 `500px` 全展开面板（Yuich）
- ❌ 不用弹窗替代可以就地完成的操作
- ❌ 不用页面跳转替代可以展开的面板

### 3.5 按需显现原则

控件、按钮、操作项在**不需要时退出视野**，用户靠近或触发时生长出来。

- 窗口控制按钮（最小化、最大化、关闭）：默认隐藏，鼠标进入标题栏区域时渐显
- 卡片操作按钮：默认隐藏，hover 卡片时渐显
- 侧边栏分组操作：默认隐藏，hover 分组时渐显
- 播放列表操作项：hover 行时从右侧滑入（Fifo）
- 侧边笔记栏：收起时仅露 `12px` 把手，hover 展开到 `240px`（Fifo）

**原则：** 隐藏的元素必须有明确的触发区域，用户不能找不到它。

### 3.6 按压反馈

所有可交互元素需要明确的按压/激活反馈：

| 状态 | 效果 | 全局通用 |
|---|---|---|
| hover | `brightness(1.04)` 或背景色变化 | `100~150ms` 过渡 |
| active / press | `scale(0.97~0.985)` + `translateY(1px)` | 下沉感，`60~100ms` |
| focus-visible | `outline: 2px solid accent; outline-offset: 1px` | 键盘导航可见 |
| disabled | `opacity: 0.45` + `cursor: not-allowed` | 无过渡动画 |

### 3.7 可复用动画目录与 CSS 代码

以下 @keyframes 是跨产品通用的动画模板，各产品可直接复用或微调：

**入场动画：**

| 名称 | 效果 | 时长 | 用途 |
|---|---|---|---|
| `fadeIn` | `opacity: 0→1` | `200~300ms` | 通用淡入 |
| `fadeInUp` | `opacity: 0→1 + translateY(8~10px)→0` | `250~300ms` | 卡片/列表项入场 |
| `slideInDown` | `translateY(-10px)→0 + opacity` | `200~300ms` | 下拉通知 |
| `popIn` | `scale(0.8)→scale(1) + opacity` | `200~300ms` | 弹窗、浮层 |
| `searchFadeScaleIn` | `scale(0.92)→scale(1) + opacity` | `200ms` | 搜索面板 |
| `logoSymbolPop` | `scale(0.3) rotate(-10deg) → scale(1) rotate(0)` | `500ms` | Logo 符号弹入 |

**退场动画：**

| 名称 | 效果 | 时长 |
|---|---|---|
| `fadeOut` | `opacity: 1→0` | `150~200ms` |
| `activateFadeOut` | `scale(1)→scale(0.9) + opacity: 1→0` | `300ms` |

**循环动画：**

| 名称 | 效果 | 周期 | 用途 |
|---|---|---|---|
| `pulse` | `scale(1)→scale(1.05)→scale(1)` | `2s` | 活跃状态指示 |
| `subtlePulse` | `opacity: 1→0.8→1` | `2s` | 微妙呼吸 |
| `breathGlow` | `box-shadow` 脉冲 | `2.8s` | 播放按钮呼吸灯 |
| `spin` | `rotate(0→360deg)` | `1s` | Loading 旋转 |
| `twinkle` | `opacity: 1→0.5→1` | `2s` | 闪烁效果 |
| `shimmer` | `background-position: 0%→100%→0%` | `3s` | 骨架屏闪光 |
| `ledPulse` | opacity 脉冲 | `2.4s` | LED 指示灯 |

**特殊动画：**

| 名称 | 效果 | 用途 |
|---|---|---|
| `buttonExpand` | `translateX(-20px)→0 + width` | 按钮展开 |
| `buttonCollapse` | `translateX(0)→translateX(-10px) + width` | 按钮收缩 |
| `typewriter` | `width: 0→100%` | 打字机效果 |
| `noteEditorIn` | `opacity: 0→1` | 编辑器淡入 |
| `expandInput` | `scale(0.95)→scale(1)` | 输入框展开 |
| `typewriter caret` | `steps(2,start) blink` | 光标闪烁，`1.06s` |

**可复用 @keyframes CSS 代码：**

```css
/* ═══ 入场动画 ═══ */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes searchFadeScaleIn {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}

/* ═══ 退场动画 ═══ */
@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}

/* ═══ 循环动画 ═══ */
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
}
@keyframes subtlePulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.8; }
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
}
@keyframes breathGlow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(accent, 0.4); }
  50%      { box-shadow: 0 0 12px 4px rgba(accent, 0.15); }
}

/* ═══ 光标闪烁 ═══ */
@keyframes caretBlink {
  0%, 49%   { opacity: 1; }
  50%, 100% { opacity: 0; }
}
/* 使用: animation: caretBlink 1.06s steps(2, start) infinite; */
```

**缓动函数命名规范：**

```css
/* 主曲线 — 全局 80% 过渡使用 */
--ease-main: cubic-bezier(0.4, 0, 0.2, 1);

/* 产品特定主曲线（二选一） */
--ease-damped: cubic-bezier(0.18, 0.82, 0.24, 1);  /* Fifo: 跟手无过冲 */
--ease-route: cubic-bezier(0.2, 0.7, 0.2, 1);       /* Route: 平滑收敛 */

/* 入场专用 */
--ease-enter: cubic-bezier(0.22, 0.95, 0.35, 1);    /* GOTO 平滑 */
--ease-bounce: cubic-bezier(0.22, 1.2, 0.36, 1);    /* 微弹性 */
--ease-ios-spring: cubic-bezier(0.32, 1.45, 0.45, 1); /* iOS 弹性 */

/* 退场专用 */
--ease-exit: cubic-bezier(0.4, 0, 0.6, 0.9);         /* 加速消失 */
```

---

## 四、组件规范

### 4.1 弹窗使用准则

Simcise **克制甚至不使用弹窗**，弹窗仅在以下场景允许出现：

**允许使用弹窗：**

- 惊喜提示（成就解锁、里程碑）
- 系统级警告（数据即将丢失、权限请求）
- 破坏性操作的二次确认（删除不可恢复的数据）

**禁止使用弹窗：**

- 表单填写（改用侧边栏展开或行内编辑）
- 详情查看（改用面板展开）
- 选项选择（改用菜单生长或内联选择器）
- 普通信息提示（改用 Toast 或内联提示）

**弹窗设计原则：**

- 弹窗出现必须有充分理由，且无法用其他方式替代
- 背景遮罩使用毛玻璃：`backdrop-filter: blur(32px) saturate(1.3)`，透明度不超过 55%
- 弹窗本身圆角 `12~16px`，最大宽度 `360~420px`
- 弹窗入场动画：`scale(0.95) → scale(1)` + `opacity 0→1`，`200~300ms`
- 弹窗阴影：`0 10px 40px rgba(0,0,0,0.2)` 或更深

**弹窗结构规范：**

```css
/* 遮罩层 */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.40);
  backdrop-filter: blur(32px) saturate(1.3);
  z-index: 2000;
  display: flex; align-items: center; justify-content: center;
}
/* 暗色模式遮罩 */
[data-theme="dark"] .modal-overlay { background: rgba(0,0,0,0.55); }

/* 弹窗容器 */
.modal-container {
  width: 360px; max-width: 90vw; max-height: 70vh;
  border-radius: 16px;
  background: var(--surface);
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  display: flex; flex-direction: column;
  animation: popIn 250ms var(--ease-main);
}

/* 头部 */
.modal-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  font-size: 16px; font-weight: 600;
  display: flex; align-items: center; justify-content: space-between;
}
.modal-close {
  width: 28px; height: 28px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  transition: background 150ms;
}
.modal-close:hover { background: var(--bg-tertiary); }

/* 主体 */
.modal-body {
  padding: 20px;
  overflow-y: auto;
  display: flex; flex-direction: column; gap: 12px;
}

/* 底部操作栏 */
.modal-footer {
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  display: flex; justify-content: flex-end; gap: 8px;
}
```

### 4.2 菜单

- 默认使用右键菜单或长按菜单，不主动在界面上暴露操作入口
- 菜单可通过生长动画原地变形为更复杂的选择面板
- 破坏性操作（删除）文字使用 `#D94F4F`，与其他操作项视觉区分

**菜单样式规范：**

| 属性 | 参考值 |
|---|---|
| 最小宽度 | `160~196px` |
| 圆角 | `8~10px` |
| 内边距 | `4px`（容器），`6~9px 12~14px`（菜单项） |
| 菜单项圆角 | `4~6px` |
| 背景 | 半透明 + 毛玻璃（见 2.1 质感层） |
| 阴影 | `0 12px 28px rgba(0,0,0,0.22)` |
| 入场动画 | `scale(0.96→1)` + `opacity`，`120~150ms` |
| 分隔线 | `1px` 高，`margin: 4px 8px` |

### 4.3 按钮

| 类型 | 用途 | 样式 |
|---|---|---|
| 主要按钮 | 页面核心操作，每屏只出现一次 | Accent Color 填充，白色文字 |
| 次要按钮 | 辅助操作 | 描边，无填充，文字色同主文字 |
| 幽灵按钮 | 低优先级操作 | 无边框，文字色，hover 显背景 |
| 危险按钮 | 破坏性操作 | `#D94F4F` 填充或文字 |

**按钮尺寸参考：**

| 类型 | 尺寸 | padding | 圆角 |
|---|---|---|---|
| 标准按钮 | 高度 `32~40px` | `8px 12px` | `8px` |
| 小按钮（ebtn） | 高度 `22~28px` | `0 10px` | `6px` |
| 图标按钮 | `36×36px` | — | `8~12px` |
| CTA 大按钮 | 高度 `40~48px` | `14px 22px` | `9~12px` |
| 胶囊按钮组 | 最小宽度 `56px` | `6px 18px` | `10px`（容器） |

**按钮完整状态机（以主要按钮为例）：**

```css
.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms var(--ease-main);
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.btn-primary:active {
  transform: scale(0.97) translateY(0);
  box-shadow: none;
}
.btn-primary:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.btn-primary:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

**次要按钮状态差异：**

| 状态 | 主要按钮 | 次要按钮 | 幽灵按钮 |
|---|---|---|---|
| default | accent 填充 | 透明 + `1px border` | 透明，无边框 |
| hover | accent-hover | `var(--bg-tertiary)` 背景 | `var(--bg-tertiary)` 背景 |
| active | scale(0.97) | scale(0.97) | scale(0.97) |
| disabled | opacity 0.45 | opacity 0.45 | opacity 0.45 |

### 4.4 输入框

- 默认状态：细边框（`1px`），低对比度边框色
- 聚焦状态：边框切换为 Accent Color，外圈出现 `3px` 半透明光晕
- 错误状态：边框切换为 `#D94F4F`，下方出现内联错误文字
- 不使用浮动 Label，使用固定 Placeholder + 上方静态 Label

**输入框尺寸参考：**

| 场景 | 高度 | padding | 圆角 | 字号 |
|---|---|---|---|---|
| 标准输入 | `32~36px` | `8px 12px` | `8px` | `13~14px` |
| 面板输入 | `36~40px` | `10px 12px` | `8px` | `13px` |
| 设置输入 | `40~48px` | `14px 16px` | `8px` | `13~14px` |
| 搜索框（大） | `48~62px` | `8px 8px 8px 16px` | `12~24px` | `14~16px` |

**输入框完整状态机：**

```css
.input {
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
  background: var(--surface);
  color: var(--text);
  transition: border-color 150ms var(--ease-main), box-shadow 150ms var(--ease-main);
}
.input::placeholder { color: var(--text-muted); }
.input:hover { border-color: var(--border-strong); }
.input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent);
  outline: none;
}
.input.error {
  border-color: #D94F4F;
  box-shadow: 0 0 0 3px rgba(217, 79, 79, 0.1);
}
.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--bg-tertiary);
}
```

**Label 布局：**

```css
/* 静态 Label 在输入框上方 */
.field-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 4px;
}
/* 错误信息在输入框下方 */
.field-error {
  font-size: 11px;
  color: #D94F4F;
  margin-top: 4px;
}
```

### 4.5 Toggle 开关

| 属性 | 参考值 |
|---|---|
| 轨道尺寸 | `36~44px × 18~22px` |
| 圆角 | `999px`（胶囊形） |
| 滑块尺寸 | 轨道高度 `-4~6px` |
| 滑块圆角 | `50%`（圆形）或 `8px` |
| 关闭态背景 | `rgba(128,128,128,0.22)` |
| 开启态背景 | Accent Color |
| 位移量 | `translateX(16~18px)` |
| 过渡 | `180ms ease` |

### 4.6 卡片

| 属性 | 参考值 |
|---|---|
| 圆角 | `12px` |
| 内边距 | `10~16px` |
| 边框 | `1px solid border-color` |
| 悬停效果 | `translateY(-2px)` + 阴影加深 + 边框色变 accent |
| 活跃态左边框 | `2px solid accent`（Fifo 播放列表） |

**卡片状态机：**

```
默认 → hover: translateY(-2px) + shadow-lg + border-color → accent
默认 → active: scale(0.98) + shadow-sm
默认 → selected: border-left 2px accent + accent-soft 背景
```

**卡片顶部强调条（Shore 风格）：**

```css
height: 3px;
border-radius: 3px 3px 0 0;
background: linear-gradient(90deg, var(--accent), var(--accent-light));
```

#### 4.6.1 极简氛围卡片（Fifo Now Playing）

Fifo Music 的「正在播放」卡片是 Simcise 极简美学的极致表达——**用留白代替装饰，用呼吸代替信息**。

**视觉特征：**

| 属性 | 参考值 |
|---|---|
| 背景 | `radial-gradient(circle at center, #f8f7f4 0%, #f0efec 100%)` |
| 圆角 | `16~20px`（大圆角，接近银行卡形态） |
| 阴影 | `0 8px 30px rgba(0,0,0,0.04)`（极轻，仅暗示层级） |
| 主文字 | `font-weight: 300~350; color: #6b6b6b; font-size: 18~22px` |
| 品牌文字 | `font-size: 11~12px; color: #a0a0a0; letter-spacing: 0.5px` |
| 内边距 | `48~64px`（超大留白，内容居中） |
| 最小高度 | `320~400px` |

**设计原则：**

- **零装饰**：无图标、无按钮、无分割线，只有文字和留白
- **径向渐变背景**：从中心向外极淡扩散，模拟柔光效果
- **文字层级极简**：仅两级——主标题（曲名/状态）+ 品牌署名
- **静默氛围**：整体传达"安静、沉思、高保真"的情绪
- **大留白即内容**：负空间不是"空"，而是设计本身

**CSS 实现：**

```css
.now-playing-card {
  min-height: 360px;
  border-radius: 18px;
  background: radial-gradient(circle at center, #f8f7f4 0%, #f0efec 100%);
  box-shadow: 0 8px 30px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 48px;
  position: relative;
}

.now-playing-card .title {
  font-family: 'Inter', 'Nunito', sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #6b6b6b;
  letter-spacing: 0.2px;
  text-align: center;
  margin-bottom: auto;
}

.now-playing-card .brand {
  font-family: 'Inter', 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #a0a0a0;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: auto;
}
```

**暗色模式适配：**

```css
[data-theme="dark"] .now-playing-card {
  background: radial-gradient(circle at center, #1e1e1e 0%, #141414 100%);
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
}
[data-theme="dark"] .now-playing-card .title { color: #9a9a9a; }
[data-theme="dark"] .now-playing-card .brand { color: #666666; }
```

**AI 生成提示词（Midjourney / DALL·E 参考）：**

> **基础版：**
> textminimalist music player album card UI, soft warm off-white background with extremely subtle radial gradient from center, large amount of negative space, centered elegant light gray text "Just for this moment" in thin clean sans-serif font, very small "fifo music" text at bottom in lighter gray, soft rounded corners, delicate soft shadow, high-end audiophile aesthetic, calm and atmospheric, pure refined design, no decorations, no buttons, quiet and contemplative mood --stylize 250 --v 6

> **进阶微调版（更精确）：**
> textUI design of a music player now-playing card, extreme minimalism, soft ivory/cream background with barely visible soft radial vignette, centered title "Just for this moment" in light weight geometric sans-serif (similar to Inter or SF Pro Light), tiny brand text "fifo music" at the bottom center, subtle soft drop shadow, rounded rectangle with large corner radius, high negative space, quiet elegant aesthetic, premium Japanese minimalism mixed with modern digital product design, clean and breathable

**适用场景：**

- 音乐播放器「正在播放」/ 空状态
- 冥想 / 专注类产品的沉浸界面
- 任何需要"安静、呼吸感"的展示卡片
- 产品启动页 / 欢迎页的极简表达

---

### 4.7 Toast / 通知

Toast 用于轻量级反馈提示，替代弹窗：

| 属性 | 参考值 |
|---|---|
| 位置 | 顶部居中 或 右下角 |
| 圆角 | `8px` |
| padding | `10px 16px` |
| 字号 | `12~13px` |
| 最大宽度 | `360px` |
| 背景 | `var(--surface)` + `box-shadow: 0 4px 16px rgba(0,0,0,0.12)` |
| 入场 | `slideDownIn` + `fadeIn`，`300ms ease` |
| 退场 | `fadeOut`，`200ms ease` |
| 自动消失 | `3~5s` 后自动退场 |
| z-index | `3000~3999` |

**Toast 类型色：**

| 类型 | 左边框 | 图标色 |
|---|---|---|
| 成功 | `#059669` | `#4ADE80` |
| 错误 | `#D94F4F` | `#E5484D` |
| 警告 | `#F59E0B` | `#FBBF24` |
| 信息 | `#3B82F6` | `#3B82F6` |

### 4.8 加载状态

| 类型 | 样式 | 用途 |
|---|---|---|
| 旋转器 | `border: 2px solid border; border-top-color: accent; border-radius: 50%; animation: spin 1s linear infinite` | 按钮加载、页面加载 |
| 骨架屏 | `background: linear-gradient(90deg, surface-2 25%, surface 50%, surface-2 75%); background-size: 200% 100%; animation: shimmer 3s ease infinite` | 内容区加载 |
| 进度条 | `height: 2~4px; border-radius: 2px; background: accent; transition: width 0.1s linear` | 文件上传、下载 |
| 呼吸点 | 三个圆点 `scale(0.6)→scale(1)`，延迟 `0s/0.2s/0.4s` | 聊天输入中指示器 |
| 脉冲光晕 | `box-shadow: 0 0 0 0 rgba(accent, 0.4)→0 0 0 6px rgba(accent, 0)` | 按钮/头像加载 |

**骨架屏规范：**
- 骨架块圆角与最终内容圆角一致
- 闪光方向从左到右（`background-position: 200%→-200%`）
- 骨架块颜色比背景浅 `3~5%`，不要太明显

### 4.9 图标系统

| 属性 | 规范 |
|---|---|
| 风格 | 线性图标（stroke-based），`stroke-width: 1.5~2px` |
| 尺寸体系 | `14px` (xs) / `22px` (sm) / `26px` (md) / `30px` (lg) / `36px` (xl) |
| 默认尺寸 | `22px`（导航/按钮内图标） |
| 颜色 | 继承文字色，hover 时继承 hover 文字色 |
| 活跃态 | 切换为 Accent Color |
| 库 | Font Awesome（Lindo）、内联 SVG（其他产品） |

**图标尺寸使用场景：**

| 尺寸 | 场景 |
|---|---|
| `14px` | 行内小图标、标签前缀 |
| `22px` | 导航项、按钮、菜单项 |
| `26px` | 顶栏操作按钮 |
| `30px` | 侧边栏主要图标 |
| `36px` | 空状态图标、大按钮 |

**原则：**
- 同一界面内图标尺寸不超过两种
- 图标与文字对齐使用 `align-items: center` + `gap: 5~8px`
- 不使用填充图标（filled）和线性图标（outlined）混用

### 4.10 侧边栏导航项

侧边栏是Simcise 产品的核心导航组件，导航项的状态设计至关重要。

**导航项状态：**

| 状态 | 背景 | 文字 | 其他 |
|---|---|---|---|
| 默认 | `transparent` | `var(--text-secondary)` | — |
| hover | `var(--bg-tertiary)` | `var(--text)` | `translateX(4px)` 微位移 |
| active | `var(--accent)` | `white` | `box-shadow: 0 6px 14px rgba(accent, 0.16)` |
| active + hover | `var(--accent-hover)` | `white` | — |

**导航项样式：**

```css
.nav-item {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  gap: 8px;
  transition: all 200ms var(--ease-main);
}
.nav-item:hover {
  background: var(--bg-tertiary);
  transform: translateX(4px);
}
.nav-item.active {
  background: var(--accent);
  color: white;
  box-shadow: 0 6px 14px rgba(accent, 0.16);
}
```

**侧边栏分组：**
- 分组标题：`font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-muted); padding: 8px 12px`
- 分组间距：`margin-top: 16px`
- 分组操作按钮：默认隐藏，hover 分组标题时渐显（`opacity: 0→1`，`150ms`）

---

## 五、布局规范

### 5.1 核心布局结构

Simcise 产品线统一采用**左侧边栏 + 右侧内容区**的双栏结构。

| 属性 | 参考值 |
|---|---|
| 侧边栏宽度（收起） | `48~60px` |
| 侧边栏宽度（展开） | `200~300px`（Shore `300px`，Lindo `23vw`，Route `248px`） |
| 侧边栏展开方式 | 宽度动画 + 内容同步渐显 |
| 内容区 | 不设固定最大宽度，随窗口自适应 |
| 标题栏高度 | `28~48px`（Shore 内嵌，GOTO `28px`，Fifo `48px`） |

**布局变体：**

| 产品 | 布局 | 说明 |
|---|---|---|
| Shore | `grid: 300px 1fr` | 经典双栏，支持左手模式翻转 |
| Lindo | `flex: 23vw + calc(100%-23vw)` | 侧栏固定宽度百分比 |
| Fifo | `grid: 6fr 4fr` | 左 60% 播放器 + 右 40% 列表 |
| Route | `flex: 248px + 1fr` | 侧栏固定像素宽度 |
| GOTO | `grid: 6fr 4fr`（顶栏+主体） | 手机模拟器内单栏 |
| Yuich | `flex: 20% + 80%` | 侧栏百分比，min 200px / max 320px |

### 5.2 网格

内容区使用隐式网格，卡片布局以 `2 列` 为基础，宽屏可扩展至 `3~4 列`。

| 场景 | 网格配置 |
|---|---|
| 卡片网格（标准） | `repeat(2, 1fr)` 或 `repeat(auto-fill, minmax(220px, 1fr))` |
| 宽屏扩展 | `repeat(3, 1fr)` 或 `repeat(4, 1fr)` |
| 看板视图 | `repeat(3, 1fr)`（Lindo） |
| 列表视图 | `repeat(2, 1fr)`（Lindo） |
| 快捷网格 | `repeat(4, 1fr)`（GOTO QuickTap） |
| 卡片等高 | 不强制，允许自然高度 |

### 5.3 空状态

每个列表和内容区必须设计空状态，空状态包含：

- 一句简短说明（用文楷或 Geist 字体，比正文大一级）
- 可选的引导操作按钮（CTA 大按钮样式）

空状态是产品性格的展示窗口，不能只放一个灰色图标了事。

**空状态布局：** `grid-template-rows: 1fr auto 1fr`，内容垂直居中偏上。

### 5.4 滚动条

Simcise 产品 **默认隐藏滚动条**，保持界面纯净。

```css
/* 全局隐藏 */
scrollbar-width: none;
::-webkit-scrollbar { display: none; }
```

**例外场景**（需要可见滚动条）：

| 场景 | 滚动条样式 |
|---|---|
| Fifo 播放列表 | `width: 6px`，thumb `border-radius: 3px`，`background: var(--border-strong)` |
| 设置面板 | `width: 6px`，hover 时 thumb 变 `var(--text-faint)` |

**自定义滚动条规范（当需要显示时）：**

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: var(--border-strong);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-faint);
}
```

### 5.5 响应式断点

| 断点 | 宽度 | 布局变化 |
|---|---|---|
| 移动端 | `< 760px` | 单列布局，侧边栏隐藏 |
| 平板 | `760~980px` | 侧边栏缩小（`232px`），内容区单列 |
| 桌面 | `980~1280px` | 侧边栏标准宽度，内容区双列 |
| 宽屏 | `> 1280px` | 侧边栏常驻，内容区三列 |
| 超宽屏 | `> 1600px` | 最大内容宽度约束，居中 |

**产品实例：**

| 产品 | 断点行为 |
|---|---|
| Shore | `≤980px` 编辑器侧栏缩到 `232px`；`≤760px` 单列 |
| Fifo | `≥1280px` 侧边笔记栏常驻；`< 1280px` 收起为 hover 展开 |
| Lindo | 侧栏 `23vw` 自适应，无硬断点 |
| GOTO | 手机容器固定 `430×960`，无响应式 |

**原则：**
- 桌面产品最小窗口尺寸：`800×600`（Lindo）或 `900×600`
- 不在断点处做剧烈的布局重排，用 `minmax()` 和 `auto-fill` 平滑过渡
- 侧边栏折叠用动画过渡，不硬切

---

## 六、品牌规范

### 6.1 母品牌

- 只使用黑白灰，不引入任何 Accent Color
- 代表整个产品家族，需要保持中立和包容性

### 6.2 品牌 Logo 规范

**Logo 构成：**

| 元素 | 字体 | 字重 | 说明 |
|---|---|---|---|
| Logo 文字 | Poppins | `696` | 品牌字样 |
| Logo 符号 | — | — | 图形标识，与文字间距 `8px` |
| Logo 圆点 | — | — | 砖红 `#9D3A33`，直径与文字 x-height 一致 |

**Logo 安全区域：**
- Logo 四周留白不小于 Logo 高度的 `25%`
- 其他元素不得侵入安全区域

**Logo 最小尺寸：**
- 数字媒体：宽度不小于 `80px`
- 印刷品：宽度不小于 `20mm`

**Logo 禁止用法：**
- ❌ 不得更改 Logo 比例
- ❌ 不得在 Logo 上叠加其他元素
- ❌ 不得使用非指定颜色的 Logo 版本
- ❌ 不得将 Logo 放在对比度不足的背景上

### 6.3 产品间一致性

用户从 Shore 切换到 Lindo 时，应该感受到：

- 相同的动画节奏和缓动曲线
- 相同的字体系统
- 相同的组件形态（圆角、间距、层级）
- 不同的 Accent Color 带来的产品个性

**一致是底色，Accent 是性格。**

### 6.4 主题切换机制

Simcise 产品统一使用 `data-theme` 属性切换主题：

```html
<!-- 亮色模式（默认） -->
<html data-theme="light">

<!-- 暗色模式 -->
<html data-theme="dark">

<!-- 跟随系统 -->
<html data-theme="auto">
```

```css
/* 亮色模式变量 */
:root, [data-theme="light"] {
  --bg: #FAFAF8;
  --text: #1A1A1A;
  /* ... */
}

/* 暗色模式变量覆盖 */
[data-theme="dark"] {
  --bg: #16171A;
  --text: #DDE3EB;
  /* ... */
}

/* 跟随系统 */
[data-theme="auto"] {
  /* 使用系统变量，通过 JS 监听 prefers-color-scheme 设置 */
}
@media (prefers-color-scheme: dark) {
  [data-theme="auto"] {
    --bg: #16171A;
    --text: #DDE3EB;
    /* ... */
  }
}
```

**各产品主题实现差异：**

| 产品 | 切换方式 | 说明 |
|---|---|---|
| Shore | CSS 变量 + JS 动态切换 | 支持 light/dark 双主题 |
| Lindo | `data-theme` 属性 + `prefers-color-scheme` | 支持自动跟随 |
| Fifo | `html.dark` 类名 | 通过 class 切换 |
| GOTO | `data-theme` 属性 | 多主题（light/dark/light-sense/glass/ink） |
| Route | `data-theme` 属性 | light/dark 双主题 |
| Yuich | CSS 变量 + JS | light/dark 双主题 |

### 6.5 设计评审标准

每个界面设计在交付前，需要对照以下问题自查：

1. 这个元素在默认状态下是必须出现的吗？
2. 这个操作可以用生长/展开替代弹窗吗？
3. Accent Color 的使用面积超过 15% 了吗？
4. 动画的时长和缓动与其他模块一致吗？
5. 留白是有节奏的，还是均匀铺开的？
6. 暗色模式下的对比度是否经过校验？
7. 毛玻璃效果是否在性能受限设备上做了降级？
8. 滚动条是否已隐藏（除非在允许的例外场景中）？

如果以上任何一条答案不理想，回去改。

---

## 七、无障碍与性能

### 7.1 减少动画

所有产品必须响应系统级减少动画偏好：

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Fifo 额外支持应用内动效总开关：`body[data-motion="off"]` 禁用所有动画。

### 7.2 性能模式

对于动效密集型产品（如 Fifo），需要提供性能降级方案：

| 模式 | 行为 |
|---|---|
| 正常模式 | 全量动画 + 毛玻璃 + 光斑 |
| 低性能模式 (`data-perf="low"`) | 关闭 `will-change`、隐藏第三层光斑、降级毛玻璃 |
| 动效关闭 (`data-motion="off"`) | 所有 transition/animation 时长归零 |

### 7.3 键盘导航

- 所有交互元素必须可通过 Tab 键聚焦
- 聚焦态使用 `focus-visible`（仅键盘导航时显示焦点环）
- 焦点环样式：`outline: 2px solid accent; outline-offset: 1px`
- Escape 键关闭菜单、弹窗、展开面板

### 7.4 选中态

```css
::selection { background: accent; color: white; }
```

各产品可微调：Yuich 使用浅绿色选中 `#ADFF99`，Shore 使用 Accent Color 选中。

### 7.5 光标样式

不同交互状态下使用不同的光标，给用户明确的交互反馈：

| 元素/状态 | cursor 值 | 说明 |
|---|---|---|
| 普通元素 | `default` | 箭头 |
| 可点击元素 | `pointer` | 手型 |
| 禁用元素 | `not-allowed` | 禁止图标 |
| 文本输入 | `text` | I 型光标 |
| 拖拽中 | `grabbing` | 抓住状态 |
| 可拖拽 | `grab` | 可抓取 |
| 缩放/调整 | `nwse-resize` / `col-resize` | 方向箭头 |
| 加载中 | `wait` / `progress` | 等待/进行中 |
| 帮助/提示 | `help` | 带问号 |
| 十字精确定位 | `crosshair` | 十字线 |

**原则：**
- 所有 `cursor: pointer` 的元素必须有可见的 hover 状态
- 禁用态始终显示 `not-allowed`，不显示 `pointer`
- 拖拽操作使用 `grab` → `grabbing` 的切换，给用户物理感

### 7.6 Google Fonts 加载配置

各产品通过 Google Fonts CDN 加载字体，需指定正确的字重以避免 FOUT：

**通用加载模板：**

```html
<!-- Nunito: 英文 UI 主字体 -->
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Noto Sans SC: 中文 UI 主字体 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- JetBrains Mono: 代码字体 -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Outfit: 数字展示/标题 -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Poppins: 品牌 Logo -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```

**各产品字体加载清单：**

| 产品 | 加载字体 | 字重 |
|---|---|---|
| Shore | Nunito, Poppins, JetBrains Mono | 400-700 |
| Lindo | Noto Sans SC, Noto Serif SC, Nunito, Inter, JetBrains Mono, Poppins | 400-700 |
| Yuich | Nunito, Noto Serif SC, JetBrains Mono, Inter, LXGW WenKai | 400-700 |
| Fifo | Nunito, Outfit, Poppins, JetBrains Mono, Noto Sans SC, Inter | 400-700 |
| GOTO | Noto Sans SC, Nunito, Inter, Outfit, JetBrains Mono | 400-700 |
| Route | Nunito, Noto Sans SC, JetBrains Mono, Poppins | 400-700 |

**原则：**
- 所有 Google Fonts 链接必须加 `display=swap` 避免 FOIT
- 只加载实际使用的字重，每个额外字重增加约 50-100KB
- 中文字体（Noto Sans SC）体积较大，优先使用系统字体回退，Google Fonts 作为补充

---

## 八、Design Tokens 速查

### 8.1 CSS 变量命名规范

```css
:root {
  /* ═══ 颜色 ═══ */
  --color-accent: #xxx;           /* 产品强调色 */
  --color-accent-hover: #xxx;     /* 强调色悬停态 */
  --color-accent-soft: rgba(...); /* 强调色浅底 (opacity 8-12%) */
  --color-bg: #xxx;               /* 主背景 */
  --color-bg-secondary: #xxx;     /* 次级背景 */
  --color-bg-tertiary: #xxx;      /* 三级背景 */
  --color-surface: #xxx;          /* 卡片/面板表面 */
  --color-surface-2: #xxx;        /* 次级表面 (hover、输入框) */
  --color-text: #xxx;             /* 主文字 */
  --color-text-secondary: #xxx;   /* 次要文字 */
  --color-text-muted: #xxx;       /* 弱化文字 */
  --color-text-faint: #xxx;       /* 极弱文字 (仅装饰) */
  --color-border: #xxx;           /* 默认边框 */
  --color-border-strong: #xxx;    /* 强边框 */
  --color-danger: #D94F4F;        /* 危险色（全局固定） */
  --color-success: #059669;       /* 成功色（全局固定） */
  --color-warning: #F59E0B;       /* 警告色（全局固定） */
  --color-info: #3B82F6;          /* 信息色（全局固定） */

  /* ═══ 圆角 ═══ */
  --radius-xs: 4px;               /* 极小元素 */
  --radius-sm: 6px;               /* 标签、图标容器 */
  --radius-md: 8px;               /* 按钮、输入框 */
  --radius-lg: 12px;              /* 卡片、面板 */
  --radius-xl: 16px;              /* 弹窗、大卡片 */

  /* ═══ 间距 ═══ */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;

  /* ═══ 阴影 ═══ */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.18);
  --shadow-xl: 0 16px 48px rgba(0,0,0,0.22);

  /* ═══ 动画 ═══ */
  --transition-fast: 150ms var(--ease-main);
  --transition-normal: 250ms var(--ease-main);
  --transition-slow: 350ms var(--ease-main);
  --ease-main: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0.22, 0.95, 0.35, 1);
  --ease-exit: cubic-bezier(0.4, 0, 0.6, 0.9);
  --ease-bounce: cubic-bezier(0.22, 1.2, 0.36, 1);

  /* ═══ 字体 ═══ */
  --font-cjk: 'Source Han Sans SC', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-latin: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Geist Mono', 'SF Mono', 'Consolas', monospace;
  --font-display: 'Outfit', 'Nunito', sans-serif;
  --font-artistic: 'LXGW WenKai', 'STKaiti', 'KaiTi', serif;

  /* ═══ 字号 ═══ */
  --font-size-2xs: 10px;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  --font-size-2xl: 32px;

  /* ═══ 字重 ═══ */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ═══ 毛玻璃 ═══ */
  --glass-sm: blur(10px) saturate(1.1);
  --glass-md: blur(16px) saturate(1.2);
  --glass-lg: blur(32px) saturate(1.3);
  --glass-xl: blur(48px) saturate(1.3);

  /* ═══ z-index ═══ */
  --z-base: 0;
  --z-sidebar: 10;
  --z-topbar: 20;
  --z-float: 100;
  --z-dropdown: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
  --z-max: 10000;
}
```

### 8.2 各产品主曲线速查

| 产品 | 主曲线 | CSS 值 |
|---|---|---|
| Shore | Material 标准 | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Lindo | Material 标准 | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Yuich | Material 标准 | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Fifo | 阻尼减速 | `cubic-bezier(0.18, 0.82, 0.24, 1)` |
| GOTO | 阻尼减速 | `cubic-bezier(0.05, 0.7, 0.1, 1.0)` |
| Route | 平滑收敛 | `cubic-bezier(0.2, 0.7, 0.2, 1)` |

### 8.3 窗口尺寸约束

| 产品 | 最小窗口 | 默认窗口 | 说明 |
|---|---|---|---|
| Shore | — | — | 自适应 |
| Lindo | `800×600` | `1000×700` | Electron |
| Yuich | — | — | 自适应 |
| Fifo | — | — | 自适应 |
| GOTO Desktop | — | — | 自适应 |
| GOTO QuickTap | — | — | 自适应 |
| Route | — | — | 自适应 |

---

_Simcise v2.1_ _2026.08.16_

_v1.0 (2026.05.30) → v2.0: 基于全线产品 UI 代码审查，新增暗色模式规范、毛玻璃质感层、语义色系统、多产品 Accent Color 对照、组件尺寸参考、布局变体、无障碍与性能章节、Design Tokens 速查。_

_v2.0 → v2.1: 色彩系统细化为 Canonical Values + 各产品完整调色板；新增字重/行高/字间距规范；新增边框与分割线、渐变模式、z-index 层级系统；新增动画目录（@keyframes 模板库）；新增 Toast/通知、加载状态、图标系统、侧边栏导航项状态机；新增响应式断点、自定义滚动条规范；新增窗口尺寸约束。_
