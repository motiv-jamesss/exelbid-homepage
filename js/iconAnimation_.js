var animation = 'rubberBand';
$('.icon').on('click', function () {
    $(this).toggleClass('icon-active');
});
$('.icon').on('click', function () {
    $(this).addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated ' + animation);
    });
});