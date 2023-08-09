var swiper = new Swiper(".container", {
    slidesPerView: 4,
    // spaceBetween: 0,
    loop: true,
    fade: true,
    contenSlide: true,
    // grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});
