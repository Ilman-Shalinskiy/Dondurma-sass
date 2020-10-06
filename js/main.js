'use strict';

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











window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    bodyActive = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('menu_active');
        bodyActive.classList.toggle('body-hidden');
    });

    

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            menu.classList.toggle('menu_active');
            bodyActive.classList.toggle('body-hidden');
        });
    });

    
});

