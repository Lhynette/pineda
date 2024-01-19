
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = function() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = function() {
    sections.forEach(function(sec) {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(function(links) {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .blog-container, .services-box, .contact form', { origin:
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


var typed = new Typed('.multiple-text',{
    strings: ['2nd-Year IT Student', 'University Scholar'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});