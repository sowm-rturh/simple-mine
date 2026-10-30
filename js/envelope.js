/* ==========================================================================
   ENVELOPE.JS — Interactive Wax Seal Envelope & Handwritten Letter Reveal
   ========================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrap = document.getElementById('envelope-wrapper');
    const waxSeal = document.getElementById('wax-seal');
    const letterParchment = document.getElementById('letter-parchment');
    const closeLetterBtn = document.getElementById('close-letter-btn');
    const letterBody = document.getElementById('letter-body-content');

    if (!envelopeWrap || !waxSeal || !letterParchment) return;

    // Populate letter from STORY_DATA
    if (window.STORY_DATA && window.STORY_DATA.chapter6) {
      const ch6 = window.STORY_DATA.chapter6;
      if (letterBody && ch6.letterParagraphs) {
        letterBody.innerHTML = '';
        ch6.letterParagraphs.forEach((pText) => {
          const p = document.createElement('p');
          p.textContent = pText;
          if (pText.includes("I'm sorry") || pText.includes("எனக்கு நீ வேண்டுமே")) {
            p.classList.add('letter-highlight', 'letter-handwriting');
          }
          letterBody.appendChild(p);
        });
      }
    }

    function openEnvelope() {
      envelopeWrap.classList.add('is-open');

      setTimeout(() => {
        letterParchment.classList.add('visible');

        // Stagger paragraph reveal
        const paragraphs = letterParchment.querySelectorAll('.letter-body p');
        paragraphs.forEach((p, idx) => {
          setTimeout(() => {
            p.classList.add('revealed');
          }, 200 + idx * 140);
        });

        // Scroll into view gently
        setTimeout(() => {
          letterParchment.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }, 700);
    }

    function closeEnvelope() {
      letterParchment.classList.remove('visible');
      const paragraphs = letterParchment.querySelectorAll('.letter-body p');
      paragraphs.forEach((p) => p.classList.remove('revealed'));

      setTimeout(() => {
        envelopeWrap.classList.remove('is-open');
        envelopeWrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }

    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });

    const envelopeBox = document.getElementById('envelope-box');
    if (envelopeBox) {
      envelopeBox.addEventListener('click', () => {
        if (!envelopeWrap.classList.contains('is-open')) {
          openEnvelope();
        }
      });
    }

    if (closeLetterBtn) {
      closeLetterBtn.addEventListener('click', closeEnvelope);
    }
  });
})();
