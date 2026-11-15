<div align="center">
  <img src="docs/assets/logo.svg" alt="SaloneUI Logo" width="260" />
  <p><strong>The Plain-English, Ultra-Lightweight CSS Framework.</strong></p>
  <p>Made in Sierra Leone, for the World. Zero config. No cryptic abbreviations. Under 25KB.</p>

  <p>
    <a href="https://github.com/Kendenor/SaloneUI/stargazers"><img src="https://img.shields.io/github/stars/Kendenor/SaloneUI?style=for-the-badge&color=00A651" alt="Stars" /></a>
    <a href="https://www.npmjs.com/package/salone-ui"><img src="https://img.shields.io/npm/v/salone-ui?style=for-the-badge&color=0072C6" alt="NPM Version" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-orange?style=for-the-badge" alt="License" /></a>
    <img src="https://img.shields.io/badge/Size-21.7KB-success?style=for-the-badge" alt="Bundle Size" />
  </p>
</div>

---

## ⚡ 10-Second Demo

Forget memorizing hundreds of cryptic abbreviations like `btn`, `px-4`, `col-md-6`, or `d-flex`. In **SaloneUI**, you write real human English:

```html
<!-- A stunning button -->
<button class="button green big">Send Money</button>

<!-- Automatic mobile-friendly responsive grid -->
<div class="grid 3">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>

<!-- Built-in mobile fintech card -->
<div class="money-card">
  <div class="money-header">
    <span>Main Balance</span>
    <button class="eye-button">Hide</button>
  </div>
  <div class="money-balance">SLL 2,450,000</div>
  <div class="money-footer">
    <span>Orange Money / Afrimoney</span>
    <span>Active</span>
  </div>
</div>
```

---

## 📦 Installation (Use ANY Package Manager You Like)

SaloneUI works everywhere. Pick your favorite tool or use our zero-install CDN:

| Method | Command / Tag |
| :--- | :--- |
| **CDN (HTML)** | `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/salone-ui@1.0.0/dist/salone-ui.css">` |
| **CDN (Minified)** | `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/salone-ui@1.0.0/dist/salone-ui.min.css">` |
| **NPM** | `npm install salone-ui` |
| **PNPM** | `pnpm add salone-ui` |
| **Yarn** | `yarn add salone-ui` |
| **Bun** | `bun add salone-ui` |
| **Deno** | `deno add npm:salone-ui` |
| **Direct Download** | Grab `dist/salone-ui.css` or `dist/salone-ui.min.css` directly from this repository |

After installing with any package manager:
```javascript
import 'salone-ui/dist/salone-ui.css';
```
or in HTML:
```html
<link rel="stylesheet" href="node_modules/salone-ui/dist/salone-ui.css">
```

---

## 🌟 Why SaloneUI?

1. **Plain English Only**: `class="button green"`, `class="card"`, `class="grid 2"`, `class="center"`.
2. **Zero Config**: No `tailwind.config.js`, no PostCSS, no Node build pipeline needed.
3. **Smart By Default**: A plain `<button>` or `<input>` with no class already looks modern, rounded, and tactile.
4. **Under 25KB**: Fast loading on 3G and rural networks worldwide.
5. **Fintech Ready**: First CSS framework with native `money-card`, `transaction`, and `pin-box` components.
6. **One-Word Themes**: Switch your whole site with `<body class="theme-fintech">` or `<body class="dark">`.
7. **Offline First**: System font stack with zero Google Fonts dependency.

---

## 🎨 The 5 One-Word Magic Themes

Apply any theme directly to your `<body>` tag:

- `theme-light` : Clean modern light palette (default)
- `theme-dark` (or `dark`) : High-contrast, sleek dark mode
- `theme-fintech` : Vibrant Sierra Leone green financial aesthetic
- `theme-shop` : High-energy commercial orange palette
- `theme-school` : Professional, focused academic blue palette

---

## 🤝 Contributing

Contributions of all kinds are warmly welcomed! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) to get started in less than 2 minutes.

---

## 📄 License

SaloneUI is open-source software licensed under the [MIT License](LICENSE).
