// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// Carousel
const carousel = document.querySelector(".carousel-images");
const imgs = document.querySelectorAll(".carousel-images img");
let idx = 0;
document.querySelector(".next").onclick = () => {
  idx = (idx + 1) % imgs.length;
  carousel.style.transform = `translateX(${-idx * 100}%)`;
};
document.querySelector(".prev").onclick = () => {
  idx = (idx - 1 + imgs.length) % imgs.length;
  carousel.style.transform = `translateX(${-idx * 100}%)`;
};
