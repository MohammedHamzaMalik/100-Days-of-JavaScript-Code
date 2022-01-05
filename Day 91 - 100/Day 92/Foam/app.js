const canvas = document.getElementById("canvasID");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let array = [];
const colors = ["rgb(208,234,232)", "rgb(205,253,253)", "rgb(242,250,254)"];

const maxSize = 40;
const minSize = 0;
const mouseRadius = 60;

let mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  console.log(mouse);
});

function Foam(x, y, dirX, dirY, size, color) {
  this.x = x;
  this.y = y;
  this.dirX = dirX;
  this.dirY = dirY;
  this.size = size;
  this.color = color;
}

Foam.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

Foam.prototype.update = function () {
  if (this.x - this.size * 2 < 0 || this.x + this.size * 2 > canvas.width) {
    this.dirX -= this.dirX;
  }
  if (this.y - this.size * 2 < 0 || this.y + this.size * 2 > canvas.height) {
    this.dirY -= this.dirY;
  }
  this.dirX += this.dirX;
  this.dirY += this.dirY;

  let mouseRadius = 100;

  if (
    mouse.x - this.x < mouseRadius &&
    mouse.x - this.x > -mouseRadius &&
    mouse.y - this.y < mouseRadius &&
    mouse.y - this.y > -mouseRadius
  ) {
    if (this.size < maxSize) {
      this.size += 3;
      this.x -= 1.5;
    }
  } else if (this.size > minSize) {
    this.size -= 0.1;
  }
  if (this.size < 0) {
    this.size = 0;
  }
  this.draw();
};

function init() {
  array = [];
  for (let i = 0; i < 1000; i++) {
    let size = 10;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let dirX = Math.random() * 0.2 - 0.1;
    let dirY = Math.random() * 0.2 - 0.1;
    let color = colors[Math.floor(Math.random() * colors.length)];

    array.push(new Foam(x, y, dirX, dirY, size, color));
  }
  console.table(array);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < array.length; i++) {
    array[i].update();
  }
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

setInterval(() => {
  mouse.x = undefined;
  mouse.y = undefined;
}, 1000);
