
const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
});
