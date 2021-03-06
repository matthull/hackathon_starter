$(function() {

    // jQuery for page loader
    $(window).load(function() {
        $('#rj-loader').fadeOut('fast');
    });


    // jQuery sticky
    $('.rj-navbar').sticky({topSpacing: 0});


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e) {
            e.preventDefault();

            var $anchor = $(this);

            var offset = $('#navigation').attr('offset');

            if($('.rj-navbar').hasClass('rj-side-menu') && $(window).width() >= 992){
                $('body').data('offset', 1);
                offset = $('body').data('offset');
            }

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
        });
    };

    var stickySideMenu = function(){
        var navbar = $('.rj-navbar.rj-side-menu');

        if ($(window).width() >= 992) {
            navbar.unstick();
        }
        else
        {
            navbar.unstick();
            navbar.sticky({topSpacing: 0});
        }
    };

    pageScroll();
    stickySideMenu();

    window.onresize = function(){
        pageScroll();
        stickySideMenu();
    };


    // jQuery owl carousel
    $('#carousel-who-we-are').owlCarousel({
        autoPlay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });


    // Contact Form Request
    $('.validate').validate();

    $(document).on('submit', '#contact-us-form', function(e) {
        e.preventDefault();

        $('.form-respond').html("<div class='content-message'><i class='fa fa-refresh fa-spin fa-4x'></i> <h2>Loading..</h2></div>");

        $.ajax({
            url: $('#contact-us-form').attr('action'),
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(data) {
                $('.form-respond').html("<div class='content-message'><i class='fa fa-rocket fa-4x'></i> <h2>Thanks for your interest!</h2> <p>You'll be hearing from us soon.</p></div>");
            },
            error: function(xhr, err) {
                $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle fa-4x'></i> <h2>Error sending</h2> <p>Try again later.</p></div>");
            }
        });
    });
});
