const links = document.querySelectorAll('.menu__link');
for (let link of links) {
    link.addEventListener('click', function (evt) {
        evt.preventDefault();
        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
