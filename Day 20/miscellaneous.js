//try and catch
console.log("\nTry and catch in JAVASCRIPT");
try{
    console.log("------INSIDE TRY------");
    console.log(a);
}
catch(error){
    console.log("------INSIDE CATCH------");
    console.log("------ENCOUNTERED ERROR!------");
    console.log(error);
}

//arrow functions
const sum = (a,b) => {
    console.log(a+b);
}
sum(1,3);


//single line arrow functions
const cube = n => n**3
console.log(cube(3));

const pow = (a,b) => {
    console.log(a**b);
} 
pow(2,3);

// //setTimeout
// console.log("Hi");
// setTimeout(()=>{console.log("Shanush");},4000);
// console.log("Mr.");

// //setInterval
// id1 = setInterval(()=>{console.log("BAKAYARO");},2000);


//problems based on arrow functions
console.log("PROBLEMS ON ARROW FUNCTIONS");

//write a arrow function which returns the square of a number n
const sqNum = n => n**2 
console.log(sqNum(2));

//write a function that prints "Hello World" 5 times at intervals of 2s each.
id2 = setInterval(()=>{console.log("Hello World");},2000);
setTimeout(() => {
    clearInterval(id2);
}, 10000);
