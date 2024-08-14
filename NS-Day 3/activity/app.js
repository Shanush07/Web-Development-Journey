let btn = document.querySelector("button");
btn.addEventListener("click",setHeading);

function setHeading(){
    let heading = document.querySelector("h3");
    let randomColor = getRandomColor();
    heading.innerText = randomColor;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    
    console.log("Color updated");
}

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}