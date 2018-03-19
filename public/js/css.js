$(document).ready( function() {
    var topOfOthDiv = $("#content-wrapper").offset().top;
    var contrTop = $("#home-p").offset().top;
    var contrBot = $("#ticket-purchase").offset().top;
    
    console.log(topOfOthDiv);
    console.log(contrTop);
    console.log(contrBot);
    console.log($(window).scrollTop());

    $(window).scroll(function() {
    
        if($(window).scrollTop() < 650) {
            $("#home-content").removeClass("hidden");
            $("#arrow-container").removeClass("hidden");
            $("#header").removeClass("hidden");
            $("#header").addClass("header-flex");
        } else if($(window).scrollTop() > contrTop) {
            $("#home-content").addClass("hidden");
            $("#arrow-container").addClass("hidden");
            $("#header").removeClass("header-flex");
            $("#header").addClass("hidden");
        }
    });
});