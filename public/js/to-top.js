const $btnTop = $('.to-top');
const $windowHeight = $(window).height();

$btnTop.on('click', () => {
    $('html').animate({scrollTop: 0}, 700);
});

$('body').on('click', '.menu-item a', event => {
    const targetId = $(event.target).attr('href');
    const anchorOffset = $(`${targetId}`).offset();
    $('html').animate({scrollTop: anchorOffset.top}, 700);
});


$(window).on('scroll', () => {
    if ($(window).scrollTop() >= $windowHeight) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});