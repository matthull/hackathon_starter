$(function() {
    
    // jQuery for page loader
    $(window).load(function() {
        $('#rj-loader').fadeOut('fast');
    });
    
    
    // jQuery for the Side Menu
    $('#rj-sidebar').click(function(e) {
        e.preventDefault();
        $('#sidebar-wrapper').toggleClass('active').css('box-shadow', '0 0 13px rgba(0, 0, 0, 0.2)');
    });
    
    $('#menu-close').click(function(e) {
        e.preventDefault();
        $('#sidebar-wrapper').toggleClass('active').css('box-shadow', 'none');
    });
    
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        
        var offset = $('body').attr('data-offset');
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    
    // jQuery sticky
    $("#navigation").sticky({topSpacing: 0});
});