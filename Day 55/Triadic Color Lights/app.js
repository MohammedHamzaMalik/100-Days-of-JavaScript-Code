const light = document.querySelectorAll(".light");
let active = 0;
var body = document.body;

setInterval(() => {
    changeColor();
}, 1500);

function changeColor() {
    light[active].className = 'light';
    active++;
    // if(active==0){
    //     body.style.backgroundColor = "#00FFFC";
    // }
    if(active>2){
        active=0
        body.style.backgroundColor = "#00FFFC";
    } else if (active==1){
        body.style.backgroundColor = "#FC00FF";
    } else if (active==2){
        body.style.backgroundColor = "#fffc00";
    }
    const present = light[active];

    present.classList.add(present.getAttribute('color'));
}