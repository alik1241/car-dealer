'use strict';

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 15, //Отступ от элемента справа в 50px
        // autoWidth: true, //не включать, иначе не сработает респонзив
        startPosition: 0,

        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1,
                slideBy: 2,
                dots: true,
                mouseDrag: false
            },

            800: {
                items: 2,
                slideBy: 2,
                dots: true,
                mouseDrag: false
            },

            900: {
                items: 2,
                slideBy: 2,
                dots: true,
                mouseDrag: false
            },

            1200: {
                items: 3,
                slideBy: 3,
                dots: true
            },

            1300: {
                items: 3,
                slideBy: 3,
                dots: false,
                nav : true
            }
        }
    });

    $('.header__menu i').on('click', function() {
        $('.header__menu-box').show();
        $(this).addClass('active');
    });

    $('.header__menu-box .btn-frame, .header__menu-box li').on('click', function() {
        $('.header__menu i').removeClass('active');
        $('.header__menu-box').hide();
    });

    $(window).scroll(function (){
        if ($(this).scrollTop() > 700){
            $("#back-top").fadeIn();
        } else{
            $("#back-top").fadeOut();
        }
    });

    $("#back-top").on('click', function (){
        $("body, html").animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        var _id = $(this).attr("id");
        var _header_height = 80;

        if (_id && _id.indexOf('m-') > -1) {
            var _header_height = 140;
        }

        $("html, body").animate({
            scrollTop: $(_href).offset().top - _header_height + "px"
        }, 500);

        $('.header__menu i').removeClass('active');
        $('.header__menu-box').hide();

        return false;
    });
});