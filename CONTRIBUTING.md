# Contributing to Simcise

Thank you for your interest in contributing to the Simcise Design System.

## How to Contribute

### Reporting Issues

- Use [GitHub Issues](https://github.com/longqiyua/Simcise/issues) to report bugs or suggest improvements
- Clearly describe the issue with steps to reproduce, expected behavior, and actual behavior
- Include screenshots or code snippets when applicable

### Suggesting Design Changes

- Design changes should align with Simcise's core philosophy: **every element must have a reason to exist**
- Proposals should reference the existing spec (`Lesong Art：Simcise 设计规范.md`) and explain what gap they fill
- New components must include: visual spec, state machine, CSS implementation, dark mode adaptation

### Submitting Code

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes following the guidelines below
4. Test your changes in `Display.html`
5. Commit with [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` new features or content sections
   - `fix:` bug fixes or spec corrections
   - `docs:` documentation only changes
   - `style:` formatting, no code logic change
   - `refactor:` restructure without changing functionality
6. Push and open a Pull Request

## Design Guidelines

### Content Additions

When adding new sections to the spec or Display.html:

- **Spec sections** must include: description table, principles/rules, CSS code (if applicable), dark mode notes
- **Display.html sections** must include: section number, title, description, rule box, live demo, CSS implementation
- Follow the existing naming convention (Chinese + English bilingual where appropriate)

### Code Style

- CSS: use CSS variables (design tokens) for all values, no hardcoded colors/spacing
- HTML: semantic structure, consistent indentation (2 spaces)
- JavaScript: vanilla JS only, no frameworks, IIFE pattern for modules

### Design Tokens

- All new tokens must be added to both `:root` (light) and `[data-theme="dark"]` selectors
- Color values must be validated for WCAG AA contrast ratio (≥ 4.5:1 for text)
- Spacing values must be multiples of 4px
- Percentage values in `color-mix()` must be multiples of 5%

## File Structure

```
Simcise/
├── Lesong Art：Simcise 设计规范.md   # Source of truth for all design rules
├── Display.html                      # Visual showcase (must reflect spec changes)
├── SKILL.md                          # AI skill entry (update when rules change)
├── index.html                        # GitHub Pages landing
├── CHANGELOG.md                      # This file
├── CONTRIBUTING.md                   # This file
├── LICENSE                           # MIT
└── .gitignore
```

## Review Process

- All changes are reviewed against the core philosophy
- Display.html must render correctly in both Light and Dark modes
- New components must pass the "Zero Dialogs" rule (no popup patterns)
- CSS must use design tokens, not hardcoded values

## Questions?

Open a [GitHub Discussion](https://github.com/longqiyua/Simcise/discussions) or contact the maintainer.
