$(document).ready(function () {
    "user strict";
    $(".testimonial").owlCarousel(
        {
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav: true,
            center: false,
            video: true,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },

                600: {
                    items: 1,
                    nav: true,
                    autoplay: false

                },
                900: {
                    items: 1,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,

                }
            }
        }
    )

    $(".unit-crousel").owlCarousel(
        {
            loop: true,
            margin: 15,
            autoplay: true,
            responsiveClass: true,
            nav: false,
            center: false,
            video: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    autoplayTimeout: 1500,
                },

                600: {
                    items: 2,
                    autoplay: true

                },
                900: {
                    items: 3,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,

                }
            }
        }
    )

    $(".consultant").owlCarousel(
        {
            loop: true,
            margin: 15,
            autoplay: true,
            responsiveClass: true,
            nav: false,
            center: false,
            video: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    autoplayTimeout: 1500,
                },

                600: {
                    items: 2,
                    autoplay: true

                },
                900: {
                    items: 3,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,

                }
            }
        }
    )

    $(".doctor-comment").owlCarousel(
        {
            loop: true,
            margin: 15,
            autoplay: true,
            responsiveClass: true,
            nav: false,
            center: false,
            video: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    autoplayTimeout: 1500,
                },

                600: {
                    items: 2,
                    autoplay: true

                },
                900: {
                    items: 3,
                    nav: false,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true,

                }
            }
        }
    )

    $(".nav-item").click(function () {
        // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
        if ($(this).hasClass("active")) {
            $(this).addClass("active");

        }
        // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
        else {
            $(".nav-item").removeClass("active");
            $(this).addClass("active");
        }

    })

})

