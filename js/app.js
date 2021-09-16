$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });

  $("#arrow").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      1500
    );
  });
});

// AOS.init({
//   easing: "ease",
//   duration: 3000,
//   once: true,
// });
