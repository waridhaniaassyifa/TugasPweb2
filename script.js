//Menjalankan kode setelah seluruh halaman setelah selesai dimuat
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("toggle-theme");
        const root = document.documentElement; // Mengambil elemen root (html)
       
    // Mengambil tema yang tersimpan di localStorage, jika tidak ada, gunakan tema "light"
        const savedTheme = localStorage.getItem("theme") || "light";
        root.setAttribute("data-theme", savedTheme);
        updateTheme(savedTheme);
    
    // Menambahkan event listener untuk tombol tema
        themeToggle.addEventListener("click", () => {
    // Menukar tema antara "gelap" dan "terang"
            const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateTheme(newTheme);
        });
    // Fungsi untuk memperbarui tampilan berdasarkan tema
        function updateTheme(theme) {
            themeToggle.textContent = theme === "dark" ? "🌞" : "🌙";
        }
    });

// Menambahkan efek transisi saat berpindah halaman
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });

// Fungsi untuk memperbarui tampilan berdasarkan tema yang tersimpan di localStorage
    function updateTheme(theme) {
        if (theme === "dark") {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
            themeToggle.textContent = "💡"; // Ganti ikon ke matahari
        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";
            themeToggle.textContent = "🌓"; // Ganti ikon ke bulan
        }
    }

// Fungsi untuk menampilkan halaman tertentu dan menyembunyikan halaman lainnya
    function showPage(pageId) {
        document.querySelectorAll(".page").forEach(page => {
            page.classList.remove("active");
        });
        document.getElementById(pageId).classList.add("active");
}
