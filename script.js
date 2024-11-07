// Toggle Navbar
document.getElementById('navbar-toggle').addEventListener('click', function () {
    const navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
});


// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark');
});
window.addEventListener('resize', function () {
    const navbarLinks = document.getElementById('navbar-links');
    if (window.innerWidth > 768) {
        navbarLinks.classList.remove('active');
    }
});

// Scroll to Top Button
window.onscroll = function () {
    var backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
