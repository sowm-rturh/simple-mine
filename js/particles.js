/* ==========================================================================
   PARTICLES.JS — Romantic Stardust & Floating Hearts Particle System
   ========================================================================== */

(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Stardust Particles
  const particles = [];
  const particleCount = Math.min(width < 768 ? 35 : 65, 75);

  const colors = [
    'rgba(212, 175, 55, ',    // Gold
    'rgba(232, 165, 184, ',   // Rose pink
    'rgba(247, 214, 224, ',   // Soft pink
    'rgba(255, 255, 255, '    // White starlight
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedY = -(Math.random() * 0.45 + 0.15);
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.baseAlpha = Math.random() * 0.5 + 0.2;
      this.alpha = this.baseAlpha;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseVal = Math.random() * Math.PI;
      this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.pulseVal += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulseVal) * 0.25;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorPrefix + Math.max(0.05, Math.min(1, this.alpha)) + ')';
      ctx.shadowBlur = this.size * 4;
      ctx.shadowColor = this.colorPrefix + '0.8)';
      ctx.fill();
    }
  }

  // Floating Hearts
  const hearts = [];
  const heartCount = width < 768 ? 8 : 14;

  class FloatingHeart {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 30;
      this.size = Math.random() * 8 + 6;
      this.speedY = -(Math.random() * 0.5 + 0.25);
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.3;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
      this.alpha = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.01) * 0.5;
      this.rotation += this.rotSpeed;

      if (this.y < -30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.scale(this.size / 10, this.size / 10);
      ctx.fillStyle = `rgba(232, 165, 184, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(232, 165, 184, 0.4)';

      ctx.beginPath();
      // Draw bezier heart
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
      ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());
  for (let i = 0; i < heartCount; i++) hearts.push(new FloatingHeart());

  let isRunning = true;
  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
    if (isRunning) requestAnimationFrame(loop);
  });

  function loop() {
    if (!isRunning) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    for (let i = 0; i < hearts.length; i++) {
      hearts[i].update();
      hearts[i].draw();
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
