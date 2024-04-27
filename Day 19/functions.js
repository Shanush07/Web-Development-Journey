//create a function to print a poem
function poemPrint(){
    console.log("Twinkle twinkle little star.How I wonder what you are.Up above the world so high.Like a diamond in the sky.");
}
poemPrint();

//create a function to role a dice and always display the value of the dice (1 to 6)
function rollDice(){
    let guess = Math.floor(Math.random()*6) + 1;
    console.log(guess);
}

rollDice();

//create a function that gives us the average of 3 numbers
function avgThree(a,b,c){
    let avg = (a+b+c)/3;
    console.log(Math.floor(avg));
}

avgThree(1,2,3);
avgThree(1,2,2);

//create a function that returns the sum of numbers from 1 to n
function onetoN(n){
    let sum= 0;
    for(i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(onetoN(4));

//create a function that returns the concatenation of all strings in an array
function concatArray(array){
    let str = "";
    for(string of array){
        str+=string + " ";
    }

    return str;
}
let arr = ["shanush", "likes", "tea"]
console.log(concatArray(arr));
