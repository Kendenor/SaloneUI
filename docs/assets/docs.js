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
