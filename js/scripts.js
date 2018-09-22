$(document).ready(function(){
    $(".header-mob-btn").on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".layout, .header-nav").toggle($(this).hasClass("active"));
    });
    $('.layout').click(function() {
        $(".header-mob-btn").removeClass("active");
        $(".layout, .header-nav").hide('fast');
    });

    if ( $(".top-slider").length ) {
        $('.top-slider').slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: false,
            autoplaySpeed: 5000,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
    

    // var counter = false;
    // function gallery() {
    //     if ( window.matchMedia("(max-width:800px)").matches && counter == false ) {
    //         $('.gallery').slick({
    //             lazyLoad: 'ondemand',
    //             dots: true,
    //             arrows: false,
    //             autoplay: true,
    //             autoplaySpeed: 10000,
    //             infinite: true,
    //             speed: 500,
    //             fade: true,
    //             cssEase: 'linear',
    //             swipe: true,
    //             swipeToSlide: true
    //         });
    //         counter = true;
    //     } else if ( window.matchMedia("(min-width:801px)").matches && counter == true ) {
    //         $('.gallery').slick('unslick');
    //         counter = false;
    //     }
    // };
    // if ( $(".gallery").width() > 0 ) {
    //     gallery();
    //     $(window).resize(function() {
    //         gallery();
    //     });
    // }

    // $('.service-nav a').on('click', function (e) {
    //     e.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     }, 1000);
    // });
});