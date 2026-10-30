/* ═══════════════════════════════════════════════════
   VIDEOS.JS — Video card interactions & modal player
═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  const modal      = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const modalClose = document.getElementById('video-modal-close');

  // ── OPEN VIDEO MODAL ──────────────────────────────
  function openVideo(src) {
    if (!src) return;
    modalVideo.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalVideo.play().catch(() => {});
    // Reduce bg music volume while video plays
    const audio = document.getElementById('bg-audio');
    if (audio && !audio.paused) {
      audio.volume = 0.1;
    }
  }

  function closeVideo() {
    modalVideo.pause();
    modalVideo.src = '';
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    // Restore music volume
    const audio = document.getElementById('bg-audio');
    if (audio) audio.volume = 0.4;
  }

  // ── EVENT LISTENERS ───────────────────────────────
  if (modalClose) modalClose.addEventListener('click', closeVideo);

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeVideo();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeVideo();
    }
  });

  // ── DELEGATE PLAY BUTTON CLICKS ───────────────────
  document.addEventListener('click', e => {
    const playBtn = e.target.closest('.play-btn');
    if (!playBtn) return;
    const frame = playBtn.closest('.video-frame');
    if (!frame) return;
    const src = frame.dataset.src;
    openVideo(src);
  });

  // Also allow clicking the thumbnail itself
  document.addEventListener('click', e => {
    const thumb = e.target.closest('.video-frame');
    if (!thumb || e.target.classList.contains('play-btn') || e.target.classList.contains('play-icon')) return;
    const src = thumb.dataset.src;
    if (src) openVideo(src);
  });

})();
