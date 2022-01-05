$(document).ready(function () {
  var test = setInterval("app.start()", 10);
});

var app = {
  time: 0,
  end: 8,

  start: function () {
    var step = this.end / 4;

    if (this.time <= step * 1) {
      var percent = (this.time / step) * 100;
      $(".top").css("width", percent + "%");
    }
    if (this.time > step * 1 && this.time <= step * 2) {
      var percent = (this.time / (step * 2)) * 200 - 100;
      $(".right").css("height", percent + "%");
    }
    if (this.time > step * 2 && this.time <= step * 3) {
      var percent = (this.time / (step * 3)) * 300 - 200;
      $(".bottom").css("width", percent + "%");
    }
    if (this.time > step * 3 && this.time <= step * 4) {
      var percent = (this.time / (step * 4)) * 400 - 300;
      $(".left").css("height", percent + "%");
    }
    this.time += 0.01;
  },
};
