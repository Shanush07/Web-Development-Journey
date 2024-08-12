/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled */

function doubleAndReturnArgs(arr, ...arg) {
    return arr.concat(arg.map((ele) => ele * 2));
}
console.log(doubleAndReturnArgs([1,2,3],4,5,6,7));
