new Swiper('.concert__slider .image-slider', {
    navigation: {
        nextEl: '.concert__slider .swiper-button-next',
        prevEl: '.concert__slider .swiper-button-prev'
    },
    pagination: {
        el: '.concert__slider .swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    speed: 1200,
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 35,
        },
        768: {
            slidesPerView: 1.5,
            slidesPerGroup: 2,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 35,
        },
    }
});

new Swiper('.partners__slider .image-slider', {
    navigation: {
        nextEl: '.partners__slider .swiper-button-next',
        prevEl: '.partners__slider .swiper-button-prev'
    },
    pagination: {
        el: '.partners__slider .swiper-pagination',
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    slidesPerGroup: 1,
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});

new Swiper('.product__slider .image-slider', {
    slidesPerGroup: 2,
    grabCursor: true,
    pagination: {
        el: '.product__slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.8,
            spaceBetween: 15,
        },
        380: {
            slidesPerView: 2.2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});