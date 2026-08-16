# Simcise Design System

> Simple × Concise — 界面在你不需要它的时候消失，在你需要它的时候生长出来。

Simcise 是一套产品级 UI 设计系统，为多产品矩阵提供统一的视觉语言、交互范式和组件规范。

## 核心理念

**每一个元素的存在都需要理由，没有理由的元素不应该出现。**

### 双层架构

| 层级 | 定位 | 内容 | 何时用 |
|---|---|---|---|
| **Foundation** 基础层 | DNA — 必须遵守 | Token 系统、硬性约束、组件基础形态 | 始终 |
| **Enhancement** 修饰层 | 插件 — 按需叠加 | 呼吸感、陶瓷质感、光感、变形、灵动光标等 8 个模块 | 产品需要额外质感时 |

> 遵守基础层，产出就已经是 Simcise 风格。修饰层是可选的，不用也不影响一致性。

### 三条铁律

1. 每一个元素的存在都需要理由
2. 零弹窗 — 一切通过卡片延展实现
3. Token 驱动 — 禁止硬编码色值/间距/圆角

## 文件结构

```
Simcise/
├── Lesong Art：Simcise 设计规范.md   # 完整规范（~1700 行，深入查阅）
├── Display.html                      # 产品级展示页（21 章节）
├── SKILL.md                          # AI Skill 调用入口（★ 首选参考）
├── tokens.json                       # 机器可读 Design Tokens
├── index.html                        # GitHub Pages 着陆页
├── CHANGELOG.md                      # 版本历史
├── CONTRIBUTING.md                   # 贡献指南
├── README.md                         # 本文件
├── LICENSE                           # MIT License
└── .gitignore
```

## 快速开始

### 作为 AI Skill 使用

将 `SKILL.md` 放入你的 Agent Skills 目录。AI 会先读基础层（~120 行），确保产出一致性；需要额外质感时，按需调用修饰层的 8 个模块（E1-E8）。

### 预览设计系统

直接在浏览器中打开 `Display.html`，支持 Light / Dark 主题切换。

在线预览：[longqiyua.github.io/Simcise](https://longqiyua.github.io/Simcise/)

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
