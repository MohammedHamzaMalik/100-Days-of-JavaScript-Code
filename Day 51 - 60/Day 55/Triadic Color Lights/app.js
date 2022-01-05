const light = document.querySelectorAll(".light");
var body = document.body;

let active = 0;

setInterval(() => {
    changeColor();
}, 1500);

function changeColor() {
    light[active].className = 'light';
    active++;
    
    if(active>2){
        active=0
        body.style.backgroundColor = "#00FFFC";
    } else if (active==1){
        body.style.backgroundColor = "#FC00FF";
    } else if (active==2){
        body.style.backgroundColor = "#fffc00";
    }
    const presentLight = light[active];

    presentLight.classList.add(presentLight.getAttribute('color'));
}
