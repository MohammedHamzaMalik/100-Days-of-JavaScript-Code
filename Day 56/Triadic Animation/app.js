const container = document.querySelector(".container");

function dropped() {
    const drop = document.createElement("span");
    drop.classList.add("drop");
    drop.style.top = Math.random() * innerHeight + 'px';
    drop.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(drop);
    
    setTimeout(() => {
        drop.remove();
    }, 6500);
}

setInterval(dropped,500);