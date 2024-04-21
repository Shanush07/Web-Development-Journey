let pencilPrice = 10;
let eraserPrice = 5;
let Output="Total Price is: " + (pencilPrice + eraserPrice) + " Rupees. ";
console.log("Total Price is:", pencilPrice + eraserPrice, "Rupees. ");

console.log(`\n----------Output Using Strings----------`);
console.log("Total Price is: " + (pencilPrice + eraserPrice) + " Rupees. ");
console.log(`\n----------Output Using Template Literals----------`);
console.log(`Sum is: ${pencilPrice+eraserPrice} rupees`);

console.log("\n------------------------------------------------------------");
console.log("If-Else Statements: ");
console.log("\nBefore my if-else statement: ");
if(Output<15){
    console.log("\nInside if-else statements: Output is lesser than 10");
}
else{
    console.log("\nInside if-else statements: Output is more than 15");
}
console.log("\nAfter my if-else statement: ");



