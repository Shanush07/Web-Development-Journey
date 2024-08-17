
h1 = document.querySelector("h1");

function changeColor(color, delay, callback){
    setTimeout(()=>{
        h1.style.color = color;
        if(callback){
            callback();
        }
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("orange",1000,()=>{
                changeColor("red",1000,()=>{
                    
                });
            });
        });
    }); 
});