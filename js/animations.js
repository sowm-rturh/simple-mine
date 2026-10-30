/* ═══════════════════════════════════════════════════
   ANIMATIONS.JS — Scroll-triggered reveals, parallax,
   typewriter, timeline, days counter
═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── INTERSECTION OBSERVER — fade-in-scroll ─────────
  const fadeEls = document.querySelectorAll(
    '.fade-in-scroll, .tl-item, .polaroid-card, .video-card, ' +
    '.journey-stop, .journey-arrow, .float-note, ' +
    '.little-things-end, .apology-pre, .choice-q, .choice-btns, ' +
    '.days-sub, .days-list, .days-final, ' +
    '.final-still, .final-line, .final-name, .final-years, .final-love, .final-heart, .final-date'
  );

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el    = entry.target;
      const delay = parseInt(el.dataset.delay || 0);

      setTimeout(() => {
        el.classList.add('visible');
      }, delay);

      revealObserver.unobserve(el);
    });
  }, {
    threshold:  0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  fadeEls.forEach(el => revealObserver.observe(el));

  // ── TYPEWRITER EFFECT ─────────────────────────────
  // Used on the big "That became US" text
  function typewriter(el, text, speed = 60) {
    el.textContent = '';
    let i = 0;
    const id = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) clearInterval(id);
    }, speed);
  }

  // Apply typewriter to big-us-text once visible
  const bigUsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const original = el.textContent;
      typewriter(el, original, 55);
      bigUsObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.big-us-text').forEach(el => bigUsObserver.observe(el));

  // ── BIG DAYS NUMBER COUNT-UP ──────────────────────
  function animateCount(el, target, duration = 1800) {
    const start = Date.now();
    const startVal = 0;

    function tick() {
      const elapsed  = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(startVal + (target - startVal) * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }

    requestAnimationFrame(tick);
  }

  const bigDaysEl = document.getElementById('big-days');
  if (bigDaysEl) {
    const daysObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const start = new Date('2023-09-15');
        const now   = new Date();
        const days  = Math.floor((now - start) / (1000 * 60 * 60 * 24));
        animateCount(bigDaysEl, Math.max(days, 1096), 2000);
        daysObserver.unobserve(entry.target);
      });
    }, { threshold: 0.4 });

    daysObserver.observe(bigDaysEl);
  }

  // ── MEMORY WALL BUILDER (screen 13) ───────────────
  const memoryWall = document.getElementById('memory-wall');
  if (memoryWall && window.STORY_DATA) {
    const data    = window.STORY_DATA;
    const indices = data.memoryWallIndices || [];
    const all     = [];

    data.chapters.forEach(ch => {
      ch.photos.forEach(p => all.push(p));
    });

    const wallObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // Build wall
        indices.forEach((idx, i) => {
          const photo = all[idx];
          if (!photo) return;
          const img = document.createElement('img');
          img.src   = `assets/photos/${photo.file}`;
          img.alt   = photo.caption || '';
          img.loading = 'lazy';
          img.style.animationDelay = (i * 120) + 'ms';
          memoryWall.appendChild(img);
        });
        wallObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    wallObserver.observe(memoryWall);
  }

  // ── PARALLAX ON SECTION TITLES ─────────────────────
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.section-title').forEach(el => {
      const rect   = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * 0.04}px)`;
    });
  }, { passive: true });

  // ── POLAROID RANDOM ROTATIONS ──────────────────────
  document.querySelectorAll('.polaroid-card').forEach(card => {
    const rots = [-4, -2, -1, 1, 2, 3, 4];
    const rot  = rots[Math.floor(Math.random() * rots.length)];
    card.style.setProperty('--rot', rot + 'deg');
  });

  // ── SECTION BACKGROUND SHIFT ON SCROLL ────────────
  const screen09 = document.getElementById('screen-09');
  if (screen09) {
    const bgObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const bigWrap = entry.target.querySelector('.big-number-wrap');
        if (bigWrap && entry.isIntersecting) {
          bigWrap.style.animation = 'bigNumReveal 1.2s var(--ease-silk) 0.3s both';
        }
      });
    }, { threshold: 0.3 });
    bgObserver.observe(screen09);
  }

  // ── FLOAT NOTES DRIFT STAGGER ─────────────────────
  document.querySelectorAll('.float-note').forEach((note, i) => {
    note.style.animationDelay = (i * 0.6) + 's';
  });

})();
