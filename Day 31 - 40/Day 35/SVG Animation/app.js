const svgPath = document.querySelectorAll("#svg path");

for (let i = 0; i < svgPath.length; i++) {
    console.log(`Letter ${i} is ${svgPath[i].getTotalLength()}`)
//     this will give the length of every alphabet
}

// tried this but it will require only one path and I am having 5 path actually 10 😅
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
