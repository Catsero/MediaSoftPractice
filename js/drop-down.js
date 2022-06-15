'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const dropDownMenus = document.querySelectorAll('.navigation-section');
    
    function toggleMenu(menu) {
        menu.classList.toggle('colapsed');
    }


    for (let i = 0; i < dropDownMenus.length; i++) {
        let headerContainer = dropDownMenus[i].querySelector('.popup-about');
        headerContainer.addEventListener('click', () => {
            toggleMenu(dropDownMenus[i]);
        });
    }
})