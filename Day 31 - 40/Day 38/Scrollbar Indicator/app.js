const scrollIndi = document.getElementById("scrollIndicator");
const height = window.document.body.scrollHeight - window.innerHeight;

// adding scroll eventlistener 
window.addEventListener("scroll", () => {
  {
    const percent = (window.scrollY / height) * 100;
    scrollIndi.style.width = percent + "%";
  }
});
