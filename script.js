// Reset form saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').reset();
    document.getElementById('error-message').textContent = ''; // Hapus pesan error
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana
    if (username === 'admin' && password === 'pulangpisau2025') {
        // Simpan status login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect ke halaman utama
        window.location.href = 'beranda.html'; // Redirect ke halaman utama
    } else {
        document.getElementById('error-message').textContent = 'Username atau password salah!';
    }

    // Reset form setelah submit
    document.getElementById('loginForm').reset();
});