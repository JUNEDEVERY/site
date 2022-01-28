let header_burger = document.querySelector('.header_burger');
let header_main_menu = document.querySelector('.header_main_menu');

let body = document.querySelector('body');

header_burger.onclick = function () {
    header_burger.classList.toggle('active');
    header_main_menu.classList.toggle('active');

    body.classList.toggle('lock');
}