$(document).ready(function(){
    $('.location__carousel').slick({
        speed: 1400,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><span>&#8249;</span></button>',
        nextArrow: '<button type="button" class="slick-next"><span>&#8250;</span></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            speed: 500,
            arrows: false,
          }
        }
      ]
    });
  });



window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            menu.classList.toggle('menu_active');
        })
    })
})