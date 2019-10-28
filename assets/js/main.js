(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".porduct-list").masonry();

        $(".home-page-slides").owlCarousel({
            responsive: {
                0:{
                    items: 1
                },
                1200:{
                    items: 1
                },
                1300:{
                    items: 1
                }
            },
            loop: true,
            autoplay: true,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        });

        $(".product-promotion").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
        });

        $(".menu-trigger").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });
        
        $(".menu-close, .off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });

        $(".search-click").on("click", function() {
            $(".search-popup, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".search-close, .off-canvas-overlay").on("click", function() {
            $(".search-popup, .off-canvas-overlay").removeClass("active");
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	