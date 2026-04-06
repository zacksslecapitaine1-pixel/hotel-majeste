/* ============================================
   HÔTEL RÉSIDENCE MAJESTÉ — loader.js
   Smooth page transitions
   ============================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Intercept internal links for smooth transition
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') ||
        href.startsWith('tel:') || href.startsWith('mailto:') ||
        href.startsWith('https://wa.me')) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      const overlay = document.querySelector('.page-transition');
      if (overlay) {
        overlay.classList.add('entering');
        setTimeout(() => { window.location.href = href; }, 380);
      } else {
        window.location.href = href;
      }
    });
  });

  // Fade in on page load
  const overlay = document.querySelector('.page-transition');
  if (overlay) {
    overlay.classList.add('leaving');
    setTimeout(() => overlay.classList.remove('leaving'), 400);
  }
});
