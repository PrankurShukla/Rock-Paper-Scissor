let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerText = "Game Draw";
    msg.style.backgroundColor ="black";
}
const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You  Win";
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorePara.innerText  = compScore;
        msg.innerText = "You  Lose";
        msg.style.backgroundColor ="red";
    }
}
const genCompChoice = () => {
    const options =["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
   let userWin =true;
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //scissor,rock
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice) => {   
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
})