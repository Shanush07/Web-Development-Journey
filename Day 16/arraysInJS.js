//practice question on array methods
let start = ['january', 'july','march','august'];
start.shift();
start.shift();
start.unshift('june');
start.unshift('july');
console.log(start);

//splice in arrays
let cars = ['audi','bmw','xuv','maruti'];
console.log(`ARRAY OF CARS BEFORE SPLICE:`);
console.log(cars);

cars.splice(0,3);
console.log(cars);

cars.splice(1,0,'ferrari','benz','toyota','nissan');
console.log(cars);

//practice question: to find the index of javascript upon reversing
let lang = ['c','c++','html','javascript','python','java','c#','sql'];
console.log(lang.reverse().indexOf("javascript"));

const arr = ['a','b','c'];
arr.pop();
console.log(arr);
arr.push('c','d');
console.log(arr);
arr[0]='changed';
console.log(arr);