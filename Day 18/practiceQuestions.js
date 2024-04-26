//Create a program that generates a random number representing a dice roll.
let randomNumber = Math.floor(Math.random()*6)+1;
console.log(randomNumber);

/*. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name.
 */
const car = {
    name: "Tesla",
    model: "X",
    color:"black"
};
console.log(car.name);
console.log(car["name"]);


/*Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States */

const person = {
    name: "shanush",
    age: 18,
    city: "hyderabad"
};
console.log(person.city);
person.city = "New York";
console.log(person.city);
person.country = "India";
console.log(person.country);
console.log(person);


