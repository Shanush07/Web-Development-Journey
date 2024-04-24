//Write a JS program to delete all occurrences of element ‘num’ in a given array
console.log("\nWrite a JS program to delete all occurrences of element ‘num’ in a given array");
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 234];
let n = 3;

for(i=0; i<arr1.length; i++){
    if(arr1[i]==n){
        arr1.splice(i,1);
    }
}
console.log(arr1)

//Write a JS program to find the no of digits in a number.
console.log("\nWrite a JS program to find the no of digits in a number.");
let num = 28715211;
let count = 0;
while(num>1){
    num = num/10;
    count+=1;
}
console.log(count);

//Write a JS program to find the sum of digits in a number.
console.log("\nWrite a JS program to find the sum of digits in a number.");
let num2 = 123;
let sum=0;
while(num2>=1){
    sum+=(num2%10);
    num2 = Math.floor(num2/10);
    console.log(num2);
    }
console.log(sum);

//Print the factorial of a number n
console.log("\nPrint the factorial of a number n");
let num3 = 5;
let f = 1;

while(num3!=0){
    f*=num3;
    --num3;
}

console.log(`factorial of is ${f}`);

//Find the largest number in an array with only positive numbers.
console.log("\nFind the largest number in an array with only positive numbers.");
let chk=0;
for(i of arr1){
    if(i>chk){
        chk=i;
    }
}
console.log(`The largest number in the given array is ${chk}`);