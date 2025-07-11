let userSeq=[];
let gameSeq=[];
let btns=["yellow","red","green","purple"];


let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
         console.log("game started");
         started=true;
         levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtm=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtm);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            levelUp();
        }
    }
    else{
        h2.innerHTML=`Game over ! Your Score is <b>${level}</b> <br> press any key to Restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}