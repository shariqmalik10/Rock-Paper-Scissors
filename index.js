//declare all html tags for buttons and div
let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");
const container = document.querySelector('#container');
const message_cont = document.getElementById('message-container');

//div to display results 
const end_div = document.getElementById('end-div')
const endDisplay = document.getElementById('endDisplay')

const playerSDisplay = document.getElementById('playerSDisplay');
playerSDisplay.textContent = 0;
// scoreDisplay.appendChild(playerSDisplay);

const computerSDisplay = document.getElementById('computerSDisplay')
computerSDisplay.textContent = 0;


//display live updates 
const message = document.querySelector('#message');



//buttons for selection
const rock_btn = document.querySelector('#btn-rock');
rock_btn.addEventListener('click', ()=>{
    if (playerScore !=5  && computerScore != 5){
        round = playRound("rock", getComputerChoice());
        game(round);
    }
});
const paper_btn = document.querySelector('#btn-paper');
paper_btn.addEventListener('click', ()=>{
    if (playerScore !=5 && computerScore != 5){
        round = playRound("paper", getComputerChoice());
        game(round);
    }
});
const scissors_btn = document.querySelector('#btn-scissors');
scissors_btn.addEventListener('click', ()=>{
    if (playerScore !=5 && computerScore != 5){
        round = playRound("scissors", getComputerChoice());
        game(round);
    }
});

//button for reset 
const reset_btn = document.querySelector('#reset');
reset_btn.addEventListener('click', ()=> {
    reset();
})




function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    const selections = ["rock", "paper", "scissors"];
    var result = ""

    // console.log(`The player selected: ${playerSelection}`);
    // console.log(`The pc selected: ${computerSelection}`);

    //group together pc losses and player losses

    //draw
    if (playerSelection==computerSelection){
        result = "Draw";
        // console.log(playerSelection);
        message.textContent = `${playerSelection} does not beat ${computerSelection} !`
        

    }
    else if (playerSelection == selections[0] && computerSelection == selections[1] || 
        playerSelection == selections[2] && computerSelection == selections[0] || playerSelection == selections[1] && computerSelection == selections[2]) {
            result = "Computer";
            console.log("Computer wins");

            message.textContent = `${playerSelection} defeated by ${computerSelection} !`
          
    }
    else {
        result = "User"
        console.log("User wins");
        message.textContent = `${playerSelection} defeats ${computerSelection} !`
       
    }

    return result;
}

function game(round) {
    let roundResult = round;
    displayScore(roundResult);
    
}

function displayScore(roundResult) {
    if (roundResult.toLowerCase() == "computer"){
        computerScore ++;
        computerSDisplay.textContent = computerScore;
        

        
    }
    else if (roundResult.toLowerCase() == "user"){
        playerScore ++;
        playerSDisplay.textContent = playerScore;
       
        
    }
    if (playerScore==5 || computerScore == 5){
        displayResults();
    }
    
    console.log(`The player score is : ${playerScore}`);
    console.log(`The pc score is : ${computerScore}`);
}

function displayResults() {
    if (playerScore == 5) {
        endDisplay.textContent = "Player wins !"
        
    }
    else {
        endDisplay.textContent = "Computer wins !"
      
    }

}



function reset() {

    //reset all scores and scoreboards + messages 
    // reset_btn.classList.add("fadeIn");
    // reset_btn.disabled = false;

    playerScore = 0;
    playerSDisplay.textContent = 0;


    computerScore = 0;
    computerSDisplay.textContent = 0;
    

    endDisplay.textContent = ""


    message.textContent = "";
    
}





