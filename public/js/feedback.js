const feedbackAvatars = new Swiper('.feedback-avatars', {
    spaceBetween: 36,
    slidesPerView: 4,
    clickable: true,
    loop: true,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
}), feedbackAvatar = new Swiper('.feedback-avatar', {
    spaceBetween: 36,
    loop: true,
    loopedSlides: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: feedbackAvatars,
    },
});