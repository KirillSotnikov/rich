$('.slider-juice').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-icons',
});
$('.slider-icons').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    verticalSwiping: true,
    vertical: true,
    focusOnSelect: true,
    asNavFor: '.slider-juice',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 766,
            settings: {
                slidesToShow: 3,
                verticalSwiping: false,
                vertical: false,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                verticalSwiping: false,
                vertical: false,
            }
        }
    ],
    prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow.svg"></div>',
    nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow.svg"></div>',
});
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 800);
    return false;
};
$('.btn.open').click(function() {
    $('.modal-container').addClass('active');
});
$('.close').click(function() {
    $('.modal-container').removeClass('active');
});