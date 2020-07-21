Dropzone.autoDiscover = false;
jQuery(document).ready(function() {
    $("#myDropzone").dropzone({
        url: "/file/post",
        paramName: "file",
        uploadMultiple: true,
        complete: function(file) {
            if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
                alert('Complete');
            }
        },
        success: function(file, response) {
            console.log('asdff');
            alert(response);
        },
        transformFile: function(file, done) {
            var myDropZone = this;
            var doka = Doka.create();
            // Edit the file and wait for confirm
            doka.edit(file).then(function(output) {
                // Get blob from Doka output object
                var blob = output.file;
                // Create a new Dropzone file thumbnail
                myDropZone.createThumbnail(
                    blob,
                    myDropZone.options.thumbnailWidth,
                    myDropZone.options.thumbnailHeight,
                    myDropZone.options.thumbnailMethod,
                    false,
                    function(dataURL) {
                        // Update the Dropzone file thumbnail
                        myDropZone.emit('thumbnail', file, dataURL);
                        // Tell Dropzone of the new file
                        done(blob);
                    }
                );
            });
        }
    });
});
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
    validateCheckout();
    showPass();
    validateRegister();
    checked();
});
// =======================PopUP=====================================
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
// =================== Click Step =========================================
function click_tab() {
    jQuery('.list-tab-menu .nav-tabs > li > a').click(function() {
        jQuery('.list-tab-menu .nav-tabs > li').removeClass();
        jQuery(this).parent().addClass('active');
    });

    // jQuery("#page-use-template .wrap-template .wrap-product__template-step .wrap-form-step .wrap-content ul li a").click(false);

    jQuery('.next-step li').click(function() {
        var comment = $.trim($("#myTextArea").val());
        var file = $.trim($(".dz-image img").attr("src"));
        // console.log(file);
        if (comment != "" || file != 0) {
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
// =========================Page Check Out===================================
function validateCheckout() {
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
// =================Show Password
function showPass() {
    var type_pass = jQuery('#page-register .wrap-register .wrap-content__register .wrap-register__form .password__register .type__pass li.show-pass');
    var re_pass = jQuery('#page-register .wrap-register .wrap-content__register .wrap-register__form .password__register .re__pass li.show-pass');

    type_pass.mouseup(function() {
        var pass = document.getElementById("type-password");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    });
    type_pass.mousedown(function() {
        var pass = document.getElementById("type-password");
        if (pass.type === "password") {
            pass.type = "text";
        }
    });

    re_pass.mouseup(function() {
        var pass = document.getElementById("confirm-password");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    });
    re_pass.mousedown(function() {
        var pass = document.getElementById("confirm-password");
        if (pass.type === "password") {
            pass.type = "text";
        }
    });
}
// ================Page Register
function validateRegister() {
    jQuery("#form-register").validate({
        rules: {
            email_register: {
                required: true,
                email: true
            },
            pass_register: {
                required: true,
                minlength: 6
            },
            confirm_pass: {
                required: true,
                minlength: 6,
                equalTo: "#type-password"
            },
        },
        messages: {
            email_register: "The field is required",
            pass_register: {
                required: 'The field is required',
                minlength: 'Please enter the least 6 characters'
            },
            confirm_pass: {
                required: 'The field is required',
                minlength: 'Please enter the least 6 characters',
                equalTo: "These passwords don't match"
            },
        }
    });
}

function checked() {
    var item_checked1 = jQuery('.wrap-form-billing .wrap-billing input[type="text"]');
    var item_checked2 = jQuery('.wrap-form-billing .wrap-billing select');
    var item_checked3 = jQuery('.wrap-form-billing .wrap-billing input[type="tel"]');

    $('#check_add').click(function() {
        //check if checkbox is checked
        if ($(this).is(':checked')) {
            item_checked1.attr('disabled', true); //disable input
            item_checked2.attr('disabled', true); //disable input
            item_checked3.attr('disabled', true); //disable input
        } else {
            item_checked1.removeAttr('disabled'); //enable input
            item_checked2.removeAttr('disabled'); //enable input
            item_checked3.removeAttr('disabled'); //enable input
        }
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