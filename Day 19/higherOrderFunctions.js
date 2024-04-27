function multiLevel(func,n){
    for(let i = 1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}

multiLevel(greet,2);
