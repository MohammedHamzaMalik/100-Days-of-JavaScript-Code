const pipArr = [];

class Pipes {
  constructor() {
    this.top = (Math.random() * canvas.height) / 3 + 20;
    this.bottom = (Math.random() * canvas.height) / 3 + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "hsl(" + hue + ",100%,50%)";
    this.counted = false;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }
  update() {
    this.x -= gameSpeed;
    if (!this.counted && this.x < bird.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}

function handlePip() {
  if (frame % 100 == 0) {
    pipArr.unshift(new Pipes());
  }
  for (let i = 0; i < pipArr.length; i++) {
    pipArr[i].update();
  }
  if (pipArr > 20) {
    pipArr.pop(pipArr[0]);
  }
}
