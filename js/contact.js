$emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

    $emptyFields = false;

    $(".form-input").each((index, element) => {
      if ($(element).val().length == 0) {
        $(element)
          .next()
          .next()
          .html("Please fill this field!");
        $emptyFields = true;
      }
    });

    if ($emptyFields) return;

    if ($("#name-input").val().length < 5) {
      $("#name-input")
        .next()
        .next()
        .html("Please enter your full name!");
      return;
    }

    if (!$emailRegex.test($("#email-input").val())) {
      $("#email-input")
        .next()
        .next()
        .html("Please enter a valid email!");
      return;
    }

    if ($("#title-input").val().length < 10) {
      $("#title-input")
        .next()
        .next()
        .html("Title cannot be less than 10 letters!");
      return;
    }

    if ($("#message-input").val().length < 20) {
      $("#message-input")
        .next()
        .next()
        .html("Please enter a message of more than 20 letters.");
      return;
    }

    alert("Thank You for reaching to us!\nWe will get to you shortly!");
    $("#form").trigger("reset");
  });
};

$(() => {
  CheckElementActive();
  HandleFromSubmit();
});
