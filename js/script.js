$(document).ready(function() {
    $('.gnb').mouseenter(function() {
        $('.header').addClass('header_open');
    });

    $('.gnb').mouseleave(function() {
        $('.header').removeClass('header_open');
    });

    //사업파트 이동
    $('.move-cate').click(function(e) {
        // 클릭된 정보 차단
        // href를 막는다.
        e.preventDefault();
        var tgY = $('.cate').offset().top;
        $('html, body').animate({
            scrollTop: tgY
        });
    });

    // 안내창 닫기
    $('.modal').click(function() {
        $('.modal').fadeOut();
    });
});