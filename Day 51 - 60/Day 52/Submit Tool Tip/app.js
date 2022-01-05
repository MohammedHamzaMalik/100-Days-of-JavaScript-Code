    const button = document.querySelector(".submit-btn");
    const body = document.body;

//     adding the styles when submitted
    button.addEventListener("click", ()=> {
        button.innerText = "Submitted";
        button.style.backgroundColor = "#81FF00";
        button.style.color = "#333";
        button.style.animation = "animate 0.5s ease"

        body.style.backgroundColor = "#7e00ff";
        
    })
