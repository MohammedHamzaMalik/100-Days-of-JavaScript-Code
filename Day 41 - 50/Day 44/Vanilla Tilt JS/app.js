// Adding vanilla tilt js for tilt animation
VanillaTilt.init(document.querySelector(".card"), {
  max: 100,
  speed: 200,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));
