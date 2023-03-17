$(document).ready(function () {
  sal({
    once: true,
  });
  var scene = $("#scene").get(0);
  var parallaxInstance = new Parallax(scene);
  /************************************ Search ************************************/
  $(".search-icon").click(function () {
    $(".search-cont").slideToggle();
  });
  /************************************ Menu ************************************/

  $(".menu-btn").click(function () {
    $(".overlay").fadeIn(500);
    $(".header-tools").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").click(function () {
    $(".overlay").fadeOut(500);
    $(".header-tools").removeClass("active");
    $("body").removeClass("overflow");
  });
  /************************************ Offers Slider ************************************/
  var offersSwiper = new Swiper(".offers-slider .swiper", {
    loop: true,
    pagination: {
      el: ".offers-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".offers-slider .swiper-button-next",
      prevEl: ".offers-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });

  /************************************ Tiktok Slider ************************************/
  var tiktokSwiper = new Swiper(".tiktok-slider .swiper", {
    loop: true,
    spaceBetween: 19,
    pagination: {
      el: ".tiktok-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tiktok-slider .swiper-button-next",
      prevEl: ".tiktok-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });

  /************************************ Facebook Slider ************************************/
  var facebookSwiper = new Swiper(".facebook-slider .swiper", {
    loop: true,
    spaceBetween: 19,
    pagination: {
      el: ".facebook-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".facebook-slider .swiper-button-next",
      prevEl: ".facebook-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });

  /************************************ Instagram Slider ************************************/
  var instagramSwiper = new Swiper(".instagram-slider .swiper", {
    loop: true,
    spaceBetween: 19,
    pagination: {
      el: ".instagram-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".instagram-slider .swiper-button-next",
      prevEl: ".instagram-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });

  /************************************ Payment Slider ************************************/
  var paymentSwiper = new Swiper(".payments-slider .swiper", {
    loop: true,

    pagination: {
      el: ".payments-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".payments-slider .swiper-button-next",
      prevEl: ".payments-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      1199: {
        spaceBetween: 30,
        slidesPerView: 6,
      },
    },
  });

  /************************************ States Counter ************************************/
  if ($("states-sec")) {
    var a = 0;
    $(window).scroll(function () {
      if (
        a == 0 &&
        $(this).scrollTop() >= $(".states-sec").offset().top - 500
      ) {
        $(".state-num span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a++;
      }
    });
  }
});
