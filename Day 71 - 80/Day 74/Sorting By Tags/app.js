$(document).ready(function () {
  $(".Red").click(function () {
    $(".red").show();
    $(".blue").hide();
    $(".yellow").hide();
  });
  $(".Blue").click(function () {
    $(".red").hide();
    $(".blue").show();
    $(".yellow").hide();
  });
  $(".Yellow").click(function () {
    $(".red").hide();
    $(".blue").hide();
    $(".yellow").show();
  });
  $(".all").click(function () {
    $(".red").show();
    $(".blue").show();
    $(".yellow").show();
  });
});
