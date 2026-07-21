/* Runs while <head> is parsing, so reveal targets are hidden before first
   paint. If this file never loads, .reveal content simply stays visible. */
document.documentElement.classList.add('js');

const EMAIL_ADDRESS = 'mahmouds2006@gmail.com';

const NAV_SECTIONS = [
  { id: 'projects',   label: 'Projects'   },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education'  },
  { id: 'skills',     label: 'Skills'     },
  { id: 'contact',    label: 'Contact'    },
];

const ICON_GITHUB = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`;
const ICON_LINKEDIN = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path></svg>`;
const ICON_MAIL = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`;

function createNavbar(isHomePage = false) {
  const href = id => (isHomePage ? `#${id}` : `index.html#${id}`);

  const desktopLinks = NAV_SECTIONS
    .map(s => `<a href="${href(s.id)}" class="nav-link" data-section="${s.id}">${s.label}</a>`)
    .join('');

  const mobileLinks = NAV_SECTIONS
    .map(s => `<a href="${href(s.id)}" class="mobile-nav-link block py-3 text-neutral-400 hover:text-[#C9A24D] transition">${s.label}</a>`)
    .join('');

  return `
    <nav>
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="${isHomePage ? '#' : 'index.html'}" id="scrollToTop" class="nav-mark">MS</a>

        <div class="hidden lg:flex items-center gap-8">
          ${desktopLinks}
        </div>

        <div class="hidden lg:flex items-center gap-2">
          <a href="https://github.com/Moodie0079" target="_blank" class="nav-icon" aria-label="GitHub">${ICON_GITHUB}</a>
          <a href="https://www.linkedin.com/in/-mahmoudshalabi/" target="_blank" class="nav-icon" aria-label="LinkedIn">${ICON_LINKEDIN}</a>
          <button id="emailButtonDesktop" class="nav-icon cursor-pointer" aria-label="Copy email">${ICON_MAIL}</button>
        </div>

        <button id="mobileMenuToggle" class="lg:hidden nav-icon" aria-label="Toggle menu">
          <svg id="hamburgerIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <svg id="closeIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div id="mobileMenu" class="lg:hidden hidden bg-[#0F0F0F]/95 backdrop-blur-md border-t border-white/5">
        <div class="px-6 py-6 space-y-2">
          ${mobileLinks}
          <div class="flex gap-2 pt-4 border-t border-white/5">
            <a href="https://github.com/Moodie0079" target="_blank" class="nav-icon" aria-label="GitHub">${ICON_GITHUB}</a>
            <a href="https://www.linkedin.com/in/-mahmoudshalabi/" target="_blank" class="nav-icon" aria-label="LinkedIn">${ICON_LINKEDIN}</a>
            <button id="emailButtonMobile" class="nav-icon cursor-pointer" aria-label="Copy email">${ICON_MAIL}</button>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function loadNavbar(isHomePage = false) {
  const navContainer = document.getElementById('navbar-container');
  if (!navContainer) return;

  navContainer.innerHTML = createNavbar(isHomePage);

  initializeMobileMenu();
  initNavScrollState();
  initReveal();
  initHeroSpotlight();
  initFooterYear();
  if (isHomePage) {
    initScrollSpy();
    initSmoothScroll();

    const scrollToTop = document.getElementById('scrollToTop');
    if (scrollToTop) {
      scrollToTop.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  ['emailButtonDesktop', 'emailButtonMobile'].forEach(id => {
    const button = document.getElementById(id);
    if (button) button.addEventListener('click', () => copyEmail(button));
  });
}

/* Copy the address, flash a checkmark, then show the confirmation dialog. */
function copyEmail(button) {
  const done = () => {
    if (button) flashCheck(button);
    if (typeof showCopyModal === 'function') {
      showCopyModal();
    } else {
      const modal = document.getElementById('copyModal');
      if (modal) {
        modal.showModal();
        setTimeout(() => modal.close(), 3000);
      }
    }
  };
  navigator.clipboard.writeText(EMAIL_ADDRESS).then(done).catch(done);
}

function flashCheck(button) {
  const original = button.querySelector('svg');
  if (!original) return;
  const check = original.cloneNode(true);
  check.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
  check.setAttribute('fill', 'none');
  check.setAttribute('stroke', 'currentColor');
  check.style.color = '#C9A24D';
  button.replaceChild(check, original);
  setTimeout(() => {
    if (check.parentNode === button) button.replaceChild(original, check);
  }, 2000);
}

function initializeMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburgerIcon');
  const close = document.getElementById('closeIcon');
  if (!toggle || !menu) return;

  const shut = () => {
    menu.classList.add('hidden');
    hamburger.classList.remove('hidden');
    close.classList.add('hidden');
  };

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link =>
    link.addEventListener('click', shut)
  );
}

/* Navbar picks up a background once you leave the top of the page. */
function initNavScrollState() {
  const nav = document.querySelector('#navbar-container nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* Underline whichever section is currently filling the viewport. */
function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = NAV_SECTIONS
    .map(s => document.getElementById(s.id))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = id => {
    links.forEach(link =>
      link.classList.toggle('active', link.dataset.section === id)
    );
  };

  const observer = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));

  // Nothing is highlighted while the hero is on screen.
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight * 0.5) setActive(null);
  }, { passive: true });
}

/* Fade-and-lift elements in as they enter the viewport, staggered by group. */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  items.forEach(el => observer.observe(el));
}

/* Keeps the footer year current without anyone having to remember. The
   markup carries a real year too, so it reads correctly with JS disabled. */
function initFooterYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('.year').forEach(el => { el.textContent = year; });
}

/* Feeds the cursor position to the hero so the dot grid brightens under it.
   Skipped on touch (no hover) and when reduced motion is requested; the
   static dot field is all that shows in those cases. */
function initHeroSpotlight() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let pending = null;

  hero.addEventListener('pointermove', event => {
    const bounds = hero.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    // Coalesce to one write per frame rather than one per move event.
    if (pending) return;
    pending = requestAnimationFrame(() => {
      hero.style.setProperty('--mx', `${x}px`);
      hero.style.setProperty('--my', `${y}px`);
      pending = null;
    });
  }, { passive: true });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
