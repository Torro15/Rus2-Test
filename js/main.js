const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('close');

burger.addEventListener('click', () => {
    menu.classList.add('open');
});

closeIcon.addEventListener('click', () => {
    menu.classList.remove('open');
});



var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 700,
    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 1,
            spaceBetween: 10,
        },

        420: { // Для экранов шириной шириной 420 и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },

        640: { // Для экранов шириной 640px и больше
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 700,
    breakpoints: {
        320: { // Для экранов шириной шириной 320 и больше
            slidesPerView: 1,
            spaceBetween: 10,
        },

        420: { // Для экранов шириной шириной 420 и больше
            slidesPerView: 2,
            spaceBetween: 20,
        },

        640: { // Для экранов шириной 640px и больше
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});