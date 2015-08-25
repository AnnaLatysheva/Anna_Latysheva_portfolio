$(document).ready(function() {

    $("#slider").owlCarousel({
        items : 4,
        loop:true,
        margin:10,
        navigation : false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

});
