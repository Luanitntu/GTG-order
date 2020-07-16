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
        var file = document.getElementById("uploadfile").files.length;
        if (file == 0) {
            console.log("no files selected");
        } else {
            jQuery('#page-detail-option .wrap-detail-option .wrap-detail-option-step .wrap-form-step .wrap-content ul li.step-2').addClass('active');
            jQuery('.tab-pane.step-2').addClass('active');
            jQuery('.tab-pane.step-2').addClass('show');
            jQuery('#page-detail-option .wrap-detail-option .wrap-detail-option-step .wrap-form-step .wrap-content ul li.step-1').removeClass('active');
            jQuery('.tab-pane.step-1').removeClass('active');
        }
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