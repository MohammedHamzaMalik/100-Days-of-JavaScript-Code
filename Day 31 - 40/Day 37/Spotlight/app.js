// using jQuery
$(document).mousemove(function (e) {
  var x = e.pageX;
  var y = e.pageY;
//   adding css property to the spotlight div
  $(".spotlight").css(
    "background",
    "radial-gradient(circle at " + x + "px " + y + "px, transparent, #000 25%"
  );
});
