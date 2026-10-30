/* ==========================================================================
   CONFETTI.JS — High-Performance Celebration Confetti & Sparkles System
   ========================================================================== */

(function () {
  let canvas = null;
  let ctx = null;
  let confettiPieces = [];
  let isAnimating = false;

  const colors = [
    '#d4af37', // Gold
    '#f2dc9b', // Champagne
    '#e8a5b8', // Rose Pink
    '#f7d6e0', // Soft Pink
    '#7a152e', // Wine Red
    '#b82046', // Burgundy Bright
    '#ffffff'  // Pearl White
  ];

  class Confetto {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 6;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.shape = Math.random() > 0.3 ? 'rect' : 'heart';
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 6;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - 6; // Initial upward explosion
      
      this.gravity = 0.38;
      this.drag = 0.94;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 14;
      this.alpha = 1;
      this.decay = Math.random() * 0.008 + 0.006;
    }

    update() {
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.vy += this.gravity;
      
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotSpeed;
      this.alpha -= this.decay;
    }

    draw(ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;

      if (this.shape === 'rect') {
        ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
      } else {
        // Heart
        const s = this.size * 0.6;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-s, -s, -s * 2, s * 0.5, 0, s * 2);
        ctx.bezierCurveTo(s * 2, s * 0.5, s, -s, 0, 0);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function initCanvas() {
    canvas = document.getElementById('confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      document.body.appendChild(canvas);
    }
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function triggerBirthdayConfetti(sourceX, sourceY) {
    if (!canvas) initCanvas();

    const startX = sourceX !== undefined ? sourceX : window.innerWidth / 2;
    const startY = sourceY !== undefined ? sourceY : window.innerHeight * 0.45;

    // Burst 140 pieces
    for (let i = 0; i < 140; i++) {
      confettiPieces.push(new Confetto(startX, startY));
    }

    // Additional side streamers
    for (let i = 0; i < 30; i++) {
      const leftConfetto = new Confetto(window.innerWidth * 0.15, window.innerHeight * 0.6);
      leftConfetto.vx = Math.random() * 8 + 3;
      leftConfetto.vy = -(Math.random() * 12 + 6);
      confettiPieces.push(leftConfetto);

      const rightConfetto = new Confetto(window.innerWidth * 0.85, window.innerHeight * 0.6);
      rightConfetto.vx = -(Math.random() * 8 + 3);
      rightConfetto.vy = -(Math.random() * 12 + 6);
      confettiPieces.push(rightConfetto);
    }

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(renderLoop);
    }
  }

  function renderLoop() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confettiPieces.length - 1; i >= 0; i--) {
      const c = confettiPieces[i];
      c.update();
      c.draw(ctx);
      if (c.alpha <= 0 || c.y > canvas.height + 50) {
        confettiPieces.splice(i, 1);
      }
    }

    if (confettiPieces.length > 0) {
      requestAnimationFrame(renderLoop);
    } else {
      isAnimating = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  window.triggerBirthdayConfetti = triggerBirthdayConfetti;

  document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
  });
})();
