// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// TYPEWRITER EFFECT
const typewriterSentences = [
  "Bringing ideas to life with code!",
  "Welcome to My Portfolio",
  "Crafting Innovative Solutions"
];
let twIndex = 0;
let charIndex = 0;

const typewriterEl = document.getElementById("typewriter");
const typingSpeed = 70;
const erasingSpeed = 50;
const newTextDelay = 1500; // pausa prima di cambiare frase

function type() {
  if (charIndex < typewriterSentences[twIndex].length) {
    typewriterEl.textContent += typewriterSentences[twIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterEl.textContent = typewriterSentences[twIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    twIndex++;
    if (twIndex >= typewriterSentences.length) twIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

// Avvia
document.addEventListener("DOMContentLoaded", () => {
  if (typewriterSentences.length) setTimeout(type, 1000);
});

// SCROLL ANIMATIONS
window.addEventListener("scroll", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// CAROUSEL
let currentSlide = 0;
fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    const carouselInner = document.getElementById("projects-carousel");
    projects.forEach((p) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
      projectDiv.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      `;
      carouselInner.appendChild(projectDiv);
    });
    carouselInner.style.width = `${300 * projects.length}px`;
  })
  .catch((err) => console.error("Errore nel caricamento progetti:", err));

function prevSlide() {
  const carouselInner = document.getElementById("projects-carousel");
  const totalSlides = carouselInner.children.length;
  currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
  carouselInner.style.transform = `translateX(-${currentSlide * 300}px)`;
}

function nextSlide() {
  const carouselInner = document.getElementById("projects-carousel");
  const totalSlides = carouselInner.children.length;
  currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
  carouselInner.style.transform = `translateX(-${currentSlide * 300}px)`;
}

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
