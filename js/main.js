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
                items: 3,
            },
            1000: {
                items: 4,
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
    /*------Toggle theme light and dark------*/
    function toggleTheme() {
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark")
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        } else {
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    });

    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $("toggle-theme i").removeClass("fa-moon");
            $("toggle-theme i").addClass("fa-sun");
        } else {
            $("toggle-theme i").removeClass("fa-sun");
            $("toggle-theme i").addClass("fa-moon");
        }
    }

});