/*Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked. */

let btn = document.querySelector("button");

btn.addEventListener("click",function(event){
    console.dir(event);
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    this.style.backgroundColor = color;
    console.log("Changing Color"); 
});