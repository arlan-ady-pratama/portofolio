// Ambil elemen tombol
const scrollToTopBtn = document.getElementById('scrollToTop');

// Fungsi untuk memeriksa scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show'); // Tampilkan tombol
    scrollToTopBtn.classList.remove('hide');
  } else {
    scrollToTopBtn.classList.add('hide'); // Sembunyikan tombol
    scrollToTopBtn.classList.remove('show');
  }
});

// Fungsi untuk menggulir ke atas
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Gulir halus
  });
});
