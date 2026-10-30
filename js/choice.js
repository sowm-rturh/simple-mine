/* ═══════════════════════════════════════════════════
   CHOICE.JS — Yes/No interaction on screen 11
═══════════════════════════════════════════════════ */

(function() {
  'use strict';

  const btnYes    = document.getElementById('btn-yes');
  const btnNo     = document.getElementById('btn-no');
  const result    = document.getElementById('choice-result');
  const resultTxt = document.getElementById('result-text');
  const heartBurst= document.getElementById('hearts-burst');
  const choiceBtns= document.getElementById('choice-btns');

  let answered = false;
  let noClickCount = 0;

  if (btnYes) {
    btnYes.addEventListener('click', handleYes);
  }

  if (btnNo) {
    btnNo.addEventListener('click', handleNo);
  }

  function handleYes() {
    if (answered) return;
    answered = true;

    // Hide buttons with fade
    choiceBtns.style.transition = 'opacity 0.5s ease';
    choiceBtns.style.opacity    = '0';

    setTimeout(() => {
      choiceBtns.style.display = 'none';

      // Heart explosion
      if (typeof window.heartExplosion === 'function') {
        window.heartExplosion(heartBurst);
      }

      // Brighten bg music slightly
      const audio = document.getElementById('bg-audio');
      if (audio && !audio.paused) {
        audio.volume = Math.min(0.7, (audio.volume || 0.4) + 0.15);
      }

      // Show result
      result.classList.remove('hidden');
      resultTxt.innerHTML = `
        <span style="display:block; font-size:clamp(36px,10vw,64px); margin-bottom:20px;">❤️</span>
        Then I guess&hellip;<br>
        <em style="color:var(--gold-light);">I&rsquo;d choose you again too.</em>
        <span style="display:block; margin-top:16px;">❤️</span>
      `;

    }, 600);
  }

  function handleNo() {
    noClickCount++;

    if (noClickCount >= 3) {
      // After 3 attempts, show the playful message anyway
      handlePlayfulNo();
      return;
    }

    // Playfully move the NO button away
    const maxX = Math.min(120, window.innerWidth * 0.2);
    const maxY = 60;
    const rx   = (Math.random() - 0.5) * 2 * maxX;
    const ry   = (Math.random() - 0.5) * 2 * maxY;

    btnNo.style.transition = 'transform 0.3s var(--ease-spring)';
    btnNo.style.transform  = `translate(${rx}px, ${ry}px)`;

    // Reset after a moment
    setTimeout(() => {
      btnNo.style.transform = '';
    }, 1200);
  }

  function handlePlayfulNo() {
    answered = true;
    choiceBtns.style.transition = 'opacity 0.5s ease';
    choiceBtns.style.opacity    = '0';

    setTimeout(() => {
      choiceBtns.style.display = 'none';
      result.classList.remove('hidden');
      resultTxt.innerHTML = `
        <span style="display:block; font-size:clamp(28px,7vw,48px); margin-bottom:16px;">&#x1F60C;❤️</span>
        Nice try&hellip;<br>
        <em style="color:var(--pink-soft);">Some stories deserve another chapter.</em>
      `;
    }, 500);
  }

})();
