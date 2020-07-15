// -----------------slick----------
jQuery(document).ready(function() {
    jQuery('.best-slick').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
        ]
    });

    jQuery(".btn-prev").click(function(event) {
        event.preventDefault();
        jQuery(".best-slick").slick("slickPrev");
    })
    jQuery(".btn-next").click(function(event) {
        event.preventDefault();
        jQuery(".best-slick").slick("slickNext");
    })
});