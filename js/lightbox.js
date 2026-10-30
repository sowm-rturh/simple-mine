/* ==========================================================================
   LIGHTBOX.JS — Full-screen Photo Modal with Touch Swipe & Keyboard Navigation
   ========================================================================== */

(function () {
  let photoGallery = [];
  let currentIndex = 0;

  document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('photo-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (!lightbox || !lightboxImg) return;

    // Index all clickable photos on page
    function indexPhotos() {
      photoGallery = [];
      const clickableItems = document.querySelectorAll('[data-lightbox-src]');
      clickableItems.forEach((el, index) => {
        const src = el.getAttribute('data-lightbox-src');
        const caption = el.getAttribute('data-lightbox-caption') || '';
        photoGallery.push({ src, caption, element: el });

        el.addEventListener('click', (e) => {
          e.preventDefault();
          openLightbox(index);
        });
      });
    }

    function openLightbox(index) {
      if (index < 0 || index >= photoGallery.length) return;
      currentIndex = index;
      updateLightboxContent();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightboxContent() {
      const item = photoGallery[currentIndex];
      if (!item) return;
      lightboxImg.src = item.src;
      lightboxImg.alt = item.caption || 'Photo';
      lightboxCaption.textContent = item.caption || '';
    }

    function showNext() {
      if (photoGallery.length === 0) return;
      currentIndex = (currentIndex + 1) % photoGallery.length;
      updateLightboxContent();
    }

    function showPrev() {
      if (photoGallery.length === 0) return;
      currentIndex = (currentIndex - 1 + photoGallery.length) % photoGallery.length;
      updateLightboxContent();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });

    // Touch Swipe Support for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) {
          showNext();
        } else {
          showPrev();
        }
      }
    }

    // Expose indexer and open
    window.lightboxManager = {
      indexPhotos: indexPhotos,
      open: openLightbox
    };

    // Run initial indexing
    indexPhotos();
  });
})();
