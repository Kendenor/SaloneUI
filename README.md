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

---

## Quick Start

### CDN
Drop one line into your `<head>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/salone-ui@1.1.0/dist/salone-ui.min.css">
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
