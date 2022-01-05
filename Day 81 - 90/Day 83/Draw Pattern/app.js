var canvas = document.getElementById("canvasID");
var ctx = canvas.getContext("2d");

var TAU = Math.PI * 2;

var W, H, DPR;
function r(n) {
  return Math.random() * n;
}
function rrng(lo, hi) {
  return lo + r(hi - lo);
}
function rint(lo, hi) {
  return lo + Math.floor(r(hi + lo));
}
function choose(args) {
  return args[rint(0, args.length)];
}

function resize() {
  var w = innerWidth;
  var h = innerHeight;
  DPR = devicePixelRatio || 1;

  canvas.style.width = w + "px";
  canvas.style.height = h + "px";

  W = canvas.width = w * DPR;
  H = canvas.height = h * DPR;
}

var fram, time;

function loop(t) {
  fram = requestAnimationFrame(loop);
  draw();
  time++;
}

function pause() {
  cancelAnimationFrame(fram);
  fram = fram ? null : requestAnimationFrame(loop);
}

function reset() {
  cancelAnimationFrame(fram);
  resize();
  ctx.clearRect(0, 0, W, H);
  init();
  time = 0;
  fram = requestAnimationFrame(loop);
}

function Particle(x, y, velX, velY, color) {
  this.px = x;
  this.py = y;
  this.x = x + velX;
  this.y = y + velY;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
}

Particle.prototype.integrate = function () {
  this.velX = this.x - this.px;
  this.velY = this.y - this.py;
  this.px = this.x;
  this.py = this.y;
  this.velX *= DAMP;
  this.velY *= DAMP;
};

Particle.prototype.move = function () {
  this.x += this.velX;
  this.y += this.velY;
};

Particle.prototype.gravitateTo = function (x, y) {
  var dx = x - this.x;
  var dy = y - this.y;
  var d = Math.sqrt(dx * dx + dy * dy);
  this.velX += dx / d;
  this.velY += dy / d;
};

Particle.prototype.draw = function () {
  ctx.moveTo(this.px, this.py);
  ctx.lineTo(this.x, this.y);
};

var DAMP = 1,
  particles,
  gravitrons,
  G;

function color(n) {
  n = 64 + Math.floor(64 * n);
  return "rgba(" + 20 + "," + n + "," + n + ",0.05";
}
function init() {
  spawnPar();
  DAMP = 0.89;
}

function spawnPar() {
  N = 0;
  particles = [];
  for (let i = W / 2 - 35; i < W / 2 + 35; i++) {
    for (let j = H / 2 - 35; j < H / 2 + 35; j++) {
      particles[N++] = new Particle(i, j, 0, 0, color(0.5));
    }
  }
  for (let i = 0; i < N; i++) {
    particles[i].friend = choose(particles);
  }
}

function draw() {
  ctx.beginPath();
  for (let i = 0; i < N; i++) {
    var p = particles[i];
    var f = p.friend;
    p.draw();
    p.integrate();
    p.gravitateTo(f.x, f.y);
    p.move();
  }
  ctx.strokeStyle = color((time < 300 ? time : 600 - time) / 300);
  ctx.stroke();
  if (time == 600) time = 0;
  DAMP *= .99996;
}

document.onclick = pause;
document.ondblclick = reset;

reset();
