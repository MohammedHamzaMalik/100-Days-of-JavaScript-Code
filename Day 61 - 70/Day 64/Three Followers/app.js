var TAU = Math.PI * 2;

var speed = 0.05;
var breaking = 0.15;

var person_to_follow = {
  x: 0,
  y: 0,
  render: function () {
    specificationOfCircles(this.x, this.y, "#1E00FF");
  },
};

var first_circle = {
  positionAtX: 0,
  positionAtY: 0,
  velocityAtX: 0,
  velocityAtY: 0,
  accelerationAtX: 0,
  accelerationAtY: 0,
};

first_circle.render = function () {
  specificationOfCircles(this.positionAtX, this.positionAtY, "#FF0061");
};
first_circle.update = function () {
  this.accelerationAtX = (person_to_follow.x - this.positionAtX) * speed;
  this.accelerationAtY = (person_to_follow.y - this.positionAtY) * speed;

  this.velocityAtX += this.accelerationAtX;
  this.velocityAtY += this.accelerationAtY;
  this.velocityAtX *= 0.9 - breaking;
  this.velocityAtY *= 0.9 - breaking;

  this.positionAtX += this.velocityAtX;
  this.positionAtY += this.velocityAtY;
};

var second_circle = {
  positionAtX: 0,
  positionAtY: 0,
  velocityAtX: 0,
  velocityAtY: 0,
  accelerationAtX: 0,
  accelerationAtY: 0,
};
second_circle.render = function () {
  specificationOfCircles(this.positionAtX, this.positionAtY, "#E1FF00");
};
second_circle.update = function () {
  this.accelerationAtX = (person_to_follow.x - this.positionAtX) * speed;
  this.accelerationAtY = (person_to_follow.y - this.positionAtY) * speed;

  this.velocityAtX += this.accelerationAtX;
  this.velocityAtY += this.accelerationAtY;
  this.velocityAtX *= 0.7 - breaking;
  this.velocityAtY *= 0.7 - breaking;

  this.positionAtX += this.velocityAtX;
  this.positionAtY += this.velocityAtY;
};

var third_circle = {
  positionAtX: 0,
  positionAtY: 0,
  velocityAtX: 0,
  velocityAtY: 0,
  accelerationAtX: 0,
  accelerationAtY: 0,
};
third_circle.render = function () {
  specificationOfCircles(this.positionAtX, this.positionAtY, "#00FF9E");
};
third_circle.update = function () {
  this.accelerationAtX = (person_to_follow.x - this.positionAtX) * speed;
  this.accelerationAtY = (person_to_follow.y - this.positionAtY) * speed;

  this.velocityAtX += this.accelerationAtX;
  this.velocityAtY += this.accelerationAtY;
  this.velocityAtX *= 0.8 - breaking;
  this.velocityAtY *= 0.8 - breaking;

  this.positionAtX += this.velocityAtX;
  this.positionAtY += this.velocityAtY;
};

document.addEventListener("DOMContentLoaded", letsGetStarted, false);

var canvas, ctx, widthOfCanvas, heightOfCanvas;

function letsGetStarted() {
  document.body.onmousemove = function (e) {
    person_to_follow.x = e.pageX;
    person_to_follow.y = e.pageY;
  };

  canvas = document.createElement("canvas");

  widthOfCanvas = canvas.width = window.innerWidth - 20;
  heightOfCanvas = canvas.height = window.innerHeight - 20;
  ctx = canvas.getContext("2d");

  first_circle.positionAtX = person_to_follow.x = widthOfCanvas / 2;
  first_circle.positionAtY = person_to_follow.y = heightOfCanvas / 2;
  first_circle.positionAtY += 100;
  first_circle.velocityAtX = -5;
  first_circle.velocityAtY = 2;

  second_circle.positionAtX = person_to_follow.x = widthOfCanvas / 2;
  second_circle.positionAtY = person_to_follow.y = heightOfCanvas / 2;
  second_circle.positionAtY += 100;
  second_circle.velocityAtX = -5;
  second_circle.velocityAtY = 2;

  third_circle.positionAtX = person_to_follow.x = widthOfCanvas / 2;
  third_circle.positionAtY = person_to_follow.y = heightOfCanvas / 2;
  third_circle.positionAtY += 100;
  third_circle.velocityAtX = -5;
  third_circle.velocityAtY = 2;

  document.body.appendChild(canvas);
  animatingAllObjects();
}

function animatingAllObjects() {
  ctx.clearRect(0, 0, widthOfCanvas, heightOfCanvas);

  first_circle.update();
  second_circle.update();
  third_circle.update();

  person_to_follow.render();

  first_circle.render();
  second_circle.render();
  third_circle.render();

  requestAnimationFrame(animatingAllObjects);
}
function specificationOfCircles(x, y, fillstyle) {
  ctx.fillStyle = fillstyle;
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, TAU);
  ctx.fill();
  ctx.closePath();
}
