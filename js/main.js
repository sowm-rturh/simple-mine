/* ==========================================================================
   MAIN.JS — Chapter Rendering, Scroll Progress & Reveal Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.STORY_DATA;
  if (!data) return;

  // 1. Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // 2. Render Chapter 1: The Journey of You
  const hisWorldGrid = document.getElementById('his-world-grid');
  if (hisWorldGrid && data.chapter1) {
    hisWorldGrid.innerHTML = '';
    data.chapter1.photos.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = `his-card reveal-item reveal-delay-${(idx % 4) + 1}`;
      if (idx === 7 || idx === 9) card.classList.add('featured-portrait');
      card.setAttribute('data-lightbox-src', photo.src);
      card.setAttribute('data-lightbox-caption', `${photo.stage}: ${photo.caption}`);

      card.innerHTML = `
        <div class="his-card-media">
          <img src="${photo.src}" alt="${photo.stage}" loading="lazy" />
          <div class="his-card-overlay">
            <span class="his-card-stage">${photo.stage}</span>
            <p class="his-card-caption">${photo.caption}</p>
          </div>
        </div>
      `;
      hisWorldGrid.appendChild(card);
    });
  }

  // 3. Render Chapter 2: The Day You Became Mine
  const beginningFlow = document.getElementById('beginning-flow');
  if (beginningFlow && data.chapter2) {
    beginningFlow.innerHTML = '';
    data.chapter2.moments.forEach((m, idx) => {
      const row = document.createElement('div');
      row.className = `beginning-row reveal-item reveal-delay-${(idx % 3) + 1} ${idx % 2 === 1 ? 'reverse' : ''}`;

      row.innerHTML = `
        <div class="beginning-media">
          <div class="polaroid-card tilt-${idx % 2 === 0 ? 'left' : 'right'}" data-lightbox-src="${m.src}" data-lightbox-caption="${m.heading} — ${m.caption}">
            <div class="washi-tape ${idx % 3 === 0 ? 'gold-tape' : idx % 3 === 1 ? 'wine-tape' : ''}"></div>
            <div class="polaroid-img-wrap portrait-aspect">
              <img src="${m.src}" alt="${m.heading}" loading="lazy" />
            </div>
            <p class="polaroid-caption">${m.caption}</p>
          </div>
        </div>
        <div class="beginning-text">
          <span class="beginning-time">${m.time}</span>
          <h3 class="beginning-heading">${m.heading}</h3>
          <p class="beginning-para">${m.para}</p>
        </div>
      `;
      beginningFlow.appendChild(row);
    });
  }

  // 4. Render Chapter 3: Another Year of Memories
  const ch3 = data.chapter3;
  if (ch3) {
    // Hero 1
    const hero1El = document.getElementById('collage-hero-1');
    if (hero1El && ch3.hero1) {
      hero1El.setAttribute('data-lightbox-src', ch3.hero1.src);
      hero1El.setAttribute('data-lightbox-caption', `${ch3.hero1.title} — ${ch3.hero1.sub}`);
      hero1El.innerHTML = `
        <img class="collage-hero-img" src="${ch3.hero1.src}" alt="${ch3.hero1.title}" loading="lazy" />
        <div class="collage-hero-caption-bar">
          <h4 class="collage-hero-title">${ch3.hero1.title}</h4>
          <span class="collage-hero-sub">${ch3.hero1.sub}</span>
        </div>
      `;
    }

    // Polaroids 1
    const cluster1 = document.getElementById('polaroid-cluster-1');
    if (cluster1 && ch3.polaroids1) {
      cluster1.innerHTML = '';
      ch3.polaroids1.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = `polaroid-card ${p.tilt} reveal-item reveal-delay-${idx + 1}`;
        card.setAttribute('data-lightbox-src', p.src);
        card.setAttribute('data-lightbox-caption', p.caption);
        card.innerHTML = `
          <div class="washi-tape"></div>
          <div class="polaroid-img-wrap">
            <img src="${p.src}" alt="${p.caption}" loading="lazy" />
          </div>
          <p class="polaroid-caption">${p.caption}</p>
        `;
        cluster1.appendChild(card);
      });
    }

    // Hero 2
    const hero2El = document.getElementById('collage-hero-2');
    if (hero2El && ch3.hero2) {
      hero2El.setAttribute('data-lightbox-src', ch3.hero2.src);
      hero2El.setAttribute('data-lightbox-caption', `${ch3.hero2.title} — ${ch3.hero2.sub}`);
      hero2El.innerHTML = `
        <img class="collage-hero-img" src="${ch3.hero2.src}" alt="${ch3.hero2.title}" loading="lazy" />
        <div class="collage-hero-caption-bar">
          <h4 class="collage-hero-title">${ch3.hero2.title}</h4>
          <span class="collage-hero-sub">${ch3.hero2.sub}</span>
        </div>
      `;
    }

    // Polaroids 2
    const cluster2 = document.getElementById('polaroid-cluster-2');
    if (cluster2 && ch3.polaroids2) {
      cluster2.innerHTML = '';
      ch3.polaroids2.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = `polaroid-card ${p.tilt} reveal-item reveal-delay-${idx + 1}`;
        card.setAttribute('data-lightbox-src', p.src);
        card.setAttribute('data-lightbox-caption', p.caption);
        card.innerHTML = `
          <div class="washi-tape gold-tape"></div>
          <div class="polaroid-img-wrap">
            <img src="${p.src}" alt="${p.caption}" loading="lazy" />
          </div>
          <p class="polaroid-caption">${p.caption}</p>
        `;
        cluster2.appendChild(card);
      });
    }
  }

  // 5. Render Chapter 4: Your Smile, My World
  const chaosGrid = document.getElementById('chaos-grid');
  if (chaosGrid && data.chapter4) {
    chaosGrid.innerHTML = '';
    data.chapter4.candidPhotos.forEach((c, idx) => {
      const card = document.createElement('div');
      card.className = `chaos-card ${c.tilt} reveal-item reveal-delay-${(idx % 4) + 1}`;
      card.setAttribute('data-lightbox-src', c.src);
      card.setAttribute('data-lightbox-caption', c.caption);
      card.innerHTML = `
        <span class="scrapbook-sticker">${idx % 3 === 0 ? '✨' : idx % 3 === 1 ? '🎂' : '❤️'}</span>
        <div class="chaos-img-wrap ${idx % 2 === 0 ? 'portrait-aspect' : ''}">
          <img src="${c.src}" alt="${c.caption}" loading="lazy" />
        </div>
        <p class="chaos-caption">${c.caption}</p>
      `;
      chaosGrid.appendChild(card);
    });
  }

  // 6. Render Chapter 5: Make a Wish, Birthday Boy (Cake & Real Memory)
  const ch5 = data.chapter5;
  if (ch5) {
    // Populate Real Birthday Photo Memory
    const realPhotoWrap = document.getElementById('birthday-real-photo-wrap');
    const realPhotoTitle = document.getElementById('birthday-real-photo-title');
    const realPhotoCaption = document.getElementById('birthday-real-photo-caption');
    if (realPhotoWrap && ch5.realPhoto) {
      realPhotoWrap.setAttribute('data-lightbox-src', ch5.realPhoto.src);
      realPhotoWrap.setAttribute('data-lightbox-caption', `${ch5.realPhoto.title} — ${ch5.realPhoto.caption}`);
      realPhotoWrap.innerHTML = `<img src="${ch5.realPhoto.src}" alt="${ch5.realPhoto.title}" loading="lazy" />`;
      if (realPhotoTitle) realPhotoTitle.textContent = ch5.realPhoto.title;
      if (realPhotoCaption) realPhotoCaption.textContent = ch5.realPhoto.caption;
    }

    // Populate Birthday Wish Card
    const wishTitle = document.getElementById('wish-title');
    const wishMessage = document.getElementById('wish-message');
    const wishSubtext = document.getElementById('wish-subtext');
    if (ch5.wishCard) {
      if (wishTitle) wishTitle.textContent = ch5.wishCard.title;
      if (wishMessage) wishMessage.textContent = ch5.wishCard.message;
      if (wishSubtext) wishSubtext.textContent = ch5.wishCard.subtext;
    }

    // Render Romantic Couple Spotlight Cards below the cake
    const favouriteGrid = document.getElementById('favourite-showcase');
    if (favouriteGrid && ch5.cards) {
      favouriteGrid.innerHTML = '';
      ch5.cards.forEach((fc, idx) => {
        const card = document.createElement('div');
        card.className = `favourite-card reveal-item reveal-delay-${(idx % 3) + 1}`;
        card.setAttribute('data-lightbox-src', fc.src);
        card.setAttribute('data-lightbox-caption', `${fc.tag} — ${fc.quote}`);
        card.innerHTML = `
          <div class="favourite-media">
            <img src="${fc.src}" alt="${fc.tag}" loading="lazy" />
          </div>
          <div class="favourite-details">
            <span class="favourite-tag">${fc.tag}</span>
            <p class="favourite-quote">${fc.quote}</p>
          </div>
        `;
        favouriteGrid.appendChild(card);
      });
    }
  }

  // 7. Render Final Chapter Climax Photo
  const finalHeroWrap = document.getElementById('final-hero-img-wrap');
  if (finalHeroWrap && data.finalChapter) {
    finalHeroWrap.setAttribute('data-lightbox-src', data.finalChapter.heroImage);
    finalHeroWrap.setAttribute('data-lightbox-caption', data.finalChapter.quote);
  }

  // Re-index Lightbox items once dynamic DOM is built
  if (window.lightboxManager && typeof window.lightboxManager.indexPhotos === 'function') {
    window.lightboxManager.indexPhotos();
  }

  // 8. Intersection Observer for Smooth Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-item').forEach((el) => {
    revealObserver.observe(el);
  });
});
