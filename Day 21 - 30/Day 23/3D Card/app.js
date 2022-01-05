const card = document.querySelector(".card");
const cardContainer = document.querySelector(".cardContainer");
const header = document.querySelector(".header");
const shoe = document.querySelector(".shoe img");
const addToCart = document.querySelector(".addToCart");
const description = document.querySelector(".content h3");
const shoeSizes = document.querySelector(".shoeSizes");


cardContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
cardContainer.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  header.style.transform = "translateZ(150px)";
  shoe.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  shoeSizes.style.transform = "translateZ(100px)";
  addToCart.style.transform = "translateZ(75px)";
});
cardContainer.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  header.style.transform = "translateZ(0px)";
  shoe.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  shoeSizes.style.transform = "translateZ(0px)";
  addToCart.style.transform = "translateZ(0px)";
});
