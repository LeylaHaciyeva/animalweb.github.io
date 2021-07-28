"use strict";

$(document).ready(function () {
  $(".icon").click(function () {
    $(".passive-menu").toggleClass("active-menu");
    $(".icon").toggleClass("fa-times");
  });
  $(".main-text").animate({
    top: '-=30px'
  }, 1000);
  $(window).scroll(function () {
    var oTop = $('.counter').offset().top - window.innerHeight;

    if ($(window).scrollTop() > oTop) {
      $(".number").each(function () {
        var This = $(this);
        $({
          Count: This.text()
        }).animate({
          Count: This.attr("data-number")
        }, {
          duration: 2000,
          easing: "linear",
          step: function step() {
            This.text(Math.floor(this.Count));
          },
          complete: function complete() {
            This.text(this.Count);
          }
        });
      });
    } //  $(window).scroll(function () {
    //    let height=$(".counter").offset().top
    //     if($(this).scrollTop()==height){
    //         console.log("dghjh");
    //     }

  });
  $(".accordion__card__question").each(function () {
    var answer = $(".accordion__card--answer");
    $(this).on("click", function () {
      var question = $(this);
      var acc = question.data("acc");
      answer.each(function () {
        if ($(this).attr("id") == acc) {
          if ($(this).hasClass("aktiv")) {
            $(this).removeClass("aktiv");
            $(this).parent().children("button").children("i").removeClass("fa-minus").addClass("fa-plus");
          } else {
            answer.removeClass("aktiv").parent().children("button").children("i").removeClass("fa-minus").addClass("fa-plus");
            $(this).addClass("aktiv");
            $(this).parent().children("button").children("i").removeClass("fa-plus").addClass("fa-minus");
          }
        }
      });
    });
  });
  $(".clients__slider__direction span").each(function () {
    var width = $(".clients__slider__all--stage").innerWidth();
    var row = $(".clients__slider").innerWidth();
    var wind = $(window).innerWidth();

    if (wind < 768) {
      $(".clients__slider__all--stage").css("width", "".concat(row - 20, "px"));
    }

    $(this).on("click", function () {
      $(".clients__slider__direction span").removeClass("active");
      $(this).addClass("active");
      var id = parseInt($(this).attr("id"));
      $(".clients__slider__all").css("transform", "translateX(".concat(id * -(width + 30), "px)")).css({
        "animation": "2s"
      });
    });
  });
  $(".hovered__view--link").on("click", function () {
    $("body").addClass("gallery__body").css({
      height: $("body").innerHeight() + "px"
    });
    $(".gallery__body--slider").css({
      display: "block",
      content: "",
      width: 100 + "%",
      backgroundColor: "black",
      opacity: .5,
      zIndex: 7,
      height: $(".gallery").innerHeight() + "px"
    });
  });
  $("#datepicker").datepicker();
});