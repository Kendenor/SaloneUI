<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Kendenor/SaloneUI/main/docs/assets/logo-white.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Kendenor/SaloneUI/main/docs/assets/logo.svg">
    <img src="https://raw.githubusercontent.com/Kendenor/SaloneUI/main/docs/assets/logo.svg" alt="SaloneUI" width="280">
  </picture>
</p>

<p align="center">
  A plain-English CSS framework for rapidly building modern, accessible user interfaces without configuration.
</p>

<p align="center">
  <a href="https://github.com/Kendenor/SaloneUI/stargazers"><img src="https://img.shields.io/github/stars/Kendenor/SaloneUI?style=flat&color=00A651" alt="Stars"></a>
  <a href="https://www.npmjs.com/package/salone-ui"><img src="https://img.shields.io/npm/v/salone-ui?style=flat&color=0072C6" alt="NPM Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="License"></a>
  <img src="https://img.shields.io/badge/size-%3C25KB-success?style=flat" alt="Bundle Size">
</p>

---

## Documentation

For full documentation, interactive components, examples, and the live playground, visit [kendenor.github.io/SaloneUI](https://kendenor.github.io/SaloneUI/).

For AI coding assistants (ChatGPT, Claude, Gemini, Cursor, Copilot), see our machine-readable [llms.txt](llms.txt).

---

## Quick Start

### CDN
Drop one line into your `<head>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/salone-ui@1.2.0/dist/salone-ui.min.css">
```

### Package Manager
Install with your preferred package manager:

```bash
# npm
npm install salone-ui

# pnpm
pnpm add salone-ui

# yarn
yarn add salone-ui

# bun
bun add salone-ui

# deno
deno add npm:salone-ui
```

Import into your project:

```javascript
import 'salone-ui/dist/salone-ui.css';
```

---

## Example

```html
<button class="button green big">Send Money</button>

<div class="grid 3">
  <div class="card">First column</div>
  <div class="card">Second column</div>
  <div class="card">Third column</div>
</div>
```

---

## Used By & Integrations

SaloneUI is designed to seamlessly drop into any frontend environment with zero configuration:

- **HTML5 & Static Sites**: Drop the CDN link directly into your `<head>` tag.
- **React & Next.js**: `npm install salone-ui` and add `import 'salone-ui/dist/salone-ui.min.css'` in `app/layout.tsx` or `src/main.jsx`.
- **Vue 3 & Svelte**: Add `import 'salone-ui/dist/salone-ui.min.css'` in `src/main.js`.
- **Laravel & Django**: Include via CDN or local assets in your base layout templates.

To connect your project:
1. Add `salone-ui` to your `package.json` dependencies (`npm install salone-ui`).
2. Share your project in [GitHub Discussions](https://github.com/Kendenor/SaloneUI/discussions) to be featured!

---

## Community

For help, discussions about best practices, or feature ideas:

- [Discuss SaloneUI on GitHub](https://github.com/Kendenor/SaloneUI/discussions)
- [GitHub Issues](https://github.com/Kendenor/SaloneUI/issues)

---

## Contributing

If you're interested in contributing to SaloneUI, please read our [contributing docs](CONTRIBUTING.md) before submitting a pull request.

---

## License

SaloneUI is open source software licensed under the [MIT license](LICENSE).
