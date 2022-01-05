const array = [];

class Particles {
  constructor() {
    this.x = bird.x;
    this.y = bird.y;
    this.size = Math.random() * 7 + 3;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = "hsl(" + hue + ",100%,50%)";
  }
  update() {
    this.x -= gameSpeed;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handlePar() {
  array.unshift(new Particles());
  for (let i = 0; i < array.length; i++) {
    array[i].update();
    array[i].draw();
  }
  if (array.length > 200) {
    for (let i = 0; i < 20; i++) {
      array.pop(array[i]);
    }
  }
}
