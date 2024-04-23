//trim() string method
let str = '    hello     ';
str.trim();
console.log(str);

//toUpperCase() & toLowerCase() string method
let str2 = 'shanush to uppercase';
console.log(str2.toUpperCase());
console.log((str.trim()).toUpperCase());

//indexOf() string method 
let str3 = "ChainSawMan";
console.log(str3.indexOf());
console.log(((str.toUpperCase().trim())).indexOf("LLO"));

//slice() string method
console.log(str3.slice(0,4));

//replace() string method
let str4 = "IhateMyself";
console.log(str4.replace("hate"," love being "));

//repeat() string method
console.log(str3.repeat(5));
