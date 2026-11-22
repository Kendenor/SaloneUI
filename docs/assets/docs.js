/* ==========================================================================
   SaloneUI Documentation Scripts: Mobile Nav & Theme Switcher
   ========================================================================== */

function toggleMobileMenu() {
  const overlay = document.getElementById('mobileDrawerOverlay');
  const btn = document.getElementById('mobileMenuBtn');
  if (!overlay || !btn) return;

  const isOpen = overlay.classList.contains('open');
  const hamburger = btn.querySelector('.hamburger-icon');
  const closeIcon = btn.querySelector('.close-icon');

  if (isOpen) {
    overlay.classList.remove('open');
    if (hamburger) hamburger.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
    document.body.style.overflow = '';
  } else {
    overlay.classList.add('open');
    if (hamburger) hamburger.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileDrawerOnBackdrop(event) {
  if (event.target.id === 'mobileDrawerOverlay') {
    toggleMobileMenu();
  }
}

function toggleThemeDropdown(event) {
  event.stopPropagation();
  const menu = document.getElementById('themeDropdownMenu');
  if (menu) menu.classList.toggle('show');
}

function setTheme(theme) {
  document.body.classList.remove('theme-fintech', 'theme-shop', 'theme-school', 'dark');
  if (theme) {
    document.body.classList.add(theme);
  }
  localStorage.setItem('salone-theme', theme);
  const menu = document.getElementById('themeDropdownMenu');
  if (menu) menu.classList.remove('show');
}

function toggleMobileCompDrawer() {
  const drawer = document.getElementById('mobileCompDrawer');
  if (drawer) drawer.classList.toggle('show');
}

// Global outside-click dismissal
document.addEventListener('click', function(e) {
  const menu = document.getElementById('themeDropdownMenu');
  const trigger = document.getElementById('themeTriggerBtn');
  if (menu && menu.classList.contains('show') && trigger && !trigger.contains(e.target)) {
    menu.classList.remove('show');
  }

  const compDrawer = document.getElementById('mobileCompDrawer');
  const compTrigger = document.getElementById('mobileCompTrigger');
  if (compDrawer && compDrawer.classList.contains('show') && compTrigger && !compTrigger.contains(e.target) && !compDrawer.contains(e.target)) {
    compDrawer.classList.remove('show');
  }
});

// Restore saved theme on initial page load
(function() {
  const savedTheme = localStorage.getItem('salone-theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
})();

/* ==========================================================================
   SaloneUI Global Command Palette (Cmd+K / Ctrl+K)
   ========================================================================== */

const SALONE_CMD_ITEMS = [
  // Pages
  { title: 'Home', category: 'Pages', url: 'index.html', desc: 'Landing page & quick start guide' },
  { title: 'Docs', category: 'Pages', url: 'docs.html', desc: 'What is SaloneUI, why use it & how it works' },
  { title: 'Installation', category: 'Pages', url: 'installation.html', desc: 'Step-by-step setup in 2 minutes, CDN & starter template' },
  { title: 'Components', category: 'Pages', url: 'components.html', desc: 'Browse all 37 production-ready components' },
  { title: 'Icons Explorer', category: 'Pages', url: 'icons.html', desc: '200,000+ vector icons & brand logos' },
  { title: 'Cheat Sheet', category: 'Pages', url: 'cheatsheet.html', desc: 'Fast class & syntax lookup' },
  { title: 'Playground', category: 'Pages', url: 'playground.html', desc: 'Live HTML/CSS interactive editor' },
  { title: 'Examples & Templates', category: 'Pages', url: 'examples.html', desc: 'SaaS, Portfolio & Dashboard layouts' },
  { title: 'Download & CDN', category: 'Pages', url: 'download.html', desc: 'Get CSS bundles & install guide' },
  
  // Components (37)
  { title: 'Buttons & Brand Buttons', category: 'Components', url: 'components.html#buttons', desc: 'Colors, sizes, outlines, SaloneUI, GitHub, Google' },
  { title: 'Inputs & Form Controls', category: 'Components', url: 'components.html#inputs', desc: 'Text, email, selects, checkboxes, radios' },
  { title: 'Typography', category: 'Components', url: 'components.html#typography', desc: 'Headings, lead paragraphs, blockquotes' },
  { title: 'Colors & Utility Tokens', category: 'Components', url: 'components.html#colors', desc: 'Sierra Leone national flag & modern palette' },
  { title: 'Cards & Containers', category: 'Components', url: 'components.html#cards', desc: 'Basic, elevated, bordered, hoverable cards' },
  { title: 'Navbar & Navigation', category: 'Components', url: 'components.html#navbar', desc: 'Responsive header with brand & links' },
  { title: 'Modals & Dialogs', category: 'Components', url: 'components.html#modals', desc: 'Accessible dialog windows & backdrops' },
  { title: 'Notice (Native Dialog)', category: 'Components', url: 'components.html#notice', desc: 'HTML5 native modal alert notices with backdrop' },
  { title: 'Badges & Tags', category: 'Components', url: 'components.html#badges', desc: 'Status indicators, counters, pill badges' },
  { title: 'Alerts & Messages', category: 'Components', url: 'components.html#alerts', desc: 'Success, info, warning, error notifications' },
  { title: 'Tables', category: 'Components', url: 'components.html#tables', desc: 'Striped, bordered, hoverable data tables' },
  { title: 'Tooltips', category: 'Components', url: 'components.html#tooltips', desc: 'Hover context hints (top, bottom, left, right)' },
  { title: 'Dropdown Menus', category: 'Components', url: 'components.html#dropdowns', desc: 'Click & hover action menus' },
  { title: 'Accordion & Collapsible', category: 'Components', url: 'components.html#accordion', desc: 'Expandable FAQ and content drawers' },
  { title: 'Grid System', category: 'Components', url: 'components.html#grid', desc: 'Responsive column layouts (grid 2, 3, 4, 12)' },
  { title: 'Spacing & Layout Utilities', category: 'Components', url: 'components.html#spacing', desc: 'Margins, paddings, gaps, and row flex' },
  { title: 'Loading Spinners', category: 'Components', url: 'components.html#loading', desc: 'Circular loaders, pulse dots, button spinners' },
  { title: 'Avatar & User Badges', category: 'Components', url: 'components.html#avatar', desc: 'Profile photos, initials, online status dots' },
  { title: 'Pagination', category: 'Components', url: 'components.html#pagination', desc: 'Previous, next, page numbers' },
  { title: 'Breadcrumbs', category: 'Components', url: 'components.html#breadcrumbs', desc: 'Hierarchical navigation trail' },
  { title: 'Toggle Switch', category: 'Components', url: 'components.html#toggle', desc: 'Smooth on/off sliding switch' },
  { title: 'Search Input Box', category: 'Components', url: 'components.html#search', desc: 'Integrated magnifying glass search field' },
  { title: 'Tabs', category: 'Components', url: 'components.html#tabs', desc: 'Tabbed navigation panels' },
  { title: 'Progress Bars', category: 'Components', url: 'components.html#progress', desc: 'Determinate and animated fill bars' },
  { title: 'Footer', category: 'Components', url: 'components.html#footer', desc: 'Multi-column site footers' },
  { title: 'Hero Section', category: 'Components', url: 'components.html#hero', desc: 'High-impact landing hero banners' },
  { title: 'Stat Cards & Metrics', category: 'Components', url: 'components.html#stats', desc: 'KPI counters, trends, and change pills' },
  { title: 'Skeleton Loading', category: 'Components', url: 'components.html#skeleton', desc: 'Shimmer placeholders for text & avatars' },
  { title: 'Toast Notifications', category: 'Components', url: 'components.html#toast', desc: 'Floating action feedback alerts' },
  { title: 'Drawer & Offcanvas', category: 'Components', url: 'components.html#drawer', desc: 'Sliding side panels for menus & filters' },
  { title: 'Divider', category: 'Components', url: 'components.html#divider', desc: 'Horizontal, vertical, and text-in-center dividers' },
  { title: 'Stepper & Status Pill', category: 'Components', url: 'components.html#stepper', desc: 'Multi-step wizard progress and live status pills' },
  { title: 'Icons & Brand Buttons', category: 'Components', url: 'components.html#icons', desc: 'Vector SVGs, SaloneUI, GitHub, Google, Apple' },
  { title: 'SaaS Pricing Cards', category: 'Components', url: 'components.html#pricing', desc: '3-tier pricing tables with popular badge' },
  { title: 'Vertical Timeline', category: 'Components', url: 'components.html#timeline', desc: 'Order tracking, milestones, changelogs' },
  { title: 'Dropzone File Upload', category: 'Components', url: 'components.html#dropzone', desc: 'Drag-and-drop file upload zone' },
  { title: 'Star Rating & Kbd Keys', category: 'Components', url: 'components.html#rating-kbd', desc: '5-star reviews and keycap badges' }
];

let selectedCmdIndex = 0;
let currentCmdMatches = [];

function openCommandPalette() {
  let backdrop = document.getElementById('cmdPaletteBackdrop');
  if (!backdrop) {
    createCommandPaletteDOM();
    backdrop = document.getElementById('cmdPaletteBackdrop');
  }
  backdrop.classList.add('show');
  const input = document.getElementById('cmdPaletteInput');
  if (input) {
    input.value = '';
    filterCommandPalette('');
    input.focus();
  }
  document.body.style.overflow = 'hidden';
}

function closeCommandPalette() {
  const backdrop = document.getElementById('cmdPaletteBackdrop');
  if (backdrop) backdrop.classList.remove('show');
  document.body.style.overflow = '';
}

function filterCommandPalette(q) {
  const rawQ = (q || '').trim().toLowerCase();
  const body = document.getElementById('cmdPaletteBody');
  if (!body) return;

  currentCmdMatches = SALONE_CMD_ITEMS.filter(item => {
    if (!rawQ) return true;
    return item.title.toLowerCase().includes(rawQ) ||
      item.desc.toLowerCase().includes(rawQ) ||
      item.category.toLowerCase().includes(rawQ);
  });

  selectedCmdIndex = 0;
  renderCommandPaletteResults();
}

function renderCommandPaletteResults() {
  const body = document.getElementById('cmdPaletteBody');
  if (!body) return;

  if (currentCmdMatches.length === 0) {
    body.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--salone-text-muted); font-size: 0.9rem;">No matching pages or components found.</div>';
    return;
  }

  // Group by category
  const groups = {};
  currentCmdMatches.forEach((item, idx) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push({ item, idx });
  });

  let html = '';
  for (const cat in groups) {
    html += '<div class="command-group-title">' + cat + '</div>';
    groups[cat].forEach(entry => {
      const isSel = entry.idx === selectedCmdIndex ? ' selected' : '';
      html += `
        <a href="${entry.item.url}" class="command-item${isSel}" onmouseenter="selectedCmdIndex=${entry.idx}; highlightCmdSelection();">
          <div class="command-item-left">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            <div>
              <div style="font-weight: 600;">${entry.item.title}</div>
              <div style="font-size: 0.75rem; color: var(--salone-text-muted);">${entry.item.desc}</div>
            </div>
          </div>
          <span class="badge gray small" style="font-size: 0.65rem;">${entry.item.category}</span>
        </a>
      `;
    });
  }

  body.innerHTML = html;
}

function highlightCmdSelection() {
  const items = document.querySelectorAll('#cmdPaletteBody .command-item');
  items.forEach((el, i) => {
    if (i === selectedCmdIndex) {
      el.classList.add('selected');
      el.scrollIntoView({ block: 'nearest' });
    } else {
      el.classList.remove('selected');
    }
  });
}

function createCommandPaletteDOM() {
  const backdrop = document.createElement('div');
  backdrop.id = 'cmdPaletteBackdrop';
  backdrop.className = 'command-palette-backdrop';
  backdrop.onclick = function(e) {
    if (e.target === backdrop) closeCommandPalette();
  };

  backdrop.innerHTML = `
    <div class="command-palette" onclick="event.stopPropagation()">
      <div class="command-palette-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="cmdPaletteInput" class="command-palette-input" placeholder="Type a component, page, or feature..." autocomplete="off">
        <kbd class="kbd" style="font-size: 0.7rem; cursor: pointer;" onclick="closeCommandPalette()">ESC</kbd>
      </div>
      <div class="command-palette-body" id="cmdPaletteBody"></div>
      <div class="command-palette-footer">
        <span>Tip: Press <kbd class="kbd">ESC</kbd> to exit</span>
        <span>Navigate with <kbd class="kbd">&uarr;</kbd> <kbd class="kbd">&darr;</kbd> and <kbd class="kbd">&crarr;</kbd></span>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const input = backdrop.querySelector('#cmdPaletteInput');
  input.addEventListener('input', function() {
    filterCommandPalette(this.value);
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentCmdMatches.length > 0) {
        selectedCmdIndex = (selectedCmdIndex + 1) % currentCmdMatches.length;
        highlightCmdSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentCmdMatches.length > 0) {
        selectedCmdIndex = (selectedCmdIndex - 1 + currentCmdMatches.length) % currentCmdMatches.length;
        highlightCmdSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentCmdMatches[selectedCmdIndex]) {
        window.location.href = currentCmdMatches[selectedCmdIndex].url;
      }
    } else if (e.key === 'Escape') {
      closeCommandPalette();
    }
  });
}

// Global Keyboard Shortcut: Cmd+K / Ctrl+K
document.addEventListener('keydown', function(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    const backdrop = document.getElementById('cmdPaletteBackdrop');
    if (backdrop && backdrop.classList.contains('show')) {
      closeCommandPalette();
    } else {
      openCommandPalette();
    }
  } else if (e.key === 'Escape') {
    const backdrop = document.getElementById('cmdPaletteBackdrop');
    if (backdrop && backdrop.classList.contains('show')) {
      closeCommandPalette();
    }
  }
});


// Close Notice dialogs when the backdrop is clicked
document.addEventListener('click', (e) => {
  if (e.target.matches('dialog.notice')) {
    const r = e.target.getBoundingClientRect();
    const inside = e.clientX >= r.left && e.clientX <= r.right &&
                   e.clientY >= r.top  && e.clientY <= r.bottom;

    if (!inside) e.target.close();
  }
});

// Normalize root-relative navigation links if running from local file:// protocol
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.protocol === 'file:') {
    document.querySelectorAll('a[href^="/"]').forEach(a => {
      const href = a.getAttribute('href');
      if (href === '/') {
        a.setAttribute('href', 'index.html');
      } else if (href.startsWith('/') && !href.startsWith('//')) {
        const clean = href.replace(/^\/+/, '').split('#');
        const page = clean[0] ? clean[0] + '.html' : 'index.html';
        const hash = clean[1] ? '#' + clean[1] : '';
        a.setAttribute('href', page + hash);
      }
    });
  }
});
