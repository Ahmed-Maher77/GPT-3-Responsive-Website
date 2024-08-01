
// Navbar
const header = document.querySelector('#header');
const navLinks = document.querySelectorAll('#header .nav-link');
const navToggler = document.querySelector('#header .navbar-toggler');
const togglerIcon = navToggler.querySelector('span');
navLinks.forEach(link => {
    link.onclick = function() {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    }
})
navToggler.onclick = function() {
    header.classList.toggle('active');
    togglerIcon.classList.toggle('fa-xmark')
}
// change the background when scroll
window.onscroll = changeBackground;
function changeBackground() {
    if (scrollY > 100) {
        header.classList.add('scroll-bg')
    } else {
        header.classList.remove('scroll-bg')
    }
}
changeBackground()