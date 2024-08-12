let arr = [1, 2, 3, 4, 5];
console.log("Using Normal Functions\n");
console.log("\nDefination outside the Map method\n");
function doubles(el) {
  return el * 2;
}
let newArr = arr.map(doubles);
console.log(newArr);
console.log("\nDefination inside the Map method\n");
let newArr1 = arr.map(function (el) {
  return el * 2;
});
console.log(newArr1);
console.log("\nUsing Arrow Functions\n");
let newArr2 = arr.map((el) => {
  return el * 2;
});
console.log(newArr2);
