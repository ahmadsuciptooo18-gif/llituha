
// LOADER
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 900);
});

// SCROLL PROGRESS + NAV
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.getElementById('progressFill').style.width = (pct * 100) + '%';
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
});

// HAMBURGER
const ham = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  menu.classList.toggle('open');
});

// INTERSECTION REVEAL
const revEls = document.querySelectorAll('.reveal, .reveal-left');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revEls.forEach(el => revObs.observe(el));

// PARTICLES
function makeParticles(el, n) {
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:${Math.random()*100}%;
      bottom:-8px;
      width:${2+Math.random()*4}px;
      height:${2+Math.random()*4}px;
      animation-duration:${5+Math.random()*9}s;
      animation-delay:${Math.random()*7}s;
    `;
    el.appendChild(p);
  }
}
const p1 = document.getElementById('part1');
if (p1) makeParticles(p1, 28);

// GENERIC SLIDER
function makeSlider({ trackId, navId, prevId, nextId, auto = 5000, activeClass = 'active', dotClass = 'snav-dot' }) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const slides = Array.from(track.children);
  const navEl = document.getElementById(navId);
  let cur = 0, timer;

  if (navEl) {
    slides.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = dotClass + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => go(i));
      navEl.appendChild(d);
    });
  }

  function go(idx) {
    slides[cur].classList.remove(activeClass);
    if (navEl) navEl.children[cur].classList.remove('active');
    cur = ((idx % slides.length) + slides.length) % slides.length;
    slides[cur].classList.add(activeClass);
    if (navEl) navEl.children[cur].classList.add('active');
    track.style.transform = `translateX(-${cur * 100}%)`;
    clearInterval(timer);
    if (auto) timer = setInterval(() => go(cur + 1), auto);
  }

  if (prevId) document.getElementById(prevId)?.addEventListener('click', () => go(cur - 1));
  if (nextId) document.getElementById(nextId)?.addEventListener('click', () => go(cur + 1));

  // Touch swipe
  let tx = 0;
  track.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = tx - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) go(dx > 0 ? cur + 1 : cur - 1);
  }, { passive: true });

  if (auto) timer = setInterval(() => go(cur + 1), auto);
}

makeSlider({ trackId:'heroTrack', navId:'heroNav', prevId:'heroPrev', nextId:'heroNext', auto:5500 });
makeSlider({ trackId:'prodTrack', navId:'prodNav', auto:4000 });
makeSlider({ trackId:'projTrack', navId:'projDots', auto:3800 });

// SERVICES DRAG/SWIPE
(function() {
  const track = document.getElementById('svcTrack');
  const dotsEl = document.getElementById('svcDots');
  const cards = Array.from(track.children);
  let idx = 0;

  cards.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dark-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => go(i));
    dotsEl.appendChild(d);
  });

  function getCardW() {
    return cards[0].getBoundingClientRect().width + 20;
  }

  function go(i) {
    dotsEl.children[idx].classList.remove('active');
    idx = ((i % cards.length) + cards.length) % cards.length;
    dotsEl.children[idx].classList.add('active');
    track.style.transform = `translateX(-${idx * getCardW()}px)`;
  }

  let tx = 0;
  track.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = tx - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) go(dx > 0 ? idx + 1 : idx - 1);
  }, { passive: true });

  // Mouse drag
  let dragging = false, mx = 0;
  track.addEventListener('mousedown', e => { dragging = true; mx = e.clientX; });
  window.addEventListener('mousemove', () => {});
  window.addEventListener('mouseup', e => {
    if (!dragging) return;
    dragging = false;
    const dx = mx - e.clientX;
    if (Math.abs(dx) > 40) go(dx > 0 ? idx + 1 : idx - 1);
  });
})();

// COUNT-UP STATS
function countUp(el, target, prefix, suffix) {
  let val = 0;
  const step = target / 45;
  const iv = setInterval(() => {
    val = Math.min(val + step, target);
    el.textContent = prefix + val.toFixed(1) + suffix;
    if (val >= target) clearInterval(iv);
  }, 35);
}

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.done) {
      e.target.dataset.done = 1;
      const el = e.target.querySelector('.stat-num');
      countUp(el, +e.target.dataset.target, e.target.dataset.prefix, e.target.dataset.suffix);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-item[data-target]').forEach(el => statObs.observe(el));
