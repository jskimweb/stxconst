window.onload = function () {
    // modal
    $('.modal').click(function () {
        $(this).fadeOut();
    });

    // gnb hover
    const mainMenu = $('.dep01>li');
    const header = $('.header');
    const openHeader = 'header--open';

    mainMenu.hover(function () {
        header.addClass(openHeader);
    }, function () {
        header.removeClass(openHeader);
    });

    // move to business
    $('.go-busi').click(function () {
        let busiTop = $('.busi').offset().top;
        $('html, body').animate({
            scrollTop: busiTop
        });
    });
}