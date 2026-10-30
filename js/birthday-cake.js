/* ==========================================================================
   BIRTHDAY-CAKE.JS — Interactive Cake, Candle Blow-Out, Sound & Wish Reveal
   ========================================================================== */

(function () {
  let audioCtx = null;

  function playBlowSound() {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      // Soft gentle breath puff / celebration chime
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    } catch (e) {
      // AudioContext not allowed or not supported, ignore silently
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const blowBtn = document.getElementById('blow-candles-btn');
    const candles = document.querySelectorAll('.candle');
    const wishCard = document.getElementById('birthday-wish-card');

    if (!blowBtn || candles.length === 0) return;

    let allExtinguished = false;

    function checkAllCandles() {
      const remaining = document.querySelectorAll('.candle:not(.extinguished)');
      if (remaining.length === 0 && !allExtinguished) {
        allExtinguished = true;
        onAllCandlesExtinguished();
      }
    }

    function onAllCandlesExtinguished() {
      playBlowSound();

      // Trigger Confetti Cascade
      if (typeof window.triggerBirthdayConfetti === 'function') {
        const rect = blowBtn.getBoundingClientRect();
        window.triggerBirthdayConfetti(rect.left + rect.width / 2, rect.top);
      }

      // Reveal Romantic Birthday Wish Card
      if (wishCard) {
        setTimeout(() => {
          wishCard.classList.add('revealed');
          wishCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 500);
      }

      // Update Button State
      blowBtn.innerHTML = 'Wish Granted! Happy Birthday! ❤️🎂';
      blowBtn.style.background = 'linear-gradient(135deg, rgba(74, 13, 30, 0.95), rgba(43, 6, 16, 1))';
      blowBtn.style.borderColor = 'var(--rose-pink)';
    }

    function extinguishCandle(candle) {
      if (candle.classList.contains('extinguished')) return;
      candle.classList.add('extinguished');
      checkAllCandles();
    }

    // Individual candle tap support
    candles.forEach((c) => {
      c.addEventListener('click', () => {
        extinguishCandle(c);
      });
    });

    // Blow all candles button
    blowBtn.addEventListener('click', () => {
      if (allExtinguished) {
        // Relight option
        candles.forEach((c) => c.classList.remove('extinguished'));
        allExtinguished = false;
        if (wishCard) wishCard.classList.remove('revealed');
        blowBtn.innerHTML = '<span class="btn-sparkle">✨</span> Blow Out Candles &amp; Make a Wish 🎂';
        blowBtn.style.background = '';
        blowBtn.style.borderColor = '';
        return;
      }

      // Staggered blow out
      candles.forEach((c, idx) => {
        setTimeout(() => {
          extinguishCandle(c);
        }, idx * 180);
      });
    });
  });
})();
