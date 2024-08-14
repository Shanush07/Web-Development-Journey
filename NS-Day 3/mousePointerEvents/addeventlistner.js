let btn = document.querySelector("button");
console.dir(btn);
console.dir(btn.addEventListener); 

btn.addEventListener("click",sayName);
btn.addEventListener("click",sayAlert); 
//both sayName & sayAlert executes  

function sayName(){
    console.log("MY NAME IS BUTTON!");
}

function sayAlert(){
    alert("ALERT - HERE COMES JOHN CEEENAA");
}

//multiple functions cant be used with onclick property