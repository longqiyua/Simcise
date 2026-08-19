# Simcise V1.0 · Route / Yuich 接入契约

> 状态：本地草案，不发布、不推送。本文只定义 Simcise 内部的消费契约，不修改 Route 或 Yuich。

## 1. 边界

- **Simcise** 负责视觉语义、组件状态、可访问性和验收门槛。
- **Route** 与 **Yuich** 是独立产品，保留各自架构、命名、运行时和视觉性格。
- 接入方向固定为 `Simcise → 产品消费方`；Simcise 不导入产品源码，产品也不依赖 Simcise 的页面实现。
- 本轮只新增可消费产物与映射，不改动 `route (1)`、`route (1)/yuich` 或 `route (1)/尤以迟yuich`。

## 2. 三层 Token 合约

```text
Reference 原始值  →  System 语义角色  →  Component 组件状态
不可直接消费          产品公共边界           组件内部使用
```

业务代码只允许使用 `--sim-sys-*` 与 `--sim-comp-*`。产品品牌色通过 `data-simcise-product` 覆盖 System 层，不复制组件样式。`tokens.css` 由 `tokens.json` 自动生成，产品不得维护分叉副本。

```html
<html data-simcise-product="route" data-theme="dark">
<html data-simcise-product="yuich" data-theme="light">
```

以上只是未来接入时的推荐挂载方式，本轮没有写入产品代码。

## 3. Route 对接

Route 的现有语言是“严格扁平”：无阴影、无毛玻璃、靠 1px hairline 建立层级。Simcise 将其视为正式产品变体，而不是偏差。

| Route 当前语义 | Simcise V1.0 语义 | 约束 |
|---|---|---|
| `--ink-900` | `--sim-sys-bg-canvas` | 页面底色 |
| `--ink-850` | `--sim-sys-bg-surface` | 主表面 |
| `--ink-800/700` | `--sim-sys-bg-subtle/muted` | 层级表面 |
| `--fg` | `--sim-sys-text-primary` | 主文字 |
| `--fg-muted` | `--sim-sys-text-secondary` | 次要文字，需保持 AA |
| `--hairline` | `--sim-sys-border-default` | 非文字边界至少 3:1 |
| `--accent` | `--sim-sys-accent` | 品牌强调，不直接等于可读文字色 |
| `--accent-soft` | `--sim-sys-accent-soft` | 选中与聚焦背景 |
| `--ease` | `--sim-sys-ease-standard` | Route 可保留自身平滑曲线 |

Route 适配器将 Air / Lift 都设为 `none`。未来迁移时不得为了“统一”加入阴影、发光或陶瓷质感。

## 4. Yuich 对接

Yuich 保留暖米底色、森林绿品牌与较柔和的表面层次。当前界面存在多份组件级 `:root` 变量；未来迁移应先收敛语义，不直接全量替换组件 CSS。

| Yuich 当前语义 | Simcise V1.0 语义 | 约束 |
|---|---|---|
| `--background-color` | `--sim-sys-bg-canvas` | 页面底色 |
| `--surface-color` | `--sim-sys-bg-surface` | 卡片与面板 |
| `--text-color` | `--sim-sys-text-primary` | 正文 |
| `--sub-text-color` | `--sim-sys-text-secondary` | 次要文字 |
| `--border-color` | `--sim-sys-border-default` | 控件边界 |
| `--accent-color` / `#3A925F` | `--sim-sys-accent` | 森林绿品牌 |
| 轻/中/重阴影 | `--sim-comp-card-shadow(-hover)` | 只保留 Air / Lift 两级 |

Yuich 的主色 `#3A925F` 不应默认搭配白色小字；按钮文字使用适配器提供的 `--sim-sys-on-accent`，并在真实字号、字重下复测对比度。

## 5. 推荐迁移顺序（未来执行）

1. 仅引入 `tokens.css`，不改组件结构。
2. 在应用根节点设置产品与主题属性。
3. 先映射背景、文字、边框，再映射交互与组件 Token。
4. 每次只迁移一类组件，保留旧变量为一轮兼容别名。
5. 完成 Light / Dark、键盘、触屏、减少动画回归后，再移除旧别名。

## 6. 接入验收

- 产品品牌色、Logo、文案和架构未被 Simcise 覆盖。
- 正文对比度 ≥ 4.5:1；大字与关键图标/边界 ≥ 3:1。
- 完整键盘路径可达；焦点清晰；关闭后焦点回到触发源。
- hover 隐藏控件在 `:focus-within` 与 `pointer: coarse` 下可见。
- 触屏目标 ≥ 44×44px；紧凑桌面目标 ≥ 36×36px。
- `prefers-reduced-motion` 生效，加载状态仍能通过文字或 ARIA 被理解。
- Route 仍为严格扁平；Yuich 仍为温润森林绿；两者只共享语义底线。
