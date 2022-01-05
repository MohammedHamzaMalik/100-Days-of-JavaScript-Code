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
// - CSS Variables - https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
//       Updating CSS with JavaScript
//     - CSS filter property - https://developer.mozilla.org/en-US/docs/Web/CSS/filter
//     - HTMLElement.dataset - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset - Takes everything on the data-'set' and puts in an object.
//     - Element: mousemove event - https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
//     -document.documentElement selects the entire HTML element
