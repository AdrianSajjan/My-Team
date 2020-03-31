$(() => {
  $("#form").submit(event => {
    event.preventDefault();
    console.log("Submit");
  });
});
