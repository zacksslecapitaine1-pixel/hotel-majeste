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

/* ═══════════════════════════════════════════
   MODAL BOT DE RÉSERVATION
   ═══════════════════════════════════════════ */

const WHATSAPP_NUMBER_MODAL = '22891003632';

const ROOMS_MODAL = [
  { id:'clim-premium',  label:'❄️ Climatisée Premium',    short:'Climatisée Premium',    nuit:15000, repos:{'1h':3000,'2h':5000,'3h-4h':8000},  amen:'Clim + Chauffe-eau + Frigo + Placard + WiFi' },
  { id:'clim-confort',  label:'❄️ Climatisée Confort',    short:'Climatisée Confort',    nuit:12000, repos:{'1h':3000,'2h':5000,'3h-4h':8000},  amen:'Clim + Frigo ou Placard + WiFi' },
  { id:'clim-eco',      label:'❄️ Climatisée Économique', short:'Climatisée Économique', nuit:10000, repos:{'1h':3000,'2h':5000,'3h-4h':8000},  amen:'Clim + WiFi' },
  { id:'vent-confort',  label:'💨 Ventilée Confort',      short:'Ventilée Confort',      nuit:10000, repos:{'1h':2500,'2h-3h':5000,'4h':6000},  amen:'Ventil + Chauffe-eau + Placard + WiFi' },
  { id:'vent-standard', label:'💨 Ventilée Standard',     short:'Ventilée Standard',     nuit:8000,  repos:{'1h':2500,'2h-3h':5000,'4h':6000},  amen:'Ventil + Placard + WiFi' }
];

let MS = {}; // modal state

function fmtP(n){ return n.toLocaleString('fr-FR') + ' FCFA'; }
function nowT(){ return new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}); }

function initModalBot() {
  // Inject modal HTML
  const overlay = document.createElement('div');
  overlay.className = 'bot-modal-overlay';
  overlay.id = 'bot-modal-overlay';
  overlay.innerHTML = `
    <div class="bot-modal" id="bot-modal">
      <div class="bot-modal-handle"></div>
      <div class="bot-modal-header">
        <div class="bot-modal-avatar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <div class="bot-modal-online"></div>
        </div>
        <div class="bot-modal-header-text">
          <strong>Assistant Majesté</strong>
          <span>En ligne — répond instantanément</span>
        </div>
        <button class="bot-modal-close" id="bot-modal-close" aria-label="Fermer">✕</button>
      </div>
      <div class="bot-modal-progress"><div class="bot-modal-progress-fill" id="bm-prog"></div></div>
      <div class="bot-modal-messages" id="bm-msgs"></div>
      <div class="bot-modal-input-area" id="bm-input-area">
        <div class="bm-choices" id="bm-choices"></div>
        <div class="bm-text-row" id="bm-text-row" style="display:none">
          <input class="bm-input" id="bm-text" placeholder="Écrivez ici…"/>
          <button class="bm-send" id="bm-send">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  // Inject floating button (not on reservation page)
  if (!document.body.classList.contains('is-reservation-page')) {
    const fbtn = document.createElement('button');
    fbtn.className = 'float-reserve-btn';
    fbtn.id = 'float-reserve-btn';
    fbtn.innerHTML = `<span class="frb-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span> Réserver`;
    fbtn.onclick = openModalBot;
    document.body.appendChild(fbtn);
  }

  // Close handlers
  document.getElementById('bot-modal-close').onclick = closeModalBot;
  overlay.addEventListener('click', e => { if(e.target === overlay) closeModalBot(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape') closeModalBot(); });

  // Also wire any existing "Réserver" nav buttons to open modal
  document.querySelectorAll('a.nav-reserve, a.nav-reserve-mobile').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      openModalBot();
    });
  });
}

function openModalBot() {
  document.getElementById('bot-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Start bot if fresh
  if (document.getElementById('bm-msgs').children.length === 0) {
    startModalBot();
  }
}

function closeModalBot() {
  document.getElementById('bot-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function bmSetProg(pct){ document.getElementById('bm-prog').style.width = pct+'%'; }
function bmScrollDown(){ const el=document.getElementById('bm-msgs'); el.scrollTop=el.scrollHeight; }

function bmMsg(html, type='bot', delay=0){
  return new Promise(resolve => {
    setTimeout(() => {
      const msgs = document.getElementById('bm-msgs');
      if(type==='bot'){
        const typing = document.createElement('div');
        typing.className='bm-typing';
        typing.innerHTML=`<div class="bm-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div><div class="bm-typing-dots"><span></span><span></span><span></span></div>`;
        msgs.appendChild(typing); bmScrollDown();
        setTimeout(()=>{
          typing.remove();
          const el=document.createElement('div');
          el.className='bm-msg bot';
          el.innerHTML=`<div class="bm-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div><div><div class="bm-bubble">${html}</div><div class="bm-time">${nowT()}</div></div>`;
          msgs.appendChild(el); bmScrollDown(); resolve();
        }, 800);
      } else {
        const el=document.createElement('div');
        el.className='bm-msg user';
        el.innerHTML=`<div><div class="bm-bubble">${html}</div><div class="bm-time">${nowT()}</div></div>`;
        msgs.appendChild(el); bmScrollDown(); resolve();
      }
    }, delay);
  });
}

function bmChoices(list){
  const c=document.getElementById('bm-choices'); const t=document.getElementById('bm-text-row');
  c.innerHTML=''; t.style.display='none';
  list.forEach(item=>{
    const btn=document.createElement('button'); btn.className='bm-choice'; btn.innerHTML=item.label;
    btn.onclick=()=>{ document.querySelectorAll('.bm-choice').forEach(b=>b.disabled=true); btn.classList.add('sel'); item.action(item.value||item.label); };
    c.appendChild(btn);
  });
}

function bmTextInput(ph, cb){
  const c=document.getElementById('bm-choices'); const t=document.getElementById('bm-text-row');
  c.innerHTML=''; t.style.display='flex';
  const inp=document.getElementById('bm-text'); const btn=document.getElementById('bm-send');
  inp.placeholder=ph; inp.value=''; inp.focus();
  const send=()=>{ const v=inp.value.trim(); if(!v)return; t.style.display='none'; cb(v); };
  btn.onclick=send; inp.onkeydown=e=>{ if(e.key==='Enter') send(); };
}

function bmClearInput(){ document.getElementById('bm-choices').innerHTML=''; document.getElementById('bm-text-row').style.display='none'; }

// ─── BOT FLOW ───
async function startModalBot(){
  MS={step:0,prenom:'',telephone:'',chambre:null,typeSejour:'',duree:'',nbNuits:1,dateArrivee:'',heureArrivee:'',dateDepart:'',nbPersonnes:'',paiement:'',total:0,acompte:0};
  document.getElementById('bm-msgs').innerHTML='';
  bmSetProg(0);
  await bmMsg('👋 Bienvenue à l\'<strong>Hôtel Résidence Majesté</strong> !<br>Je suis votre assistant. Je vais vous guider pour réserver votre chambre.');
  await bmMsg('Quel est votre <strong>prénom</strong> ?','bot',200);
  bmTextInput('Votre prénom…', async v=>{ MS.prenom=v; await bmMsg(v,'user'); bmSetProg(12); await bmMsg(`Enchanté, <strong>${v}</strong> ! 😊`); await bmMsg('Votre <strong>numéro de téléphone</strong> (WhatsApp) ?','bot',200); bmTextInput('+228 XX XX XX XX', bm_tel); });
}

async function bm_tel(v){ MS.telephone=v; await bmMsg(v,'user'); bmSetProg(22);
  await bmMsg('Choisissez votre <strong>type de chambre</strong> :');
  bmChoices(ROOMS_MODAL.map(r=>({label:r.label,value:r.id,action:bm_chambre}))); }

async function bm_chambre(v){ MS.chambre=ROOMS_MODAL.find(r=>r.id===v);
  await bmMsg(MS.chambre.label,'user'); bmSetProg(35);
  const r=MS.chambre;
  const ro=Object.entries(r.repos).map(([k,val])=>`${k}→${fmtP(val)}`).join(' · ');
  await bmMsg(`✅ <strong>${r.short}</strong> — Nuit : <strong>${fmtP(r.nuit)}</strong> · Repos : ${ro}`);
  await bmMsg('🌙 <strong>Nuitée</strong> ou ⏱ <strong>Repos</strong> ?','bot',200);
  bmChoices([{label:'🌙 Nuitée complète',value:'nuit',action:bm_type},{label:'⏱ Repos (courte durée)',value:'repos',action:bm_type}]);
}

async function bm_type(v){ MS.typeSejour=v; await bmMsg(v==='nuit'?'🌙 Nuitée complète':'⏱ Repos','user'); bmSetProg(48);
  if(v==='nuit'){
    await bmMsg('Combien de <strong>nuits</strong> ?');
    bmChoices(['1','2','3','4','5+'].map(n=>({label:n+' nuit'+(n!=='1'?'s':''),value:n,action:bm_nbnuits})));
  } else {
    const ro=Object.entries(MS.chambre.repos).map(([k,val])=>({label:`${k} — ${fmtP(val)}`,value:k,action:bm_dureeRepos}));
    await bmMsg('Choisissez la <strong>durée</strong> :'); bmChoices(ro);
  }
}

async function bm_nbnuits(v){ MS.nbNuits=v; await bmMsg(`${v} nuit${v!=='1'?'s':''}`, 'user');
  await bmMsg('Date d\'<strong>arrivée</strong> ?','bot',200); bmTextInput('Ex : 10/04/2026', bm_dateArrivee); }

async function bm_dureeRepos(v){ MS.duree=v; await bmMsg(v,'user');
  await bmMsg('Date du <strong>repos</strong> ?','bot',200); bmTextInput('Ex : 10/04/2026', bm_dateArrivee); }

async function bm_dateArrivee(v){ MS.dateArrivee=v; await bmMsg(v,'user'); bmSetProg(62);
  await bmMsg('Heure d\'<strong>arrivée</strong> ?');
  bmChoices(['08h00','10h00','12h00','14h00','16h00','18h00','20h00','22h00+'].map(h=>({label:h,value:h,action:bm_heure}))); }

async function bm_heure(v){ MS.heureArrivee=v; await bmMsg(v,'user');
  if(MS.typeSejour==='nuit'){
    await bmMsg('Date de <strong>départ</strong> ?','bot',200); bmTextInput('Ex : 12/04/2026', async v2=>{ MS.dateDepart=v2; await bmMsg(v2,'user'); bm_goNbP(); });
  } else { bm_goNbP(); }
}

async function bm_goNbP(){ bmSetProg(75);
  await bmMsg('Nombre de <strong>personnes</strong> ?<br><small style="opacity:.6">(Lit 3 places — enfants -10 ans gratuits)</small>');
  bmChoices(['1 personne','2 personnes','3 personnes','3 + enfants'].map(n=>({label:n,value:n,action:bm_nbp}))); }

async function bm_nbp(v){ MS.nbPersonnes=v; await bmMsg(v,'user'); bmSetProg(85);
  await bmMsg('Mode de <strong>paiement</strong> ?');
  bmChoices([{label:'💵 Espèces à l\'arrivée',value:'Espèces à l\'arrivée',action:bm_paiement},{label:'📲 Transfert mobile (acompte 50%)',value:'Transfert mobile',action:bm_paiement}]); }

async function bm_paiement(v){ MS.paiement=v; await bmMsg(v,'user'); bmSetProg(95);
  const r=MS.chambre;
  if(MS.typeSejour==='nuit'){ const n=MS.nbNuits==='5+'?5:parseInt(MS.nbNuits); MS.total=r.nuit*n; }
  else { MS.total=r.repos[MS.duree]||0; }
  MS.acompte=Math.round(MS.total*0.5);
  await bmMsg('✅ Voici le <strong>résumé</strong> de votre réservation :');
  await bm_showSummary();
}

async function bm_showSummary(){
  const r=MS.chambre;
  const sejStr=MS.typeSejour==='nuit'?`Nuitée · ${MS.nbNuits} nuit${MS.nbNuits!=='1'?'s':''}`:`Repos · ${MS.duree}`;
  const depStr=MS.typeSejour==='nuit'&&MS.dateDepart?MS.dateDepart:'—';
  const msgs=document.getElementById('bm-msgs');
  const el=document.createElement('div'); el.className='bm-msg bot';
  el.innerHTML=`<div class="bm-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
    <div class="bm-summary">
      <h4>🏨 Réservation — Hôtel Majesté</h4>
      <div class="bm-s-row"><span class="bm-s-lbl">👤 Nom</span><span class="bm-s-val">${MS.prenom}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">📞 Tél</span><span class="bm-s-val">${MS.telephone}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">🛏️ Chambre</span><span class="bm-s-val">${r.short}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">🎯 Séjour</span><span class="bm-s-val">${sejStr}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">📅 Arrivée</span><span class="bm-s-val">${MS.dateArrivee} à ${MS.heureArrivee}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">📅 Départ</span><span class="bm-s-val">${depStr}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">👥 Personnes</span><span class="bm-s-val">${MS.nbPersonnes}</span></div>
      <div class="bm-s-row"><span class="bm-s-lbl">💳 Paiement</span><span class="bm-s-val">${MS.paiement}</span></div>
      <div class="bm-total">
        <div class="tr"><span>Total estimé</span><span class="tt">${fmtP(MS.total)}</span></div>
        <div class="tr"><span>Acompte 50%</span><span class="ta">${fmtP(MS.acompte)}</span></div>
      </div>
    </div>`;
  msgs.appendChild(el); bmScrollDown();
  await new Promise(res=>setTimeout(res,400));
  await bmMsg('Confirmez votre réservation sur <strong>WhatsApp</strong> en un clic 👇');
  bmClearInput();
  const ia=document.getElementById('bm-input-area');
  const div=document.createElement('div');
  div.innerHTML=`<button class="bm-wa-btn" onclick="bm_confirmer()">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
    Confirmer sur WhatsApp
  </button>
  <button class="bm-restart" onclick="startModalBot()">🔄 Recommencer</button>`;
  ia.appendChild(div);
  bmSetProg(100);
}

function bm_confirmer(){
  const r=MS.chambre;
  const sejStr=MS.typeSejour==='nuit'?`Nuitée · ${MS.nbNuits} nuit${MS.nbNuits!=='1'?'s':''}`:`Repos · ${MS.duree}`;
  const depStr=MS.typeSejour==='nuit'&&MS.dateDepart?MS.dateDepart:'Non précisée';
  const msg=`🏨 *NOUVELLE RÉSERVATION — Hôtel Résidence Majesté*\n──────────────────────────────\n👤 *Nom :* ${MS.prenom}\n📞 *Téléphone :* ${MS.telephone}\n──────────────────────────────\n🛏️ *Chambre :* ${r.short}\n⚙️ *Équipements :* ${r.amen}\n──────────────────────────────\n🎯 *Séjour :* ${sejStr}\n📅 *Arrivée :* ${MS.dateArrivee} à ${MS.heureArrivee}\n📅 *Départ :* ${depStr}\n👥 *Personnes :* ${MS.nbPersonnes}\n──────────────────────────────\n💳 *Paiement :* ${MS.paiement}\n──────────────────────────────\n💰 *TOTAL ESTIMÉ :* ${fmtP(MS.total)}\n💵 *Acompte (50%) :* ${fmtP(MS.acompte)}\n──────────────────────────────\n✅ Merci de confirmer cette réservation.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER_MODAL}?text=${encodeURIComponent(msg)}`,'_blank');
  bmMsg(`🎉 Réservation envoyée ! À très bientôt, <strong>${MS.prenom}</strong> ! 🏨`);
}

// Init modal on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initModalBot);
