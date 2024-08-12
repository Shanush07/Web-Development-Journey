let arr = [2,4,6,1];
let v1 = arr.every((el)=>{
    return el%2==0;
});
console.log(v1);

let v2 = arr.some((el)=>{
    return el%2==0;
});
console.log(v2);