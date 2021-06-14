
const btnBurger = document.querySelector('.header__hamburger');
const body = document.querySelector('body');
const overlay = document.querySelector('.header__links');

btnBurger.addEventListener('click', function(){

    if (!btnBurger.classList.contains('open')) {
        btnBurger.classList.add('open');
        overlay.classList.add('show');
        body.classList.add('noscroll');
    } else {
        btnBurger.classList.remove('open');
        overlay.classList.remove('show');
        body.classList.remove('noscroll');
    }
});