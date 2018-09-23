$(document).ready(function(){
    var myNavBar = {
        flagAdd: true,
        elements: [],
        init: function (elements) {
            this.elements = elements;
        },
        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },
        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }
    };
    myNavBar.init(  [
        "header"
    ]);
    function offSetManager(){
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }
    }
    window.onscroll = function(e) {
        offSetManager();
    }
    offSetManager();
    
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