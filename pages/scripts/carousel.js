document.querySelectorAll('[data-carousel]').forEach((carousel) => {
const images = carousel.querySelectorAll('.carousel-image');
const dotsContainer = carousel.querySelector('.carousel-dots');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');

let currentIndex = 0;

if (!images.length) return;

dotsContainer.innerHTML = '';

images.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Bild ${index + 1} anzeigen`);

    dot.addEventListener('click', () => {
    showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.carousel-dot');

function showSlide(index) {
    currentIndex = (index + images.length) % images.length;

    images.forEach((image, i) => {
    image.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
    });
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(0);
});
