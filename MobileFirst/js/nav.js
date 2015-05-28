/**
 * Created by Anna on 26.04.2015.
 */

$(document).ready(function(){
    $(".main-nav").hide();

    $(window).resize(function () {
        var w = $(window).width();

        if (w >=840) {
            $(".main-nav").show();
            $(".menu").hide();
        } else {
            $(".main-nav").hide();
            $(".menu").show();
        }});
    $(function() {
        if ($(window).width() >=840) {
            $(".main-nav").show();
            $(".menu").hide();
        } else {
            $(".main-nav").hide();
            $(".menu").show();
        }
    });

    $(".menu").click(function () {
        $(".main-nav").slideToggle();

    });
});