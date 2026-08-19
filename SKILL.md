---
name: simcise-design
description: Build, reshape, or review pure HTML, CSS, and vanilla JavaScript product interfaces with the Simcise V1.0 design system. Use for framework-free Vibecoding UI work involving design tokens, native components, responsive layouts, Light/Dark themes, accessibility, interaction states, or Simcise adoption in a static or progressively enhanced product. Also use when reviewing whether a vanilla interface conforms to Simcise.
---

# Simcise Design

Create calm, warm, task-focused interfaces through **Simplex × Concise**: warmth in the experience, rational order underneath.

## Operating contract

- Keep the version at `V1.0`. Do not bump, publish, commit, or push unless the maintainer explicitly asks.
- Produce only semantic HTML, CSS, and vanilla JavaScript. Do not introduce React, Vue, TypeScript, JSX, a runtime framework, or a third-party component library.
- Use progressive enhancement. Core content and actions must remain understandable before JavaScript runs.
- Treat `tokens.json` as the only token source of truth. Generate `tokens.css`; never hand-edit it.
- Consume `--sim-sys-*` and `--sim-comp-*` in product UI. Never consume `--sim-ref-*` outside token definitions or palette demonstrations.
- Prefer in-context completion. Use a modal only for permissions, data loss, or irreversible actions.
- Preserve product identity. Shared semantics do not require identical visuals.

## Read only what the task needs

- Read [references/workflow.md](references/workflow.md) for every build or redesign task.
- Read [references/components.md](references/components.md) when generating or reviewing components.
- Read [references/enhancements.md](references/enhancements.md) only when optional texture or signature motion is justified.
- Read [INTEGRATION.md](INTEGRATION.md) only for Route, Yuich, or product-adoption work.
- Search `Lesong Art：Simcise 设计规范.md` for deep brand, layout, motion, or product-specific detail.

## Build workflow

1. Identify the product, audience, primary task, information density, target devices, and required states.
2. Choose generic Simcise or an approved product adapter. Do not invent a product accent when none is provided.
3. Write a compact interface plan: hierarchy, component inventory, responsive behavior, and one optional signature element.
4. Import `tokens.css` before `components.css`.
5. Start from semantic HTML and the `sim-` component classes. Add local layout CSS only where the component layer intentionally stays neutral.
6. Implement default, hover, active, focus-visible, disabled, and every task-relevant asynchronous or validation state.
7. Verify Light/Dark, keyboard, 44px coarse-pointer targets, reduced motion, high contrast, overflow, and empty/error/loading states.
8. Run the repository validator before reporting completion.

## Foundation rules

| Area | Required behavior |
|---|---|
| Existence | Every visible element has a task or comprehension reason |
| Tokens | Visual values use System or Component tokens |
| Color | Accent has limited visual weight; red means danger/error only |
| Type | Content remains selectable; disable selection only for controls or app chrome |
| State | Never communicate state through color alone |
| Focus | Use visible `:focus-visible`; restore focus after transient UI closes |
| Touch | Use at least 44×44px on coarse pointers; compact desktop may use 36×36px |
| Motion | Use named durations/easing and respect `prefers-reduced-motion` |
| Theme | Every component works in Light and Dark without component-specific color duplication |
| Modal | Restrict to permission, data-loss, or irreversible boundaries |

## Reusable MVP assets

- `tokens.json`: canonical Reference → System → Component data.
- `tokens.css`: generated theme and product-adapter variables.
- `components.css`: native HTML/CSS MVP components.
- `examples/starter.html`: accessible starter and visual smoke test.
- `scripts/build-tokens.mjs`: deterministic token compiler.
- `scripts/validate.mjs`: cross-platform conformance checks.

For a new interface, copy `examples/starter.html`, keep both CSS imports, replace the demo content, and retain the semantic structure. Add vanilla JavaScript only for behavior that native HTML cannot provide clearly. Keep scripts dependency-free and page-local unless behavior is reused.

## Remote preview

- When the maintainer asks to open, launch, preview, or inspect Simcise inside GPT, open the canonical repository Pages URL: `https://longqiyua.github.io/Simcise/`.
- Do not substitute `localhost`, a local file URL, or a temporary preview for that request.
- Treat GitHub Pages as deployed state and the workspace as local state. If they differ, report the difference explicitly.
- Never claim that local changes are visible on Pages until the relevant commit is pushed and the deployed page is verified.

## Completion report

State what was built, which adapter and optional enhancements were used, which validation commands passed, and any product-specific decisions still awaiting the maintainer. Do not claim Route or Yuich adoption until their own code consumes and verifies the contract.
