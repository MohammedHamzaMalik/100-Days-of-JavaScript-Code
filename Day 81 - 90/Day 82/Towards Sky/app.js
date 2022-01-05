var requestFrameAnimation =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
window.requestAnimationFrame = requestFrameAnimation;

var canvas = document.getElementById("canvasId"),
  w = window.innerWidth,
  h = window.innerHeight,
  num_of_cirlce = 25,
  ctx = canvas.getContext("2d"),
  circleArr = [];

canvas.width = w;
canvas.height = h;

function circle() {
    this.x = Math.random()*w;
    this.y = Math.random()*h;

    this.speed = 0.5;

    this.color = "#f7ce94";

    this.size = Math.random()*(h*0.025);
    this.radius = Math.floor(Math.random()*20);
}

function draw(){
    var cirlces;
    canvas.width = w;
    canvas.height = h;

    for (let i = 0; i < circleArr.length; i++) {
        cirlces = circleArr[i];
        cirlces.y -= cirlces.speed;
        ctx.beginPath();
        ctx.moveTo(cirlces.x,cirlces.y);
        ctx.arc(cirlces.x,cirlces.y,cirlces.radius,Math.PI*2,0,false);
        // ctx.lineTo(cirlces.x+cirlces.size,cirlces.y);
        // ctx.lineTo(cirlces.x+cirlces.size/2,cirlces.y - cirlces.size);

        ctx.fillStyle = cirlces.color;

        ctx.fill();

        if(cirlces.y<0){
            cirlces.y = Math.random()*h;
        }
    }
}

for (let i = 0; i < num_of_cirlce; i++) {
    circleArr.push(new circle());    
}
setInterval(draw,10);