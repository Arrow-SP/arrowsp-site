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
