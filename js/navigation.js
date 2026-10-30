/* ═══════════════════════════════════════════════════
   NAVIGATION.JS — Progress, nav menu, screen counter
═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  const progressFill   = document.getElementById('progress-fill');
  const screenCounter  = document.getElementById('screen-counter');
  const navToggle      = document.getElementById('nav-toggle');
  const navMenu        = document.getElementById('nav-menu');
  const TOTAL_SCREENS  = 12;

  // ── PROGRESS UPDATE ───────────────────────────────
  window.updateProgress = function(screenNum) {
    const pct = ((screenNum - 1) / (TOTAL_SCREENS - 1)) * 100;
    if (progressFill) progressFill.style.width = pct + '%';
    if (screenCounter) {
      const display = String(screenNum - 1).padStart(2, '0');
      screenCounter.textContent = display + ' / ' + String(TOTAL_SCREENS).padStart(2, '0');
    }
  };

  // ── NAV TOGGLE ────────────────────────────────────
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Close nav when a link is clicked
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close nav on outside click
  document.addEventListener('click', e => {
    if (!navMenu || !navToggle) return;
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // ── SCROLL-BASED SCREEN DETECTION ────────────────
  const screens = document.querySelectorAll('.screen[data-screen]');

  const screenObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const num = parseInt(entry.target.dataset.screen || 1);
        if (num > 1) window.updateProgress(num);
      }
    });
  }, { threshold: 0.4 });

  screens.forEach(s => screenObserver.observe(s));

  // ── MUSIC PLAYER ─────────────────────────────────
  const musicBtn  = document.getElementById('music-btn');
  const bgAudio   = document.getElementById('bg-audio');
  const equalizer = musicBtn ? musicBtn.querySelector('.equalizer') : null;

  let isPlaying = false;

  if (musicBtn && bgAudio) {
    musicBtn.addEventListener('click', toggleMusic);

    bgAudio.addEventListener('ended', () => {
      isPlaying = false;
      updateMusicBtn();
    });

    bgAudio.volume = 0.4;
  }

  function toggleMusic() {
    if (isPlaying) {
      bgAudio.pause();
      isPlaying = false;
    } else {
      bgAudio.play().then(() => {
        isPlaying = true;
        updateMusicBtn();
      }).catch(() => {
        // Autoplay blocked — user must interact again
      });
    }
    updateMusicBtn();
  }

  function updateMusicBtn() {
    if (!musicBtn) return;
    const label = musicBtn.querySelector('.music-label');
    if (label) label.textContent = isPlaying ? 'Pause' : 'Our Song';
    if (equalizer) equalizer.classList.toggle('playing', isPlaying);
    musicBtn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play our song');
  }

})();
