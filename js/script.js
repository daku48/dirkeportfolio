/* ==========================================================
   Personal Portfolio - script.js (vanilla JavaScript)
   ========================================================== */

(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- 1. Theme toggle ---------- */
  var themeToggle = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    // The label names the action the button performs.
    themeToggle.setAttribute('aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function getInitialTheme() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  applyTheme(getInitialTheme());

  themeToggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });

  /* ---------- 2. Mobile menu ---------- */
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  function setMenu(open) {
    navMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuToggle.addEventListener('click', function () {
    setMenu(!navMenu.classList.contains('open'));
  });

  // Close the menu after choosing a link
  navMenu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  // Close with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Reset when returning to desktop width
  window.matchMedia('(min-width: 821px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  /* ---------- 3. Highlight the current section in the nav ---------- */
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('main section[id]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- 4. Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 5. Back-to-top button ---------- */
  var backToTop = document.getElementById('back-to-top');

  function updateBackToTop() {
    backToTop.hidden = window.scrollY < 500;
  }
  window.addEventListener('scroll', updateBackToTop, { passive: true });
  updateBackToTop();

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
