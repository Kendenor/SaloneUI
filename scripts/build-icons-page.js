const fs = require('fs');
const path = require('path');

const iconsPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaloneUI Icons — Over 200,000+ Vector Icons &amp; Brand Logos</title>
  <meta name="description" content="Search over 200,000+ open-source vector SVG icons and tech brand logos right inside SaloneUI. Zero external dependencies, pure vector SVGs, 1-click copy, and 1-click download.">
  <meta name="keywords" content="icons, svg icons, vector icons, brand icons, github icon, google icon, figma icon, netlify icon, iconify, material icons, lucide, fontawesome, simple icons, css framework, SaloneUI">
  <meta name="author" content="SaloneUI Team">
  <meta name="theme-color" content="#00A651">
  <link rel="canonical" href="https://saloneui.dev/icons.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://saloneui.dev/icons.html">
  <meta property="og:title" content="SaloneUI Icons — Over 200,000+ Vector Icons &amp; Brand Logos">
  <meta property="og:description" content="Search over 200,000+ open-source vector SVG icons and tech brand logos right inside SaloneUI. Zero external dependencies, 1-click copy SVG.">
  <meta property="og:image" content="https://saloneui.dev/assets/og-image.svg">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="icon" type="image/png" sizes="48x48" href="assets/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
  <link rel="manifest" href="site.webmanifest">

  <link rel="stylesheet" href="dist/salone-ui.css">
  <link rel="stylesheet" href="assets/docs.css">
  <script src="assets/docs.js" defer></script>
  <script src="assets/salone-icons.js"></script>

  <style>
    .icons-hero {
      padding: 3rem 1.5rem 2rem;
      text-align: center;
      max-width: 960px;
      margin: 0 auto;
    }
    .icons-hero h1 {
      font-size: 2.75rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 0.75rem;
    }
    .icons-hero p {
      font-size: 1.15rem;
      color: var(--salone-text-muted);
      line-height: 1.6;
      max-width: 760px;
      margin: 0 auto 1.5rem;
    }
    .icons-controls-card {
      background: var(--salone-surface);
      border: 1px solid var(--salone-surface-border);
      border-radius: var(--salone-radius);
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    }
    .search-input-box {
      position: relative;
      margin-bottom: 1.25rem;
    }
    .search-input-box input {
      width: 100%;
      padding: 1rem 1.25rem 1rem 3.25rem;
      font-size: 1.05rem;
      border-radius: var(--salone-radius-sm);
      border: 1px solid var(--salone-surface-border);
      background: var(--salone-bg);
      color: var(--salone-text);
      outline: none;
      transition: all 0.2s ease;
    }
    .search-input-box input:focus {
      border-color: var(--salone-primary);
      box-shadow: 0 0 0 3px var(--salone-primary-light);
    }
    .search-input-box svg {
      position: absolute;
      left: 1.15rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--salone-text-muted);
      pointer-events: none;
    }
    .category-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
    }
    .cat-pill {
      background: var(--salone-bg-subtle);
      border: 1px solid var(--salone-surface-border);
      color: var(--salone-text-muted);
      padding: 0.4rem 0.85rem;
      border-radius: var(--salone-radius-full);
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .cat-pill:hover {
      background: var(--salone-surface);
      color: var(--salone-text);
      border-color: var(--salone-primary);
    }
    .cat-pill.active {
      background: var(--salone-primary);
      border-color: var(--salone-primary);
      color: #FFFFFF;
    }
    .toggles-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--salone-surface-border);
      font-size: 0.85rem;
      color: var(--salone-text-muted);
    }
    .toggle-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .size-btn {
      padding: 0.25rem 0.65rem;
      border-radius: var(--salone-radius-sm);
      border: 1px solid var(--salone-surface-border);
      background: var(--salone-bg);
      color: var(--salone-text);
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
    .size-btn.active {
      background: var(--salone-primary-light);
      border-color: var(--salone-primary);
      color: var(--salone-primary);
    }
    .icons-count-badge {
      font-weight: 700;
      color: var(--salone-text);
    }
    .icons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
      gap: 1rem;
      margin-bottom: 3rem;
    }
    @media (max-width: 640px) {
      .icons-grid {
        grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
        gap: 0.65rem;
      }
    }
    .icon-card {
      background: var(--salone-surface);
      border: 1px solid var(--salone-surface-border);
      border-radius: var(--salone-radius);
      padding: 1.25rem 0.75rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
      min-height: 120px;
    }
    .icon-card:hover {
      transform: translateY(-3px);
      border-color: var(--salone-primary);
      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.08);
    }
    .icon-card .icon-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      margin-bottom: 0.75rem;
      color: var(--salone-text);
      transition: transform 0.15s ease;
    }
    .icon-card:hover .icon-preview {
      transform: scale(1.15);
      color: var(--salone-primary);
    }
    .icon-card .icon-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--salone-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
    .icon-card .icon-name {
      font-size: 0.7rem;
      font-family: var(--salone-font-mono, monospace);
      color: var(--salone-text-muted);
      margin-top: 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
    .icon-card .icon-badge-source {
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 0.6rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 2px 5px;
      border-radius: 4px;
      background: var(--salone-bg-subtle);
      color: var(--salone-text-muted);
      border: 1px solid var(--salone-surface-border);
      line-height: 1;
    }
    .icon-card .card-hover-actions {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.95);
      border-radius: var(--salone-radius);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.5rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      z-index: 10;
    }
    .icon-card:hover .card-hover-actions {
      opacity: 1;
      pointer-events: auto;
    }
    .card-hover-actions {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.95);
      border-radius: var(--salone-radius);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      padding: 0.4rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      z-index: 10;
    }
    .card-hover-actions button {
      width: 100%;
      font-size: 0.68rem;
      padding: 0.28rem 0.4rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      transition: background 0.15s ease;
    }
    .btn-copy-svg {
      background: var(--salone-primary);
      color: #FFFFFF;
    }
    .btn-copy-svg:hover {
      background: var(--salone-primary-hover);
    }
    .btn-copy-rn {
      background: #0284C7;
      color: #FFFFFF;
    }
    .btn-copy-rn:hover {
      background: #0369A1;
    }
    .btn-copy-html {
      background: rgba(255, 255, 255, 0.18);
      color: #FFFFFF;
    }
    .btn-copy-html:hover {
      background: rgba(255, 255, 255, 0.28);
    }
    .btn-download-svg {
      background: transparent;
      color: #94A3B8;
    }
    .btn-download-svg:hover {
      color: #FFFFFF;
    }
    .rn-guide-banner {
      background: var(--salone-surface);
      border: 1px solid var(--salone-surface-border);
      border-radius: var(--salone-radius);
      padding: 1.25rem 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .rn-guide-badge {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background: #E0F2FE;
      color: #0369A1;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 0.35rem;
    }
    .btn-download-svg:hover {
      color: #FFFFFF;
    }
    .docs-code-example {
      background: var(--salone-surface);
      border: 1px solid var(--salone-surface-border);
      border-radius: var(--salone-radius);
      padding: 1.5rem;
      margin-bottom: 3rem;
    }
    .search-loading-bar {
      display: none;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: var(--salone-primary);
      font-weight: 600;
      margin-top: 0.75rem;
    }
    .search-loading-bar.show {
      display: flex;
    }
    .toast-msg {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #0F172A;
      color: #FFFFFF;
      padding: 0.7rem 1.35rem;
      border-radius: var(--salone-radius-full);
      font-size: 0.85rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .toast-msg.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar">
    <a href="index.html" class="nav-brand">
      <img src="assets/logo.svg" alt="SaloneUI" height="34">
    </a>
    <ul class="nav-links hide-mobile">
      <li><a href="index.html">Home</a></li>
      <li><a href="components.html">Components</a></li>
      <li><a href="icons.html" class="active">Icons</a></li>
      <li><a href="cheatsheet.html">Cheat Sheet</a></li>
      <li><a href="playground.html">Playground</a></li>
      <li><a href="examples.html">Examples</a></li>
    </ul>
    <div class="nav-actions">
      <!-- Theme Switcher Button -->
      <div class="theme-dropdown-wrap">
        <button class="nav-control-btn theme-trigger" onclick="toggleThemeDropdown(event)" id="themeTriggerBtn" aria-label="Select Theme" title="Switch Theme">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path>
          </svg>
          <span class="nav-text hide-mobile" id="navThemeText">Theme</span>
          <svg class="nav-arrow" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="theme-dropdown-menu" id="themeDropdownMenu">
          <button class="theme-option" onclick="setTheme('')"><span class="color-dot" style="background:#00A651;"></span> Emerald (Default)</button>
          <button class="theme-option" onclick="setTheme('theme-fintech')"><span class="color-dot" style="background:#10B981;"></span> Fintech</button>
          <button class="theme-option" onclick="setTheme('theme-shop')"><span class="color-dot" style="background:#EA580C;"></span> Shop</button>
          <button class="theme-option" onclick="setTheme('theme-school')"><span class="color-dot" style="background:#2563EB;"></span> School</button>
          <button class="theme-option" onclick="setTheme('dark')"><span class="color-dot" style="background:#0F172A; border:1px solid #94A3B8;"></span> Dark Mode</button>
        </div>
      </div>

      <!-- Command Palette Trigger Button -->
      <button class="nav-control-btn hide-mobile" onclick="openCommandPalette()" title="Search Components & Pages (Ctrl+K)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span style="font-size:0.75rem; color:var(--salone-text-muted);">Search</span>
        <kbd class="kbd" style="font-size: 0.65rem; height: 18px; min-width: 18px; padding: 0 0.25rem;">⌘K</kbd>
      </button>

      <a href="https://github.com/Kendenor/SaloneUI" target="_blank" class="nav-control-btn" title="GitHub" aria-label="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      </a>
      <a href="download.html" class="button small hide-mobile" style="height: 36px; padding: 0.4rem 0.95rem;">Download</a>
      <button class="nav-control-btn mobile-menu-btn" onclick="toggleMobileMenu()" id="mobileMenuBtn" aria-label="Toggle Menu">
        <svg class="hamburger-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <svg class="close-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" style="display:none;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer-overlay" id="mobileDrawerOverlay" onclick="closeMobileDrawerOnBackdrop(event)">
    <div class="mobile-drawer">
      <div class="mobile-drawer-links">
        <a href="index.html" class="mobile-nav-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </a>
        <a href="components.html" class="mobile-nav-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          <span>Components (32)</span>
        </a>
        <a href="icons.html" class="mobile-nav-item active">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="12 8 8 12 12 16 16 12 12 8"/></svg>
          <span>Icons &amp; Brands</span>
        </a>
        <a href="cheatsheet.html" class="mobile-nav-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <span>Cheat Sheet</span>
        </a>
        <a href="playground.html" class="mobile-nav-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>Playground</span>
        </a>
        <a href="examples.html" class="mobile-nav-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          <span>Examples &amp; Templates</span>
        </a>
        <a href="download.html" class="mobile-nav-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Download</span>
        </a>
      </div>
      <div class="mobile-drawer-cta">
        <a href="https://github.com/Kendenor/SaloneUI" target="_blank" class="button outline small" style="width: 100%; justify-content: center; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          GitHub Repository
        </a>
      </div>
    </div>
  </div>

  <!-- HERO -->
  <header class="icons-hero">
    <span class="badge green">200,000+ Universal Vector Icons</span>
    <h1 style="margin-top: 0.5rem;">SaloneUI Universal Icons Explorer</h1>
    <p>
      Search and copy from <strong>over 200,000+ open-source vector SVG icons and company brand logos</strong>. Instant 1-click copy for clean SVG, SaloneUI HTML markup, or raw .svg download.
    </p>
  </header>

  <!-- MAIN CONTAINER -->
  <main class="container">

    <!-- REACT NATIVE MOBILE CALLOUT -->
    <div class="rn-guide-banner">
      <div>
        <span class="rn-guide-badge">Mobile Developer Ready</span>
        <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 0.25rem;">Build Mobile Apps with React Native &amp; Expo</div>
        <div style="font-size: 0.85rem; color: var(--salone-text-muted);">
          Every icon includes 1-click <strong>React Native</strong> generating ready-to-paste <code>&lt;Svg&gt;&lt;Path ... /&gt;&lt;/Svg&gt;</code> components for <code>react-native-svg</code>.
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <code style="background: var(--salone-bg-subtle); padding: 0.4rem 0.75rem; border-radius: 4px; font-size: 0.8rem; border: 1px solid var(--salone-surface-border);">npx expo install react-native-svg</code>
      </div>
    </div>

    <!-- SEARCH & CONTROLS CARD -->
    <div class="icons-controls-card">
      <div class="search-input-box">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="iconSearchInput" placeholder="Search 200,000+ icons (e.g. github, google, medical, car, airplane, bitcoin, shield, user, cart, wifi)..." oninput="debounceSearch()">
      </div>

      <div class="category-pills">
        <button class="cat-pill active" onclick="setCategory('all', this)">Curated Essentials</button>
        <button class="cat-pill" onclick="setCategory('brands', this)">Tech &amp; Brands</button>
        <button class="cat-pill" onclick="setCategory('navigation', this)">Navigation &amp; Arrows</button>
        <button class="cat-pill" onclick="setCategory('actions', this)">Actions &amp; Controls</button>
        <button class="cat-pill" onclick="setCategory('communication', this)">Communication</button>
        <button class="cat-pill" onclick="setCategory('finance', this)">Finance &amp; E-Commerce</button>
        <button class="cat-pill" onclick="setCategory('media', this)">Media &amp; Files</button>
        <button class="cat-pill" onclick="setCategory('devices', this)">Hardware &amp; Devices</button>
      </div>

      <div class="search-loading-bar" id="searchLoadingBar">
        <div class="loader" style="width: 16px; height: 16px; border-width: 2px;"></div>
        <span>Searching universal open-source index (200,000+ icons)...</span>
      </div>

      <div class="toggles-bar">
        <div>
          Showing <span id="visibleCount" class="icons-count-badge">0</span> icons <span id="sourceNotice" style="font-size:0.75rem; color:var(--salone-text-muted); margin-left: 0.5rem;">(Built-in Offline Ready)</span>
        </div>
        <div class="toggle-group">
          <span>Preview Size:</span>
          <button class="size-btn" onclick="changeIconSize(18, this)">18px</button>
          <button class="size-btn active" onclick="changeIconSize(24, this)">24px</button>
          <button class="size-btn" onclick="changeIconSize(32, this)">32px</button>
          <button class="size-btn" onclick="changeIconSize(40, this)">40px</button>
        </div>
      </div>
    </div>

    <!-- ICONS GRID CONTAINER -->
    <div id="iconsGrid" class="icons-grid">
      <!-- Injected by JavaScript -->
    </div>

    <!-- HOW TO USE IN SALONEUI -->
    <div class="docs-code-example">
      <h2>How to Use SaloneUI Icons in Your Project</h2>
      <p style="color: var(--salone-text-muted); margin-bottom: 1.25rem;">
        Click any icon card above to copy its pure inline SVG code directly to your clipboard, or use the <code>class="icon"</code> plain-English CSS helper.
      </p>

      <div class="grid 2" style="gap: 1.5rem;">
        <div>
          <h3 style="font-size: 1rem; margin-bottom: 0.5rem;">1. Brand Buttons</h3>
          <pre><code>&lt;button class="button github"&gt;
  &lt;svg class="icon" width="18" height="18" ...&gt;...&lt;/svg&gt;
  Sign in with GitHub
&lt;/button&gt;

&lt;button class="button google"&gt;
  &lt;svg class="icon" width="18" height="18" ...&gt;...&lt;/svg&gt;
  Sign in with Google
&lt;/button&gt;</code></pre>
        </div>

        <div>
          <h3 style="font-size: 1rem; margin-bottom: 0.5rem;">2. UI Buttons &amp; Badges</h3>
          <pre><code>&lt;button class="button green"&gt;
  &lt;svg class="icon" width="16" height="16" ...&gt;...&lt;/svg&gt;
  Saved Successfully
&lt;/button&gt;

&lt;span class="badge green"&gt;
  &lt;svg class="icon" width="12" height="12" ...&gt;...&lt;/svg&gt;
  Active • Verified
&lt;/span&gt;</code></pre>
        </div>
      </div>
    </div>

  </main>

  <!-- TOAST FEEDBACK NOTIFICATION -->
  <div id="iconToast" class="toast-msg">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    <span id="toastText">Copied SVG to clipboard!</span>
  </div>

  <!-- SCRIPT FOR LIVE RENDERING & UNIVERSAL SEARCH -->
  <script>
    let currentCategory = 'all';
    let currentSize = 24;
    let searchQuery = '';
    let debounceTimer = null;
    let universalResults = [];
    const svgCache = new Map();

    function iconMatchesQuery(icon, query) {
      if (!query) return true;
      const rawQ = query.trim().toLowerCase();
      const tokens = rawQ.split(/\s+/).filter(Boolean);
      const collapsedQ = rawQ.replace(/[\s-_]+/g, '');
      const name = (icon.name || '').toLowerCase();
      const title = (icon.title || '').toLowerCase();
      const tags = (icon.tags || '').toLowerCase();
      const full = name + ' ' + title + ' ' + tags;
      
      if (full.includes(rawQ)) return true;
      if (name.includes(collapsedQ) || collapsedQ.includes(name)) return true;
      if (tokens.every(t => full.includes(t))) return true;
      return false;
    }

    function renderCuratedIcons() {
      const container = document.getElementById('iconsGrid');
      if (!container || !window.SALONE_ICONS) return;

      const filtered = window.SALONE_ICONS.filter(icon => {
        const matchCat = currentCategory === 'all' || icon.category === currentCategory;
        const matchQuery = iconMatchesQuery(icon, searchQuery);
        return matchCat && matchQuery;
      });

      document.getElementById('visibleCount').innerText = filtered.length;
      document.getElementById('sourceNotice').innerText = '(Built-in Offline Ready)';

      if (filtered.length === 0 && !searchQuery) {
        container.innerHTML = \`<div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">No icons found.</div>\`;
        return;
      }

      container.innerHTML = filtered.map(icon => {
        const svgContent = window.getSaloneSVG(icon, currentSize);
        return createIconCardHtml(icon.name, icon.title, svgContent, 'builtin');
      }).join('');
    }

    function createIconCardHtml(name, title, svgContent, source = 'builtin') {
      const escapedName = name.replace(/'/g, "\\\\'");
      return \`
        <div class="icon-card" data-name="\${escapedName}" onclick="copyCardSvg('\${escapedName}', this)" title="Click to copy SVG">
          <span class="icon-badge-source">\${source === 'builtin' ? 'CORE' : source}</span>
          <div class="icon-preview" data-name="\${name}">
            \${svgContent}
          </div>
          <div class="icon-title">\${title}</div>
          <div class="icon-name">\${name}</div>

          <div class="card-hover-actions">
            <button class="btn-copy-svg" onclick="event.stopPropagation(); copyCardSvg('\${escapedName}', this.closest('.icon-card'))">
              Copy SVG
            </button>
            <button class="btn-copy-rn" onclick="event.stopPropagation(); copyCardReactNative('\${escapedName}', this.closest('.icon-card'))">
              React Native
            </button>
            <button class="btn-copy-html" onclick="event.stopPropagation(); copyCardHtml('\${escapedName}', this.closest('.icon-card'))">
              Copy HTML
            </button>
            <button class="btn-download-svg" onclick="event.stopPropagation(); downloadCardSvg('\${escapedName}', this.closest('.icon-card'))">
              Download
            </button>
          </div>
        </div>
      \`;
    }

    function setCategory(cat, btn) {
      currentCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('iconSearchInput').value = '';
      searchQuery = '';
      universalResults = [];
      renderCuratedIcons();
    }

    function debounceSearch() {
      clearTimeout(debounceTimer);
      searchQuery = document.getElementById('iconSearchInput').value.trim().toLowerCase();
      
      // First update local curated matches immediately
      renderCuratedIcons();

      if (!searchQuery || searchQuery.length < 2) {
        document.getElementById('searchLoadingBar').classList.remove('show');
        return;
      }

      // Query the 200,000+ universal icon catalog
      debounceTimer = setTimeout(() => {
        fetchUniversalIcons(searchQuery);
      }, 350);
    }

    async function fetchUniversalIcons(query) {
      const loadingBar = document.getElementById('searchLoadingBar');
      loadingBar.classList.add('show');

      try {
        const res = await fetch(\`https://api.iconify.design/search?query=\${encodeURIComponent(query)}&limit=64\`);
        if (!res.ok) throw new Error('Search failed');
        const data = await res.json();
        
        loadingBar.classList.remove('show');
        
        if (data.icons && data.icons.length > 0) {
          renderCombinedResults(data.icons);
        }
      } catch (err) {
        loadingBar.classList.remove('show');
        console.warn('Universal icon search offline or rate-limited:', err);
      }
    }

    function renderCombinedResults(remoteIconIds) {
      const container = document.getElementById('iconsGrid');
      
      // Filter local matches with token-aware matching
      const localMatches = (window.SALONE_ICONS || []).filter(icon => {
        return iconMatchesQuery(icon, searchQuery);
      });

      let totalCount = localMatches.length + remoteIconIds.length;
      document.getElementById('visibleCount').innerText = totalCount;
      document.getElementById('sourceNotice').innerText = \`(Found \${localMatches.length} Core + \${remoteIconIds.length} Universal)\`;

      // Render local cards first
      let html = localMatches.map(icon => {
        const svgContent = window.getSaloneSVG(icon, currentSize);
        return createIconCardHtml(icon.name, icon.title, svgContent, 'CORE');
      }).join('');

      // Append universal cards with clean shimmer (NO <img> TAGS = NEVER SHOWS BROKEN IMAGE OR BROKEN ALT TEXT!)
      const remotePending = [];
      remoteIconIds.forEach(id => {
        const parts = id.split(':');
        const prefix = parts[0] || 'icon';
        const rawName = parts[1] || parts[0];
        const prettyTitle = rawName.replace(/-/g, ' ');
        const shimmer = \`<div class="icon-loading-shimmer" style="width:\${currentSize}px; height:\${currentSize}px; border-radius:4px; background:var(--salone-bg-subtle);"></div>\`;
        
        html += createIconCardHtml(id, prettyTitle, shimmer, prefix.toUpperCase());
        remotePending.push({ id, prefix, rawName });
      });

      container.innerHTML = html;

      // Asynchronously fetch raw SVGs directly
      remotePending.forEach(item => {
        const card = container.querySelector(\`.icon-card[data-name="\${item.id}"]\`);
        if (!card) return;
        const url = \`https://api.iconify.design/\${item.prefix}/\${item.rawName}.svg\`;
        
        if (svgCache.has(url)) {
          applySvgToCard(card, svgCache.get(url));
        } else {
          fetch(url)
            .then(res => {
              if (!res.ok) throw new Error('Not found');
              return res.text();
            })
            .then(svgText => {
              if (!svgText || !svgText.includes('<svg')) throw new Error('Bad SVG');
              svgCache.set(url, svgText);
              applySvgToCard(card, svgText);
            })
            .catch(() => {
              // Silently remove the card from the grid!
              // NO broken image frame, NO broken alternative text!
              card.remove();
              updateVisibleCounter();
            });
        }
      });
    }

    function applySvgToCard(card, rawSvg) {
      const preview = card.querySelector('.icon-preview');
      if (preview) {
        const sized = rawSvg
          .replace(/width="[^"]*"/, \`width="\${currentSize}"\`)
          .replace(/height="[^"]*"/, \`height="\${currentSize}"\`);
        preview.innerHTML = sized;
      }
    }

    window.updateVisibleCounter = function() {
      const cards = document.querySelectorAll('#iconsGrid .icon-card');
      const counter = document.getElementById('visibleCount');
      if (counter) counter.innerText = cards.length;
    };

    function svgToReactNative(svgStr) {
      if (!svgStr) return '';
      let clean = svgStr.replace(/<\?xml.*?\?>/gi, '').trim();
      clean = clean
        .replace(/<svg\b/g, '<Svg')
        .replace(/<\/svg>/g, '</Svg>')
        .replace(/<path\b/g, '<Path')
        .replace(/<\/path>/g, '</Path>')
        .replace(/<rect\b/g, '<Rect')
        .replace(/<\/rect>/g, '</Rect>')
        .replace(/<circle\b/g, '<Circle')
        .replace(/<\/circle>/g, '</Circle>')
        .replace(/<ellipse\b/g, '<Ellipse')
        .replace(/<\/ellipse>/g, '</Ellipse>')
        .replace(/<line\b/g, '<Line')
        .replace(/<\/line>/g, '</Line>')
        .replace(/<polyline\b/g, '<Polyline')
        .replace(/<\/polyline>/g, '</Polyline>')
        .replace(/<polygon\b/g, '<Polygon')
        .replace(/<\/polygon>/g, '</Polygon>')
        .replace(/<g\b/g, '<G')
        .replace(/<\/g>/g, '</G>')
        .replace(/<defs\b/g, '<Defs')
        .replace(/<\/defs>/g, '</Defs>')
        .replace(/<linearGradient\b/g, '<LinearGradient')
        .replace(/<\/linearGradient>/g, '</LinearGradient>')
        .replace(/<stop\b/g, '<Stop')
        .replace(/<\/stop>/g, '</Stop>')
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-linecap=/g, 'strokeLinecap=')
        .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
        .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
        .replace(/fill-rule=/g, 'fillRule=')
        .replace(/clip-rule=/g, 'clipRule=')
        .replace(/stop-color=/g, 'stopColor=')
        .replace(/stop-opacity=/g, 'stopOpacity=');
      return clean;
    }

    async function copyCardReactNative(name, card) {
      const svg = await getSvgStringFromCard(card, name);
      if (!svg) return;
      const rnSnippet = svgToReactNative(svg);
      navigator.clipboard.writeText(rnSnippet).then(() => {
        showToast('Copied React Native <Svg> to clipboard!');
      });
    }

    function changeIconSize(size, btn) {
      currentSize = size;
      document.querySelectorAll('.size-btn').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      
      document.querySelectorAll('.icon-card .icon-preview').forEach(preview => {
        const svg = preview.querySelector('svg');
        const img = preview.querySelector('img');
        if (svg) {
          svg.setAttribute('width', size);
          svg.setAttribute('height', size);
        }
        if (img) {
          img.setAttribute('width', size);
          img.setAttribute('height', size);
        }
      });
    }

    function showToast(msg) {
      const toast = document.getElementById('iconToast');
      const text = document.getElementById('toastText');
      text.innerText = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }

    async function getSvgStringFromCard(card, name) {
      const svgEl = card.querySelector('.icon-preview svg');
      if (svgEl) {
        return svgEl.outerHTML;
      }
      return '';
    }

    async function copyCardSvg(name, card) {
      const svg = await getSvgStringFromCard(card, name);
      if (!svg) return;
      navigator.clipboard.writeText(svg).then(() => {
        showToast('Copied <' + name + '> SVG to clipboard!');
      });
    }

    async function copyCardHtml(name, card) {
      const svg = await getSvgStringFromCard(card, name);
      if (!svg) return;
      const htmlSnippet = '<span class="icon">' + svg + '</span>';
      navigator.clipboard.writeText(htmlSnippet).then(() => {
        showToast('Copied <span class="icon"> HTML snippet!');
      });
    }

    async function downloadCardSvg(name, card) {
      const svg = await getSvgStringFromCard(card, name);
      if (!svg) return;
      const blob = new Blob([svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = name.replace(/[:/]/g, '-') + '.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Downloaded ' + name + '.svg');
    }

    // Initialize on load
    document.addEventListener('DOMContentLoaded', () => {
      renderCuratedIcons();
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'docs', 'icons.html'), iconsPageHtml, 'utf8');
console.log('docs/icons.html successfully generated with 200,000+ universal icon support!');
