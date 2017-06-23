// homepage slider
$('.homepage-slider').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items:1,
    autoplay:true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut'
})
// /homepage slider

// homepage clients quotes slider
$('.ninth-section-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:1,
    items:1,
    margin: 50,
    autoplay:true,
    autoplayTimeout: 5000,
})
// homepage clients quotes slider

// site first carousel
$('.site-first-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:1,
    center:true,
    margin: 20,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: 5000,
    responsive : {
        0: {
            items:1,
            autoHeight:true
        },
        992: {
            items:2,
        },
        1200: {
            items:4,
        }
    }
})
// /site first carousel

// fonctionnalites-first-carousel
$('.fonctionnalites-first-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots:1,
    items:1,
    center:true,
    autoplay:true,
    autoplayTimeout: 5000,
})
// /fonctionnalites-first-carousel

// fonctionnalites-second-carousel
$('.fonctionnalites-second-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:1,
    items:1,
    center:true,
    autoplay:true,
    autoplayTimeout: 5000,
})
// /fonctionnalites-second-carousel

// mobileNavTrigger
$(document).ready(function () {
    $('.mobile-nav-trigger').click(function () {
        $('body').toggleClass('no-scroll');
        $('.main-navbar').fadeToggle(700, function () {});
    });
    $('.tabbed-nav-trigger').click(function () {
        $(this).toggleClass('clicked');
        $('.tabbed-nav').slideToggle(500, function () {
        });
    });
});
// /mobileNavTrigger

// carousels
$('.flip-carousel').flipster({
    style: 'carousel',
    start: 0,
    loop: true,
    autoplay: 3000,
    scrollwheel: false,
    spacing: -0.5,
    buttons: true,
});
// /carousels

// page scrolling nagitaion
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 230){
//         $(".page-tabbed-nav").addClass('nav-scrolled');
//         $(".content-sections>section .first-section").addClass('scrolled');
//     }
//     else {
//         $(".page-tabbed-nav").removeClass('nav-scrolled');
//         $(".content-sections>section .first-section").removeClass('scrolled');
//     }
// });
// $(window).scroll();
// $(function() {
//     $(document).on('click', '.tabbed-nav a, .title-link', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top - 5
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });
// $( ".tabbed-nav a" ).click(function() {
//     if ($(window).width() < 992){
//         $('.tabbed-nav-trigger').toggleClass('clicked');
//         $('.tabbed-nav').slideToggle(500, function () {
//         });
//     }
// });
// /page scrolling nagitaion

// forms validation
$("#contact-page-form, #logiciel-page-form-1, #logiciel-page-form-2, #logiciel-page-form-3, #logiciel-page-form-4, #logiciel-page-form-5, #logiciel-page-form-6, #logiciel-page-form-7, #logiciel-page-form-8, #logiciel-page-form-modal-1, #logiciel-page-form-modal-2, #logiciel-page-form-modal-3, #logiciel-page-form-modal-4, #logiciel-page-form-modal-5, #logiciel-page-form-modal-6, #logiciel-page-form-modal-7, #creation-page-form-1, #creation-page-form-2, #creation-page-form-3, #creation-page-form-modal-1, #creation-page-form-modal-2, #creation-page-form-modal-3, #ecommunication-page-form-1, #ecommunication-page-form-2, #ecommunication-page-form-3, #ecommunication-page-form-modal-1, #ecommunication-page-form-modal-2, #enterprise-page-form, #enterprise-page-form-modal, #referencement-page-form, #referencement-page-form-modal, #sav-page-form, #sav-page-form-modal").validetta({
    realTime: true,
    display : 'inline',
    errorTemplateClass : 'validetta-inline',
    bubblePosition: 'bottom',
    validators: {
        regExp: {
            tel : {
                pattern : /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/,
                errorMessage : 'Le champ "Téléphone" n\'est pas au format attendu.<br><br>Exemples de formats acceptés :<br><i>0123456789<br>01.23.45.67.89<br>01 23 45 67 89<br>01-23-45-67-89<br>0033123456789<br>0033 123456789<br>+33123456789<br>+33923456789<br>(+33)1.23 45-6789<br>(+33) 123456789<br>0034123456789</i>'
            }
        }
    }





});
// /forms validation
// -----------my

