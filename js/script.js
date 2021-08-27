$(document).ready(function() {
    $('.gnb').mouseenter(function() {
        $('.header').addClass('header--open');
    });
    $('.gnb').mouseleave(function() {
        $('.header').removeClass('header--open');
    });

    $('.go-cate').click(function(event) {
        event.preventDefault();
        var tgY = $('.cate').offset().top;
        $('html, body').animate({
            scrollTop: tgY
        });
    });

    $('.modal').click(function() {
        $('.modal').fadeOut();
    });
});