let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

function clicked(){
    console.log(this+" was clicked");
}

div.addEventListener("click",clicked);
ul.addEventListener("click",clicked);

for(li of lis){
    li.addEventListener("click",clicked);
}