(function() {
    const images = [
        "image-0",
        "image-1",
        "image-2",
        "image-3",
        "image-4"
    ];

    const buttons = document.querySelectorAll(".button");
    const imgContainer = document.querySelector(".container");
    let count = 0;

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (button.classList.contains('fa-caret-square-o-left')){
                count--
                if (count<0){
                    count =images.length -1
                }
                imgContainer.style.backgroundImage = `url('./images/${images[count]}.jpg')`
            }
            if (button.classList.contains('fa-caret-square-o-right')){
                count++
                if (count > images.length -1){
                    count = 0
                }
                imgContainer.style.backgroundImage = `url('./images/${images[count]}.jpg')`
            }
        })
    })
})();