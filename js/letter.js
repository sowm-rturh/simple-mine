/* ═══════════════════════════════════════════════════
   LETTER.JS — Tamil letter line-by-line animation
═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  const data = window.STORY_DATA;

  window.animateLetter = function() {
    const container = document.getElementById('letter-lines');
    if (!container || !data || !data.letterLines) return;

    container.innerHTML = '';

    const lines = data.letterLines;
    const BASE_DELAY  = 100; // ms between lines
    const LINE_SPEED  = 320; // ms per line reveal

    lines.forEach((line, i) => {
      const p = document.createElement('p');
      p.style.animationDelay = (i * BASE_DELAY + 200) + 'ms';

      if (line === '') {
        p.classList.add('blank-line');
        p.innerHTML = '&nbsp;';
      } else {
        // Detect emoji-heavy lines
        p.textContent = line;
      }

      container.appendChild(p);
    });

    // Scroll through letter smoothly
    setTimeout(() => {
      const letter = document.getElementById('tamil-letter');
      if (letter) {
        letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 600);
  };

})();
