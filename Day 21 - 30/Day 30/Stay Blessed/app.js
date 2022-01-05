particles();

// making a function for the particles in the background
function particles() {
  var count = 1000;
  var container = document.querySelector(".container");
  var i = 0;
  while (i < count) {
//     creating an element i for every particle
    var singleParticle = document.createElement("i");
//     giving random size to the particles
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var size = Math.random() * 10;
//     applying styles to the new element i
    singleParticle.style.left = x + "px";
    singleParticle.style.top = y + "px";
    singleParticle.style.width = 1 + size + "px";
    singleParticle.style.height = 1 + size + "px";
    singleParticle.style.animationDuration = 5 + size + "s";
    singleParticle.style.animationDelay = -size + "s";
//     appending the element i in the container div
    container.appendChild(singleParticle);
    i++;
  }
}
