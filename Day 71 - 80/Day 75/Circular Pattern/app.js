window.requestAnimFrame =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = canvas.width / 2;
var y = canvas.height / 2;
var r = 0;

(function loop(time) {
  requestAnimFrame(loop);

  ctx.fillStyle =
    "rgb(" +
    Math.floor(255 * Math.random()) +
    "," +
    Math.floor(255 * Math.random()) +
    "," +
    Math.floor(255 * Math.random()) +
    ")";

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();

  x = canvas.width / 2 + r * Math.cos(time / 100);
  y = canvas.height / 2 + r * Math.sin(time / 100);

  r++;
})();
