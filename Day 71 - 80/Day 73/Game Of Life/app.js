const canvas = document.getElementById("canvasId");
let w = window.outerWidth;
let h = window.outerHeight;
canvas.width = w;
canvas.height = h;

const ctx = canvas.getContext("2d");
const len = 10;
const x = Math.floor(w / len);
const y = h / len;
let myGol;
let golTemp;

function initTemp() {
  for (let x_val = 0; x_val < x + 2; x_val++) {
    golTemp[x_val] = new Array();
    for (let y_val = 0; y_val < y + 2; y_val++) {
      golTemp[x_val][y_val] = 0;
    }
  }
}

function initMat() {
  myGol = new Array();
  golTemp = new Array();
  for (let x_val = 0; x_val < x + 2; x_val++) {
    myGol[x_val] = new Array();
    golTemp[x_val] = new Array();
    for (let y_val = 0; y_val < y + 2; y_val++) {
      golTemp[x_val][y_val] = 0;
      var ran_val = Math.floor(Math.random() * 2);
      myGol[x_val][y_val] = ran_val;
      if (ran_val == 1) {
        draw(x_val + 1, y_val + 1);
      }
    }
  }
}

function draw(x, y) {
  ctx.fillRect(len * (x - 1), len * (y - 1), len, len);
}

function nextStep() {
  initTemp();

  ctx.fillStyle = "rgba(2, 0, 36, 1)";
  ctx.fillRect(0, 0, w, h);

  for (let x_val = 1; x_val < x + 1; x_val++) {
    for (let y_val = 1; y_val < y + 1; y_val++) {
      var neighSum =
        myGol[x_val + 1][y_val] +
        myGol[x_val + 1][y_val + 1] +
        myGol[x_val + 1][y_val - 1] +
        myGol[x_val][y_val + 1] +
        myGol[x_val][y_val - 1] +
        myGol[x_val - 1][y_val] +
        myGol[x_val - 1][y_val - 1] +
        myGol[x_val - 1][y_val + 1];

      if (myGol[x_val][y_val] == 1) {
        if (neighSum == 2 || neighSum == 3) {
          golTemp[x_val][y_val] = 1;
          ctx.fillStyle = "rgba(65, 11, 245, 1)";
          draw(x_val, y_val);
        }
      } else {
        if (neighSum == 3) {
          golTemp[x_val][y_val] = 1;
          ctx.fillStyle = "rgba(0, 212, 255, 1)";
          draw(x_val, y_val);
        }
      }
    }
  }

  myGol = golTemp.slice();
}
initMat();
setInterval(nextStep, 50);
