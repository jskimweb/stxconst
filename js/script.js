window.onload = function () {
    // 모달창 닫기
    const modal = $('.modal');
    const modalBox = $('.modal-box');
    const modalClose = $('.modal__close');

    modalClose.click(function() {
        modal.stop().fadeOut();
    });

    modal.click(function () {
        $(this).stop().fadeOut();
    });
    
    modalBox.click(function(event) {
        event.stopPropagation();
    });

    // gnb 보이기/숨기기
    const mainMenu = $('.dep01>li');
    const header = $('.header');
    const openHeader = 'header--open';

    mainMenu.hover(function () {
        header.addClass(openHeader);
    }, function () {
        header.removeClass(openHeader);
    });

    // 버튼 클릭 시 Business로 이동
    const goBusi = $('.go-busi');
    const busi = $('.busi');

    goBusi.click(function () {
        let busiTop = busi.offset().top;
        $('html, body').animate({
            scrollTop: busiTop
        });
    });
}