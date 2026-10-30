/* ═══════════════════════════════════════════════════
   CHAPTERS.JS — Photo chapter tabs + mosaic builder
═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  const data = window.STORY_DATA;
  if (!data) return;

  // ── BUILD PHOTO MOSAICS ────────────────────────────
  function buildMosaic(chapterIndex) {
    const chapter = data.chapters[chapterIndex];
    if (!chapter) return;

    const mosaic = document.querySelector(`.photo-mosaic[data-ch="${chapter.id}"]`);
    if (!mosaic || mosaic.dataset.built === '1') return;

    chapter.photos.forEach((photo, i) => {
      const img = document.createElement('img');
      img.src     = `assets/photos/${photo.file}`;
      img.alt     = photo.caption;
      img.loading = 'lazy';
      img.classList.add('clickable-photo');
      img.dataset.index   = getGlobalIndex(chapterIndex, i);
      img.dataset.caption = photo.caption;
      img.style.animationDelay = (i * 60) + 'ms';
      mosaic.appendChild(img);
    });

    mosaic.dataset.built = '1';
  }

  function getGlobalIndex(chapterIndex, photoIndex) {
    let idx = 0;
    for (let c = 0; c < chapterIndex; c++) {
      idx += data.chapters[c].photos.length;
    }
    return idx + photoIndex;
  }

  // Build all mosaics upfront (lazy loads naturally)
  data.chapters.forEach((_, i) => buildMosaic(i));

  // ── CHAPTER TABS ───────────────────────────────────
  const chBtns   = document.querySelectorAll('.ch-btn');
  const chPanels = document.querySelectorAll('.ch-panel');

  chBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const ch = btn.dataset.ch;

      chBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      chPanels.forEach(panel => panel.classList.remove('active'));
      const target = document.getElementById(`ch-panel-${ch}`);
      if (target) {
        target.classList.add('active');
        // Re-trigger scroll animations for newly revealed images
        setTimeout(() => {
          const imgs = target.querySelectorAll('img');
          imgs.forEach((img, i) => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            img.style.transition = `opacity 0.5s ease ${i * 50}ms, transform 0.5s ease ${i * 50}ms`;
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
              });
            });
          });
        }, 50);
      }
    });
  });

  // ── SWIPE SUPPORT FOR CHAPTERS ─────────────────────
  let touchStartX = 0;
  const chSection = document.getElementById('screen-05');
  if (chSection) {
    chSection.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    chSection.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < 40) return;

      const activeBtn = document.querySelector('.ch-btn.active');
      if (!activeBtn) return;
      const currentCh = parseInt(activeBtn.dataset.ch);

      let nextCh = dx < 0 ? currentCh + 1 : currentCh - 1;
      nextCh = Math.max(1, Math.min(7, nextCh));

      const nextBtn = document.querySelector(`.ch-btn[data-ch="${nextCh}"]`);
      if (nextBtn) nextBtn.click();
    }, { passive: true });
  }

  // ── EXPOSE for lightbox use ────────────────────────
  window.getAllPhotos = function() {
    const all = [];
    data.chapters.forEach(ch => {
      ch.photos.forEach(p => all.push(p));
    });
    return all;
  };

})();
