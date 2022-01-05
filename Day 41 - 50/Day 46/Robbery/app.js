// giving random size to the police officers
function randomSize(min, max) {
  min = Math.ceil(40);
  max = Math.ceil(150);
  return Math.floor(Math.random() * (max - min)) + min;
}

// rotating needle where the mouse moves
function rotateNeedle() {
  needle.forEach(function (needle) {
    let x = needle.getBoundingClientRect().left + needle.clientWidth / 2;
    let y = needle.getBoundingClientRect().top + needle.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    needle.style.transform = "rotate(" + rot + "deg)";
  });
}
document.querySelector("body").addEventListener("mousemove", rotateNeedle);

let needle = document.querySelectorAll(".needle");
for (let i = 0; i < needle.length; i++) {
  needle[i].style.left = Math.floor(Math.random() * 99) + "vw";
  needle[i].style.top = Math.floor(Math.random() * 99) + "vh";
  needle[i].style.width = randomSize() + "px";
}
