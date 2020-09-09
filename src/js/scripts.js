'use strict'

// dropdown
function toggleMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-opened');
}

// close menu onclick menu__link
function menuLinks(){
    const navMenu = document.querySelector('.menu');
       if(window.innerWidth <= 992) {
           navMenu.addEventListener('click',function(event) {
               let menuLink = event.target.classList.contains('menu__link');
                   menuLink ? document.body.classList.remove('menu-opened') : null;
           });
       }
}
window.addEventListener('resize', menuLinks);
menuLinks();

// swiper
var swiper = new Swiper('.swiper-container', {
    // spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    navigation: {
        nextEl: '.swiper-btns__btn--next',
        prevEl: '.swiper-btns__btn--prev',
    },
});