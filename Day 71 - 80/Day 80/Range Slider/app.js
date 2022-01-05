const range = document.getElementById("range");
const number = document.getElementById("rangeValue");
const body = document.body;

range.addEventListener("mousemove",function(value){
    number.innerHTML = this.value; 
    
    if(number.innerText > 25){
        number.style.color = "#fff";
        body.style.backgroundColor = "#08f7fe";        
    } 
    if(number.innerText > 50){
        number.style.color = "#555";
        body.style.backgroundColor = "#09fbd3";
    }
    if(number.innerText > 75){
        number.style.color = "#333";
        body.style.backgroundColor = "#fe53bb";
    }
    if(number.innerText > 90){
        number.style.color = "#000";
        body.style.backgroundColor = "#f5d300";
    } 
    if(number.innerText == 0){
        number.style.color = "red";
        body.style.backgroundColor = "#333";
    } 
    
})
range.addEventListener("change",function(value){
    number.innerHTML = this.value;
    if(number.innerText > 25){
        number.style.color = "#fff";
        body.style.backgroundColor = "#08f7fe";        
    } 
    if(number.innerText > 50){
        number.style.color = "#555";
        body.style.backgroundColor = "#09fbd3";
    }
    if(number.innerText > 75){
        number.style.color = "#333";
        body.style.backgroundColor = "#fe53bb";
    }
    if(number.innerText > 90){
        number.style.color = "#000";
        body.style.backgroundColor = "#f5d300";
    } 
    if(number.innerText == 0){
        number.style.color = "red";
        body.style.backgroundColor = "#333";
    } 
})
