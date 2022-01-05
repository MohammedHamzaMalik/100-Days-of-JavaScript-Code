const text = document.getElementById("text");
const letters = text.innerText;
const canvas = document.getElementById("canvasID");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let array = [];
let adjustX = 6;
let adjustY = 0;
ctx.lineWidth = 3;

const mouse = {
  x: null,
  y: null,
  radius: 250,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  mouse.radius = 150;
  console.log(mouse.x, mouse.y);
});

ctx.fillStyle = "white";
ctx.font = "1rem Verdana";
ctx.fillText(letters, 0, 30);
const data = ctx.getImageData(0, 0, 100, 100);
class Letter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 80 + 1;
    this.distance;
  }
  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.strokeStyle = "#48cae4";
    ctx.beginPath();

    if (this.distance < mouse.radius - 5) {
      this.size = 10;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(this.x - 3, this.y - 3, this.size / 2.5, 0, Math.PI * 2);
      ctx.arc(this.x + 7, this.y - 1, this.size / 3.5, 0, Math.PI * 2);
    } else if (this.distance <= mouse.radius) {
      this.size = 8;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(this.x - 2, this.y - 2, this.size / 3, 0, Math.PI * 2);
    } else {
      this.size = 5;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(this.x - 1, this.y - 1, this.size / 3, 0, Math.PI * 2);
    }

    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    this.distance = distance;
    let forceDirX = dx / distance;
    let forceDirY = dy / distance;
    let maxDis = mouse.radius;
    let force = (maxDis - distance) / maxDis;
    let dirX = forceDirX * force * this.density;
    let dirY = forceDirY * force * this.density;

    if (distance < mouse.radius) {
      //   this.size = 30;
      this.x -= dirX;
      this.y -= dirY;
    } else {
      //   this.size = 3;
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  array = [];
  for (let y = 0, y2 = data.height; y < y2; y++) {
    for (let x = 0, x2 = data.width; x < x2; x++) {
      if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
        let posX = x + adjustX;
        let posY = y + adjustY;
        array.push(new Letter(posX * 10, posY * 10));
      }
    }
  }
  //   for (let i = 0; i < 500; i++) {
  //       let x = Math.random()*canvas.width;
  //       let y = Math.random()*canvas.height;
  //       array.push(new Letter(x, y));
  //   }
  //   array.push(new Letter(50, 50));
  //   array.push(new Letter(80, 50));
}
init();
console.table(array);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < array.length; i++) {
    array[i].draw();
    array[i].update();
  }
  // connect();
  requestAnimationFrame(animate);
}
animate();

function connect() {
  let opacityVal = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let dx = array[i].x - array[j].x;
      let dy = array[i].y - array[j].y;
      let dis = Math.sqrt(dx * dx + dy * dy);
      opacityVal = 1 - dis / 50;
      // ctx.strokeStyle = "white";
      ctx.strokeStyle = "rgba(255,255,255," + opacityVal + ")";
      if (dis < 50) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(array[i].x, array[i].y);
        ctx.lineTo(array[j].x, array[j].y);
        ctx.stroke();
      }
    }
  }
}
