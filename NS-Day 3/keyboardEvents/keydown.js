let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
    if(event.code == "KeyW" || event.code == "ArrowUp"){
        console.log("Character goes up");
    }
    else if(event.code == "KeyS" || event.code == "ArrowDown"){
        console.log("Character goes down");
    }
    else if(event.code == "KeyD" || event.code == "ArrowRight"){
        console.log("Character goes right");
    }
    else if(event.code == "KeyA" || event.code == "ArrowLeft"){
        console.log("Character goes left");
    }
    console.log("Key was pressed");
    console.log(event);
});