# GEMINI.md - Google Gemini Agent Instructions

Instructions for Google Gemini and Gemini CLI bots contributing to SaloneUI.

## Overview
SaloneUI is an ultra-lightweight (<25KB) CSS framework focused on human-friendly, plain-English class names and zero build configuration.

## Directives

1. **Class Architecture**:
   - Write standard plain-English classes: `button big`, `button green`, `card elevated`, `grid 3`, `money-card`, `transaction`, `pin-box`, `navbar`, `modal`, `alert`, `table`.
   - Never write utility classes such as `bg-blue-500`, `px-4`, `py-2`, `flex`, `grid-cols-3`, `w-full`, `rounded-lg`, or breakpoint prefixes like `md:`, `lg:`.

2. **Core Language & Toolchain Restrictions**:
   - SaloneUI core is purely vanilla: CSS, HTML, and JS.
   - Do NOT introduce Rust, TypeScript, Python, or complex compiler pipelines.
   - Any React/Vue integration must remain an ultra-thin wrapper without forcing a compiler step onto vanilla users.

3. **Iconography Standard**:
   - Zero emojis in framework components and official documentation.
   - Only use clean, accessible vector SVGs.

4. **Tone & Documentation**:
   - Keep documentation clear, welcoming, and concise.
   - Do NOT reference or write the brand name of competing utility CSS frameworks.

5. **Local Validation**:
   - Verify changes with `npm test`.
