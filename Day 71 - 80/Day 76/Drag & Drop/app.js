function drag() {
  var dragging = false;
  var mouseX, mouseY;
  var eleX, eleY;

  var boxes = document.querySelectorAll("[draggable]");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mousedown", mouseDown);
    boxes[i].style.top = 0;
    boxes[i].style.left = 0;
  }
  function mouseDown(e) {
    e.preventDefault();

    dragging = this;

    mouseX = e.pageX;
    mouseY = e.pageY;
    eleX = Number.parseInt(dragging.style.left);
    eleY = Number.parseInt(dragging.style.top);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }
  function mouseMove(e) {
    if (dragging) {
      deltaMouseX = e.pageX - mouseX;
      deltaMouseY = e.pageY - mouseY;

      dragging.style.left = deltaMouseX + eleX + "px";
      dragging.style.top = deltaMouseY + eleY + "px";
    }
  }
  function mouseUp(e) {
    dragging = false;

    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
  }
}
drag();