// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const elementos = document.querySelectorAll(
    '.card, .numero, .etapa, .section h2, .section > .container > p'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(el => {

    el.classList.add('hidden');

    observer.observe(el);

});
// =========================
// MENU ATIVO
// =========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const top = section.offsetTop - 140;

        if (scrollY >= top) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {

            link.classList.add('active');

        }

    });

});
