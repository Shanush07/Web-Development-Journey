//Write a JavaScript function that returns array elements larger than a number
function lgFunc(arr,n){
    let newArr=[];
    let count = 0;
    for(let i=0; i<(arr.length); i++){
        if(n<arr[i]){
            newArr[count]=arr[i];
            count++;
        }
    }
    return newArr;
}

let arr = [11,22,33,44,55,66,77,88,99,91];
let n = 32;
console.log(lgFunc(arr,n));

//Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”
let str = "abcdabcdefgggh";
function extUnq(str){
    let newStr = "";
    for(let i=0; i<str.length; i++){
        let chk = str.charAt(i);
        if(newStr.indexOf(chk)==-1){
            newStr+=chk;
        }
    }
    return newStr;
}
console.log(extUnq(str));

/*Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.*/
let countries = ["India","Japan","Australlia","USA","Russia"];
let max = 0;
let index = 0;
function longCountry(arr){
    for(let i = 0; i<arr.length; i++){
        let currentMax=arr[i].length;
        if(currentMax>max){
            max=currentMax;
            index = i;
        }
    }
    return arr[index];
}
console.log(longCountry(countries));

/*Write a JavaScript function to count the number of vowels in a String
argument. */
let str2 = "shanush";
function numofVowels(str){
    let count = 0;
    for(i of str){
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u'){
            count++;
        }
    }
    console.log(count);
}
numofVowels(str2);

/*Write a JavaScript function to generate a random number within a range
(start, end). */
let start = 1;
let end = 5;

function randomNum(a,b){
    console.log(Math.floor(Math.random()*(b-a))+a);
}

randomNum(start,end);

