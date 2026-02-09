// Animation on scroll reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
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

// Palette manga harmonieuse
const mangaPalette = [
  '#ffd5ec', // soft sakura pink
  '#edecf2', // sky blue
  '#ffe4b5', // soft peach
  '#dcd5ff', // lilac
  '#a5f3d6'  // mint green
];

// Création des particules avec couleurs aléatoires dans la palette
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.backgroundColor = mangaPalette[Math.floor(Math.random() * mangaPalette.length)];
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
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
}
