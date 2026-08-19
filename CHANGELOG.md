# Changelog

Simcise 当前唯一版本为 **V1.0**。在正式发布前，所有优化都记录在同一版本下；本文件不引入额外版本号。

## V1.0

### 规范治理

- 建立 Foundation / Enhancement 双层架构；Foundation 是强制质量底线，Enhancement 按场景选用。
- 建立 Reference → System → Component 三层 Token 契约，禁止业务组件直接消费原始色值。
- 明确常规任务原地完成优先；安全、权限、不可逆操作可使用具备完整焦点管理的模态确认。
- 建立 Route / Yuich 单向接入契约：共享语义与质量门槛，不强制产品视觉同质化。
- 将 `tokens.json` 确立为唯一 Token 事实源，通过确定性脚本生成 `tokens.css`。
- 将 AI Skill 改为前置元数据 + 核心执行协议 + 按需 references 的渐进披露结构。
- 将 MVP 技术边界固定为纯 HTML、CSS 与原生 JavaScript；不规划框架封装或页面运行时依赖。

### 视觉与交互

- 阴影收敛为 Air / Lift 两级；Route 适配器明确为严格扁平例外。
- 红色仅表达危险、错误与不可逆结果；关闭、取消使用主题反色或中性样式。
- 补齐按钮、输入、卡片、导航、Toast、加载、展开等组件状态规则。
- 对齐 Enhancement 编号，Card Expansion 归入 Foundation 核心交互。

### 无障碍与质量

- 增加 `:focus-visible`、`prefers-reduced-motion`、触屏 44×44px 目标与非 hover 回退规则。
- 内容文本默认允许选择，仅应用标题栏、拖拽区和控件标签禁用选择。
- 修复 CJK 字体回退顺序、无效重复属性、缺失图标、圆角 Token 偏差与不可见色样标签。
- 明确文字对比、非文字对比、键盘路径、焦点返回、状态不可只依赖颜色等验收门槛。

### 产物

- `tokens.json`：机器可读 Token 与产品适配元数据。
- `tokens.css`：可直接消费的语义 Token、Route / Yuich 适配器。
- `INTEGRATION.md`：接入边界、映射、迁移顺序与验收清单。
- `index.html`：V1.0 可视化规范与交互演示。
- `components.css`：Button、Field、Card、Alert、Disclosure、Dialog、Toast、Skeleton 等原生 MVP 组件。
- `examples/starter.html`：Light/Dark、响应式、键盘与语义状态示例。
- `scripts/build-tokens.mjs` / `scripts/validate.mjs`：跨平台构建和 Token、版本、引用、对比度、Skill 结构校验。
- `agents/openai.yaml` / `references/`：可发现的 Skill 元数据与按需工作流参考。
