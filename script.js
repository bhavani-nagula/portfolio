/* ── NAV SCROLL EFFECT ─────────────────────────────────────────── */
const navHeader = document.getElementById('navHeader');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navHeader.classList.toggle('scrolled', y > 20);
  scrollTopBtn.classList.toggle('show', y > 400);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── HAMBURGER ─────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── TYPING EFFECT ─────────────────────────────────────────────── */
const phrases = [
  'Azure DevOps Engineer',
  'Cloud Infrastructure Architect',
  'Kubernetes & Docker Engineer',
  'DevSecOps Practitioner',
  'Terraform IaC Specialist',
  'CI/CD Pipeline Builder',
];
let phraseIdx = 0;
let charIdx   = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const current = phrases[phraseIdx];
  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typingEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIdx === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx  = (phraseIdx + 1) % phrases.length;
    delay = 300;
  }

  setTimeout(type, delay);
}
type();

/* ── REVEAL ON SCROLL ──────────────────────────────────────────── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // slight stagger for sibling elements
      const siblings = [...entry.target.parentElement.children].filter(c => c.classList.contains('reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

/* ── SKILL BAR ANIMATION ───────────────────────────────────────── */
const barFills = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const w = fill.getAttribute('data-width');
      fill.style.width = w + '%';
      barObserver.unobserve(fill);
    }
  });
}, { threshold: 0.4 });

barFills.forEach(b => barObserver.observe(b));

/* ── COUNTER ANIMATION ─────────────────────────────────────────── */
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el     = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1400;
      const start  = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

/* ── CONTACT FORM ──────────────────────────────────────────────── */
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    note.style.color = '#f87171';
    note.textContent = 'Please fill in your name, email, and message.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.style.color = '#f87171';
    note.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate send (replace with a real backend or Formspree endpoint)
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    note.style.color = '#34d399';
    note.textContent = '✓ Message sent! Bhavani will get back to you soon.';
    form.reset();
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
    btn.disabled = false;
  }, 1200);
});

/* ── ACTIVE NAV LINK ───────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--cyan)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => activeObserver.observe(s));
