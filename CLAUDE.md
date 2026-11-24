# CLAUDE.md - SaloneUI Project Instructions

## Project Overview
SaloneUI is an ultra-lightweight (<25KB), zero-configuration, plain-English CSS framework designed for building clean, modern, and accessible interfaces.

## Core Architectural Rules
1. **Plain-English Class Names Only**:
   - Always use semantic, human-readable class names such as:
     `button big`, `button green`, `button red`, `card`, `card elevated`, `grid 3`, `money-card`, `transaction`, `pin-box`, `navbar`, `modal`, `form`, `alert`, `table`, `toast`.
   - Never invent cryptic utility shorthands.

2. **Prohibited Utility-First Patterns**:
   - Strictly DO NOT use utility classes such as:
     `bg-*`, `text-*`, `px-*`, `py-*`, `mx-*`, `w-full`, `h-screen`, `flex`, `grid-cols-*`, `rounded*`, `shadow-*`, `hover:*`, `md:*`, `lg:*`, `sm:*`.
   - SaloneUI is explicitly non-utility in its syntax design.

3. **Pure Web Technologies (No Compilers)**:
   - The core framework is pure CSS, HTML, and vanilla JavaScript.
   - DO NOT introduce TypeScript, Rust, Go, Python, or heavy build compilers (like Webpack, Babel, or complex bundlers) into the core library.
   - Any Vue or React wrapper must remain an ultra-thin syntax helper that delegates directly to SaloneUI classes without introducing build overhead.

4. **Strict Zero-Emoji Policy**:
   - Never use unicode emojis in components, buttons, navigation, or documentation UI.
   - Always use clean, accessible vector SVGs from the SaloneUI Universal Icons collection.

5. **Naming & Branding Guidelines**:
   - Refer to the framework strictly as SaloneUI.
   - Do NOT reference or mention competing utility framework brand names in code, comments, documentation, or commit messages.

## Testing & Verification
- Test distribution files using `npm test` (executes `scripts/test.js`).
- Verify responsive layout across desktop and mobile screen sizes.
