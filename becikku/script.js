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

// script.js - Fungsi untuk switch Hardware/Software

// Fungsi untuk berpindah antara Hardware dan Software
function switchProsedur(target) {
    const hwContent = document.getElementById('hw-content');
    const swContent = document.getElementById('sw-content');
    const btnHw = document.getElementById('btn-hw');
    const btnSw = document.getElementById('btn-sw');
    
    if (target === 'hw') {
        // Tampilkan Hardware, sembunyikan Software
        hwContent.classList.remove('hidden');
        swContent.classList.add('hidden');
        
        // Update tombol Hardware
        btnHw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-blue-600 text-white shadow-lg flex items-center gap-2";
        
        // Update tombol Software
        btnSw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-slate-800 text-slate-400 hover:text-white flex items-center gap-2";
    } else {
        // Tampilkan Software, sembunyikan Hardware
        swContent.classList.remove('hidden');
        hwContent.classList.add('hidden');
        
        // Update tombol Software
        btnSw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-cyan-600 text-white shadow-lg flex items-center gap-2";
        
        // Update tombol Hardware
        btnHw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-slate-800 text-slate-400 hover:text-white flex items-center gap-2";
    }
}

// Fungsi untuk inisialisasi halaman
function initializePage() {
    // Pastikan Hardware tampil, Software tersembunyi
    const hwContent = document.getElementById('hw-content');
    const swContent = document.getElementById('sw-content');
    const btnHw = document.getElementById('btn-hw');
    const btnSw = document.getElementById('btn-sw');
    
    if (hwContent && swContent && btnHw && btnSw) {
        hwContent.classList.remove('hidden');
        swContent.classList.add('hidden');
        
        // Atur tombol Hardware sebagai aktif
        btnHw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-blue-600 text-white shadow-lg flex items-center gap-2";
        btnSw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-slate-800 text-slate-400 hover:text-white flex items-center gap-2";
        
        console.log('Switch mode initialized: Hardware active');
    } else {
        console.error('Elements not found for switch mode initialization');
    }
}

// Jalankan inisialisasi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', initializePage);