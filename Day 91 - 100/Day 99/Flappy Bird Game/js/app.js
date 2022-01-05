const canvas = document.getElementById("id");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false,
  gameSpeed = 2,
  angle = 0,
  hue = 0,
  frame = 0,
  score = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10,canvas.height-90,50,50);
  bird.update();
  bird.draw();
  ctx.fillStyle = "red";
  ctx.font = "90px Georgia";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  handlePar();
  handlePip();
  collide();
  if (collide()) return;
  requestAnimationFrame(animate);
  angle += 0.2;
  hue++;
  frame++;
}
animate();

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") spacePressed = true;
});

window.addEventListener("keyup", (event) => {
  if (event.code === "Space") spacePressed = false;
});

function collide() {
  for (let i = 0; i < pipArr.length; i++) {
    if (
      bird.x < pipArr[i].x + pipArr[i].width &&
      bird.x + bird.width > pipArr[i].x &&
      ((bird.y < 0 + pipArr[i].top && bird.y + bird.height > 0) ||
        (bird.y > canvas.height - pipArr[i].bottom &&
          bird.y + bird.height < canvas.height))
    ) {
      ctx.font = "1.5rem Georgia";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Game Over! You scored " + score,
        180,
        canvas.height / 2 - 10
      );
      return true;
    }
  }
}
