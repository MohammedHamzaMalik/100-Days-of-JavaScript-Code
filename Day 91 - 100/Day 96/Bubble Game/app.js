// setup
const canvas = document.getElementById("id");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = "50px Georgia";

// mouse interaction

let canvasPos = canvas.getBoundingClientRect();
console.log(canvasPos);

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
};
canvas.addEventListener("mousedown", (e) => {
  mouse.click = true;
  mouse.x = e.x - canvasPos.left;
  mouse.y = e.y - canvasPos.top;
  console.log(mouse.x, mouse.y);
});
canvas.addEventListener("mouseup", () => {
  mouse.click = false;
});

// player
class Player {
  constructor() {
    this.x = canvas.width;
    this.y = canvas.height / 2;
    this.radius = 50;
    this.angle = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
  }
  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    if (mouse.x != this.x) {
      this.x -= dx / 10;
    }
    if (mouse.y != this.y) {
      this.y -= dy / 10;
    }
  }
  draw() {
    if (mouse.click) {
      ctx.lineWidth = 0.2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

const player = new Player();

// bubbles
const array = [];

class Bubbles {
  constructor() {
    this.x = Math.random() * canvas.width;
    // this.y = canvas.height + Math.random() * canvas.height;
    this.y = canvas.height + 100;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false;
    this.sound = Math.random() <= 0.5 ? "sound1" : "sound2";
  }
  update() {
    this.y -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }
}

const bubblePop1 = document.createElement("audio");
bubblePop1.src = "Plop.ogg";
const bubblePop2 = document.createElement("audio");
bubblePop2.src = "bubbles-single2.wav";

function handleBubbles() {
  if (gameFrame % 50 == 0) {
    array.push(new Bubbles());
    console.log(array.length);
  }
  for (let i = 0; i < array.length; i++) {
    array[i].update();
    array[i].draw();
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].y < 0 - array[i].radius * 2) {
      array.splice(i, 1);
    }
    if (array[i].distance < array[i].radius + player.radius) {
      console.log("col");
      if (!array[i].counted) {
        if (array[i].sound == "sound1") {
          bubblePop1.play();
        } else {
          bubblePop2.play();
        }
        score++;
        array[i].counted = true;
        array.splice(i, 1);
      }
    }
  }
}
// animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.draw();
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 10, 50);
  handleBubbles();
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
