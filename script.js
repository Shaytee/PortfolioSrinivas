// Apparition au scroll de la section "À propos"
const aboutSection = document.querySelector('.about-section');
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const sectionTop = aboutSection.getBoundingClientRect().top;
  if (sectionTop < windowHeight - 150) {
    aboutSection.classList.add('visible');
  }
});

// Création des pétales de sakura orange
const sakuraContainer = document.getElementById('sakura-container');
const petalsCount = 50;

// Palette orange pastel
const orangeSakuraPalette = ['#ffcc80', '#ffc107', '#ffd180', '#ffe0b2', '#fff3e0'];

for (let i = 0; i < petalsCount; i++) {
  const petal = document.createElement('div');
  petal.classList.add('sakura-petal');

  // Couleur orange aléatoire
  petal.style.backgroundColor = orangeSakuraPalette[Math.floor(Math.random() * orangeSakuraPalette.length)];

  // Taille aléatoire
  const size = 10 + Math.random() * 18;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;

  // Position horizontale initiale aléatoire
  petal.style.left = `${Math.random() * 100}vw`;

  // Animation durée et délai aléatoire pour éviter synchro
  const duration = 8 + Math.random() * 7;
  const delay = Math.random() * 15;
  petal.style.animation = `sakuraFall ${duration}s linear ${delay}s infinite`;

  // Forme douce arrondie pour style pétale
  const br = 40 + Math.random() * 30;
  petal.style.borderRadius = `${br}% ${br}% ${br}% ${br}% / ${br}% ${br}% ${br}% ${br}%`;

  sakuraContainer.appendChild(petal);
}

// Transition portail avant d’ouvrir le portfolio
const portalLink = document.querySelector('.portal-link');
if (portalLink) {
  portalLink.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.location.assign(portalLink.href);
      return;
    }

    const button = portalLink.getBoundingClientRect();
    document.documentElement.style.setProperty('--portal-x', `${button.left + button.width / 2}px`);
    document.documentElement.style.setProperty('--portal-y', `${button.top + button.height / 2}px`);
    document.body.classList.add('portal-entering');

    window.setTimeout(() => {
      const destination = new URL(portalLink.href);
      destination.searchParams.set('portal-entry', '1');
      destination.searchParams.set('portal-x', `${button.left + button.width / 2}`);
      destination.searchParams.set('portal-y', `${button.top + button.height / 2}`);
      window.location.assign(destination.href);
    }, 850);
  });
}

// Lancer une fois le scroll pour déclencher animation si déjà visible
window.dispatchEvent(new Event('scroll'));
