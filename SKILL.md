# Simcise Design System

> Simple × Concise — 界面在你不需要它的时候消失，在你需要它的时候生长出来。

Simcise 是一套产品级 UI 设计系统。分为**基础层**和**修饰层**：基础层是 DNA，遵守即可保持一致性；修饰层是可选插件，按需调用增加质感。

## When to Use

- 构建或修改任何产品的 UI 界面
- 生成前端 HTML/CSS 代码
- 审查 UI 设计是否符合规范
- 需要设计 Token、色值、间距、圆角、动画等参考

---

## 基础层 Foundation — MUST

> 遵守这一层，产出就已经是 Simcise 风格。不可违反，不可跳过。

### 三条铁律

1. **每一个元素的存在都需要理由** — 没有理由的元素不应该出现
2. **零弹窗** — 绝对禁止弹窗，一切通过卡片横/纵向延展实现
3. **Token 驱动** — 所有视觉值必须通过 CSS 变量引用，禁止硬编码

### Design Tokens（CSS 变量）

```css
:root {
  /* ── 背景 ── */
  --bg: #FAFAF8;           /* 页面底色 */
  --bg-secondary: #F5F5F0; /* 二级底 */
  --bg-tertiary: #EEEBE6;  /* 三级底 / 禁用态 */
  --surface: #FFFFFF;       /* 卡片表面（唯一纯白） */

  /* ── 文字 ── */
  --text: #1A1A1A;
  --text-secondary: #666;
  --text-muted: #999;

  /* ── 边框 ── */
  --border: #E5E5E5;
  --border-warm: #D8D6D0;

  /* ── 强调色（一个色系，7 级延展） ── */
  --accent-50: #E8F0EF;    /* 选中背景 */
  --accent-100: #C5DDD9;   /* 标签边框 */
  --accent-200: #8FBFB8;   /* hover 背景 */
  --accent-300: #5A9E96;   /* 链接 hover */
  --accent-400: #3D857E;   /* 次要按钮 */
  --accent: #1A6B66;        /* ★ 核心色 — 主操作 */
  --accent-600: #145551;   /* 按压态 */
  --accent-700: #0E3F3C;   /* 浅色底上的文字 */
  --accent-glow: rgba(26,107,102,0.25);

  /* ── 语义色 ── */
  --danger: #D94F4F;        /* 仅用于危险，绝不做强调色 */
  --success: #059669;
  --warning: #F59E0B;
  --info: #3B82F6;

  /* ── 间距（4px 倍数） ── */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-6: 24px; --space-8: 32px;

  /* ── 圆角 ── */
  --radius-sm: 8px;    /* 最小圆角 */
  --radius-input: 10px;
  --radius-btn: 12px;
  --radius-card: 14px;

  /* ── 阴影（最多 2 层，模糊差 ≥ 2×） ── */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.18);

  /* ── 动效 ── */
  --ease-main: cubic-bezier(0.4, 0, 0.2, 1);   /* 80% 的过渡用这个 */
  --ease-enter: cubic-bezier(0.22, 0.95, 0.35, 1);
  --ease-bounce: cubic-bezier(0.22, 1.2, 0.36, 1);
  --duration-micro: 150ms;   /* hover / focus */
  --duration-enter: 200ms;   /* 元素显隐 */
  --duration-panel: 300ms;   /* 面板展开 */
  --duration-morph: 400ms;   /* 形态变形 */

  /* ── 字体 ── */
  --font-latin: 'Nunito', -apple-system, sans-serif;
  --font-cjk: 'Noto Sans SC', 'PingFang SC', sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --font-display: 'Outfit', 'Nunito', sans-serif;
  --font-size: 13px;
  --line-height: 1.55;
}

[data-theme="dark"] {
  --bg: #16171A; --bg-secondary: #1C1D21; --bg-tertiary: #24262B;
  --surface: #1C1D21;
  --border: rgba(255,255,255,0.08);
  --text: #DDE3EB; --text-secondary: #888; --text-muted: #555;
  --accent: #2A8D84; --accent-glow: rgba(42,141,132,0.30);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.30);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.35);
}
```

### 硬性约束

| 约束 | 规则 |
|---|---|
| 颜色 | 禁止 `#333`、`red` 等随意色值，必须引用 Token |
| 间距 | 必须是 4px 倍数：4/8/12/16/24/32/48 |
| 圆角 | 同一界面 ≤ 3 种圆角值，嵌套容器内外差 2-4px |
| 阴影 | 最多 2 层叠加，模糊差 ≥ 2× |
| 边框 | 所有纯色色块必须有 `1px solid var(--border)`，拒绝脏浅色 |
| 强调色 | 面积 ≤ 15% 视觉重量，红色仅用于 danger |
| 弹窗 | 禁止。详情/设置/新建 → 卡片原地延展（`max-height` + `opacity`） |
| 动画 | 禁止 `linear`（进度条除外），所有 `transition` 必须指定 `timing-function` |
| 状态机 | 每个交互组件必须有 default → hover → active → focus → disabled 全状态 |
| 暗色 | 每个组件必须有 `[data-theme="dark"]` 对应样式 |
| 文本 | `user-select: none`，app 化体验 |

### 组件基础形态

| 组件 | 规格 |
|---|---|
| 按钮 | 银行卡形长条：`padding: 10px 28px; radius: 12px; border: 1px solid` |
| Toggle | 圆角矩形按钮（非滑条）：`min-width: 52px; height: 30px; radius: 10px` |
| 卡片 | `radius: 14px; padding: 24px; border: 1px solid var(--border)` |
| 输入框 | `radius: 10px; height: 40px; border: 1px solid var(--border)` |
| 展开 | `max-height: 0→300px; opacity: 0→1; transition: 300ms` |

---

## 修饰层 Enhancement — OPTIONAL

> 基础层之上，按需叠加。每个模块独立，不互相依赖，不用也不影响一致性。

### E1 · 呼吸感 Breathing

> 空闲元素有微妙生命节奏，barely perceptible。

**何时用**：页面有空置卡片、按钮、图标时。
**何时不用**：密集数据表格、表单区域。

```css
.breathing {
  animation: breathShadow 4s var(--ease-main) infinite;
}
@keyframes breathShadow {
  0%, 100% { box-shadow: var(--shadow-sm); }
  50% { box-shadow: var(--shadow-md); }
}
```

### E2 · 陶瓷温润 Ceramic

> 暖渐变 + 内高光 + 柔光阴影，触感如釉面陶瓷。

**何时用**：主要容器、Now Playing 卡片、重要面板。
**何时不用**：列表项、表格行、密集区域。

```css
.ceramic {
  background: linear-gradient(160deg, var(--surface) 0%, var(--bg-secondary) 100%);
  box-shadow:
    0 2px 8px rgba(0,0,0,0.04),
    0 8px 24px rgba(0,0,0,0.03),
    inset 0 1px 0 rgba(255,255,255,0.7);
}
/* dark mode: inset highlight → rgba(255,255,255,0.05) */
```

### E3 · 光感模式 Light Awareness

> 统一光源左上，所有表面响应同一方向的光。

**何时用**：全局生效，作为页面级背景。
**何时不用**：与深色沉浸式背景冲突时关闭。

```css
.light-aware-bg {
  background:
    radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 60%),
    var(--bg);
}
/* dark mode: rgba(255,255,255,0.4) → rgba(255,255,255,0.03) */
```

### E4 · 形态流动 Morphing FAB

> + 按钮原地变形为 ×，单元素形态流动。

**何时用**：页面主操作按钮（新建/添加）。
**何时不用**：工具栏内的小按钮。

```css
.morph-fab {
  width: 48px; height: 48px; border-radius: 14px;
  background: var(--accent); border: 1px solid var(--accent-600);
  position: relative;
}
.morph-fab .plus-line {
  position: absolute; width: 20px; height: 2px;
  background: white; top: 50%; left: 50%;
}
.morph-fab .plus-h {
  transform: translate(-50%, -50%);
  transition: opacity 200ms, width 200ms;
}
.morph-fab .plus-v {
  transform: translate(-50%, -50%) rotate(90deg);
  transition: transform 300ms var(--ease-bounce);
}
/* active state: + → × */
.morph-fab.active { background: var(--danger); border-color: #C44545; }
.morph-fab.active .plus-h { opacity: 0; width: 0; }
.morph-fab.active .plus-v { transform: translate(-50%, -50%) rotate(135deg); }
```

### E5 · 柔光灯 Toggle

> On 发光 / Off 变暗，标签 1.5s 渐隐，只剩发光按钮。

**何时用**：设置面板中的开关。
**何时不用**：表单内的 checkbox 替代。

```css
.toggle-btn {
  min-width: 52px; height: 30px; padding: 0 14px;
  border-radius: 10px; border: none; cursor: pointer;
  font-size: 12px; font-weight: 600;
  transition: all 300ms var(--ease-main);
}
.toggle-btn.on {
  background: var(--accent); color: white;
  box-shadow: 0 0 20px var(--accent-glow), 0 0 4px var(--accent-glow);
}
.toggle-btn.off {
  background: var(--bg-tertiary); color: var(--text-muted);
  box-shadow: none;
}
.toggle-btn .toggle-label {
  transition: opacity 500ms var(--ease-main);
}
/* JS: 显示标签 1.5s 后 addClass('hide-label') */
```

### E6 · 灵动光标 Dynamic Cursor

> 隐藏原生 caret，1.8px 强调色细条，120ms ease 跟随。

**何时用**：主要输入框、搜索框。
**何时不用**：textarea 多行编辑、代码编辑器（保留原生体验）。

```css
.dc-input { caret-color: transparent; }
.dc-caret {
  position: absolute; width: 1.8px; height: 1.45em;
  background: var(--accent); border-radius: 1px;
  transition: transform 120ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 180ms;
  box-shadow: 0 0 4px var(--accent-glow);
}
.dc-caret.is-blinking { animation: dcBlink 1.06s steps(2,start) infinite; }
@keyframes dcBlink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0.16; } }
/* 需要配合 DynamicCursor JS 模块 */
```

### E7 · 轨道小球 Orbit Spinner

> 快慢交替的轨道旋转，非匀速。

**何时用**：页面级加载、异步操作等待。
**何时不用**：按钮内 loading（用简单 dots）。

```css
.orbit-spinner {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid var(--border);
  position: relative;
  animation: orbitSpin 1.2s var(--ease-main) infinite;
}
.orbit-spinner::after {
  content: ''; position: absolute;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent); top: -3px; left: 50%;
  transform: translateX(-50%);
}
@keyframes orbitSpin {
  0% { transform: rotate(0deg); }
  40% { transform: rotate(180deg); }   /* 快 */
  100% { transform: rotate(360deg); }  /* 慢 */
}
```

### E8 · 毛玻璃 Glassmorphism

> 4 级模糊：10 / 16 / 32 / 48px+。

**何时用**：浮层、下拉菜单、遮罩背景。
**何时不用**：大面积背景（性能敏感）。

```css
.glass-light  { backdrop-filter: blur(10px); }   /* tooltip、浮动卡片 */
.glass-medium { backdrop-filter: blur(16px); }   /* 右键菜单、下拉 */
.glass-heavy  { backdrop-filter: blur(32px); }   /* 遮罩层 */
.glass-full   { backdrop-filter: blur(48px); }   /* 沉浸式背景 */
```

### E9 · 双星加载器 Binary Star Spinner

> 两个圆球互绕共享中心，重叠部分自然混合出强调色浅色系。

**何时用**：页面级加载、异步操作等待（替代 E7 轨道小球）。
**何时不用**：按钮内 loading（用简单 dots）。

```css
.binary-spinner { width: 48px; height: 48px; position: relative; }
.binary-spinner .orbit { position: absolute; inset: 0; animation: binaryRevolve 2.8s var(--ease-main) infinite; }
.binary-spinner .orbit:nth-child(2) { animation-delay: -1.4s; }
.binary-spinner .star {
  position: absolute; width: 20px; height: 20px; border-radius: 50%;
  background: var(--accent-200);
  top: 50%; left: 50%; margin: -10px 0 0 -10px;
  mix-blend-mode: multiply;  /* dark mode → screen */
}
@keyframes binaryRevolve {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* 原理：两个圆球在同一轨道 180° 对立，绕共享中心旋转。
   交叉点 mix-blend-mode 自然混合 → 重叠色 = 强调色浅色 */
```

---

## Vibe Coding Checklist

AI 生成代码时的快速检查清单：

- [ ] 所有颜色走 Token？（`var(--accent)` 而非 `#1A6B66`）
- [ ] 间距是 4 的倍数？（12px ✓ 13px ✗）
- [ ] 圆角 ≤ 3 种？
- [ ] 纯色块有边框？
- [ ] 有暗色模式对应样式？
- [ ] 交互组件有完整状态机？
- [ ] 动画有 `timing-function`？
- [ ] 零弹窗？（用卡片延展替代）

---

## Design Language References

| 设计语言 | 借鉴点 | Simcise 对应 |
|---|---|---|
| **Material Design 3** | Dynamic Color 色系延展、Motion System | 强调色 7 级延展 + 动画分类时长 |
| **Apple HIG** | 留白哲学、Deferred 层级 | 呼吸感 + 负空间即内容 |
| **Ant Design** | 组件状态机、Token 体系 | 全组件状态机 + CSS 变量驱动 |
| **Shopify Polaris** | 组件驱动、无障碍优先 | `user-select`、`focus-visible`、对比度 |
| **IBM Carbon** | 系统化 Token、严格间距网格 | 4px 基础单位 + 全量 Token 表 |
| **GitHub Primer** | CSS Variables 主题切换 | `data-theme` 切换 + 语义色层 |
| **Atlassian Design** | 跨产品一致性、动效原则 | 主曲线 80% 统一 + 产品个性曲线 |

**核心差异**：大厂追求「面面俱到的文档」，Simcise 追求「AI 可直接执行的约束系统」。基础层是硬约束，修饰层是软插件。

## Files

| 文件 | 用途 |
|---|---|
| `Lesong Art：Simcise 设计规范.md` | 完整规范 ~1700 行（深入查阅时用） |
| `Display.html` | 产品级展示页 21 章节（视觉参考时用） |
| `tokens.json` | 机器可读 Token（代码生成时用） |
| `SKILL.md` | 本文件，AI 调用入口（**首选参考**） |

## Reference

```
版本: v3.0
架构: Foundation (MUST) + Enhancement (OPTIONAL)
仓库: https://github.com/longqiyua/Simcise
```
