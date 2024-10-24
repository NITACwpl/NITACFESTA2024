$(function () {
    $(".js-FAQ-title").on("click", function () {
      $(".js-FAQ-title").not(this).removeClass("open");
      $(".js-FAQ-title").not(this).next().slideUp(300);
      $(this).toggleClass("open");
      $(this).next().slideToggle(300);
    });
  });