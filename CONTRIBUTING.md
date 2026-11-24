# Contributing to SaloneUI

Welcome! We are excited that you want to help make SaloneUI better. 

You do not need to be an expert to help. Whether you are fixing a typo, designing a new component, or improving examples, every single contribution matters!

---

## 3 Core Principles of SaloneUI

1. **Plain English Syntax Only**:
   - Write human-readable classes: `button green`, `card elevated`, `grid 3`, `money-card`.
   - Never use cryptic utility abbreviations (such as `px-4`, `bg-blue-500`, `flex`, `items-center`).
2. **Strict Zero-Emoji Policy**:
   - Do NOT use unicode emojis in components, documentation, or demos.
   - Always use clean, sharp, accessible vector SVGs.
3. **Ultra-Lightweight & Zero Build Step**:
   - The core framework is pure CSS without compilers or preprocessors.
   - No Rust, TypeScript, or heavy bundlers required to build or use SaloneUI.

---

## How to Contribute in 3 Simple Steps

1. **Fork the Repository**
   - Click the "Fork" button at the top right of the GitHub page.
   - Clone your fork to your computer:
     ```bash
     git clone https://github.com/YOUR-USERNAME/SaloneUI.git
     cd SaloneUI
     ```

2. **Make Your Changes or Add a Component**
   - Edit `src/salone-ui.css` for framework styles.
   - Rebuild the distribution files:
     ```bash
     npm run build
     ```
   - If adding a component, document it in `docs/components.html`.

3. **Open a Pull Request**
   - Commit and push your changes:
     ```bash
     git add -A
     git commit -m "feat: add glowing status badge component"
     git push origin main
     ```
   - Open a pull request against the `main` branch.

---

## Community Guidelines
- Be kind, welcoming, and supportive to all contributors.
- Write clear PR descriptions explaining what was added or fixed.

Thank you for building SaloneUI with us!
