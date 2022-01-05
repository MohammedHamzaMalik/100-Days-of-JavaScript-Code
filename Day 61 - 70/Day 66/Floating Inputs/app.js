$(".input input")
  .on("focus", function () {
    if (!$(this).hasClass("onFocus")) {
      $(this).addClass("onFocus");
    }
  })
  .on("blur", function () {
    if ($(this).val() === "" && $(this).hasClass("onFocus")) {
      $(this).removeClass("onFocus");
    }
  });
