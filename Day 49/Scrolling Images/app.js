const card = document.querySelectorAll(".card");
window.addEventListener("scroll", animateCards);

animateCards();

function animateCards() {
  const checkingBottom = (window.innerHeight / 4) * (125 / 25);
  card.forEach((singleCard) => {
    const cardTop = singleCard.getBoundingClientRect().top;
    var toSlideIn = cardTop < checkingBottom;
    if (toSlideIn) {
      singleCard.classList.add("slidingIn");
    } else {
      singleCard.classList.remove("slidingIn");
    }
  });
}
