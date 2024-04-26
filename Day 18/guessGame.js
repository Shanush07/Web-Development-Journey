let user_max = prompt("Enter a limit: ");
let range_guess = Math.floor(Math.random() * user_max) + 1;
console.log(range_guess);
let user_inp = prompt("Enter your guess: ");

while(true){
    if(user_inp==range_guess){5
        console.log("NICE GUESS");
        break;
    }
    if(user_inp=="quit"){
        break;
    }
    else{
        user_inp = prompt("Please Try Again");
    }
}