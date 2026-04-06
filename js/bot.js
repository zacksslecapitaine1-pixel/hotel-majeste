/* ============================================
   HÔTEL RÉSIDENCE MAJESTÉ — bot.js
   Fullscreen modal bot de réservation
   ============================================ */

'use strict';

const WHATSAPP_NUMBER = '22891003632';

const ROOMS = [
  { id:'clim-premium',  label:'❄️ Climatisée Premium',    short:'Climatisée Premium',    nuit:15000, repos:{'1h':3000,'2h':5000,'3h–4h':8000},  amenities:'Clim + Chauffe-eau + Frigo + Placard + WiFi' },
  { id:'clim-confort',  label:'❄️ Climatisée Confort',    short:'Climatisée Confort',    nuit:12000, repos:{'1h':3000,'2h':5000,'3h–4h':8000},  amenities:'Clim + Frigo ou Placard + WiFi' },
  { id:'clim-eco',      label:'❄️ Climatisée Économique', short:'Climatisée Économique', nuit:10000, repos:{'1h':3000,'2h':5000,'3h–4h':8000},  amenities:'Clim + WiFi' },
  { id:'vent-confort',  label:'💨 Ventilée Confort',      short:'Ventilée Confort',      nuit:10000, repos:{'1h':2500,'2h–3h':5000,'4h':6000}, amenities:'Ventil + Chauffe-eau + Placard + WiFi' },
  { id:'vent-standard', label:'💨 Ventilée Standard',     short:'Ventilée Standard',     nuit:8000,  repos:{'1h':2500,'2h–3h':5000,'4h':6000}, amenities:'Ventil + Placard + WiFi' }
];

let botState = {};

function botReset() {
  botState = {
    prenom:'', telephone:'', chambre:null,
    typeSejour:'', duree:'', nbNuits:'1',
    dateArrivee:'', heureArrivee:'', dateDepart:'',
    nbPersonnes:'', paiement:'', total:0, acompte:0
  };
}

function nowTime() {
  return new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
}
function fmt(n) { return n.toLocaleString('fr-FR') + ' FCFA'; }

function getMessages()      { return document.getElementById('bot-modal-messages'); }
function getChoicesWrap()   { return document.getElementById('bot-modal-choices'); }
function getTextRow()       { return document.getElementById('bot-modal-text-row'); }
function getProgressFill()  { return document.getElementById('bot-modal-progress-fill'); }

function scrollMsgs() {
  const el = getMessages();
  if (el) el.scrollTop = el.scrollHeight;
}

function setProgress(pct) {
  const f = getProgressFill();
  if (f) f.style.width = pct + '%';
}

function addMsg(html, type='bot', delay=0) {
  return new Promise(resolve => {
    setTimeout(() => {
      const msgs = getMessages();
      if (!msgs) { resolve(); return; }
      if (type === 'bot') {
        const typing = document.createElement('div');
        typing.className = 'bm-msg bm-bot';
        typing.innerHTML = `
          <div class="bm-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
          <div class="bm-typing"><span></span><span></span><span></span></div>`;
        msgs.appendChild(typing);
        scrollMsgs();
        setTimeout(() => {
          typing.remove();
          const el = document.createElement('div');
          el.className = 'bm-msg bm-bot';
          el.innerHTML = `
            <div class="bm-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
            <div><div class="bm-bubble bm-bubble-bot">${html}</div><div class="bm-time">${nowTime()}</div></div>`;
          msgs.appendChild(el);
          scrollMsgs();
          resolve();
        }, 800);
      } else {
        const el = document.createElement('div');
        el.className = 'bm-msg bm-user';
        el.innerHTML = `<div><div class="bm-bubble bm-bubble-user">${html}</div><div class="bm-time" style="text-align:right">${nowTime()}</div></div>`;
        msgs.appendChild(el);
        scrollMsgs();
        resolve();
      }
    }, delay);
  });
}

function showChoices(choices) {
  const wrap = getChoicesWrap();
  const trow = getTextRow();
  if (!wrap || !trow) return;
  wrap.innerHTML = '';
  trow.style.display = 'none';
  choices.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'bm-choice-btn';
    btn.innerHTML = c.label;
    btn.onclick = () => {
      wrap.querySelectorAll('.bm-choice-btn').forEach(b => b.disabled = true);
      btn.classList.add('bm-selected');
      c.action(c.value || c.label);
    };
    wrap.appendChild(btn);
  });
}

function showTextInput(placeholder, onSend) {
  const wrap = getChoicesWrap();
  const trow = getTextRow();
  if (!wrap || !trow) return;
  wrap.innerHTML = '';
  trow.style.display = 'flex';
  const inp = document.getElementById('bot-modal-input');
  const btn = document.getElementById('bot-modal-send');
  inp.placeholder = placeholder;
  inp.value = '';
  setTimeout(() => inp.focus(), 100);
  const send = () => {
    const v = inp.value.trim();
    if (!v) return;
    trow.style.display = 'none';
    onSend(v);
  };
  btn.onclick = send;
  inp.onkeydown = e => { if (e.key === 'Enter') send(); };
}

function clearBotInput() {
  const wrap = getChoicesWrap();
  const trow = getTextRow();
  if (wrap) wrap.innerHTML = '';
  if (trow) trow.style.display = 'none';
}

// ── FLOW ──────────────────────────────────

async function botStart() {
  botReset();
  const msgs = getMessages();
  if (msgs) msgs.innerHTML = '';
  setProgress(0);
  await addMsg('👋 Bienvenue à l\'<strong>Hôtel Résidence Majesté</strong> !<br>Je suis votre assistant. Je vais vous guider pour réserver votre chambre en quelques étapes.');
  await addMsg('Quel est votre <strong>prénom</strong> ?', 'bot', 150);
  showTextInput('Votre prénom…', v => botStep_prenom(v));
}

async function botStep_prenom(v) {
  botState.prenom = v;
  await addMsg(v, 'user');
  setProgress(12);
  await addMsg(`Enchanté, <strong>${v}</strong> ! 😊`);
  await addMsg('Quel est votre <strong>numéro de téléphone</strong> ?', 'bot', 150);
  showTextInput('+228 XX XX XX XX', v => botStep_tel(v));
}

async function botStep_tel(v) {
  botState.telephone = v;
  await addMsg(v, 'user');
  setProgress(24);
  await addMsg('Choisissez votre <strong>type de chambre</strong> :');
  showChoices(ROOMS.map(r => ({ label: r.label, value: r.id, action: v => botStep_chambre(v) })));
}

async function botStep_chambre(v) {
  botState.chambre = ROOMS.find(r => r.id === v);
  const r = botState.chambre;
  await addMsg(r.label, 'user');
  setProgress(36);
  const ro = Object.entries(r.repos).map(([k,p]) => `${k}→<strong>${fmt(p)}</strong>`).join(' · ');
  await addMsg(`✅ <strong>${r.short}</strong><br>Nuit : <strong>${fmt(r.nuit)}</strong> · Repos : ${ro}`);
  await addMsg('Vous réservez à la <strong>nuitée</strong> ou au <strong>repos</strong> ?', 'bot', 150);
  showChoices([
    { label:'🌙 Nuitée complète', value:'nuit',  action: v => botStep_type(v) },
    { label:'⏱ Repos',           value:'repos', action: v => botStep_type(v) }
  ]);
}

async function botStep_type(v) {
  botState.typeSejour = v;
  await addMsg(v === 'nuit' ? '🌙 Nuitée complète' : '⏱ Repos', 'user');
  setProgress(48);
  if (v === 'nuit') {
    await addMsg('Combien de <strong>nuits</strong> ?');
    showChoices(['1','2','3','4','5+'].map(n => ({ label: n + ' nuit' + (n==='1'?'':'s'), value: n, action: v => botStep_nbNuits(v) })));
  } else {
    const r = botState.chambre;
    await addMsg('Choisissez la <strong>durée de repos</strong> :');
    showChoices(Object.entries(r.repos).map(([k,p]) => ({
      label: `${k} — ${fmt(p)}`, value: k, action: v => botStep_dureeRepos(v)
    })));
  }
}

async function botStep_nbNuits(v) {
  botState.nbNuits = v;
  await addMsg(`${v} nuit${v !== '1' ? 's' : ''}`, 'user');
  await addMsg('Quelle est votre <strong>date d\'arrivée</strong> ?', 'bot', 150);
  showTextInput('Ex : 10/04/2026', v => botStep_dateArrivee(v));
}

async function botStep_dureeRepos(v) {
  botState.duree = v;
  await addMsg(v, 'user');
  await addMsg('Quelle <strong>date</strong> pour votre repos ?', 'bot', 150);
  showTextInput('Ex : 10/04/2026', v => botStep_dateArrivee(v));
}

async function botStep_dateArrivee(v) {
  botState.dateArrivee = v;
  await addMsg(v, 'user');
  await addMsg('À quelle <strong>heure</strong> arriverez-vous ?');
  showChoices(['06h00','08h00','10h00','12h00','14h00','16h00','18h00','20h00','22h00+'].map(h => ({
    label: h, value: h, action: v => botStep_heure(v)
  })));
}

async function botStep_heure(v) {
  botState.heureArrivee = v;
  await addMsg(v, 'user');
  setProgress(62);
  if (botState.typeSejour === 'nuit') {
    await addMsg('Quelle est votre <strong>date de départ</strong> ?');
    showTextInput('Ex : 12/04/2026', v => botStep_dateDepart(v));
  } else {
    botStep_goPersonnes();
  }
}

async function botStep_dateDepart(v) {
  botState.dateDepart = v;
  await addMsg(v, 'user');
  botStep_goPersonnes();
}

async function botStep_goPersonnes() {
  setProgress(74);
  await addMsg('Combien de <strong>personnes</strong> ?<br><small style="color:#999">(Lit 3 places · Enfants &lt;10 ans gratuits)</small>');
  showChoices([
    { label:'1 personne',  value:'1 personne',  action: v => botStep_personnes(v) },
    { label:'2 personnes', value:'2 personnes', action: v => botStep_personnes(v) },
    { label:'3 personnes', value:'3 personnes', action: v => botStep_personnes(v) },
    { label:'3 + enfants', value:'3 + enfants', action: v => botStep_personnes(v) }
  ]);
}

async function botStep_personnes(v) {
  botState.nbPersonnes = v;
  await addMsg(v, 'user');
  setProgress(85);
  await addMsg('Mode de <strong>paiement</strong> ?');
  showChoices([
    { label:'💵 Espèces à l\'arrivée',             value:'Espèces à l\'arrivée',  action: v => botStep_paiement(v) },
    { label:'📲 Transfert mobile (acompte 50%)', value:'Transfert mobile',       action: v => botStep_paiement(v) }
  ]);
}

async function botStep_paiement(v) {
  botState.paiement = v;
  await addMsg(v, 'user');
  setProgress(95);
  // Calculate
  const r = botState.chambre;
  if (botState.typeSejour === 'nuit') {
    const n = botState.nbNuits === '5+' ? 5 : parseInt(botState.nbNuits);
    botState.total = r.nuit * n;
  } else {
    botState.total = r.repos[botState.duree] || 0;
  }
  botState.acompte = Math.round(botState.total * 0.5);
  await addMsg('✅ Voici le <strong>résumé de votre réservation</strong> :');
  await botShowSummary();
}

async function botShowSummary() {
  const r  = botState.chambre;
  const msgs = getMessages();
  const sejourStr = botState.typeSejour === 'nuit'
    ? `Nuitée · ${botState.nbNuits} nuit${botState.nbNuits !== '1' ? 's' : ''}`
    : `Repos · ${botState.duree}`;
  const departStr = botState.typeSejour === 'nuit' && botState.dateDepart ? botState.dateDepart : '—';

  const card = document.createElement('div');
  card.className = 'bm-msg bm-bot';
  card.style.animation = 'bmIn 0.4s ease';
  card.innerHTML = `
    <div class="bm-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
    <div class="bm-summary-card">
      <div class="bm-summary-title">🏨 Hôtel Résidence Majesté</div>
      <div class="bm-summary-row"><span>👤 Nom</span><strong>${botState.prenom}</strong></div>
      <div class="bm-summary-row"><span>📞 Téléphone</span><strong>${botState.telephone}</strong></div>
      <div class="bm-summary-row"><span>🛏️ Chambre</span><strong>${r.short}</strong></div>
      <div class="bm-summary-row"><span>🎯 Séjour</span><strong>${sejourStr}</strong></div>
      <div class="bm-summary-row"><span>📅 Arrivée</span><strong>${botState.dateArrivee} à ${botState.heureArrivee}</strong></div>
      <div class="bm-summary-row"><span>📅 Départ</span><strong>${departStr}</strong></div>
      <div class="bm-summary-row"><span>👥 Personnes</span><strong>${botState.nbPersonnes}</strong></div>
      <div class="bm-summary-row"><span>💳 Paiement</span><strong>${botState.paiement}</strong></div>
      <div class="bm-summary-total">
        <div class="bm-total-row"><span>Total estimé</span><span class="bm-total-price">${fmt(botState.total)}</span></div>
        <div class="bm-total-row"><span>Acompte (50%)</span><span class="bm-acompte-price">${fmt(botState.acompte)}</span></div>
      </div>
    </div>`;
  msgs.appendChild(card);
  scrollMsgs();

  await new Promise(r => setTimeout(r, 400));
  await addMsg('Tout est correct ? Confirmez sur <strong>WhatsApp</strong> et notre équipe vous répond rapidement ! ✅');

  clearBotInput();
  const inputArea = document.getElementById('bot-modal-input-area');
  if (!inputArea) return;

  const div = document.createElement('div');
  div.innerHTML = `
    <button class="bm-whatsapp-btn" onclick="botConfirmer()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
      Confirmer sur WhatsApp
    </button>
    <button class="bm-restart-btn" onclick="botStart()">🔄 Recommencer</button>`;
  inputArea.appendChild(div);
  setProgress(100);
}

function botConfirmer() {
  const r = botState.chambre;
  const sejourStr = botState.typeSejour === 'nuit'
    ? `Nuitée · ${botState.nbNuits} nuit${botState.nbNuits !== '1' ? 's' : ''}`
    : `Repos · ${botState.duree}`;
  const departStr = botState.typeSejour === 'nuit' && botState.dateDepart ? botState.dateDepart : 'Non précisée';

  const msg =
`🏨 *NOUVELLE RÉSERVATION — Hôtel Résidence Majesté*
──────────────────────────────
👤 *Nom :* ${botState.prenom}
📞 *Téléphone :* ${botState.telephone}
──────────────────────────────
🛏️ *Chambre :* ${r.short}
⚙️ *Équipements :* ${r.amenities}
──────────────────────────────
🎯 *Type de séjour :* ${sejourStr}
📅 *Arrivée :* ${botState.dateArrivee} à ${botState.heureArrivee}
📅 *Départ :* ${departStr}
👥 *Personnes :* ${botState.nbPersonnes}
──────────────────────────────
💳 *Paiement :* ${botState.paiement}
──────────────────────────────
💰 *TOTAL ESTIMÉ :* ${fmt(botState.total)}
💵 *Acompte (50%) :* ${fmt(botState.acompte)}
──────────────────────────────
✅ Merci de confirmer cette réservation.`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  addMsg(`🎉 Votre réservation a été envoyée ! Nous vous confirmons très bientôt, <strong>${botState.prenom}</strong>.<br>À bientôt à l'<strong>Hôtel Résidence Majesté</strong> ! 🏨`);
}

// ── MODAL OPEN / CLOSE ─────────────────────
function openBotModal() {
  const overlay = document.getElementById('bot-modal-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Start bot fresh each time
  botStart();
}

function closeBotModal() {
  const overlay = document.getElementById('bot-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('bot-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeBotModal();
    });
  }
  // ESC key closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeBotModal();
  });
});
