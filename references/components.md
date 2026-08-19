# Simcise V1.0 MVP Components

## Contents

1. Imports and naming
2. Buttons
3. Fields
4. Cards
5. Semantic feedback
6. Disclosure
7. Confirmation dialog
8. Loading
9. Composition rules

## 1. Imports and naming

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
```

Use `sim-` classes for reusable components. Keep product or page layout classes in a separate local namespace. Do not override component internals with high-specificity selectors; use System token overrides at the product root.

## 2. Buttons

```html
<button class="sim-button sim-button--primary" type="button">保存更改</button>
<button class="sim-button sim-button--secondary" type="button">稍后处理</button>
<button class="sim-button sim-button--ghost" type="button">取消</button>
<button class="sim-button sim-button--danger" type="button">永久删除项目</button>
```

- Use one primary action per local decision area.
- Name the result: “保存更改”, not “提交”.
- Use danger only when the result is destructive or irreversible.
- Apply `disabled` only when the reason is evident nearby.
- Use `aria-busy="true"` and keep the action label understandable during work.

## 3. Fields

```html
<div class="sim-field">
  <label class="sim-label" for="name">项目名称</label>
  <input class="sim-input" id="name" aria-describedby="nameHint nameError" aria-invalid="true">
  <span class="sim-hint" id="nameHint">使用团队能识别的名称。</span>
  <span class="sim-error" id="nameError">这个名称已经存在。</span>
</div>
```

- Keep labels persistent; placeholders are examples, not labels.
- Attach hint and error IDs through `aria-describedby`.
- Explain how to fix the error.
- Use `.sim-select` and `.sim-textarea` for the corresponding native elements.

## 4. Cards

```html
<section class="sim-card">
  <h2>项目状态</h2>
  <p>所有检查已经通过。</p>
</section>
```

- A static card groups related information; it is not clickable.
- Add `.sim-card--action` only when the card has one clear action and uses a real link/button for activation.
- Add `.sim-card--selected` with `aria-selected` or another semantic state on the actual control.
- Do not nest unrelated cards to manufacture spacing.

## 5. Semantic feedback

```html
<div class="sim-alert sim-alert--success" role="status">配置已保存。</div>
<div class="sim-alert sim-alert--danger" role="alert">无法保存：名称已经存在。</div>
```

Available variants: `--info`, `--success`, `--warning`, `--danger`.

- Use `role="status"` for non-urgent feedback.
- Use `role="alert"` only when immediate attention is required.
- Keep the message visible near the affected task when the person must act on it.
- Toasts acknowledge a completed background result; they do not carry required instructions.

## 6. Disclosure

```html
<details class="sim-disclosure">
  <summary>高级设置 <span aria-hidden="true">＋</span></summary>
  <div class="sim-disclosure__content">...</div>
</details>
```

Use disclosure for advanced settings and supplementary detail. Keep primary actions outside collapsed content. Use a side panel for complex multi-step editing; use a modal only at a safety boundary.

## 7. Confirmation dialog

```html
<dialog class="sim-dialog" aria-labelledby="confirmTitle" aria-describedby="confirmCopy">
  <form method="dialog" class="sim-stack">
    <h2 id="confirmTitle">删除项目？</h2>
    <p id="confirmCopy">此操作无法撤销。</p>
    <div class="sim-cluster">
      <button class="sim-button sim-button--ghost" value="cancel">保留项目</button>
      <button class="sim-button sim-button--danger" value="confirm">删除项目</button>
    </div>
  </form>
</dialog>
```

Use the native `dialog` element only at a safety or focus boundary. Open it with `showModal()`, focus the least destructive useful action, close on Escape, and return focus to the trigger. Name actions by outcome; never rely on color alone.

## 8. Loading

```html
<div class="sim-stack" role="status" aria-label="正在加载项目">
  <div class="sim-skeleton"></div>
  <span class="visually-hidden">正在加载项目</span>
</div>
```

Skeletons should approximate real content and stop animating under reduced-motion preferences. Do not use loading motion as the only status signal.

## 9. Composition rules

- `.sim-stack`: vertical rhythm.
- `.sim-cluster`: wrapping action or metadata row.
- Component CSS controls component internals; local page CSS controls layout and content width.
- Avoid more than one visual emphasis mechanism in the same area.
- Preserve native DOM order when changing visual layout.
- Validate the complete composition, not isolated components only.
