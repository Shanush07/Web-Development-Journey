let arr = [21, 43, 87, 54, 32];
console.log([...arr]);

//Spread with array literals
let arr2 = [...arr];
console.log("New Array = " + arr2);

//storing string in array
let chars = [..."shanush"];
console.log("Character array = "+ chars)

//merging two arrays using spread
let even = [2,4,6,8,10];
let odd = [1,3,5,7,11];
let nums = [...even, ...odd];
console.log("Merged array = " +nums);

//Spread with object literals
let data = {
    email: "shanush@gmail.com",
    pass: "aabc",
};

let dataCopy = {...data, id:1};
console.log(dataCopy);
