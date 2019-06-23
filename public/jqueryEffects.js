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

// Animation on scroll with animate.css and waypoints
$(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animated fadeIn");
}, {
    offset: "80%"
});

$(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("animated fadeInUp");
}, {
    offset: "60%"
});

$(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animated fadeIn");
}, {
    offset: "70%"
});
