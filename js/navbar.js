$(() => {
  $targetNav = $(".nav-collapse").attr("data-target");
  $(".nav-collapse").click(() => {
    $(".nav-collapse").toggleClass("collapsed");
    $($targetNav).toggleClass("show-nav");
  });
});
