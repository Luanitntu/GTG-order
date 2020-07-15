
// --------------button menu----------
jQuery(document).ready(function() {
    jQuery(".button-sticky").click(function() {
        jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile").toggleClass("active");
        jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile .navbar-sticky").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".button-sticky").is(e.target) && jQuery(".button-sticky").has(e.target).length === 0) {
            jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile").removeClass("active");
            jQuery("#header-page .sticky .wrap-menu .wrap-header-menu .navbar-menu-mobile .navbar-sticky").removeClass("active");
            jQuery('body').removeClass('show-scroll');
        }
    });
});
jQuery(document).ready(function() {
    registerPopup();
    click_tab();
    validate();
});
// ============================================================
function registerPopup() {
    jQuery('#header-page .sticky .wrap-menu .wrap-register .title-register a').click(function() {
        jQuery('#header-page .sticky .wrap-menu .wrap-register .login-form').css('display', 'block');
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery("#header-page .sticky .wrap-menu .wrap-register .login-form").is(e.target) && jQuery("#header-page .sticky .wrap-menu .wrap-register .login-form").has(e.target).length === 0) {
            jQuery('#header-page .sticky .wrap-menu .wrap-register .login-form').css('display', 'none');
        }
    });
}
// ============================================================
function click_tab() {
    jQuery('.list-tab-menu .nav-tabs > li > a').click(function() {
        jQuery('.list-tab-menu .nav-tabs > li').removeClass();
        jQuery(this).parent().addClass('active');
    });

    // jQuery("#page-use-template .wrap-template .wrap-product__template-step .wrap-form-step .wrap-content ul li a").click(false);

    jQuery('.next-step li').click(function() {
        var comment = $.trim($("#myTextArea").val());
        if (comment != "") {
            jQuery('#page-detail-option .wrap-detail-option .wrap-detail-option-step .wrap-form-step .wrap-content ul li.step-2').addClass('active');
            jQuery('.tab-pane.step-2').addClass('active');
            jQuery('.tab-pane.step-2').addClass('show');
            jQuery('#page-detail-option .wrap-detail-option .wrap-detail-option-step .wrap-form-step .wrap-content ul li.step-1').removeClass('active');
            jQuery('.tab-pane.step-1').removeClass('active');
        } else {
            jQuery('span.error').append('*The field is required.');
        }
    });
}
// ============================================================
function validate() {
    jQuery('#page-checkout .wrap-checkout .wrap-checkout-step .wrap-form-step .wrap-content .tab-content .next-step ul li.next-step-2').click(function() {
        jQuery('#page-checkout .wrap-checkout .wrap-checkout-step .wrap-form-step .wrap-content ul li.step-2').addClass('active');
        jQuery('.tab-pane.step-2').addClass('active');
        jQuery('.tab-pane.step-2').addClass('show');
        jQuery('#page-checkout .wrap-checkout .wrap-checkout-step .wrap-form-step .wrap-content ul li.step-1').removeClass('active');
        jQuery('.tab-pane.step-1').removeClass('active');
    });
    jQuery('#page-checkout .wrap-checkout .wrap-checkout-step .wrap-form-step .wrap-content .tab-content .next-step ul li.next-step-3').click(function() {
        jQuery('#page-checkout .wrap-checkout .wrap-checkout-step .wrap-form-step .wrap-content ul li.step-3').addClass('active');
        jQuery('.tab-pane.step-3').addClass('active');
        jQuery('.tab-pane.step-3').addClass('show');
        jQuery('#page-checkout .wrap-checkout .wrap-checkout-step .wrap-form-step .wrap-content ul li.step-2').removeClass('active');
        jQuery('.tab-pane.step-2').removeClass('active');
    });
}

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
// --------------sticky menu--------------
// jQuery(document).ready(function() {
//     jQuery(function() {
//         var width = jQuery(window).width();
//         var header = jQuery(".sticky");
//         offset = header.offset().top;
//         jQuery(window).scroll(function() {
//             if (jQuery(this).scrollTop() > offset && width > 992) {
//                 header.addClass("fixed");
//             } else {
//                 header.removeClass("fixed");
//             }
//         })
//     })
// });