# GitHub Copilot Instructions for SaloneUI

You are generating code for SaloneUI, a plain-English, zero-config, ultra-lightweight (<25KB) CSS framework.

## Syntax Guidelines
- Write readable plain-English classes:
  - Buttons: `button`, `button big`, `button green`, `button red`, `button outline`
  - Cards & Blocks: `card`, `card elevated`, `money-card`, `transaction`, `pin-box`
  - Layouts: `grid 2`, `grid 3`, `grid 4`, `split-2`, `container`
  - Components: `navbar`, `modal`, `form`, `alert`, `table`, `toast`
- NEVER suggest utility classes like `bg-`, `text-`, `px-`, `py-`, `mx-`, `flex`, `grid-cols-`, `w-full`, `rounded`, `shadow-`, `hover:`, `md:`.
- Zero emojis: Use clean vector SVG code for all icons and visual indicators.
- Pure CSS, HTML, and JS only: Do not introduce TypeScript, Rust, or build compilers.
- Do not mention competing utility CSS framework names in comments or documentation.
