'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const buttonOpen = document.querySelector('.header__burger-button');
    const buttonClose = document.querySelector('.button-close');
    const menu = document.querySelector('.popup-menu');
    const overlay = document.querySelector('.popup-menu__grey-overlay');

    function openMenu() {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('popup-menu_enable');
        }, 10);
    }

    function closeMenu() {
        menu.classList.remove('popup-menu_enable');
        document
            .querySelector('.popup-menu__content')
            .addEventListener('transitionend', () => {
                menu.style.display = 'none';
            }, {once : true});
    }
    
    buttonOpen.addEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu);
})