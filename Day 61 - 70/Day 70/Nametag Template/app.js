let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Mohammed", "Hamza", "Malik"];

let colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#800000",
  "#8B0000",
  "#FFA500",
  "#FFD700",
  "#6B8E23",
  "#7CFC00",
  "#000080",
  "#8B008B",
  "#FF00FF",
  "#F4A460",
  "#FF3855",
  "#FD3A4A",
  "#FB4D46",
  "#FA5B3D",
  "#FFAA1D",
  "#FFF700",
  "#299617",
  "#A7F432",
  "#2243B6",
  "#5DADEC",
  "#5946B2",
  "#9C51B6",
  "#A83731",
  "#AF6E4D",
  "#1B1B1B",
  "#BFAFB2",
  "#FF5470",
  "#FFDB00",
  "#FF7A00",
  "#FDFF00",
  "#87FF2A",
  "#0048BA",
  "#FF007C",
  "#E936A7",
];

let sticker = function (name) {
  let div = template.content.querySelector("div");
  let nameOnStick = div.querySelector(".name");

  nameOnStick.innerHTML = name;
  div.style.background = colors[randomNum(0, colors.length - 1)];
  div.style.transform = "rotate(" + randomNum(-20, 20) + "deg)";

  let node = document.importNode(div, true);
  wrapper.appendChild(node);
};
function randomNum(min, max) {
  let num = Math.random() * (max - min) + min;
  return Math.round(num);
}
names.forEach(sticker);