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
            // Create Dropzone reference for use in confirm button click handler
            var myDropZone = this;
            // Create the image editor overlay
            var editor = document.createElement('div');
            editor.style.position = 'fixed';
            editor.style.left = 0;
            editor.style.right = 0;
            editor.style.top = 0;
            editor.style.bottom = 0;
            editor.style.zIndex = 9999;
            editor.style.backgroundColor = '#000';
            document.body.appendChild(editor);
            // Create confirm button at the top left of the viewport
            var buttonConfirm = document.createElement('button');
            buttonConfirm.style.position = 'absolute';
            buttonConfirm.style.left = '10px';
            buttonConfirm.style.top = '10px';
            buttonConfirm.style.zIndex = 9999;
            buttonConfirm.textContent = 'Confirm';
            editor.appendChild(buttonConfirm);
            buttonConfirm.addEventListener('click', function() {
                // Get the canvas with image data from Cropper.js
                var canvas = cropper.getCroppedCanvas({
                    width: 256,
                    height: 256
                });
                // Turn the canvas into a Blob (file object without a name)
                canvas.toBlob(function(blob) {
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
                            // Return the file to Dropzone
                            done(blob);
                        });
                });
                // Remove the editor from the view
                document.body.removeChild(editor);
            });
            // Create an image node for Cropper.js
            var image = new Image();
            image.src = URL.createObjectURL(file);
            editor.appendChild(image);

            // Create Cropper.js
            var cropper = new Cropper(image, { aspectRatio: 1 });
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
        // var file = document.getElementById("uploadfile").value;
        // if (file == 0) {
        //     console.log("no files selected");
        // } else {
        //     jQuery('#page-detail-option .wrap-detail-option .wrap-detail-option-step .wrap-form-step .wrap-content ul li.step-2').addClass('active');
        //     jQuery('.tab-pane.step-2').addClass('active');
        //     jQuery('.tab-pane.step-2').addClass('show');
        //     jQuery('#page-detail-option .wrap-detail-option .wrap-detail-option-step .wrap-form-step .wrap-content ul li.step-1').removeClass('active');
        //     jQuery('.tab-pane.step-1').removeClass('active');
        // }
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
                equalTo: "#pass_register"
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