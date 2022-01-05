const canvas = document.getElementById("canvasID");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArr = [];
let hue = 0;
let frame = 0;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  hue += 8;
  if (particlesArr.length < 100) {
    for (let i = 0; i < 50; i++) {
      particlesArr.push(new Particle());
    }
  }
});

canvas.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  hue += 2;
  if (frame % 2 === 0) {
    for (let i = 0; i < 7; i++) {
      particlesArr.push(new Particle());
    }
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 5 - 1.5;
    this.speedY = Math.random() * 5 - 1.5;
    this.color = "hsl(" + hue + ",100%,50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function managePar() {
  for (let i = 0; i < particlesArr.length; i++) {
    for (let j = i; j < particlesArr.length; j++) {
      const dx = particlesArr[i].x - particlesArr[j].x;
      const dy = particlesArr[i].y - particlesArr[j].y;
      const dis = Math.sqrt(dx * dx + dy * dy);

      if (dis < 100) {
        ctx.beginPath();
        ctx.strokeStyle = particlesArr[i].color;
        ctx.lineWidth = 0.2;
        ctx.moveTo(particlesArr[i].x, particlesArr[i].y);
        ctx.lineTo(particlesArr[j].x, particlesArr[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
    particlesArr[i].update();
    particlesArr[i].draw();

    if (particlesArr[i].size <= 0.3) {
      particlesArr.splice(i, 1);
      console.log(particlesArr.length);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  managePar();
  frame++;
  requestAnimationFrame(animate);
}
animate();
