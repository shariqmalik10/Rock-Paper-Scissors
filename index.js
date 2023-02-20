function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    const selections = ["rock", "paper", "scissors"];
    var result = ""

    let pselect = playerSelection.toLowerCase();
    let cselect = computerSelection.toLowerCase();
    
    // console.log(pselect);
    // console.log(cselect);

    //draw
    if (pselect == cselect){   
        result = ["This is a draw", 2];
    }
    //rock and paper
    else if (pselect == selections[0] && cselect == selections[1]){
        result = ["You Lose ! Paper beats Rock", 2];
    }
    else if (pselect == selections[1] && cselect == selections[0]){
        result = ["You Win ! Paper beats Rock", 1];
    }
    //rock and scissors
    else if (pselect == selections[0] && cselect == selections[2]){
        result = ["You Win ! Rock beats Scissors", 1];
    }
    else if (pselect == selections[2] && cselect == selections[0]){
        result = ["You Lose ! Rock beats Scissors", 2];
    }
    //paper and scissors
    else if (pselect == selections[1] && cselect == selections[2]){
        result = ["You Lose ! Scissors beats Paper", 2];
    }
    else if (pselect == selections[2] && cselect == selections[1]){
        result = ["You Win ! Scissors beats Paper", 1];
    }
    return result;

}

function game() {
    var pscore = 0;
    var cscore = 0;

    for (let i = 0; i < 5; i++){
        let user = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        let round = playRound(user, computerSelection);
        let roundMessage = round[0];
        console.log(roundMessage);
        let roundScore = round[1];
        

        if (roundScore == 1){
            pscore ++;
        }
        else if (roundScore==2){
            cscore ++;
        }
    }

    if (pscore > cscore){
        console.log("User wins !");
    }
    else {
        console.log("Computer wins !");
    }
}

// const playerSelection = "rock";

// console.log(playRound(playerSelection, computerSelection));
game();