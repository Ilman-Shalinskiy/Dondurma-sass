'use strict';
window.addEventListener('DOMContentLoaded', () => {

    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide', 'fade-out');
            item.classList.remove('show', 'fade-in');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade-in');
        tabsContent[i].classList.remove('hide' , 'fade-out');
        tabs[i].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach ((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        }
    });

    hideTabContent();
    showTabContent();



    // hamburger

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger'),
    hamburgerOverley = document.querySelector('.hamburger__overley'),
    bodyActive = document.querySelector('body');
    

    function menuToggle() {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('menu_active');
        bodyActive.classList.toggle('body-hidden');
        hamburgerOverley.classList.toggle('hamburger__overley-show');
    }

    
    hamburger.addEventListener('click', () => {
        menuToggle();
    });
    hamburgerOverley.addEventListener('click', () => {
       if (hamburgerOverley.classList.contains('hamburger__overley-show')) {
        menuToggle();
       }
    });
    
    menuItem.forEach(item => { 
        item.addEventListener('click', () => {
            if (menu.classList.contains('menu_active')) {
                menuToggle();
            }
        });    
    });

    


 
});

