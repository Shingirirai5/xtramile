/*
Copyright (c) 2017
[Master Stylesheet]
Template Name : Autopoint - Mechanic Auto Repairs HTML Template
Version    : 1.0
Author     : UISuMo Team
Author URI : https://uisumo.com
Support    : uisumo@gmail.com
*/

/*---------------------------------------------
Table of Contents
-----------------------------------------------

Custom Variable Declaration
Preloading
Navbar hide and show
Home slider
Mixitup - Portfolio Gallery
Team Slider
Partner slider
Customer Slider
Star Rating
Pricing Slider
Number counter
Expand div on click
Animations
Back to Top scroll
Search bar dropdown on click

----------------------------------------

[Major Colors]
#d00022 ~red
#777777 ~black

[Typography]
font-family: 'Roboto', sans-serif;
font-family: 'Exo', sans-serif;

---------------------------------------- */


/* Document Ready */

jQuery(document).ready(function() {

    "use strict";

    /* Vars */
    var owl, back, shipping, price, sync1, sync2, flag, duration, $searchlink, $searchbar, navbar;


    /* Page Pre Loading */
    $(window).load(function() { // makes sure the whole site is loaded
        $('.ap-loader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
    });
    /* end Page Pre Loading */


    /*stellarnav nav - responsive navbar*/
    jQuery('.stellarnav').stellarNav({
        theme: 'light'
    });
    /*stellarnav nav - responsive navbar*/


    //Owl Carousel - Home Slider
    $(".ap-home-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [
            "<i class=' fa fa-chevron-left'></i>", "<i class=' fa fa-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                nav: false,
                dots: true
            },
            992: {
                items: 1,
                nav: true,
                dots: false
            }
        },
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    /*end of home-slider*/

    /*Team slider _Owl  Carousal*/
    $(".team-slide").owlCarousel({
        items: 4,
        loop: true,
        lazyLoad: true,
        nav: true,
        navText: [
            "<i class=' fa fa-angle-right'></i>", "<i class=' fa fa-angle-left'></i>"
        ],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 2,
                nav: false,
                dots: true
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    /*end of Team slider*/


    /*Partner-slide at the bottom- Owl Carousal*/
    $(".ap-partner-slide").owlCarousel({
        items: 5,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            560: {
                items: 3
            },
            900: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    /*end of partner-slide*/


    /*home 3 customer slide-single*/
    $(".home3-customer-slide").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });
    /*end of home 3 customer slide*/


    /*customer-slick slide*/
    $('.customer-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }, {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    /*end ofcustomer-slick slide*/


    /*Gallery slider to sync - using SYNC Owl slider*/
    sync1 = $("#sync1");
    sync2 = $("#sync2");
    flag = 0;
    duration = 300;
    sync1.owlCarousel({
        items: 1,
        margin: 10,
        dots: false
    }).on('change.owl.carousel', function(e) {
        if (e.namespace && e.property.name === 'position' && !flag) {
            flag = true;
            sync2.trigger('to.owl.carousel', [e.relatedTarget.relative(e.property.value), duration, true]);
            flag = false;
        }
    });
    sync2.owlCarousel({
        items: 3,
        margin: 10
    }).on('click', '.owl-item', function(e) {
        e.preventDefault();
        sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
    }).on('change.owl.carousel', function(e) {
        if (e.namespace && e.property.name === 'position' && !flag) {
            flag = true;
            sync1.trigger('to.owl.carousel', [e.relatedTarget.relative(e.property.value), duration, true]);
            flag = false;
        }
    });
    /*end*/


    /*Filter gallery- portfolio- Using MIXITUP*/
    var filterList = {
        init: function() {
            // MixItUp plugin
            // http://mixitup.io
            $('#filter-images').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.all,.oil,.wash,.tyre,.wheel,.battery' // show all app tab on first load
                }
            });
        }
    };
    // Run the show!
    filterList.init();
    /*end*/


    /* Star Rating Plugin - https://github.com/Jacob87/raty-fa*/
    $('.star').raty({
        score: 5
    });
    /*end of star rating*/


    /*pricing slider to show the range of input*/
    price = $('#widget-price-filter');
    if (price.length) {
        $("#widget-price-filter").noUiSlider({
            start: [20, 35],
            connect: true,
            step: 1,
            range: {
                'min': 10,
                'max': 50
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: ' £ ',
            })
        });
        price.Link('lower').to($('#value-lower'));
        price.Link('upper').to($('#value-upper'));
    }
    /*end*/


    /* Increase decreasing Input number counter */
    $('.top-addon').on('click', function() {
        var $qty = $(this).closest('.ap-input-count').find('input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.btm-addon').on('click', function() {
        var $qty = $(this).closest('.ap-input-count').find('input');
        var currentVal = parseInt($qty.val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
        }
    });
    /* end*/


    /* Expand div when checkbox is checked */
    shipping = $('.ap-change-shipping');
    $('#ship-new-address').change(function() {
        if ($(this).is(":checked")) {
            shipping.addClass("expand-div");
        } else {
            shipping.removeClass("expand-div");
        }
    });
    /*end*/


    /* Grid  View */
    $(".grid").masonry({
        itemSelector: ".grid-item"
    });
    /* end Grid View */


    /*Animations*/
    new WOW().init();


    /*Scroll To Top -back-to-top */
    back = $("#back-to-top");
    $(window).scroll(function() {
        $(this).scrollTop() > 50 ? back.fadeIn() : back.fadeOut()
    }), back.click(function() {
        return back.tooltip("hide"), $("body,html").animate({
            scrollTop: 0
        }, 800), !1
    }), back.tooltip("show");
    /*back-to-top*/


    /*Search dropdrown or search expansion on click*/
    $searchlink = $('#searchtoggl span');
    $searchbar = $('#searchbar');
    $('.navbar-right li a').on('click', function(e) {
        e.preventDefault();
        if ($(this).attr('id') == 'searchtoggl') {
            if (!$searchbar.is(":visible")) {
                // if invisible we switch the icon to appear collapsable
                /*   $searchlink.removeClass('fa-search').addClass('fa-search-minus');*/
            } else {
                // if visible we switch the icon to appear as a toggle
                $searchlink.removeClass('fa-search-minus').addClass('fa-search');
            }
            $searchbar.slideToggle(300, function() {
                // callback after search bar animation
            });
        }
    });
    //    $('#searchform').submit(function(e){
    //        e.preventDefault(); // stop form submission
    //    });
});