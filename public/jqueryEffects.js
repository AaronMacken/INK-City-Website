// Nav menu toggle-button
$("document").ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

// Nav scroll effect
$(window).on("scroll", function() {
    if($(window).scrollTop()){
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});

// Scroll on button click effect, requires waypoints CDN
$(".js--scroll-conventions").click(function() {
    // the-50 is to offset the fixed nav
    $("html, body").animate({scrollTop: $(".js--section-signUp").offset().top-50}, 1000);
});
