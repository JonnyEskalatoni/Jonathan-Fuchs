/* ═══════════════════════════════════════════════════════════
   PERFORMANCE-STABILISIERUNG V2 – JAVASCRIPT
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── NAV: Scrolled State ──────────────────────────────── */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ─── HERO: Zoom on Load ───────────────────────────────── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 120);
  }


  /* ─── SCROLL FADE-IN ───────────────────────────────────── */
  const fadeEls = document.querySelectorAll(
    'h2, .section-label, .problem-right p, .problem-lead, ' +
    '.ident-card, .comp-card, .program-card, .program-result, ' +
    '.retainer-block, .about-text-col p, .about-stats, ' +
    '.process-step, .testi-card, .qualify-intro, .qualify-form, ' +
    '.contact-intro, .contact-form-wrap, .trust-strip-inner, ' +
    '.solution-content-col > *, .promise-bar, .hero-kicker, ' +
    '.hero h1, .hero-sub, .hero .btn-primary, ' +
    '.final-cta h2, .final-cta p, .final-cta .btn-primary, ' +
    '.program-header, .program-body'
  );

  fadeEls.forEach(el => el.classList.add('fade-up'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // stagger siblings slightly
        const siblings = Array.from(entry.target.parentElement?.children || []);
        const pos = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(pos * 70, 350));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => io.observe(el));


  /* ─── FAQ ACCORDION ────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const a = b.closest('.faq-item').querySelector('.faq-a');
        a.hidden = true;
      });

      // Open clicked if was closed
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });


  /* ─── FORM: Basic Validation & Submit Feedback ─────────── */
  const handleForm = (formId, successMsg) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const required = form.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = 'rgba(180,60,60,0.6)';
          valid = false;
        }
      });

      if (!valid) return;

      // Replace form with success message
      const wrap = form.parentElement;
      wrap.innerHTML = `
        <div style="
          padding: 4rem 3rem;
          border: 1px solid rgba(181,146,74,0.3);
          background: rgba(181,146,74,0.06);
          text-align: center;
        ">
          <p style="
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            color: #faf8f5;
            font-style: italic;
            line-height: 1.5;
            margin-bottom: 0.8rem;
          ">${successMsg}</p>
          <p style="font-size:0.82rem; color:#7a7268; letter-spacing:0.05em;">
            Ich melde mich persönlich innerhalb von 48 Stunden.
          </p>
        </div>
      `;
    });
  };

  handleForm(
    'qualifyForm',
    'Ihre Anfrage ist angekommen.'
  );
  handleForm(
    'contactForm',
    'Vielen Dank. Ich freue mich auf das Gespräch.'
  );

});
