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
4. Test your changes in `index.html`
5. Commit with [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` new features or content sections
   - `fix:` bug fixes or spec corrections
   - `docs:` documentation only changes
   - `style:` formatting, no code logic change
   - `refactor:` restructure without changing functionality
6. Only push or open a Pull Request after the maintainer explicitly enables publishing

### Version Policy

- The only current version identifier is `V1.0`.
- During the local optimization stage, do not create additional version numbers or tags.
- The maintainer owns version decisions; contributors must not bump versions autonomously.

## Design Guidelines

### Content Additions

When adding new sections to the spec or index.html:

- **Spec sections** must include: description table, principles/rules, CSS code (if applicable), dark mode notes
- **index.html sections** must include: section number, title, description, rule box, live demo, CSS implementation
- Follow the existing naming convention (Chinese + English bilingual where appropriate)

### Code Style

- CSS: business components consume System or Component tokens from `tokens.css`; raw values belong only in Reference tokens and palette demonstrations
- HTML: semantic structure, consistent indentation (2 spaces)
- JavaScript: vanilla JS only, no frameworks, IIFE pattern for modules
- Runtime scope: no TypeScript, JSX, framework runtime, bundler requirement, or third-party component library
- Progressive enhancement: primary content and native form actions remain understandable when JavaScript is unavailable

### Design Tokens

- `tokens.json` is the only token source of truth; never hand-edit generated `tokens.css`
- Run `node scripts/build-tokens.mjs` after token changes
- All new tokens must follow Reference → System → Component ownership and cover both light and dark themes
- Color values must be validated for WCAG AA contrast ratio (≥ 4.5:1 for text)
- Spacing values must be multiples of 4px
- Percentage values in `color-mix()` must be multiples of 5%

## File Structure

```
Simcise/
├── Lesong Art：Simcise 设计规范.md   # Source of truth for all design rules
├── index.html                        # Visual showcase and GitHub Pages landing
├── SKILL.md                          # AI skill entry (update when rules change)
├── tokens.css                        # Consumable token contract
├── INTEGRATION.md                    # Product adapter contract
├── CHANGELOG.md                      # This file
├── CONTRIBUTING.md                   # This file
├── LICENSE                           # MIT
└── .gitignore
```

## Review Process

- All changes are reviewed against the core philosophy
- index.html must render correctly in both Light and Dark modes
- Routine flows must remain in context; modal patterns require a safety, permission, or irreversible-action justification
- CSS must use design tokens, not hardcoded values
- `node scripts/validate.mjs` must pass before review

## Questions?

Open a [GitHub Discussion](https://github.com/longqiyua/Simcise/discussions) or contact the maintainer.
