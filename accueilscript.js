// Animation type manga/anime dès le chargement
window.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('anime-style');
    }, i * 200); // effet en cascade rapide
  });
});


// Création et animation des particules en arrière-plan
const particlesContainer = document.createElement('div');
particlesContainer.id = 'particles';
particlesContainer.style.position = 'fixed';
particlesContainer.style.top = '0';
particlesContainer.style.left = '0';
particlesContainer.style.width = '100%';
particlesContainer.style.height = '100%';
particlesContainer.style.zIndex = '-1';
document.body.appendChild(particlesContainer);

// 🎨 Nouvelle palette orange harmonieuse
const orangePalette = [
  '#ffcc80', '#ffc107', '#ffd180', '#ffe0b2', '#fff3e0'
];

// Création des particules
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.backgroundColor = orangePalette[Math.floor(Math.random() * orangePalette.length)];
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${5 + Math.random() * 5}s`;
  particlesContainer.appendChild(particle);
}

// Scroll fluide au clic sur le bouton
const scrollButton = document.querySelector('.scroll-button');
if(scrollButton){
  scrollButton.addEventListener('click', () => {
    document.querySelector('section').scrollIntoView({ behavior: 'smooth' });
  });
}

const btn = document.querySelector('.btn1');
if (btn) {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}
