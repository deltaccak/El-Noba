   /* ═══════════════════════════════════════════════════════════════
   HAMBURGER MENU — pegá esto en script.js
   ═══════════════════════════════════════════════════════════════ */

// ── Hamburger toggle ──────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const nav       = document.querySelector('nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    nav.classList.toggle('menu-open');
  });

  // Cerrar al hacer click en un link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      nav.classList.remove('menu-open');
    });
  });

  // Cerrar al hacer click fuera del nav
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      navToggle.classList.remove('active');
      nav.classList.remove('menu-open');
    }
  });
}

// ── Nav scrolled class ─────────────────────────────────────────
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });
   
   
   
   
   
   
   
   
   
   
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

