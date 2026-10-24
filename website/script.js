/* =========================================================
   Raj Engineering Industries – site script
   To add a product: add one entry to PRODUCTS below and put
   the image in /images. cat must be one of:
   toplink | levelling | stabilizer | lowerlink | bracket
   ========================================================= */

const PHONE = '919855034544';

const PRODUCTS = [
  { cat: 'toplink', name: 'Top Link NST – Extra Long Bush', fit: 'Universal fit', img: 'toplink-nst-long-bush.jpg', w: 800, h: 1200, tags: ['Extra long bush', 'Heavy duty', 'Corrosion resistant'] },
  { cat: 'stabilizer', name: 'Stabilizer Jondear – New Model', fit: 'John Deere', img: 'stabilizer-john-deere.jpg', w: 800, h: 1200, tags: ['SJ-Galv', 'SJ-Green', 'Weather proof'] },
  { cat: 'levelling', name: 'Levelling Assembly', fit: 'Swaraj', img: 'levelling-swaraj.jpg', w: 1200, h: 675, tags: ['Heavy duty', 'Precision fit'] },
  { cat: 'lowerlink', name: 'Lower Links Range', fit: 'Swaraj · Mahindra DI · Sonalika · John Deere', img: 'lowerlink-range.jpg', w: 1080, h: 725, tags: ['2, 3 & 5-hole', 'Heavy duty'] },

  { cat: 'toplink', name: 'Starnut Top Link', fit: 'John Deere', img: 'toplink-starnut-john-deere.jpg', w: 1200, h: 894, tags: ['Heavy duty', 'Easy adjustment', 'Corrosion resistant'] },
  { cat: 'stabilizer', name: 'Stabilizer – Old & New Models', fit: 'Swaraj', img: 'stabilizer-swaraj.jpg', w: 1200, h: 774, tags: ['Improved locking', 'Corrosion resistant'] },
  { cat: 'levelling', name: 'Levelling Assembly – End & Y-Type', fit: 'Powertrac', img: 'levelling-powertrac.jpg', w: 1200, h: 800, tags: ['Rust resistant', '100% tested'] },
  { cat: 'lowerlink', name: 'Lower Link DI', fit: 'Mahindra DI', img: 'lowerlink-mahindra-di.jpg', w: 1200, h: 891, tags: ['Red coated', 'Bulk supply'] },

  { cat: 'toplink', name: 'Top Link FT60 – Star Nut Type', fit: 'Farmtrac FT60 · New model', img: 'toplink-farmtrac-ft60.jpg', w: 525, h: 1200, tags: ['Star nut type', 'Enhanced load capacity'] },
  { cat: 'stabilizer', name: 'New Model Stabilizer', fit: 'Massey Ferguson', img: 'stabilizer-massey.jpg', w: 635, h: 1200, tags: ['Heavy duty', 'Adjustable'] },
  { cat: 'levelling', name: 'Levelling Assembly – Orchard', fit: 'Swaraj Orchard', img: 'levelling-swaraj-orchard.jpg', w: 525, h: 1200, tags: ['Adjustable leveling', 'Corrosion resistant'] },
  { cat: 'toplink', name: 'Top Link NST (Heavy) – Star Nut with Handle', fit: 'Universal fit', img: 'toplink-nst-star-nut.jpg', w: 675, h: 1200, tags: ['Heavy duty', 'Precision engineered'] },

  { cat: 'toplink', name: 'Top Link', fit: 'Sonalika', img: 'toplink-sonalika.jpg', w: 678, h: 1200, tags: ['Handle adjust', 'Powder coated'] },
  { cat: 'stabilizer', name: 'Heavy-Duty Stabilizer', fit: 'Sonalika', img: 'stabilizer-sonalika.jpg', w: 631, h: 890, tags: ['Powder coated', 'Adjustable length'] },
  { cat: 'levelling', name: 'Levelling Assembly NST', fit: 'Universal fit', img: 'levelling-nst.jpg', w: 525, h: 1200, tags: ['Easy adjustment', 'Heavy duty'] },
  { cat: 'stabilizer', name: 'Stabilizer – Reduce & Bush Type', fit: 'Mahindra Yuvo', img: 'stabilizer-mahindra-yuvo.jpg', w: 631, h: 418, tags: ['Reduce type', 'Bush type'] },

  { cat: 'toplink', name: 'Top Link – Grey Finish', fit: 'Sonalika', img: 'toplink-sonalika-grey.jpg', w: 525, h: 1200, tags: ['Adjustable length', 'Heavy-duty steel'] },
  { cat: 'stabilizer', name: 'Stabilizer – Multi-Hole', fit: 'Heavy duty', img: 'stabilizer-black-multihole.jpg', w: 905, h: 1200, tags: ['Multi-hole adjust', 'Black powder coat'] },
  { cat: 'levelling', name: 'Levelling Assembly – Heavy Duty', fit: 'Heavy duty', img: 'levelling-heavy-duty.jpg', w: 652, h: 1200, tags: ['Brass-finish top', 'Handle adjust'] },
  { cat: 'stabilizer', name: 'Stabilizer – Blue & Brass', fit: 'Heavy duty', img: 'stabilizer-blue-brass.jpg', w: 600, h: 1200, tags: ['Pin lock', 'Rust resistant'] },

  { cat: 'toplink', name: 'Mini Top Link', fit: 'Yuvraj mini tractors', img: 'toplink-mini-yuvraj.jpg', w: 1200, h: 1200, tags: ['Reliable', 'Premium quality'] },
  { cat: 'levelling', name: 'Levelling Assembly – Mini Tractor', fit: 'Yuvraj', img: 'levelling-mini-yuvraj.jpg', w: 680, h: 1104, tags: ['High-strength steel', 'Anti-rust'] },
  { cat: 'stabilizer', name: 'Stabilizer NST', fit: 'All tractor models', img: 'stabilizer-nst.jpg', w: 800, h: 1200, tags: ['High-strength steel', 'Long lasting'] },
  { cat: 'stabilizer', name: 'Stabilizer – Silver & Black Model', fit: 'New Holland', img: 'stabilizer-new-holland.jpg', w: 640, h: 755, tags: ['Galvanized', 'Powder coated'] },

  { cat: 'toplink', name: 'Mini Tractor Top Links', fit: 'Mini tractors · Multiple sizes', img: 'toplink-mini-tractor-sizes.jpg', w: 515, h: 1200, tags: ['Multiple lengths', 'Black finish'] },
  { cat: 'bracket', name: 'Lowerlink Bracket 855', fit: 'Swaraj 855', img: 'bracket-swaraj-855.jpg', w: 799, h: 1200, tags: ['Heavy-duty mild steel', 'Corrosion resistant'] },
  { cat: 'bracket', name: 'Tractor Bracket', fit: 'Swaraj', img: 'bracket-swaraj.jpg', w: 525, h: 1200, tags: ['Premium grade steel', 'Rust resistant'] },
  { cat: 'bracket', name: 'Tractor Bracket – Blue Finish', fit: 'Heavy duty', img: 'bracket-blue.jpg', w: 1080, h: 936, tags: ['Welded construction', 'Powder coated'] },
];

const waLink = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const enquiryText = (p) =>
  `Hello Raj Engineering Industries, I'm interested in: ${p.name} (${p.fit}). Please share price and availability.`;

/* ---------- Product grid ---------- */
const grid = document.getElementById('productGrid');

grid.innerHTML = PRODUCTS.map((p, i) => `
  <article class="card" data-cat="${p.cat}" data-index="${i}">
    <button class="card__media" style="--bg-img:url('images/${p.img}')" data-open="${i}" aria-label="View ${p.name} full size">
      <img src="images/${p.img}" alt="${p.name} – ${p.fit}" width="${p.w}" height="${p.h}" loading="lazy">
      <span class="card__zoom"><svg class="i"><use href="#i-expand"/></svg></span>
    </button>
    <div class="card__body">
      <span class="card__fit">${p.fit}</span>
      <h3>${p.name}</h3>
      <ul class="card__tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
      <div class="card__actions">
        <a class="btn btn--accent btn--sm" href="${waLink(enquiryText(p))}" target="_blank" rel="noopener">
          <svg class="i"><use href="#i-whatsapp"/></svg> Enquire
        </a>
        <a class="btn btn--ghost btn--sm" href="tel:+${PHONE}" aria-label="Call about ${p.name}">
          <svg class="i"><use href="#i-phone"/></svg>
        </a>
      </div>
    </div>
  </article>
`).join('');

const cards = [...grid.children];

/* ---------- Filters ---------- */
const chips = [...document.querySelectorAll('.chip')];
let currentFilter = 'all';

chips.forEach((chip) => {
  const f = chip.dataset.filter;
  chip.querySelector('span').textContent =
    f === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.cat === f).length;
  chip.addEventListener('click', () => applyFilter(f));
});

function applyFilter(filter) {
  currentFilter = filter;
  chips.forEach((c) => c.classList.toggle('is-active', c.dataset.filter === filter));
  cards.forEach((card) => {
    const show = filter === 'all' || card.dataset.cat === filter;
    card.hidden = !show;
    if (show) {
      // restart the entry animation
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = '';
    }
  });
}

// Category tiles & footer links that jump to a filtered catalogue
document.querySelectorAll('a[data-filter]').forEach((link) => {
  link.addEventListener('click', () => applyFilter(link.dataset.filter));
});

/* ---------- Lightbox ---------- */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbName = document.getElementById('lbName');
const lbFit = document.getElementById('lbFit');
const lbEnquire = document.getElementById('lbEnquire');
let lbIndex = 0;

const visibleIndexes = () =>
  PRODUCTS.map((p, i) => i).filter((i) => currentFilter === 'all' || PRODUCTS[i].cat === currentFilter);

function showProduct(i) {
  const p = PRODUCTS[i];
  lbIndex = i;
  lbImg.src = `images/${p.img}`;
  lbImg.alt = `${p.name} – ${p.fit}`;
  lbName.textContent = p.name;
  lbFit.textContent = p.fit;
  lbEnquire.href = waLink(enquiryText(p));
}

function step(dir) {
  const list = visibleIndexes();
  const pos = list.indexOf(lbIndex);
  showProduct(list[(pos + dir + list.length) % list.length]);
}

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-open]');
  if (!btn) return;
  showProduct(Number(btn.dataset.open));
  lb.showModal();
});

lb.addEventListener('click', (e) => {
  const action = e.target.closest('[data-lb]')?.dataset.lb;
  if (action === 'close') lb.close();
  else if (action === 'prev') step(-1);
  else if (action === 'next') step(1);
  else if (e.target === lb) lb.close();
});

lb.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

// Swipe left/right on phones
let touchX = null;
lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  touchX = null;
});

/* ---------- Header & mobile menu ---------- */
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');

const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

// Highlight the nav link of the section on screen
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

/* ---------- Reveal on scroll ---------- */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    revealer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => {
  // stagger siblings in grids
  const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
  if (siblings.length > 2) el.style.setProperty('--d', `${(siblings.indexOf(el) % 4) * 0.08}s`);
  revealer.observe(el);
});

/* ---------- Animated counters ---------- */
const yearsInBusiness = new Date().getFullYear() - 2009;
const counter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = el.dataset.count === 'years' ? yearsInBusiness : Number(el.dataset.count);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1400, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counter.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach((el) => {
  if (el.dataset.count === 'years') el.textContent = yearsInBusiness;
  counter.observe(el);
});

/* ---------- Enquiry form → WhatsApp ---------- */
document.getElementById('enquiryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const details = [
    `Name: ${d.name}`,
    d.city && `City: ${d.city}`,
    `Product: ${d.product}`,
    d.qty && `Quantity: ${d.qty}`,
    d.message && `Details: ${d.message}`,
  ].filter(Boolean);
  const text = ['Hello Raj Engineering Industries, I have an enquiry.', '', ...details].join('\n');
  window.open(waLink(text), '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
