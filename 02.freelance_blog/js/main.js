$(document).ready(function(){
    var navbarHeight = $('.navbar').height();
    $('.header').height($(window).height()- 0);

    $(".navbar a").click(function(){
        var jump = '#' + $(this).data('value');
        var new_pos = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: new_pos.top },800);
        
    });
});