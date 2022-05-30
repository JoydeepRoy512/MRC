$(document).ready(function () {
    "user strict";
    $(".testimonial").owlCarousel(
        {
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav: true,
            center: false,
            autoplay: true,
            autoplayTimeout:3000,
            dots:true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true,
                    
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

