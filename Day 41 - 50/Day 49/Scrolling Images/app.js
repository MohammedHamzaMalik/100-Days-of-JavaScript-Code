const card = document.querySelectorAll(".card");
window.addEventListener("scroll", animateCards);

animateCards();

function animateCards() {
//   checking the bottom 
  const checkingBottom = (window.innerHeight / 4) * (125 / 25);
  card.forEach((singleCard) => {
    const cardTop = singleCard.getBoundingClientRect().top;
    var toSlideIn = cardTop < checkingBottom;
//     if we slide below the bottom level this will check
    if (toSlideIn) {
//       it will add our new card 
      singleCard.classList.add("slidingIn");
    } else {
//       this will remove the added card
      singleCard.classList.remove("slidingIn");
    }
  });
}
