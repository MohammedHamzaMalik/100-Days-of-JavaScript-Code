particles();

function particles() {
  var count = 1000;
  var container = document.querySelector(".container");
  var i = 0;
  while (i < count) {
    var singleParticle = document.createElement("i");
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var size = Math.random() * 10;
    singleParticle.style.left = x + "px";
    singleParticle.style.top = y + "px";
    singleParticle.style.width = 1 + size + "px";
    singleParticle.style.height = 1 + size + "px";
    singleParticle.style.animationDuration = 5 + size + "s";
    singleParticle.style.animationDelay = -size + "s";
    container.appendChild(singleParticle);
    i++;
  }
}
