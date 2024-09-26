//NODE REPL
// let n = 5;
// console.log("Welcome");
// for(i = 0; i<n; i++){
//     console.log("Hello World ",i);
// }

//PROCESS & PROCESS.ARGV
// console.log(process.argv);

// let args = process.argv;

// for(i = 2; i<args.length; i++){
//     console.log("Hello, this is ",args[i]);
// }

//MODULE.EXPORTS
const math = require("./math");
console.log(math);
console.log(math.sum(24,9));
console.log(math.mul(24,9));
console.log(math.g);
console.log(math.pi);