/* Q1 Write a JavaScript program to get the first n elements of an array. [n can be any
positive number]. */

let n = 4;
let arr = [7, 9, 0, -2, 91, 22, 11];
arr.splice(n);
console.log(arr);

/*Write a JavaScript program to get the last n elements of an array. [n can be any
positive number]. */

n=4;
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n2= arr2.length - n;
arr2.splice(0,n2);
console.log(arr2);

//Write a JavaScript program to check whether a string is blank or not.
let str = "";
if(str==""){
    console.log(`${str} is empty`);
}
else{
    console.log("Is not empty");
}

/*. Write a JavaScript program to test whether the character at the given (character)
index is lower case. */
let givenChar = '  shanush';
let givenIndex = 2;

if( givenChar[givenIndex] == (givenChar[givenIndex]).toLowerCase()){
    console.log("Given index is in lower case");
}
else{
    console.log("Not in lower case");
}

//Write a JavaScript program to strip leading and trailing spaces from a string
console.log(`Before: ${givenChar}`);
console.log(`After: ${givenChar.trim()} `);
