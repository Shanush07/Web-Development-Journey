let size = 'S';

if( size == 'XL'){
    console.log(`For size ${size} price is Rs.250`);
}
else if( size == 'L'){
    console.log(`For size ${size} price is Rs.200`);
}
else if( size == 'M'){
    console.log(`For size ${size} price is Rs.100`);
}
else if( size == 'S'){
    console.log(`For size ${size} price is Rs.50`);
}

//A "good string" is a string that starts with the letter 'a' and has a length>3. Write a program to find if a string is a good string or not.
let str='JavaScript';

if(str[0]=='a' && str.length>3){
    console.log(`Given string ${str} is a good string`);
}
else{
    console.log(`Given string ${str} is not good string`);
}
