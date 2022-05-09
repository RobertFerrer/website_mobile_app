$(window).on("load", function() {
    /*---------preloader------*/
    $(".preloader").fadeOut("slow");
});

$(document).ready(function() {
    /*------Navbar shrink--------*/
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    /*------video popup--------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function() {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        } else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc)
            }
        }
    });
    $(document).ready(function() {
        $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        });
        $('.scroll-up-btn').click(function() {
            $('html').animate({ scrollTop: 0 });
        });


        var typed = new Typed(".typing", {
            strings: ["Developer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })

    });
    /*------carousel features---*/
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            770: {
                items: 1,
            },
            940: {
                items: 2,
            },
            1100: {
                items: 3,
            }

        }
    });
    /*------screenshot carousel features---*/
    $('.screenshot-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    /*------Testimonials carousel-------*/
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    /*------Pricing and Team carousel-------*/
    $('pricing-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    /*------Page Scrolling-------*/
    $.scrollIt({
        topOffset: -50
    });
    /*------Navbar collapse------*/
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

});