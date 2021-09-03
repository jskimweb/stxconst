$(document).ready(function() {
    $('.gnb').mouseenter(function() {
        $('.header').addClass('header--open');
    });
    $('.gnb').mouseleave(function() {
        $('.header').removeClass('header--open');
    });

    $('.go-busi').click(function() {
        var tgY = $('.busi').offset().top;
        $('html, body').animate({
            scrollTop: tgY
        });
    });

    $('.modal').click(function() {
        $('.modal').fadeOut();
    });
});