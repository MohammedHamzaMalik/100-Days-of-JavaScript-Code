var colorContainer = document.querySelector(".color-container");
var colorBtn = document.querySelector(".newColor-btn");
var colorBtnbyID = document.getElementById("newColor-btn");

window.onload = function colorTheRec() {
  allRec.forEach((e) => {
    var newColorCode = colorCodeInHex();
    e.style.backgroundColor = newColorCode;
    e.innerHTML = "rgb(" + hexToRgb(newColorCode) + ")";
  });
};
for (let i = 0; i < 20; i++) {
  const rec = document.createElement("span");
  rec.classList.add("rec");
  colorContainer.appendChild(rec);
}
var allRec = document.querySelectorAll(".rec");
console.log(allRec);
function colorCodeInHex() {
  var char = "abcdef1234567689";
  var codeLen = 6;
  var colorCode = "";

  for (let i = 0; i < codeLen; i++) {
    var color = Math.floor(Math.random() * char.length);
    colorCode += char.substring(color, color + 1);
  }
  return "#" + colorCode;
}

colorBtnbyID.onclick = function colorTheRec() {
  allRec.forEach((e) => {
    var newColorCode = colorCodeInHex();
    e.style.backgroundColor = newColorCode;
    e.innerHTML = "rgb(" + hexToRgb(newColorCode) + ")";
  });
};

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
