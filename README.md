# Simcise Design System

> 当前唯一版本：**V1.0**

> **Simplex × Concise** — Simplex 温润优先，Concise 秩序托底。界面在你不需要它的时候消失，在你需要它的时候生长出来。

Simcise = **Simplex**（温润、舒适、呼吸感）× **Concise**（理性秩序、数学简洁、和谐）。Simplex 是用户首先感受到的，Concise 是支撑一切的骨架。两者混合而非对立。

Simcise 是一套产品级 UI 设计系统，为多产品矩阵提供统一的视觉语言、交互范式和组件规范。

当前 V1.0 已提供可通用 Vibecoding MVP：Token 编译、原生组件、AI Skill、可访问示例与自动校验。技术范围固定为纯 HTML、CSS 和原生 JavaScript，不考虑前端框架、TypeScript、JSX 或运行时依赖；具体业务模板留待后续扩展。

## 核心理念

**每一个元素的存在都需要理由，没有理由的元素不应该出现。**

### 五大板块

| 板块 | 定位 | 内容 |
|---|---|---|
| **Part I · 信息** | Concise 理性秩序 | 色彩、字体、间距、圆角、阴影、产品色名 |
| **Part II · 交互** | Simplex 温润舒适 | 按钮、输入框、Toggle、卡片、导航、Toast、卡片延展、变形 |
| **Part III · 动效** | Simplex × Concise 交融 | 缓动曲线、呼吸感、加载状态 |
| **Part IV · 质感** | Simplex 可选修饰 | 陶瓷温润、光感模式、毛玻璃、灵动光标、惯性双环加载器等 9 个模块 |
| **Part V · 适配** | Concise 环境响应 | Light/Dark、响应式、无障碍 |

### 三条底线

1. 每一个元素的存在都需要理由
2. 原地完成优先 — 常规任务通过卡片延展完成；仅安全、权限、不可逆操作允许模态确认
3. Token 驱动 — 业务组件禁止硬编码色值、间距、圆角与动效参数

## V1.0 质量基线

- **三层 Token**：Reference（原始值）→ System（语义角色）→ Component（组件状态），产品只消费语义层或组件层。
- **全状态组件**：default / hover / active / focus-visible / disabled / loading / error / success 按需完整覆盖。
- **无障碍优先**：正文与关键图标满足 WCAG AA；键盘路径完整；触屏目标不小于 44×44px；减少动画与高对比偏好可降级。
- **响应式不是缩放**：以内容断点为主，覆盖紧凑桌面、标准桌面与触屏；隐藏控件在触屏和键盘场景必须可见。
- **跨产品只统一契约**：Simcise 保持共同语义，Route 保持严格扁平，Yuich 保持温润森林绿，不强制视觉同质化。

## 文件结构

```
Simcise/
├── Lesong Art：Simcise 设计规范.md   # 完整规范（~1700 行，深入查阅）
├── index.html                        # 产品级展示页（5 大板块）+ GitHub Pages 入口
├── SKILL.md                          # AI Skill 调用入口（★ 首选参考）
├── tokens.json                       # 机器可读 Design Tokens
├── tokens.css                        # 可直接消费的三层 CSS Token
├── components.css                    # 原生 HTML/CSS MVP 组件
├── INTEGRATION.md                    # Route / Yuich 单向接入契约
├── references/                       # AI 按需读取的工作流与组件参考
├── examples/starter.html             # 通用可访问起步页
├── agents/openai.yaml                # Skill UI 元数据
├── package.json                      # 本地构建与校验入口
├── scripts/build-tokens.mjs          # tokens.json → tokens.css
├── scripts/validate.mjs              # 跨平台 MVP 验收
├── CHANGELOG.md                      # 版本历史
├── CONTRIBUTING.md                   # 贡献指南
├── README.md                         # 本文件
├── LICENSE                           # MIT License
└── .gitignore
```

## 快速开始

### 作为 AI Skill 使用

将 `SKILL.md` 放入你的 Agent Skills 目录。AI 会先读基础层，确保产出一致性；需要额外质感时，再按需调用修饰层模块。

Route / Yuich 的接入方式与映射表见 [`INTEGRATION.md`](./INTEGRATION.md)。接入采用单向消费：只在产品明确安排迁移时，由产品消费 Simcise Token；Simcise 不反向修改产品仓库。

### 在静态页面中使用

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
```

从 `examples/starter.html` 开始，使用 `sim-` 组件类；产品或页面只补充语义 HTML、布局 CSS 和必要的原生 JavaScript。页面运行时不引入框架、TypeScript、JSX、打包器或第三方组件库。

### 预览设计系统

在 GPT 中启动或检查 Simcise 时，直接打开仓库对应的 GitHub Pages，不使用 localhost 或本地文件预览：

[打开 Simcise GitHub Pages](https://longqiyua.github.io/Simcise/)

Pages 代表已部署状态，本地工作区代表待同步状态。只有相关提交完成推送并通过远程验证后，才能认为本地效果已经出现在 Pages。

### 本地校验

```bash
node scripts/build-tokens.mjs --check
node scripts/validate.mjs
```

`tokens.json` 是唯一 Token 事实源。修改后运行 `node scripts/build-tokens.mjs` 重新生成 `tokens.css`，不要手改生成文件。这里的 Node 脚本仅用于本地生成和校验，不属于页面运行时。校验只读取 Simcise 内部文件，不提交、不推送，也不访问或修改 Route / Yuich。

### 阅读完整规范

打开 `Lesong Art：Simcise 设计规范.md`，包含：

- **视觉规范** — 色彩系统（4 层级）、字体、圆角、间距、阴影、边框、毛玻璃
- **交互规范** — 动画哲学、时长、缓动、生长优先、按需显现、按压反馈
- **组件规范** — 弹窗准则、菜单、按钮、输入框、Toggle、卡片、Toast、导航
- **布局规范** — 核心结构、响应式、滚动条、z-index 层级
- **品牌规范** — Logo、主题切换、动效品牌
- **无障碍与性能** — 对比度、动效降级、焦点管理
- **Design Tokens 速查** — CSS 变量、动画目录、组件状态机

## 设计语言参考

Simcise 从以下设计语言中汲取灵感，但保持独立的设计哲学：

| 设计语言 | 借鉴点 |
|---|---|
| [Material Design 3](https://m3.material.io/) | Dynamic Color 色系延展、Motion System 分类 |
| [Apple HIG](https://developer.apple.com/design/) | 留白哲学、Deferred 层级感 |
| [Ant Design](https://ant.design/) | 企业级组件状态机、Token 体系 |
| [Shopify Polaris](https://polaris.shopify.com/) | 组件驱动设计、无障碍优先 |
| [IBM Carbon](https://carbondesignsystem.com/) | 系统化 Token、严格间距网格 |
| [GitHub Primer](https://primer.style/) | CSS Variables 驱动主题、功能色体系 |
| [Atlassian Design](https://atlassian.design/) | 跨产品一致性、动效原则 |

## License

[MIT](./LICENSE) © 2026 longqiyua
