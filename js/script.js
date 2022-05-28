$(function () {
    "use strict";
  
    $(window).on("load", function () {

      $("#preloader").fadeOut(500);

    });
    new VenoBox({
        selector: '.venobox',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    

    $(window).on("scroll", function () {

      var scrollSize = $(window).scrollTop();
  
      if (scrollSize > 500) {

        $("#backToTop").fadeIn(1000);
       } else {

        $("#backToTop").fadeOut(1000);
      }
  
      if (scrollSize > 60) {

        $("#header").addClass("menu_fixed");
      } else {

        $("#header").removeClass("menu_fixed");
      }
    });
  
    $("#backToTop").on("click", function () {

      $("html, body").animate(

        {

          scrollTop: 500,

        },

        1000
      );
    });
  
    $(".achievement_counter").counterUp();
  
    $(".count_down").countdown("2022/07/30", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            "<div class='count_down_item'><span>%D</span><span>days</span></div>" +

            "<div class='count_down_item'><span>%H</span><span>hr</span></div>" +
            "<div class='count_down_item'><span>%M</span><span>min</span></div>" +
            "<div class='count_down_item'><span>%S</span><span>sec</span></div>"
        )
      );
    });
  
  
  });

  
  
  