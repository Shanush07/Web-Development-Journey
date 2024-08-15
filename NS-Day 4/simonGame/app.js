let buttons = ["red", "green", "orange", "blue"];
let h3 = document.querySelector("h3");

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500);
}

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game has started");
        started = true;
        levelUp();
    }
});

function levelUp() {
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randCol = buttons[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    gameSeq.push(randCol);
    console.log(gameSeq);

    if (randBtn) { 
        gameFlash(randBtn);
    } else {
        console.error(`Button with class ${randCol} not found.`);
    }
}

function chkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = `GAME OVER! Your Score was <b>${level-1}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();        
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    chkAns(userSeq.length-1);
}

let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


