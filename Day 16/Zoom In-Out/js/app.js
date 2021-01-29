const zoomScreen = document.querySelector(".container");
let zoom = 1;
const zoomSpeed = 0.1;

document.addEventListener("wheel", (e)=> {
    if (e.deltaY > 0) {
        zoomScreen.style.transform = `scale(${(zoom += zoomSpeed)})`;   
    } else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomSpeed)})`;
    }
})