const student = {
    name: "shanush",
    age: 19,
    marks: 97
};
//printing an object
// console.log(student);

let prop = "marks";
// console.log(student[prop]);

student.age = 18;
student.age = "jS is cool";
// console.log(student.age);

//nested objects
const classInfo = {
    shanush: {
        name: 'shanush',
        marks: 10
    },

    Notshanush: {
        name: 'Notshanush',
        marks: 100
    }
};

//question: Generate a random number from 1 to 100
let num = Math.floor(Math.random()*100)+ 1;
console.log(`\nThe Random Number: ${num}`);


//question: Generate a random number from 1 to 5
let num2 = Math.floor(Math.random()*5)+ 1;
console.log(`\nThe Random Number: ${num2}`);

//question: Generate a random number from 20 to 25 
let num3 = Math.floor(Math.random()*5)+ 21;
console.log(`\nThe Random Number: ${num3}`);

