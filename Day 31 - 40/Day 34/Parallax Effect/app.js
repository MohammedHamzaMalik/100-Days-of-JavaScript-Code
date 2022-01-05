document.addEventListener("mousemove", parallax);
var layers = document.querySelectorAll(".layer");

// creating function for parallax effect
function parallax(e) {
  layers.forEach((layer) => {
    var movement = layer.getAttribute("data-speed");
//     controlling the movement of image while moving the mouse
    var x = (window.innerWidth - e.pageX * movement) / 250;
    var y = (window.innerWidth - e.pageX * movement) / 250;

    layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
  });
}
