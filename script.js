// Fungsi untuk toggle menubar
function toggleMenu() {
    const menubar = document.querySelector('.menubar');
    menubar.classList.toggle('collapsed');

    // Simpan state ke localStorage
    if (menubar.classList.contains('collapsed')) {
        localStorage.setItem('menubarState', 'collapsed');
    } else {
        localStorage.setItem('menubarState', 'expanded');
    }
}

// Cek state saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const menubar = document.querySelector('.menubar');
    const savedState = localStorage.getItem('menubarState');

    // Jika tidak ada state yang tersimpan, set default ke 'collapsed'
    if (savedState === null) {
        menubar.classList.add('collapsed');
        localStorage.setItem('menubarState', 'collapsed');
    } else if (savedState === 'collapsed') {
        menubar.classList.add('collapsed');
    } else {
        menubar.classList.remove('collapsed');
    }
});