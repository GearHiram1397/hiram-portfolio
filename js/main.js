/*
    Template Name    : Tona - Personal Porfolio Landing Page Template
    Author           : AvailableCoder
    Version          : 1.0
    Created          : 2021
    File Description : Main javascript file of the template
*/

$(document).ready(function () {

    // Scrolling Animations
    if ($(window).width() < 991) {
        $("body *").removeClass("wow");
    }
    var wow = new WOW();
    wow.init();
    // ---------------

    // Preloader
    $(".preloader .loader").delay(750).fadeOut(0);
    $(".preloader .load-splitter").addClass("loading-end-split");
    $(".preloader").delay(1500).fadeOut(0);
    // ---------------

    // Heading animation
    $(".main-heading").each(function(){
        $(this).appear(function() {
            $(this).children("h2").removeClass("main-head-animation")
        });
    });
    // ---------------

    // Function on scrolling
    $(window).scroll(function(){
        // Activating header links on scrolling
        $("section").each(function(){
            if ($(window).scrollTop() > $(this).offset().top - 1) {
                var sectionID = $(this).attr('id');
                $("nav li a[data-scroll='" + sectionID +"']")
                .addClass('active').parent()
                .siblings().find('a').removeClass('active');
            }
        });
        // ---
        // Header animation 
        if ($(this).scrollTop() > 200) {
            $("header").removeClass("header-sliding");
        } else {
            $("header").addClass("header-sliding");
        }
        // ---
    });
    if ($(window).width() < 992) {
        $(".menu-toggle-btn").addClass("collapsed")
    }
    // ---------------

    // Functions on resizing
    if ($(window).width() < 992) {
        $("header nav .ul-cont").on('click' , 'li a' ,function(){
            $(this).parents(".ul-cont").removeClass("show");
            $(".menu-toggle-btn").addClass("collapsed");
        });
    }

    $(window).resize(function () { 
        if ($(window).width() < 992) {
            $("header nav .ul-cont").on('click' , 'li a' ,function(){
                $(this).parents(".ul-cont").removeClass("show");
                $(".menu-toggle-btn").addClass("collapsed");
            });
            if (!$(this).next(".ul-cont").hasClass("show")) {
                $(".menu-toggle-btn").addClass("collapsed")
            } else {
                $(".menu-toggle-btn").addClass("collapsed")
            }
        }
    });
    // ---------------

    // Home Text change
    $('#home-text-changer').animatedHeadline({
        animationType: 'clip'
    });
    // ---------------


    // Work Counter
    $(".odometer").each(function(){
        $(this).appear(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    // ---------------

    // Portfolio section
    // shuffiling images
    var mixer = mixitup('#portfolio-shuffle');
    $("section.portfolio .prog-filter ul").on('click' , 'li' , function(){
        $(this).addClass("active").siblings().removeClass("active")
    });
    // ---------------

    // Skills Progress
    $(".skills .skill-field .skill-piece").each(function(){
        $(this).appear(function() {
            var liquid_load = $(this).children(".skill-loader").find("span.loader-liquid");
            var circle_load = $(this).children(".skill-loader").find("span.loader-value");
            liquid_load.css({
                width: liquid_load.data("progress")
            });
            circle_load.css({
                left: circle_load.text()
            })
        });
    });
    // ---------------

    // Counter
    $('.odometer').appear(function() {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    // ---------------

    // Review Slider
    var review_image = new Swiper('.review-swiper-image', {
        effect: 'cards',
        loop: "true",
        grabCursor: true,
    });
    var review_text = new Swiper('.review-swiper-text', {
        spaceBetween: 30,
        allowTouchMove: false,
        loop: "true",
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    review_image.controller.control = review_text;
    review_text.controller.control = review_image;
    // ---------------

    // Contact Form Validation & Activation
    $("form.contact-form").submit(function (e) { 
        e.preventDefault(e);
        $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize()
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $('.contact-message').fadeIn();
            $('.contact-message').text(response);
            $("form").find("input:not(input[type='submit'])").val('');
            $("form").find("textarea").val('');
            $('.contact-message').delay(3000).fadeOut()
        })
        .fail(function(data) {
            // Set the message text.
            if (data.responseText !== '') {
                $('.contact-message').fadeIn();
                $('.contact-message').text(data.responseText);
                $("form").find("input:not(input[type='submit'])").val('');
                $("form").find("textarea").val('');
                $('.contact-message').delay(3000).fadeOut()
            } else {
                $('.contact-message').fadeIn();
                $('.contact-message').text('Oops! An error occured and your message could not be sent.');
                $("form").find("input:not(input[type='submit'])").val('');
                $("form").find("textarea").val('');
                $('.contact-message').delay(3000).fadeOut()
            }
        });
    });
    // ---------------
    
    // Fancy cursor
    var is_mobile = 'No';
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        is_mobile = 'Yes';
    }
    if (is_mobile == "No") {
        $(window).on('mousemove', function(e) {  
            $(".fancy-cursor-dot").css({
                'transform': "translate(" + e.clientX + "px," + e.clientY + "px)"
            });
            function delaying_cursor_circle() {     
                $(".fancy-cursor-circle").css({
                    'transform': "translate(" + e.clientX + "px," + e.clientY + "px)"
                });
            }
            setTimeout(delaying_cursor_circle, 25)
        });
        // Add hover class
        $('a, button, .cursor-pointer-hover').on('mouseenter', function() {
            $(".fancy-cursor-dot").css({
                width: "60px",
                height: "60px",
                marginTop: "-30px",
                marginLeft: "-30px",
                opacity: "0.5",
            });
            $(".fancy-cursor-circle").hide();
        });
        // Remove hover class
        $('a, button, .cursor-pointer-hover').on('mouseleave', function() {
            $(".fancy-cursor-dot").css({
                width: "5px",
                height: "5px",
                marginTop: "-2.5px",
                marginLeft: "-2.5px",
                opacity: "1"
            });
            $(".fancy-cursor-circle").show();
        });
        // ---------------
    } else {
        $(".fancy-cursor-dot").remove()
        $(".fancy-cursor-circle").remove()
    }

});