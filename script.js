let userScore = 0;

let compScore = 0;

const choices = document.querySelectorAll(".choice")
const note = document.querySelector("#note")

const userScorePara = document.querySelector ("#user-score")
const compScorePara = document.querySelector ("#Computer-score")

let  genCompChoice = () => {
const options = ["rock", "paper", "scissors"]
const randomIdx = Math.floor(Math.random() * 3 ) 

return options[randomIdx] ;
}

const drawGame = () => {
    note.innerText ="Game is draw"
    note.style.backgroundColor = "#081b31" ;
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore
        note.innerText = "You Won!"
        note.style.backgroundColor = "green" ;
    } 
    else {
        compScore++;
        compScorePara.innerText = compScore
        note.innerText = "You Lost!"
        note.style.backgroundColor = "red" ;
    }
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice )
    const compChoice = genCompChoice()
console.log("Ghost choice =", compChoice)

if(userChoice === compChoice) {
drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock") {
       userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
      userWin =  compChoice === "scissor" ? false : true ;
    }

    else {(userChoice === "scissor") 
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin);
}

};


choices.forEach ((choice) => {
    choice.addEventListener("click", () =>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
























