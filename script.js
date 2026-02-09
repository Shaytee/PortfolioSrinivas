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

// Lancer une fois le scroll pour déclencher animation si déjà visible
window.dispatchEvent(new Event('scroll'));
