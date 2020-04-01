$(() => {
  $(".card-btn").on("click", event => {
    $cardBtn = event.target;
    $cardBack = event.target.previousElementSibling;
    $($cardBack).toggleClass("card-back-active");
    $($cardBtn).toggleClass("card-btn-active");
  });
});
