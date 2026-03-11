    // ── Scroll reveal ──────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));

    // ── Nav background on scroll ───────────────────────────
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.style.background = 'rgba(10,10,10,.97)';
      } else {
        nav.style.background = 'rgba(10,10,10,.85)';
      }
    }, { passive: true });

    // ── Parallax on hero image ─────────────────────────────
    const heroBg = document.querySelector('.hero-img');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `translateY(${y * 0.3}px)`;
      }
    }, { passive: true });
