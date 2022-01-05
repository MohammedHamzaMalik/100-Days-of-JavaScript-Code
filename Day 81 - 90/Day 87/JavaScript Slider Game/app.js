var game = document.getElementById("game");
var btn = document.getElementById("btn");

for (let i = 25; i > 0; i--) {
  let slider = document.createElement("div");
  slider.setAttribute("class", "slider animate");
  slider.setAttribute("id", "slider" + i);
  game.append(slider);
}

var sliderWidth = 400;
// var count = 1;

function slidingStops(slider) {
  var current = document.getElementById("slider".concat(slider));
  var aboveCurrent = document.getElementById("slider".concat(slider + 1));

  if (slider == 1) {
    var belowCurrent = current;
  } else {
    var belowCurrent = document.getElementById("slider".concat(slider - 1));
  }

  var left = window.getComputedStyle(current).getPropertyValue("left");
  current.classList.remove("animate");
  current.style.left = left;
  left = parseInt(left);
  var width = parseInt(
    window.getComputedStyle(current).getPropertyValue("width")
  );
  var leftBelow = parseInt(
    window.getComputedStyle(belowCurrent).getPropertyValue("left")
  );

  var diff = left - leftBelow;
  var absDiif = Math.abs(diff);

  if (diff > width || diff < -width) {
    var score = "Game Over\nYour Score is : ".concat(slider - 1);
    alert(score);
    Location.reload();
  }

  if (diff > 0) {
    left += absDiif;
  } else {
    left -= diff;
    current.style.left = left.toString().concat("px");
  }
  var offSet = (width - absDiif).toString().concat("px");
  current.style.width = offSet;
  aboveCurrent.style.width = offSet;
  aboveCurrent.style.visibility = "visible";

  sliderWidth += absDiif;
  document.documentElement.style.setProperty("--width", sliderWidth + "px");
  var onclick = "slidingStops(" + (slider + 1) + ")";
  btn.setAttribute("onclick", onclick);
}
