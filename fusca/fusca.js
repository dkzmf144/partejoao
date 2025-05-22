let currentIndex = 0;
const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;

/* Função para mover o carrossel */
function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
