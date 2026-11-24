const menuButton = document.getElementById('menuBtn');
const navigation = document.getElementById('nav');
const header = menuButton?.closest('.site-header');

if (menuButton && navigation && header) {
  function setMenuOpen(open) {
    navigation.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    menuButton.textContent = open ? '✕' : '☰';
  }

  menuButton.addEventListener('click', () => setMenuOpen(!navigation.classList.contains('open')));
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  window.matchMedia('(max-width: 900px)').addEventListener?.('change', () => setMenuOpen(false));

  header.classList.add('has-mobile-menu');
  menuButton.hidden = false;
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
