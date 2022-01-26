$(document).ready(function(){
    $('#nav_toggle').click(function(){
        $('.sidebar-menu').addClass('active');
        $('.sidebar-backdrop').addClass('active');
    });
    $('.sidebar-close').click(function(){
        $('.sidebar-menu').removeClass('active');
        $('.sidebar-backdrop').removeClass('active');
    });

    $('.sidebar_dropdown_btn').click(function(e){
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
        e.stopPropagation();
    });
});