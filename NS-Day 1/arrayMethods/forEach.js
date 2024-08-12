let arr = [1, 2, 3, 4, 5];
console.log("Using Normal Functions\n");
console.log("\nDefination outside the forEach method\n");
function prints(el) {
  console.log(el);
}
arr.forEach(prints);
console.log("\nDefination inside the forEach method\n");
let print = function (el) {
  console.log(el);
};
arr.forEach(print);

console.log("\nUsing Arrow Functions\n");
arr.forEach((el) => {
  console.log(el);
});
