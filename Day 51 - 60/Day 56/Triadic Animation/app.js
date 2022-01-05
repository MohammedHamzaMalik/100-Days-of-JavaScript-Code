const container = document.querySelector(".container");

function dropped() {
//     below line will create a span element
    const drop = document.createElement("span");
    drop.classList.add("drop");
    drop.style.top = Math.random() * innerHeight + 'px';
    drop.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(drop);
//     in the above line we are adding the drop element to out container
    
    setTimeout(() => {
        drop.remove();
    }, 6500);
}

setInterval(dropped,500);
