setInterval(particles, 300);
function particles() {
  const div = document.querySelector("div");
  const particles = document.createElement("span");

  var sizeOfParticle = Math.random() * 50;

//   giving random size to the bubbles
  particles.style.width = 10 + sizeOfParticle + "px";
  particles.style.height = 10 + sizeOfParticle + "px";

//   positioning it with random top and left values
  particles.style.top = Math.random() * innerHeight + "px";
  particles.style.left = Math.random() * innerWidth + "px";

//   appending the child particle to our main div
  div.appendChild(particles);

//   fading out the bubble after 2s
  setTimeout(() => {
    particles.remove();
  }, 2000);
}
