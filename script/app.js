
const BRAND_COLOR = '#0d0d3f';

const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = BRAND_COLOR;
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

mobile_menu_item.forEach(item => {
    item.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});