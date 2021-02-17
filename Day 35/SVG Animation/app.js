const svgPath = document.querySelectorAll("#svg path");

for (let i = 0; i < svgPath.length; i++) {
    console.log(`Letter ${i} is ${svgPath[i].getTotalLength()}`)

}

// anime({
//   targets: "#svg path",
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: "easeInOutSine",
//   duration: 1500,
//   delay: function (el, i) {
//     return i * 250;
//   },
//   direction: "alternate",
//   loop: true,
// });
