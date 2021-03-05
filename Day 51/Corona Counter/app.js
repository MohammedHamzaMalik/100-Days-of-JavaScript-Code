const counter = document.querySelectorAll(".counter");

// counting();

counter.forEach((singleCounter) => {
  singleCounter.innerText = 0;

  const counting = () => {
    const totalCount = +singleCounter.getAttribute("data-counter");
    const incrementing = +singleCounter.innerText;

    const speed = totalCount / 1000;

    if (incrementing < totalCount) {
      singleCounter.innerText = `${Math.floor(incrementing + speed)}`;
      setTimeout(counting, 1);
    } else {
      singleCounter.innerText = totalCount;
    }
  };
  counting();
});
