const text = document.getElementById("text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const aplha = document.querySelectorAll("span");

for (let i = 0; i < aplha.length; i++) {
  aplha[i].addEventListener("mouseover", () => {
    aplha[i].classList.add("active");
  });
}
