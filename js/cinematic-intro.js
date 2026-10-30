/* ==========================================================================
   CINEMATIC-INTRO.JS — Dark Opening Slideshow, Ken Burns & Smooth Transition
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const introEl = document.getElementById('cinematic-intro');
    if (!introEl || !window.STORY_DATA) return;

    const introData = window.STORY_DATA.intro;
    const slidesContainer = document.getElementById('intro-slides');
    const subtitleEl = document.getElementById('intro-subtitle');
    const quote1El = document.getElementById('intro-quote-1');
    const quote2El = document.getElementById('intro-quote-2');
    const enterBtn = document.getElementById('enter-story-btn');

    // Create Slides
    const slides = [];
    introData.soloPhotos.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.className = 'intro-slide';
      slide.style.backgroundImage = `url('${item.src}')`;
      slide.setAttribute('role', 'img');
      slide.setAttribute('aria-label', item.caption || `Solo memory ${index + 1}`);
      slidesContainer.appendChild(slide);
      slides.push(slide);
    });

    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('slide-active');
          setTimeout(() => slide.classList.add('zoom-effect'), 50);
        } else {
          slide.classList.remove('slide-active', 'zoom-effect');
        }
      });
    }

    if (slides.length > 0) {
      showSlide(0);
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5200);
    }

    // Sequence Typography Fade-Ins
    setTimeout(() => {
      if (subtitleEl) {
        subtitleEl.style.opacity = '1';
        subtitleEl.style.transform = 'translateY(0)';
      }
    }, 800);

    setTimeout(() => {
      if (quote1El) {
        quote1El.style.opacity = '1';
        quote1El.style.transform = 'translateY(0)';
      }
    }, 2000);

    setTimeout(() => {
      if (quote2El) {
        quote2El.style.opacity = '1';
        quote2El.style.transform = 'translateY(0)';
      }
    }, 3400);

    setTimeout(() => {
      if (enterBtn) {
        enterBtn.style.opacity = '1';
        enterBtn.style.transform = 'translateY(0)';
      }
    }, 4600);

    // Enter Story Click Handler
    enterBtn.addEventListener('click', () => {
      // Start music if available
      if (window.audioPlayer && typeof window.audioPlayer.play === 'function') {
        window.audioPlayer.play();
      }

      introEl.classList.add('intro-hidden');
      document.body.classList.remove('intro-active');

      setTimeout(() => {
        if (slideInterval) clearInterval(slideInterval);
        const mainStory = document.getElementById('main-story');
        if (mainStory) {
          mainStory.scrollIntoView({ behavior: 'smooth' });
        }
      }, 600);
    });
  });
})();
