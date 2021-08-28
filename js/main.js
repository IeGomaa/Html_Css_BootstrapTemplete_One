$(function () {
    
    'use strict';

    var 
        winH    = $(window).height(),
        upperH  = $('header').innerHeight(),
        navH    = $('nav').innerHeight();

        $('.slider').height(winH - (upperH + navH));
        $('.carousel-item').height(winH - (upperH + navH));

});