$(document).ready(function () {
    $(".icon").click(() => {
        $(".passive-menu").toggleClass("active-menu")
        $(".icon").toggleClass("fa-times")
    })
    $(".main-text").animate({
        top: '-=30px'
    }, 1000);

    $(window).scroll(function () {

        var oTop = $('.counter').offset().top - window.innerHeight
        if ($(window).scrollTop() > oTop) {
            $(".number").each(function () {
                const This = $(this)
                $({
                    Count: This.text()
                }).animate({
                    Count: This.attr("data-number")
                }, {
                    duration: 2000,
                    easing: "linear",
                    step: function () {
                        This.text((Math.floor((this.Count))))
                    },
                    complete: function () {
                        This.text((this.Count))
                    }
                })

            })
        }
        //  $(window).scroll(function () {
        //    let height=$(".counter").offset().top
        //     if($(this).scrollTop()==height){
        //         console.log("dghjh");
        //     }
    })
    $(".accordion__card__question").each(function () {
        var answer = $(".accordion__card--answer")
        $(this).on("click", function () {
            var question = $(this)
            var acc = question.data("acc")
            answer.each(function () {

                if ($(this).attr("id") == acc) {
                    if ($(this).hasClass("aktiv")) {
                        $(this).removeClass("aktiv")
                        $(this).parent().children("button").children("i").removeClass("fa-minus").addClass("fa-plus")
                    } else {
                        answer.removeClass("aktiv").parent().children("button").children("i").removeClass("fa-minus").addClass("fa-plus")
                        $(this).addClass("aktiv")
                        $(this).parent().children("button").children("i").removeClass("fa-plus").addClass("fa-minus")

                    }

                }
            })

        })
    })

    $(".clients__slider__direction span").each(function () {
        var width = $(".clients__slider__all--stage").innerWidth();
        var row = $(".clients__slider").innerWidth();
        var wind = $(window).innerWidth();
        $(window).resize(function () {
            if ($(window).innerWidth() < 768) {
                $(".clients__slider__all--stage").css("width", `${$(".clients__slider").innerWidth() - 20}px`)
            }
            if ($(window).innerWidth() >= 768 && $(window).innerWidth() < 991) {
                $(".clients__slider__all--stage").innerWidth() == 315
            }
        });

        $(this).on("click", function () {
            $(".clients__slider__direction span").removeClass("active")
            $(this).addClass("active")
            var id = parseInt($(this).attr("id"))

            $(".clients__slider__all").css("transform", `translateX(${id * (-($(".clients__slider__all--stage").innerWidth() + 30))}px)`).css({
                "animation": "2s"
            });
        })
    })

    // $(".hovered__view--link").on("click", function () {
    //     $("body").addClass("gallery__body")
    //     $(".gallery__body--slider").css({
    //         display: "block",
    //     })
    //     var i = `<img class="galery-img" src=${$(this).attr("data-img")}>`
    //     $(".gallery__body--slider--image").append(i)
    //     var icon = `<i class="fas fa-times closeIcon"></i>`
    //     $(".gallery__body--slider--image").append(icon)
    //     $(".closeIcon").css({
    //         color: "white",
    //         zIndex: "60",
    //         position: "absolute",
    //         top: "-25px",
    //         right: "-40px",
    //         fontSize: "30px",

    //     })
    //     var p = `<h2 class="number">${$(".gallery__col").length} of ${$(this).attr("data-id")} </h2>`
    //     $(".gallery__body--slider--image").append(p)
    //     $(".closeIcon").on("click", function () {
    //         $("body").removeClass("gallery__body");
    //         $(".galery-img").remove();
    //         $(".number").remove();

    //         $(".gallery__body--slider").css({
    //             display: "none",
    //         });
    //     })
    // })
    $("#datepicker").datepicker();
    $(window).scroll(() => {
        if ($(window).scrollTop() > 0) {
            $(".to-top").removeClass("fa-angle-down").addClass("fa-angle-up")
            $(".to-top.fa-angle-up").on("click", function () {
                $(window).animate({
                }, "slow", function () {
                    $(window).scrollTop(0);
                });
            })
        }
        if ($(window).scrollTop() == 0) {
            $(".to-top").removeClass("fa-angle-up").addClass("fa-angle-down")
            $(".to-top.fa-angle-down").on("click", function () {
                $(window).animate({
                }, "slow", function () {
                    $(window).scrollTop($("body").innerHeight());
                });
            })
        }
    })
    $(".to-top.fa-angle-up").on("click", function () {
        $(window).animate({
        }, "slow", function () {
            $(window).scrollTop(0);
        });
    })
    $(".to-top.fa-angle-down").on("click", function () {
        $(window).animate({
        }, "slow", function () {
            $(window).scrollTop($("body").innerHeight());
        });
    })

})