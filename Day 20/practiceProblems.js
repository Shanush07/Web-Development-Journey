//write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
const arrayAverage = (arr)=>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

let arr1 = [1,2,3];
console.log(arrayAverage(arr1));


//write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = n => {
    if(n%2==0){
        console.log("Is Even!");
    }
    else{
        console.log("Not even!");
    }
}

isEven(11212);