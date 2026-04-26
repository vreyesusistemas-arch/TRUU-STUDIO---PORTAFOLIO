document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    const hero = document.querySelector('.hero');
    
    if (!header || !hero) {
        console.error('No se encontró el header o el hero');
        return;
    }
    
    const heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', function() {
        // Si el scroll supera la altura del hero, ocultamos el header
        if (window.scrollY > heroHeight) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
    });
});
