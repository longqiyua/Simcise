# Changelog

All notable changes to the Simcise Design System are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [3.0.0] — 2026-08-16

### Changed
- **Architecture overhaul** — Dual-layer system: Foundation (MUST) + Enhancement (OPTIONAL)
- SKILL.md completely restructured: Foundation contains core tokens + hard constraints (~120 lines), Enhancement contains 8 optional modules (E1-E8) each with "when to use / when not to use" guidance
- tokens.json updated with `$layer` markers on every token group
- Enhancement modules now have `$module` tags (E1 Breathing, E2 Ceramic, E3 Light, E4 Morph, E5 Toggle, E6 Cursor, E7 Spinner, E8 Glass)

### Added
- **Vibe Coding Checklist** — 8-point quick checklist for AI code generation
- **Enhancement module guidance** — Each module now includes "when to use" and "when NOT to use" conditions
- Enhancement tokens section in tokens.json with breathing, ceramic, light awareness, dynamic cursor parameters

### Why
Previous versions treated all rules as equally important. v3.0 separates the "DNA" (Foundation — if you only follow this, output is already Simcise) from the "polish" (Enhancement — optional modules that add character). This makes the system actually usable for vibe coding: AI reads Foundation first, Enhancement only when the product calls for it.

## [2.3.0] — 2026-08-16

### Added
- **Dynamic Cursor** — Monkeytype-style fluid caret (1.8px accent bar, 120ms ease glide, 600ms blink delay)
- **Breathing & Life** section — 3-5s subtle shadow pulse animations for idle elements
- **Morphing FAB** — Plus → X rotation morph demo (single DOM element, fluid transform)
- **Card Expansion** — Zero-dialog pattern: cards expand in-place to reveal settings/details
- **Ceramic Texture** — Warm gradient surfaces with inset highlights and layered soft shadows
- **Light Awareness** — Unified top-left light source across all surfaces
- **Philosophy Banner** — 4-column grid at page top: Breathing / Fluid Morph / Surprise / Zero Dialogs
- **Toggle refinement** — On/Off first-letter-cap, label fades after 1.5s → soft night light
- **Text selection restriction** — Global `user-select: none` for app-like feel
- **SKILL.md** — AI skill entry point with Vibe Coding Rules and Design Language References
- **index.html** — GitHub Pages landing page

### Changed
- Display.html spacing overhaul: section margin 56px → 88px, card padding 18px → 24px, title 16px → 19px
- Page width narrowed: 1100px → 1000px for more focused feel
- Grid gaps increased: 24px → 28px (2-col), 16px → 20px (3-col)
- Toggle label transition: 200ms → 500ms ease for softer fade

### Removed
- All "乐颂/Lesong" brand references from spec (replaced with "Simcise")
- Default accent is now achromatic (black/white/grey), product accents are optional variants

## [2.2.0] — 2026-08-15

### Added
- **Accent Color Family** — 7-step extended family (50→700) with variant naming
- **Product Accent Names** — Deep Sea Teal, Brick Rust, Forest Moss, Amber Ember, Dusk Lavender, Midnight Slate, Ocean Depth
- **Orbit Spinner** — Non-uniform rotation: ball on circular track, fast-slow alternating
- **Bank-card Buttons** — Elongated rounded rectangles (padding 10px 28px, radius 12px)
- **Now Playing Card** (4.6.1) — Extreme minimalism with radial gradient, zero decoration
- **Section Rules** — Accent-colored rule boxes for each section

### Changed
- Toggle redesigned: slider → rounded rect button (glow on / dim off)
- All color swatches now have border lines (pure colors always bordered)
- Color naming: variant names only, cannot identify at first glance

## [2.1.0] — 2026-08-14

### Added
- Complete color system with Canonical Values + per-product palettes
- Font weight / line-height / letter-spacing specifications
- Border & divider specifications
- Gradient patterns
- z-index layer system
- Animation directory (@keyframes template library)
- Toast/notification, loading states, icon system, sidebar nav state machine
- Responsive breakpoints, custom scrollbar specifications
- Window size constraints

### Changed
- Color system refined to Canonical Values + complete per-product palettes
- Added font weight/line-height/letter-spacing specs
- Added border & divider, gradient, z-index sections

## [2.0.0] — 2026-06-15

### Added
- Dark mode specifications across all components
- Frosted glass (backdrop-filter) texture layers (4 blur levels)
- Semantic color system (danger/success/warning/info)
- Multi-product Accent Color comparison table
- Component size references
- Layout variants
- Accessibility & performance chapter
- Design Tokens quick reference

### Changed
- Major overhaul based on full product line UI code audit

## [1.0.0] — 2026-05-30

### Added
- Initial design language specification
- Core design philosophy: "Every element must have a reason to exist"
- Basic visual specs: color, typography, radius, spacing, shadows
- Basic interaction specs: animation timing, easing curves
- Growth-first principle, on-demand visibility principle
- Basic component specs: buttons, inputs, cards, menus
