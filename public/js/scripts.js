$(document).ready(function () {
    /**********************************
    *form
    **********************************/


    /**********************************
    * scrolling nav
    *********************************/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".menu").addClass("scrolling");
        } else {
            $(".menu").removeClass("scrolling");
        }
    });
    /**********************************
    * scroolSmooth
    *********************************/
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                return false;
                }
            }
        });
    });
    /**********************************
    * owlCarousel
    *********************************/
    var options = {
        navigation: true,
        pagination: false,
        navigationText : false
    };
    $("#owl-case").owlCarousel(options);
    function showProjectsbyCat(cat) {
        var owl = $("#owl-case").data('owlCarousel');

        owl.addItem('<div/>', 0);

        var nb = owl.itemsAmount;
        for (var i = 0; i < (nb - 1); i++) {
            owl.removeItem(1);
        }
        if (cat == 'all') {
            $('#projects-copy .project').each(function () {
                owl.addItem($(this).clone());
            });
        } else {
            $('#projects-copy .project.' + cat).each(function () {
                owl.addItem($(this).clone());
            });
        }
        owl.removeItem(0);
    }
    $('#owl-case .project').clone().appendTo($('#projects-copy'));
    $('#project-terms a').click(function (e) {
        e.preventDefault();
        $('#project-terms a').removeClass('active');

        cat = $(this).attr('ID');
        $(this).addClass('active');
        showProjectsbyCat(cat);
    });

    /**********************************
    * open/close consquistas
    *********************************/
    function display_item(item) {
       var next_item = item.parent().next().find('.item');
       var speed = 100;

       if (next_item) {
           item.fadeIn(speed, function() {
               display_item(next_item);
           });
       }
       else {
            item.fadeIn(speed);
       }
    }

    $('#conquistas-button').click(function(e) {
        $('#conquistas-content').slideToggle(function() {
            if ($("#conquista-open").is(".rotate-down")) {
                $("#conquista-open").removeClass("rotate-down");
                $("#conquista-open").addClass("rotate-up");
                console.log( "down!" );
                } else {
                    $("#conquista-open").removeClass("rotate-up");
                    $("#conquista-open").addClass("rotate-down");
                    $('html, body').animate({scrollTop : 1250},800);
                    return false;
                    };

            $('#conquistas-content').find('.item').hide();

            if ($('#conquistas-content').is( ":visible" )) {
                var first_item = $('#conquistas-content').find('.item').first();
                display_item(first_item);
            }
        });
        e.preventDefault();
    });


    /**********************************
    * open/close produtos
    *********************************/
    $('#open-produtos').click(function(e) {
        $(".produtos-infos").toggleClass( "produtos-info-on" );
        $("#btn-produtos-img").toggleClass( "grau180" );
        e.preventDefault();
    });
    $('#open-oportunidades').click(function(e) {
        $(".oportunidades-infos").toggleClass( "oportunidades-info-on" );
        $("#btn-oportunidades-img").toggleClass( "grau180" );
        e.preventDefault();
    });
});
//-- VIDEOS -->
function init() {
    document._video = document.getElementById("video");
}
function getController() {
    if (document._hasController) {
        return document._controller;
    } else {
        return document._video;
    }
}
document.addEventListener("DOMContentLoaded", init, false);
//-- VIDEOS -->