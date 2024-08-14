let btn = document.querySelector("button");
console.dir(btn);
console.dir(btn.onclick); // onclick - triggers when you click a button

btn.onclick = sayName;
btn.onclick = sayAlert;

//only sayAlert executes  

btn.onclick = ()=>{
    console.log("USING ARROW FUNCTION"); //now sayAlert is overlapped by arrow function
}

function sayName(){
    console.log("MY NAME IS BUTTON!");
}

function sayAlert(){
    alert("ALERT - HERE COMES JOHN CEEENAA");
}

//multiple functions cant be used with onclick property