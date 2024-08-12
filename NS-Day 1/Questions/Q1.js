//Qs1. Square and sum the array elements using the arrow function and then find the average of the array.
let arr = [1,2,3,4,5,6,7,8,9,10];
let size = arr.length;
let squares = arr.map((el)=>el*el);
let fin = squares.reduce((res,el)=>(res+el));
let avg = fin/size;
console.log(avg);