let btn = document.querySelector("button");
console.dir(btn);
console.dir(btn.onmouseenter); //onmouseenter - triggers when you hover over the button

btn.onmouseenter = sayName;
btn.onmouseenter = sayAlert;

//only sayAlert executes  

btn.onmouseenter = ()=>{
    console.log("USING ARROW FUNCTION"); //now sayAlert is overlapped by arrow function
}

function sayName(){
    console.log("MY NAME IS BUTTON!");
}

function sayAlert(){
    alert("ALERT - HERE COMES JOHN CEEENAA");
}

//multiple functions cant be used with onmouseenter property