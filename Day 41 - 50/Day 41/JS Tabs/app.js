const body = document.body;
const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const tabs = document.querySelectorAll(".link");
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");
// const firstLine = document.querySelector(".one");
// const secondLine = document.querySelector(".two");
// const thridLine = document.querySelector(".three");

active.classList.add("react-icon");

tabOne.classList.add("react-icon");

icon.innerHTML = `<i class="fab fa-react"></i>`;

tabOne.classList.add("tabOne");

tabOne.addEventListener("click", () => {
  body.style.backgroundColor = "#00d8ff";
//   changing icon in the content
  icon.innerHTML = `<i class="fab fa-react"></i>`;
//   changing tab 
  tabOne.classList.add("tabOne");
  tabTwo.classList.remove("tabOne");
  tabThree.classList.remove("tabOne");
//      changing the icon for there color
  active.classList.add("react-icon");
  active.classList.remove("vue-icon");
  active.classList.remove("angular-icon");
//      changing the icon for there color
  tabOne.classList.add("react-icon");
  tabTwo.classList.remove("vue-icon");
  tabThree.classList.remove("angular-icon");
  // firstLine.style.width = "width: 70%;";
  // secondLine.style.width = "width: 50%;";
  // thridLine.style.width = "width: 90%;";
});

tabTwo.addEventListener("click", () => {
  body.style.backgroundColor = "#42b883";
  icon.innerHTML = `<i class="fab fa-vuejs"></i>`;
  icon.style.color = "#42b883";
  tabOne.classList.remove("tabOne");
  tabTwo.classList.add("tabOne");
  tabThree.classList.remove("tabOne");
  active.classList.remove("react-icon");
  active.classList.add("vue-icon");
  active.classList.remove("angular-icon");

  tabOne.classList.remove("react-icon");
  tabTwo.classList.add("vue-icon");
  tabThree.classList.remove("angular-icon");
  // firstLine.style.width = "width: 90%;";
  // secondLine.style.width = "width: 70%;";
  // thridLine.style.width = "width: 50%;";
});

tabThree.addEventListener("click", () => {
  body.style.backgroundColor = "#b52e31";
  icon.innerHTML = `<i class="fab fa-angular"></i>`;
  tabOne.classList.remove("tabOne");
  tabTwo.classList.remove("tabOne");
  tabThree.classList.add("tabOne");
  active.classList.remove("react-icon");
  active.classList.remove("vue-icon");
  active.classList.add("angular-icon");

  tabOne.classList.remove("react-icon");
  tabTwo.classList.remove("vue-icon");
  tabThree.classList.add("angular-icon");
  // firstLine.style.width = "width: 50%;";
  // secondLine.style.width = "width: 90%;";
  // thridLine.style.width = "width: 70%;";
});
