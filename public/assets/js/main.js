/* YOVU site navigation */
(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
})();

/* Carousel — Zoom-style rotating cards */
(function () {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
    const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    if (!track || cards.length === 0) return;

    let current = 0;
    let interval = null;
    const delay = 5000;

    function getVisible() {
      const w = window.innerWidth;
      if (w >= 960) return 3;
      if (w >= 640) return 2;
      return 1;
    }

    function update() {
      const visible = getVisible();
      const pct = 100 / visible;
      track.style.transform = 'translateX(-' + (current * pct) + '%)';
      cards.forEach((c, i) => {
        c.classList.toggle('active', i >= current && i < current + visible);
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function next() {
      const visible = getVisible();
      current = (current + 1 > cards.length - visible) ? 0 : current + 1;
      update();
    }

    function prev() {
      const visible = getVisible();
      current = (current - 1 < 0) ? cards.length - visible : current - 1;
      update();
    }

    function startAuto() {
      stopAuto();
      interval = setInterval(next, delay);
    }

    function stopAuto() {
      if (interval) { clearInterval(interval); interval = null; }
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { current = i; update(); startAuto(); });
    });

    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    // Touch support
    let touchStart = 0;
    carousel.addEventListener('touchstart', e => { touchStart = e.touches[0].clientX; stopAuto(); }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const diff = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
      startAuto();
    }, { passive: true });

    window.addEventListener('resize', update);
    update();
    startAuto();
  });
})();

/* FAQ Accordion */
(function () {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close siblings
      item.parentElement.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
})();
