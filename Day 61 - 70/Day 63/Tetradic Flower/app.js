var container = document.getElementById("container");
var leaf = document.getElementById("leaf");



function leafCreation(color) {
  let newLeaf = document.createElement("div");
  newLeaf.setAttribute("class", "leaf");
  newLeaf.style.backgroundColor = "#FF0061";
  newLeaf.classList.add("animation");
  container.append(newLeaf);
}
for (let i = 0; i <50; i++) {
  leafCreation("#FF0061");
}

let allLeaf = Array.from($(".container").find(".leaf"));

allLeaf.forEach((singleLeaf, idx) => {
  var t = new TimelineMax({});
  idx += 2;
  var rotate = (360/18) * idx;
  t.to(singleLeaf, 7, {
    rotation: rotate + "deg",
    opacity: 0.1,
    backgroundColor: "#E1FF00",
  })
});
