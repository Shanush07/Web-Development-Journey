//Check if all numbers in our array are multiples of 10 or not
let arr1 = [10, 13, 14, 20, 30];
let arr2 = [10, 30, 40, 20, 30];

let res1 = arr1.every((ele) => {
  return ele % 2 == 0;
});

let res2 = arr2.every((ele) => {
    return ele % 2 == 0;
  });  

console.log("Result is = " + res1);
console.log("Result is = " + res2);
