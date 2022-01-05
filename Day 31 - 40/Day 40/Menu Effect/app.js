// using jQuery and creating function with it
$(document).ready(function () {
  $(".container").click(function () {
    $(".line").toggleClass(function () {
      return $(this).is(".open, .close") ? "open close" : "open";
    });
  });
});
