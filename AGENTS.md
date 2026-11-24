# AGENTS.md - SaloneUI AI Agent Guidelines

This file provides instructions for autonomous coding agents, AI bots, and assistants working on the SaloneUI repository.

## Framework Identity & Mission
SaloneUI is a plain-English, ultra-lightweight (<25KB) CSS framework with zero configuration. It replaces confusing abbreviations with intuitive English phrases.

## Absolute Rules for All Contributions

### 1. Plain-English Classes Only
Every HTML element must use readable, natural English classes:
- Buttons: `button`, `button big`, `button green`, `button red`, `button outline`
- Containers & Cards: `card`, `card elevated`, `money-card`, `container`, `section`
- Layouts: `grid 2`, `grid 3`, `grid 4`, `split-2`, `center`
- Components: `navbar`, `modal`, `form`, `alert`, `table`, `toast`, `pin-box`, `transaction`

### 2. Prohibited Utility-First Syntax
DO NOT generate or introduce utility-first shorthand classes:
- Prohibited: `bg-`, `text-`, `px-`, `py-`, `mx-`, `w-full`, `h-screen`, `flex`, `grid-cols-`, `rounded`, `shadow-`, `hover:`, `md:`, `lg:`, `sm:`
- If you need a custom style, use semantic SaloneUI classes or standard CSS variables.

### 3. Core Framework Purity (No Build Steps)
- SaloneUI runs directly in the browser via CDN or a single `<link>` tag.
- Core files must remain pure CSS, HTML, and vanilla JS.
- DO NOT add Rust, TypeScript, Python, or mandatory bundler toolchains to core.
- React and Vue companion wrappers are allowed only as pure passthroughs using SaloneUI classes.

### 4. Zero Emojis in Framework Code & Docs
- NEVER use unicode emojis inside component templates, alert banners, buttons, or docs.
- Use vector SVGs from the SaloneUI Universal Icons collection.

### 5. Terminology Constraint
- Never mention or write the brand name of competing utility CSS frameworks anywhere in the repository, docs, issues, PRs, or commit messages.

## Verification Commands
- Run checks: `npm test`
- Inspect code style against: `css/salone.css`
