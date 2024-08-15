let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let btn = document.querySelector("button");
let inp = document.querySelector("input");

let liBtn = document.createElement("button");
let newLi = document.createElement("li");

btn.addEventListener("click", function(){
    if(inp.value != ""){
        newLi.textContent = inp.value;
        liBtn.textContent = "Delete";
        newLi.appendChild(liBtn);
        inp.value = null;
    }
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});


