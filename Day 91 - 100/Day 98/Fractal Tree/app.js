const canvas = document.getElementById("id");
const button = document.querySelector(".treeGenerator");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let curve = 10;
let curve2 = 0;
function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#000";
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.moveTo(0, 0);
  // ctx.lineTo(0,-len);
  if (angle > 0) {
    ctx.bezierCurveTo(curve2, -len / 2, curve2, -len / 2, 0, -len);
  } else {
    ctx.bezierCurveTo(curve2, -len / 2, -curve2, -len / 2, 0, -len);
  }
  ctx.stroke();

  if (len < 5) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }
  drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.6);
  drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6);
  ctx.restore();
}
drawTree(canvas.width / 2, canvas.height - 80, 120, 0, 15, "brown", "green");

function generateButton() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let centerPointX = canvas.width / 2;
  let len = Math.floor(Math.random() * 20) + 100;
  let angle = 0;
  let branchWidth = Math.random() * 50 + 1;
  let color1 =
    "rgba(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";
  let color2 =
    "rgba(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";
  button.style.backgroundColor = color1;
  curve = Math.random() * 10 + 10;
  curve2 = Math.random() * 50;
  drawTree(
    centerPointX,
    canvas.height - 80,
    len,
    angle,
    branchWidth,
    color1,
    color2
  );
}
button.addEventListener("click", generateButton);
