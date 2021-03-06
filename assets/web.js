$(document).ready(function () {
    $('#nav_toggle').click(function () {
        $('.sidebar-menu').addClass('active');
        $('.sidebar-backdrop').addClass('active');
    });
    $('.sidebar-close').click(function () {
        $('.sidebar-menu').removeClass('active');
        $('.sidebar-backdrop').removeClass('active');
    });

    $('.sidebar_dropdown_btn').click(function (e) {
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
        e.stopPropagation();
    });

    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'><img src='../assets/images/left-arrow.svg'></div>", "<div class='nav-btn next-slide'><img src='../assets/images/right-arrow1.svg'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            },
        }
    });

    // change language starts
    
    // change language ends

    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });
});