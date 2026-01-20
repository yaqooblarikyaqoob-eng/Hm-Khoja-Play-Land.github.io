// Slider
let slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(nextSlide, 3000); // 3 seconds

// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
