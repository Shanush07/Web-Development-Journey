let firstNum = prompt("Enter the First Number: ");
let secondNum = prompt("Enter the Second Number: ");

if((firstNum % 10) == (secondNum % 10)){
    console.log("Both have SAME last digit")
}
else{
    console.log("They have DIFFERENT last digits");
}