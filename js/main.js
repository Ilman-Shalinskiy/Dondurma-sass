
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