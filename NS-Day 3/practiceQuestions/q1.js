let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("mouseout",function(event){
    console.dir(event);
    console.log("Hovering");
});

inp.addEventListener("keypress", function(event){
    console.dir(event);
    console.log(this.value);
});

window.addEventListener("scroll", function() {
    console.log("You scrolled the page!");
});

window.addEventListener("load", function() {
    alert("Page has fully loaded!");
  });

