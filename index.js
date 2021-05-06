// Navbar Brand
$(".navbar-brand").mouseover(function(){
    $(".navbar-brand").css("font-size", "140%")
});
$(".navbar-brand").mouseout(function(){
    $(".navbar-brand").css("font-size", "70%")
});

// Adventure Link
$(".adventure").mouseover(function(){
    $(".adventure").css("border-bottom", "none") 
});
$(".adventure").mouseout(function(){
    $(".adventure").css("border-bottom", "dotted")
});
$(".adventure").mouseover(function(){
    $(".adventure").css("color", "orange")
});

// Button Links

// Mouseover buttons
$(".1").on("mouseover", function(){
    $(".1").css("background-color", "black")
    $(".1").css("color", "white")
});
$(".2").on("mouseover", function(){
    $(".2").css("background-color", "black")
    $(".2").css("color", "white")
});
$(".3").on("mouseover", function(){
    $(".3").css("background-color", "black")
    $(".3").css("color", "white")
});
$(".4").on("mouseover", function(){
    $(".4").css("background-color", "black")
    $(".4").css("color", "white")
});

// Mouseout buttons
$(".1").mouseout(function(){
    $(".1").css("background-color", "white")
    $(".1").css("color", "#808080")
});
$(".2").mouseout(function(){
    $(".2").css("background-color", "white")
    $(".2").css("color", "#808080")
});
$(".3").mouseout(function(){
    $(".3").css("background-color", "white")
    $(".3").css("color", "#808080")
});
$(".4").mouseout(function(){
    $(".4").css("background-color", "white")
    $(".4").css("color", "#808080")
});

// Banner Img

$(".img").mouseover(function() {
    $(".banner").animate({opacity: '0.4'});
});
$(".img").mouseout(function() {
    $(".banner").animate({opacity: '1'});
});

// News and Events
// Mouseover
$(".events1").mouseover(function(){
    $(".events1").css("color", "white")

});
$(".events2").mouseover(function(){
    $(".events2").css("color", "white")
});
$(".events3").mouseover(function(){
    $(".events3").css("color", "white")
});
$(".events4").mouseover(function(){
    $(".events4").css("color", "white")
});
$(".events5").mouseover(function(){
    $(".events5").css("color", "white")
});

// Mouseout
$(".events1").mouseout(function(){
    $(".events1").css("color", "silver")
});
$(".events2").mouseout(function(){
    $(".events2").css("color", "silver")
});
$(".events3").mouseout(function(){
    $(".events3").css("color", "silver")
});
$(".events4").mouseout(function(){
    $(".events4").css("color", "silver")
});
$(".events5").mouseout(function(){
    $(".events5").css("color", "silver")
});

$(".events1").mouseover(function(){
    $(".1a").css("color", "white")
});
$(".events1").mouseout(function(){
    $(".1a").css("color", "silver")
});
$(".events2").mouseover(function(){
    $(".2a").css("color", "white")
});
$(".events2").mouseout(function(){
    $(".2a").css("color", "silver")
});
$(".events3").mouseover(function(){
    $(".3a").css("color", "white")
});
$(".events3").mouseout(function(){
    $(".3a").css("color", "silver")
});
$(".events4").mouseover(function(){
    $(".4a").css("color", "white")
});
$(".events4").mouseout(function(){
    $(".4a").css("color", "silver")
});
$(".events5").mouseover(function(){
    $(".5a").css("color", "white")
});
$(".events5").mouseout(function(){
    $(".5a").css("color", "silver")
});

// Zebra
$(".zebra").mouseover(function(){
    $(".zebra").animate({opacity: '0.4'})
});
$(".zebra").mouseout(function(){
    $(".zebra").animate({opacity: '1'})
});

$(".more").mouseover(function(){
    $(".more").css("color", "white")
});
$(".more").mouseout(function(){
    $(".more").css("color", "silver")
});


// Horse
$(".horse").mouseover(function(){
    $(".horse").animate({opacity: '0.4'})
});
$(".horse").mouseout(function(){
    $(".horse").animate({opacity: '1'})
});

$(".more1").mouseover(function(){
    $(".more1").css("color", "white")
});
$(".more1").mouseout(function(){
    $(".more1").css("color", "silver")
});

// Contact
$(".contact").mouseover(function(){
    $(".contact").css("color", "white")
});
$(".contact").mouseout(function(){
    $(".contact").css("color", "gray")
});

// Facebook Youtube and Instagram Icons
$(".fa-facebook-f").mouseover(function(){
    $(".fa-facebook-f").animate({opacity: '0.4'});
});
$(".fa-facebook-f").mouseout(function(){
    $(".fa-facebook-f").animate({opacity: '1'});
});

$(".fa-youtube").mouseover(function(){
    $(".fa-youtube").animate({opacity: '0.4'});
});
$(".fa-youtube").mouseout(function(){
    $(".fa-youtube").animate({opacity: '1'});
});

$(".fa-instagram").mouseover(function(){
    $(".fa-instagram").animate({opacity: '0.4'});
});
$(".fa-instagram").mouseout(function(){
    $(".fa-instagram").animate({opacity: '1'});
});

// Mail
$(".submit").mouseover(function(){
    $(".submit").css("font-size", "120%")
});