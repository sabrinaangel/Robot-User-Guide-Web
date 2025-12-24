// Slideshow manual
const slides = document.querySelectorAll(".carousel img");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.remove("hidden");
      slide.classList.add("active");
    }
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// tampilkan pertama kali
showSlide(current);