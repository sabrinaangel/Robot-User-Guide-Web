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

// script.js
function switchProsedur(target) {
    // Ambil elemen yang diperlukan
    const hwSection = document.getElementById('prosedur-hw');
    const swSection = document.getElementById('prosedur-sw');
    const btnHw = document.getElementById('btn-hw');
    const btnSw = document.getElementById('btn-sw');

    if (target === 'hw') {
        // Tampilkan Hardware, sembunyikan Software
        hwSection.classList.remove('hidden');
        swSection.classList.add('hidden');
        
        // Update tombol Hardware
        btnHw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-[#081F5C] text-white shadow-lg flex items-center gap-2";
        
        // Update tombol Software
        btnSw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-[#081F5C] text-white hover:text-white flex items-center gap-2";
    } else {
        // Tampilkan Software, sembunyikan Hardware
        swSection.classList.remove('hidden');
        hwSection.classList.add('hidden');
        
        // Update tombol Software
        btnSw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-[#081F5C] text-white shadow-lg flex items-center gap-2";
        
        // Update tombol Hardware
        btnHw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-[#081F5C] text-slate-400 hover:text-white flex items-center gap-2";
    }
}

// Fungsi untuk inisialisasi
function initializePage() {
    // Pastikan mode Hardware aktif saat pertama kali load
    const hwSection = document.getElementById('prosedur-hw');
    if (hwSection) {
        hwSection.classList.remove('hidden');
    }
    
    // Pastikan mode Software tersembunyi
    const swSection = document.getElementById('prosedur-sw');
    if (swSection) {
        swSection.classList.add('hidden');
    }
    
    // Inisialisasi tombol
    const btnHw = document.getElementById('btn-hw');
    const btnSw = document.getElementById('btn-sw');
    
    if (btnHw && btnSw) {
        btnHw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-blue-600 text-white shadow-lg flex items-center gap-2";
        btnSw.className = "px-10 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-slate-800 text-slate-400 hover:text-white flex items-center gap-2";
    }
}

// Jalankan inisialisasi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', initializePage);