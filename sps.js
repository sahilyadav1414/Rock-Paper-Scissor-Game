
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let show = document.querySelector("#msg");
let Uscore = document.querySelector("#userscore")
let Cscore = document.querySelector("#compscore")
let compC = document.querySelector("#compres");
const showresult = (userwin, Compchoice , Userchoice)=>{
   if(userwin){
    userScore++;
    Uscore.innerText = userScore;
    compC.innerText = "computer choice is "+ Compchoice;
    show.innerText =  Userchoice +' beats '+ Compchoice+'. You WINNN!!! ✌ ...for now.' ;
    show.style.backgroundColor = "#47CF73";
   }
   else{
    compScore++;
    Cscore.innerText = compScore;
    compC.innerText = "computer choice is "+ Compchoice;
    show.innerText = Userchoice+ " is vanquished by "+ Compchoice + ". 🤮 Soz, you LOSE."
    show.style.backgroundColor = "red";
   }
}


const drawgame=(compchoice)=>{
    
    compC.innerText = "computer choice is "+ compchoice;
    show.innerText = compchoice +" does nothing to " +compchoice+ ". They are friends. Everybody loses / go home.";
    show.style.backgroundColor = "#25272E";
}


const randomno =()=>{
    const opt = ["rock" , "paper" , "scissors"];
    let idx = Math.floor(Math.random()*3);
   
    return opt[idx];
}

const playgame=(Userchoice)=>{
    const compchoice = randomno();
    if(Userchoice == compchoice){
        drawgame(compchoice);
    }
    else{
        let userwin = true;
        if(Userchoice=="rock"){
            usewin = compchoice =="paper"?false : true;
        }
        else if(Userchoice =="paper"){
            userwin = compchoice =="scissors"?false : true;
        }
        else{
            userwin = compchoice =="rock"?false : true;
        }
      
        showresult(userwin ,compchoice, Userchoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const Userchoice = choice.getAttribute("id");
        
        playgame(Userchoice);
    })
    
});