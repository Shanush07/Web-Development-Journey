let h1 = document.querySelector("h1");

let btn = document.querySelector("button");

let h3 = document.querySelector("h3");

let p = document.querySelector("p");

h1.addEventListener("click",setColor);
h3.addEventListener("click",setColor);
p.addEventListener("click",setColor);
btn.addEventListener("click",setColor);

function setColor(){
    this.style.backgroundColor = "blue";
    console.log("color updated");
}
