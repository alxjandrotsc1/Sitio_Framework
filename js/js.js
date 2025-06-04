document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('navbar-animada');


    if (typeof ScrollReveal !== "undefined") {

        ScrollReveal().reveal('.fade-in', {
            distance: '40px',
            duration: 1000,
            origin: 'top',
            easing: 'ease-out',
            reset: false
        });

        ScrollReveal().reveal('.fade-scroll', {
            distance: '30px',
            duration: 800,
            origin: 'bottom',
            interval: 200,
            easing: 'ease-out',
            reset: false
        });

        ScrollReveal().reveal('.album-card', {
            distance: '40px',
            duration: 900,
            origin: 'bottom',
            interval: 150,
            easing: 'ease-out',
            reset: false
        });
    } else {
        console.warn("ScrollReveal no está cargado. Revisa el enlace al CDN.");
    }
});
