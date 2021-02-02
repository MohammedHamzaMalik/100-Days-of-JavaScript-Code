const inputs = document.querySelectorAll(".css-controller input");

inputs.forEach((input) => input.addEventListener("change", update));
inputs.forEach((input) => input.addEventListener("mousemove", update));

function update() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
