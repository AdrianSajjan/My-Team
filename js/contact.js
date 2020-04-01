// prettier-ignore
const CheckElementActive = () => {
  $(".form-input").each((index, element) => {
    $(element).focusout(() => {

      if ($(element).val().length > 0) {
        $(element).next().next().html("");
        if(!$(element).hasClass("form-input-active"))
          $(element).addClass("form-input-active");
      }

      if ($(element).val().length == 0) {
        if($(element).hasClass("form-input-active"))
          $(element).removeClass("form-input-active");
      }

    });
  });
};

const HandleFromSubmit = () => {
  $("#form").submit(event => {
    event.preventDefault();
    $(".form-input").each((index, element) => {
      //prettier-ignore
      if ($(element).val().length == 0) {
        $(element).next().next().html("Please fill this field!");
        return;
      }
    });
  });
};

$(() => {
  CheckElementActive();
  HandleFromSubmit();
});
