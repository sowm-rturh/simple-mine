/* ==========================================================================
   AUDIO-PLAYER.JS — Floating "♫ Our Song" Player with Equalizer & Fallback
   ========================================================================== */

(function () {
  let isPlaying = false;
  let audioEl = null;
  let synthInterval = null;
  let audioCtx = null;

  document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-toggle-btn');
    const musicWidget = document.getElementById('music-widget');
    if (!musicBtn || !musicWidget) return;

    audioEl = document.getElementById('bg-music');

    // Web Audio Synthesizer Fallback (Soft romantic chime)
    function playRomanticChime() {
      try {
        if (!audioCtx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }

        const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00]; // C E G C A F G
        let noteIdx = 0;

        synthInterval = setInterval(() => {
          if (!isPlaying) return;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(notes[noteIdx % notes.length], audioCtx.currentTime);
          noteIdx++;

          gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.2);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.start();
          osc.stop(audioCtx.currentTime + 2.3);
        }, 1400);
      } catch (e) {
        console.warn('Web Audio synth not supported', e);
      }
    }

    function stopRomanticChime() {
      if (synthInterval) {
        clearInterval(synthInterval);
        synthInterval = null;
      }
    }

    function playAudio() {
      if (!audioEl) return;

      const playPromise = audioEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            isPlaying = true;
            musicWidget.classList.add('music-playing');
            musicBtn.setAttribute('aria-label', 'Pause our song');
          })
          .catch((err) => {
            console.log('Audio autoplay prevented or file loading issue, using ambient chime:', err);
            // Fallback to Web Audio romantic chimes
            isPlaying = true;
            musicWidget.classList.add('music-playing');
            musicBtn.setAttribute('aria-label', 'Pause our song');
            playRomanticChime();
          });
      }
    }

    function pauseAudio() {
      isPlaying = false;
      if (audioEl) audioEl.pause();
      stopRomanticChime();
      musicWidget.classList.remove('music-playing');
      musicBtn.setAttribute('aria-label', 'Play our song');
    }

    function toggleAudio() {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }

    musicBtn.addEventListener('click', toggleAudio);

    // Expose global controller
    window.audioPlayer = {
      play: playAudio,
      pause: pauseAudio,
      toggle: toggleAudio,
      isPlaying: () => isPlaying
    };
  });
})();
