$(function() {

    /*-------------fixed header-----------------*/
    let header = $("#header");
    let intro = $("#intro");
    let introh = intro.innerHeight() ;
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introh);

    $(window).on("scroll resize", function() {
      let introh = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, introh);
    });

    function checkScroll(scrollPos, introh) {
            if(scrollPos > introh) {
              header.addClass("fixed");
            } else {
              header.removeClass("fixed");
            }
    }

    /*-------------smooth scrool----------------*/
    $("[data-scroll]").on("click",function(event){
      event.preventDefault();
      let elementId = $(this).data("scroll");
      let elementOfset = $(elementId).offset().top;

      nav.removeClass("show");

      $("html, body").animate({
        scrollTop: elementOfset - 70
      }, 700);
    });

    /*-------------navToggle----------------*/
    let nav = $("#nav");
    $("#navToggle").on("click",function(event){
      event.preventDefault();

      nav.toggleClass("show");
    });

    /*-------------reviews----------------*/

    let slider = $("#reviewSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
    });


});
