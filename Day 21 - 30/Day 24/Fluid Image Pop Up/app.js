const modal = document.querySelector(".modal");
const preview = document.querySelectorAll(".img-gallery img");
const original = document.querySelector(".big-image");
const caption = document.querySelector(".caption");

preview.forEach((small) => {
  small.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
//     updating src and alt text of image
    const bigSrc = small.getAttribute("data-original");
    original.src = `./images/big/${bigSrc}`;
    const alt = small.alt;
    caption.textContent = alt;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});
