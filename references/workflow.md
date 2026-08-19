# Simcise V1.0 Vibecoding Workflow

## Contents

1. Input framing
2. Interface planning
3. Construction order
4. State coverage
5. Responsive rules
6. Acceptance gates

## 1. Input framing

Before writing UI code, derive or ask only for information that materially changes the result:

| Input | Decision it controls |
|---|---|
| Product and audience | voice, density, adapter, terminology |
| Primary task | hierarchy and primary action |
| Required data | layout and empty/loading/error states |
| Target devices | breakpoint and target-size behavior |
| Existing stack | output format, not visual semantics |
| Destructive actions | confirmation and recovery path |

If context is incomplete, choose a conservative generic Simcise interface and state the assumption. Do not invent dashboards, metrics, illustrations, or extra navigation without a task reason.

## 2. Interface planning

Produce a compact internal plan before coding:

```text
Job: one sentence describing what the screen lets a person finish
Hierarchy: primary content -> supporting context -> secondary actions
Components: exact inventory from the MVP catalog
States: loading / empty / error / success / disabled / selected as applicable
Responsive: what stacks, wraps, remains fixed, or becomes scrollable
Signature: none by default; at most one justified Enhancement
```

Use progressive disclosure for advanced or infrequent controls. Keep destructive actions visually separated from routine actions.

## 3. Construction order

1. Use semantic landmarks: `header`, `nav`, `main`, `section`, `form`, `footer`.
2. Import `tokens.css`, then `components.css`.
3. Build the reading and keyboard order before visual layout.
4. Apply System tokens to local layout CSS.
5. Add component variants and state attributes.
6. Add responsive behavior based on content failure, not device brand names.
7. Add optional Enhancement only after the Foundation passes.

Prefer native behavior:

- `<button>` for actions, `<a>` for navigation.
- `<details>/<summary>` for simple disclosure.
- `<dialog>` only for an allowed modal boundary.
- `<label>` plus `aria-describedby` for form help and error text.
- `aria-live="polite"` for non-urgent asynchronous feedback; `role="alert"` for urgent failure.

## 4. State coverage

Every interactive component covers:

```text
default -> hover -> active -> focus-visible -> disabled
```

Add states when the task can produce them:

- `aria-busy="true"` and readable loading text.
- `aria-invalid="true"` plus an associated error message.
- `aria-pressed`, `aria-selected`, or `aria-expanded` for persistent interaction state.
- empty content with a direct next action.
- success feedback using the same verb as the initiating action.

Never replace disabled content with disappearance if its absence would confuse the layout. Never use a spinner without readable status.

## 5. Responsive rules

- Start with a single readable flow and enhance when width permits.
- Stack multi-column content when labels, controls, or reading measure begin to fail.
- Keep critical actions visible; do not hide them behind hover on touch devices.
- Use `min-width: 0` on flexible children that contain long text.
- Verify at approximately 360–390px, a compact desktop width, and a standard desktop width.
- Horizontal scrolling is allowed for intrinsically tabular data, not for the whole page.

## 6. Acceptance gates

Reject completion if any core task fails one of these gates:

- Normal text contrast is at least 4.5:1; large text and meaningful non-text boundaries at least 3:1.
- Keyboard order follows the visual and reading order.
- Focus is always visible and is restored after transient UI closes.
- Coarse-pointer targets are at least 44×44px.
- Light and Dark preserve hierarchy and semantic meaning.
- Reduced motion removes non-essential movement without hiding progress.
- Loading, empty, error, success, and destructive paths are represented when applicable.
- No business component consumes `--sim-ref-*` or introduces arbitrary brand colors.
- No page-level horizontal overflow at supported widths.

Run:

```bash
node scripts/build-tokens.mjs --check
node scripts/validate.mjs
```
