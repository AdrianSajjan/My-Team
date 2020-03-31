$(window).on("load", () => {
  $targetNav = $(".nav-collapse").attr("data-target");
  $(".nav-collapse").click(() => {
    $(".nav-collapse").toggleClass("collapsed");
    $(".nav-collapse").toggleClass("open");
    $($targetNav).toggleClass("show-nav");
  });
});
