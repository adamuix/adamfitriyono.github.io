const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;

    if ( scrollposition >= 60 ) {
        nav.classList.add('nav-dark');
    } else if (scrollposition <= 60) {
        nav.classList.remove('nav-dark')
    }
})

// Tambahkan event listener untuk efek ripple
document.querySelector('.btn-custom1').addEventListener('click', function (e) {
    const button = e.currentTarget;

    // Mengatur posisi ripple
    const rect = button.getBoundingClientRect();
    const ripple = button.querySelector('::after');
    
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    // Menambahkan kelas untuk animasi ripple
    button.classList.add('ripple-active');

    // Hapus kelas setelah animasi selesai
    setTimeout(() => {
        button.classList.remove('ripple-active');
    }, 600); // Durasi sesuai dengan CSS transition
});

