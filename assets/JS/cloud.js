// SIDEBAR ACTIVE STATE
const allSideMenuLinks = document.querySelectorAll('#sidebar .nav-item a');

// Cek URL saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;

    allSideMenuLinks.forEach(link => {
        const navItem = link.parentElement;
        
        // Jika URL link sama dengan URL saat ini, tambahkan kelas active
        if (link.href === currentUrl) {
            navItem.classList.add('active'); // Tambahkan kelas active
            const icon = link.querySelector('.bx');
            icon.className = icon.className.replace('bx-', 'bxs-'); // Ubah ikon
            icon.style.visibility = 'visible';
            icon.style.opacity = '1';
        }
    });
});

// Menangani klik pada link
allSideMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Hapus kelas 'active' dari semua link
        allSideMenuLinks.forEach(i => i.parentElement.classList.remove('active'));
        
        // Tambahkan kelas 'active' ke link yang diklik jika itu adalah Beranda
        if (link.getAttribute('href') === '../Beranda/index.html') {
            const navItem = link.parentElement;
            navItem.classList.add('active');
        }
        
        // Navigasi ke URL yang ditentukan
        window.location.href = link.href; // Pindah ke halaman yang dituju
    });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content .navbar .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
});

// RESPONSIVE SEARCH TOGGLE
const searchButton = document.querySelector('#content .navbar form .input-group button');
const searchForm = document.querySelector('#content .navbar form');
const searchIcon = searchButton.querySelector('.bx');

searchButton.addEventListener('click', (e) => {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        searchIcon.classList.toggle('bx-x', searchForm.classList.contains('show'));
        searchIcon.classList.toggle('bx-search', !searchForm.classList.contains('show'));
    }
});

// Adjust sidebar and search form visibility on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
        searchForm.classList.remove('show');
        searchIcon.classList.replace('bx-x', 'bx-search');
    }
    if (window.innerWidth < 768) {
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.remove('hide');
    }
});



// SIDEBAR ICON BEHAVIOR
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const bxIcon = link.querySelector(".bx:not(.bxs)");
        const bxsIcon = link.querySelector(".bxs");

        console.log("BX Icon:", bxIcon); // Debugging
        console.log("BXS Icon:", bxsIcon); // Debugging

        // Pada awal ikon disembunyikan
        if (bxIcon) bxIcon.style.display = "none";
        if (bxsIcon) bxsIcon.style.display = "none";

        // Saat kursor menyentuh teks, ikon bx muncul
        link.addEventListener("mouseenter", () => {
            console.log("Hovering over:", link);
            if (bxIcon && !link.classList.contains("active")) {
                bxIcon.style.display = "inline-block";
            }
        });

        // Saat kursor keluar dari teks, ikon bx disembunyikan
        link.addEventListener("mouseleave", () => {
            if (bxIcon && !link.classList.contains("active")) {
                bxIcon.style.display = "none";
            }
        });

        // Saat elemen diklik, ikon bx berubah menjadi bxs
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Reset semua link
            navLinks.forEach(l => {
                const bx = l.querySelector(".bx:not(.bxs)");
                const bxs = l.querySelector(".bxs");
                l.classList.remove("active");
                if (bx) bx.style.display = "none";
                if (bxs) bxs.style.display = "none";
            });

            // Set link yang diklik menjadi aktif
            link.classList.add("active");
            if (bxsIcon) bxsIcon.style.display = "inline-block";
            if (bxIcon) bxIcon.style.display = "none";
        });
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.querySelector('.file-selector-input');
    const dropArea = document.querySelector('.drop-section');
    const dropHere = document.querySelector('.drop-here');
    const browseButton = document.querySelector('.file-selector');

    // Fungsi untuk menampilkan nama file yang dipilih
    function handleFiles(files) {
        for (let i = 0; i < files.length; i++) {
            console.log('File uploaded:', files[i].name);

        }
    }

    // Event listener untuk input file
    fileInput.addEventListener('change', function (event) {
        const files = event.target.files;
        handleFiles(files);
    });

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    // Remove highlight when item is no longer hovering
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropArea.addEventListener('drop', (event) => {
        const dt = event.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    });

    // Click event for the browse button
    browseButton.addEventListener('click', function () {
        fileInput.click(); // Trigger the file input click
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropHere.classList.add('highlight'); // Add highlight class
    }

    function unhighlight() {
        dropHere.classList.remove('highlight'); // Remove highlight class
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const borderUpload = document.querySelector('.border-upload');
    const fileInput = document.getElementById('fileInput');

    // Event listener untuk border upload
    borderUpload.addEventListener('click', function () {
        fileInput.click(); // Trigger the file input click
    });

    // Event listener untuk input file
    fileInput.addEventListener('change', function(event) {
        const fileList = event.target.files;
        if (fileList.length > 0) {
            console.log('File selected:', fileList[0].name);
            // Lakukan sesuatu dengan file yang diupload, misalnya menguploadnya ke server
        }
    });
});