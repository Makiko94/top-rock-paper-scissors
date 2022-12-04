let i = 0;
let playerScore = 0;
let computerScore = 0;

function gameCount() {
    i++;
}

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return computerChoice = 'rock'
    } else if (random == 1) {
        return computerChoice = 'paper'
    } else {
        return computerChoice = 'scissors'
    };
}

function getPlayerChoice() {
    pick = prompt('Rock, Paper, or Scissors?').toLowerCase();

    if (pick == 'rock' || pick == 'paper' || pick == 'scissors') {
        return pick;
    } else {
        console.log('Your choices are Rock, Paper or Scissors.')
    };

}

function oneRound() {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
    
    //This decides fate of the game
    if (playerChoice == undefined) {
        return
    } else if (playerChoice == computerChoice) {
        console.log('You have tied. Go again!');

        //Increases round count
        gameCount();

        return
    } else if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`You chose ${playerChoice} and computer chose ${computerChoice}`)
        console.log('You have won!')

        //Adds point to player score count
        playerScore++;
        //Increases round count
        gameCount();

    } else {
        console.log('You lost!')
        console.log(`You chose ${playerChoice} and computer chose ${computerChoice}`)

        //Adds point to computer score count
        computerScore++;
        //Increases round count
        gameCount();

    }
}

function game() {

    //This checks round count and score of player and computer
    if (i >= 5 || playerScore == 3 || computerScore == 3) {
        console.log('GAME OVER')
        if (playerScore > computerScore) {
            console.log('You win!')
            console.log(`You scored ${playerScore} and the computer scored ${computerScore}.`)
        } else {
            console.log('You lose!')
            console.log(`You scored ${playerScore} and the computer scored ${computerScore}.`)
        }
    } else {

        //This continues game if above condition is false and plays another round
        oneRound();
        game();
    }
}