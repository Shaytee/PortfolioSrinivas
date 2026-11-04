const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const allIframes = Array.from(document.querySelectorAll('iframe'));

let currentIndex = 0;

allIframes.forEach((iframe) => {
  const src = iframe.getAttribute('src');
  if (src && !src.includes('enablejsapi=1')) {
    iframe.setAttribute('src', `${src}${src.includes('?') ? '&' : '?'}enablejsapi=1`);
  }
});

function stopAllVideos() {
  allIframes.forEach((iframe) => {
    try {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"stopVideo","args":[]}',
        '*'
      );
    } catch (error) {
      // iframe non chargé ou inaccessible : on ignore
    }
  });
}

function updateCarousel() {
  stopAllVideos();
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
  });

  const currentSlide = slides[currentIndex];
  const activeFrame = currentSlide?.querySelector('iframe');

  if (activeFrame) {
    const src = activeFrame.getAttribute('src');
    if (src && !src.includes('autoplay=1')) {
      activeFrame.setAttribute('src', `${src}${src.includes('?') ? '&' : '?'}autoplay=1`);
    }
  }
}

function goToNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function goToPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', goToPrev);
  nextBtn.addEventListener('click', goToNext);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') goToPrev();
  if (event.key === 'ArrowRight') goToNext();
});

const btn = document.querySelector('.btn1');
if (btn) {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
}
