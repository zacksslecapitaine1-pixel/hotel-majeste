/* ============================================
   HÔTEL RÉSIDENCE MAJESTÉ — main.js
   Navigation · i18n FR/EN · Scroll · Loader
   ============================================ */

'use strict';

// ── I18N TRANSLATIONS ──────────────────────
const translations = {
  fr: {
    nav_home:        'Accueil',
    nav_rooms:       'Chambres',
    nav_restaurant:  'Restaurant & Bar',
    nav_events:      'Salle & Événements',
    nav_booking:     'Réservation',
    nav_contact:     'Contact',
    nav_reserve_btn: 'Réserver',

    hero_tag:        'Ouvert 24h/24 · 7j/7',
    hero_title1:     'Séjournez autrement.',
    hero_title2:     'Vivez Majesté.',
    hero_subtitle:   'Confort, chaleur et élégance — au cœur d\'Adidogomé, Lomé',
    hero_btn_book:   'Réserver une chambre',
    hero_btn_tour:   'Découvrir l\'hôtel',
    hero_stat_rooms: 'Chambres',
    hero_stat_open:  'Ouverture',
    hero_stat_cap:   'Places salle',
    hero_stat_park:  'Parking',

    quick_checkin:   'Check-in / Check-out',
    quick_checkin_v: '24h/24 · 7j/7',
    quick_phone:     'Téléphone',
    quick_loc:       'Adresse',
    quick_loc_v:     'Adidogomé Ségbé Akato',
    quick_wifi:      'WiFi Gratuit',
    quick_wifi_v:    'Dans toutes les chambres',

    feat_title:      'Tout ce dont vous avez besoin',
    feat_desc:       'Un établissement complet pour votre confort et vos événements',
    feat1_title:     'Chambres Climatisées',
    feat1_desc:      'Lit 3 places, WiFi, mini-frigo et salle de bain privée dans nos suites premium',
    feat2_title:     'Restaurant & Bar',
    feat2_desc:      'Cuisine locale et internationale · Bières à partir de 500 FCFA · Repas 1 000–4 500 FCFA',
    feat3_title:     'Salle d\'Événements',
    feat3_desc:      '80 à 100 places · Réunions, conférences, réceptions · Espace extérieur disponible',
    feat4_title:     'Parking Sécurisé',
    feat4_desc:      'Garage couvert pour vos véhicules · Espace vert aménagé autour de l\'établissement',
    feat5_title:     'Chambres Ventilées',
    feat5_desc:      'Fraîcheur naturelle toute la nuit · Confort accessible à partir de 8 000 FCFA/nuit',
    feat6_title:     'WiFi Inclus',
    feat6_desc:      'Connexion Internet haut débit disponible dans toutes les chambres et espaces communs',

    rooms_title:     'Nos Chambres',
    rooms_desc:      'Choisissez parmi 5 types de chambres adaptées à tous les budgets',
    rooms_view_all:  'Voir toutes les chambres',
    room_clim_prem:  'Climatisée Premium',
    room_clim_conf:  'Climatisée Confort',
    room_clim_eco:   'Climatisée Économique',
    room_vent_conf:  'Ventilée Confort',
    room_vent_std:   'Ventilée Standard',
    rooms_btn:       'Voir le détail',
    rooms_nuit:      'nuit',
    rooms_repos:     'Repos dès',

    gallery_title:   'Notre Établissement',
    gallery_desc:    'Découvrez nos espaces en images',

    promo_title:     'Célébrez vos événements chez Majesté !',
    promo_desc:      'Salle climatisée 80–100 places · Espace extérieur aéré · Sur devis personnalisé',
    promo_btn1:      'Demander un devis',
    promo_btn2:      'Appeler maintenant',

    services_title:  'Services & Commodités',
    services_desc:   'Tout ce qui rend votre séjour exceptionnel',

    footer_about:    'Votre havre de confort et d\'élégance à Lomé. Chambres, restaurant, bar et salle d\'événements — tout en un.',
    footer_nav:      'Navigation',
    footer_services: 'Services',
    footer_contact:  'Contact',
    footer_srv1:     'Hébergement',
    footer_srv2:     'Restaurant & Bar',
    footer_srv3:     'Salles d\'événements',
    footer_srv4:     'Parking sécurisé',
    footer_srv5:     'WiFi gratuit',
    footer_copy:     '© 2026 Hôtel Résidence Majesté. Fait avec',
    footer_by:       'par Dev.zak',

    whatsapp_tip:    'Discuter sur WhatsApp',
    back_top:        '↑',
  },
  en: {
    nav_home:        'Home',
    nav_rooms:       'Rooms',
    nav_restaurant:  'Restaurant & Bar',
    nav_events:      'Events Hall',
    nav_booking:     'Book',
    nav_contact:     'Contact',
    nav_reserve_btn: 'Book Now',

    hero_tag:        'Open 24/7',
    hero_title1:     'Stay differently.',
    hero_title2:     'Live Majesté.',
    hero_subtitle:   'Comfort, warmth and elegance — in the heart of Adidogomé, Lomé',
    hero_btn_book:   'Book a room',
    hero_btn_tour:   'Explore the hotel',
    hero_stat_rooms: 'Rooms',
    hero_stat_open:  'Opening',
    hero_stat_cap:   'Hall seats',
    hero_stat_park:  'Parking',

    quick_checkin:   'Check-in / Check-out',
    quick_checkin_v: '24h / 7 days a week',
    quick_phone:     'Phone',
    quick_loc:       'Address',
    quick_loc_v:     'Adidogomé Ségbé Akato',
    quick_wifi:      'Free WiFi',
    quick_wifi_v:    'In all rooms',

    feat_title:      'Everything you need',
    feat_desc:       'A complete establishment for your comfort and events',
    feat1_title:     'Air-conditioned Rooms',
    feat1_desc:      'Triple bed, WiFi, mini-fridge and private bathroom in our premium suites',
    feat2_title:     'Restaurant & Bar',
    feat2_desc:      'Local and international cuisine · Drinks from 500 FCFA · Meals 1,000–4,500 FCFA',
    feat3_title:     'Events Hall',
    feat3_desc:      '80–100 seats · Meetings, conferences, receptions · Outdoor space available',
    feat4_title:     'Secure Parking',
    feat4_desc:      'Covered garage for your vehicles · Green landscaped area around the property',
    feat5_title:     'Fan-cooled Rooms',
    feat5_desc:      'Natural coolness all night · Comfort starting from 8,000 FCFA/night',
    feat6_title:     'WiFi Included',
    feat6_desc:      'High-speed Internet available in all rooms and common areas',

    rooms_title:     'Our Rooms',
    rooms_desc:      'Choose from 5 room types to suit every budget',
    rooms_view_all:  'View all rooms',
    room_clim_prem:  'Premium A/C Room',
    room_clim_conf:  'Comfort A/C Room',
    room_clim_eco:   'Economy A/C Room',
    room_vent_conf:  'Comfort Fan Room',
    room_vent_std:   'Standard Fan Room',
    rooms_btn:       'View details',
    rooms_nuit:      'night',
    rooms_repos:     'Short stay from',

    gallery_title:   'Our Property',
    gallery_desc:    'Explore our spaces in pictures',

    promo_title:     'Celebrate your events at Majesté!',
    promo_desc:      'Air-conditioned hall 80–100 seats · Outdoor space · Custom quote available',
    promo_btn1:      'Request a quote',
    promo_btn2:      'Call now',

    services_title:  'Services & Amenities',
    services_desc:   'Everything that makes your stay exceptional',

    footer_about:    'Your haven of comfort and elegance in Lomé. Rooms, restaurant, bar and event hall — all in one.',
    footer_nav:      'Navigation',
    footer_services: 'Services',
    footer_contact:  'Contact',
    footer_srv1:     'Accommodation',
    footer_srv2:     'Restaurant & Bar',
    footer_srv3:     'Event halls',
    footer_srv4:     'Secure parking',
    footer_srv5:     'Free WiFi',
    footer_copy:     '© 2026 Hôtel Résidence Majesté. Made with',
    footer_by:       'by Dev.zak',

    whatsapp_tip:    'Chat on WhatsApp',
    back_top:        '↑',
  }
};

// ── STATE ──────────────────────────────────
let currentLang = localStorage.getItem('majeste-lang') || 'fr';

// ── APPLY TRANSLATIONS ─────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('majeste-lang', lang);
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    if (t[key] !== undefined) el.href = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.documentElement.lang = lang;
}

// ── NAVIGATION ─────────────────────────────
function initNavigation() {
  const navbar   = document.querySelector('.navbar');
  const toggle   = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.nav-mobile');

  // Scroll state
  window.addEventListener('scroll', () => {
    navbar && navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateScrollProgress();
    updateBackToTop();
  }, { passive: true });

  // Hamburger
  toggle && toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileMenu && mobileMenu.classList.toggle('open');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Active link
  setActiveNavLink();
}

function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
}

// ── SCROLL PROGRESS ────────────────────────
function updateScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
}

// ── BACK TO TOP ────────────────────────────
function updateBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  btn.classList.toggle('visible', window.scrollY > 400);
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  btn && btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── FADE-IN OBSERVER ──────────────────────
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ── PAGE LOADER ────────────────────────────
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 800);
  });
}

// ── LANG SWITCHER ──────────────────────────
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

// ── TOAST ─────────────────────────────────
function showToast(icon, msg, duration = 4000) {
  const t = document.querySelector('.toast');
  if (!t) return;
  t.querySelector('.toast-icon').textContent = icon;
  t.querySelector('.toast-msg').textContent  = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
  t.querySelector('.toast-close').onclick = () => t.classList.remove('show');
}

// ── INIT ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initLangSwitcher();
  initScrollObserver();
  initBackToTop();
  applyLang(currentLang);

  // Show welcome toast after 2s
  setTimeout(() => {
    showToast('🏨', currentLang === 'fr'
      ? 'Bienvenue à l\'Hôtel Résidence Majesté !'
      : 'Welcome to Hôtel Résidence Majesté!');
  }, 2200);
});
