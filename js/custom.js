setTimeout(function() {
  var headID = document.getElementsByTagName("head")[0];
  var newScript = document.createElement("script");
  newScript.type = "text/javascript";
  newScript.src = "https://fast.wistia.com/embed/medias/4iu2e4yjm5.jsonp";
  headID.appendChild(newScript);
}, 0);

setTimeout(function() {
  var headID1 = document.getElementsByTagName("head")[0];
  var newScript1 = document.createElement("script");
  newScript1.type = "text/javascript";
  newScript1.src = "https://fast.wistia.com/assets/external/E-v1.js";
  headID1.appendChild(newScript1);
}, 0);

$(function() {
  $(".carousel-wrapper").slick({
    arrows: false,
    draggable: false,
    dots: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    autoplay: true,
    autoplaySpeed: 8000,
    fade: false,
    speed: -200,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  if ($(".slick-slide").hasClass("slick-active")) {
    // $(".carousel-wrapper .content").removeClass("data-animate-rev");
    // setTimeout(function() {
    //   $(".carousel-wrapper .sideblock").removeClass("data-animate-rev");
    // }, 500);
    // $(".carousel-wrapper .content").addClass("data-animate");

    setTimeout(function() {
      $(".carousel-wrapper .content").addClass("data-animate");
    }, 50);
    setTimeout(function() {
      $(".carousel-wrapper .sideblock").addClass("data-animate");
    }, 100);
  } else {
    // $(".carousel-wrapper .content").addClass("data-animate-rev");
    // setTimeout(function() {
    //   $(".carousel-wrapper .sideblock").addClass("data-animate-rev");
    // }, 500);
    // $(".carousel-wrapper .content").removeClass("data-animate");
    // $(".carousel-wrapper .sideblock").removeClass("data-animate");
    setTimeout(function() {
      $(".carousel-wrapper .content").removeClass("data-animate");
    }, 0);
    setTimeout(function() {
      $(".carousel-wrapper .sideblock").removeClass("data-animate");
    }, 10);
  }

  //   $(".carousel-wrapper").on("init", function(event, slick) {
  //     $(".carousel-wrapper .content").addClass("data-animate");

  //   });

  $(".carousel-wrapper").on("afterChange", function(
    event,
    slick,
    currentSlide
  ) {
    // $(".carousel-wrapper .content").removeClass("data-animate-rev");
    // setTimeout(function() {
    //   $(".carousel-wrapper .sideblock").removeClass("data-animate-rev");
    // }, 500);
    // $(".carousel-wrapper .content").addClass("data-animate");
    setTimeout(function() {
      $(".carousel-wrapper .content").addClass("data-animate");
    }, 50);
    setTimeout(function() {
      $(".carousel-wrapper .sideblock").addClass("data-animate");
    }, 100);
  });

  $(".carousel-wrapper").on("beforeChange", function(
    event,
    slick,
    currentSlide
  ) {
    // $(".carousel-wrapper .content").addClass("data-animate-rev");
    // setTimeout(function() {
    //   $(".carousel-wrapper .sideblock").addClass("data-animate-rev");
    // }, 500);
    // $(".carousel-wrapper .content").removeClass("data-animate");
    // $(".carousel-wrapper .sideblock").removeClass("data-animate");
    setTimeout(function() {
      $(".carousel-wrapper .content").removeClass("data-animate");
    }, 0);
    setTimeout(function() {
      $(".carousel-wrapper .sideblock").removeClass("data-animate");
    }, 10);
  });

  var owl = $(".owl-carousel").owlCarousel({
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    items: 1,
    margin: 0,
    stagePadding: 0,
    smartSpeed: 150,
    mouseDrag: false,
    pullDrag: false,
    slideTransition: "linear",
    autoplay: true,
    video: true,
    loop: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 100
  });



  if ($(".owl-item").hasClass("active")) {
  
    $(".owl-carousel .content").addClass("data-animate");
    setTimeout(function() {
      $(".owl-carousel .sideblock").addClass("data-animate");
    }, 500);
  } else {
  
    $(".owl-carousel .content").removeClass("data-animate");
    $(".owl-carousel .sideblock").removeClass("data-animate");
  }

  owl.on("changed.owl.carousel", function(event) {
    $(".owl-carousel .content").addClass("data-animate");
    setTimeout(function() {
      $(".owl-carousel .sideblock").addClass("data-animate");
    }, 500);
  });

  owl.on("change.owl.carousel", function(event) {
    $(".owl-carousel .content").removeClass("data-animate");
    setTimeout(function() {
      $(".owl-carousel .sideblock").removeClass("data-animate");
    }, 500);
  });


  owl.on("next.owl.carousel", function(event) {
    $(".owl-carousel .content").addClass("data-animate");
    setTimeout(function() {
      $(".owl-carousel .sideblock").addClass("data-animate");
    }, 500);
  });


  owl.on("prev.owl.carousel", function(event) {
    $(".owl-carousel .content").addClass("data-animate");
    setTimeout(function() {
      $(".owl-carousel .sideblock").addClass("data-animate");
    }, 500);
  });


  $(".owl-carousel .owl-dots button.owl-dot").on("click", function () {
    $(".owl-carousel .content").addClass("data-animate");
    setTimeout(function() {
      $(".owl-carousel .sideblock").addClass("data-animate");
    }, 500);
  });



});
