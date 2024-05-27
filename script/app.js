let currentIndex = 0;
const slideInterval = 3000; // Intervalo en milisegundos (3 segundos)

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    moveSlide(1);
}

let slideTimer = setInterval(autoSlide, slideInterval);