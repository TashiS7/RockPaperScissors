//Array of options
let options = ['rock', 'paper', 'scissors'];

//to check the winner score
const winners = [];

//Create a function called computerPlay that will return random options
const computerPlay = function() {
    //let random = options[Math.floor(Math.random() * options.length)]
    return options[Math.floor(Math.random() * options.length)]; //Returns the random strings
};


//Player picks 
const playerPlay = function() {
    let playerSelection = prompt('Please choose your option:')
    playerSelection = playerSelection.toLowerCase();

    return playerSelection;
};



//Write a function that decides who the winner is
const whoTheWinner = function(playerOption, computerOption) {
    //if statement to check who won?? or tie
    if (playerOption === computerOption) {
        return 'draw'
    } else if (
        (playerOption === 'rock' && computerOption === 'scissors') ||
        (playerOption === 'paper' && computerOption === 'rock') ||
        (playerOption === 'scissors' && computerOption === 'paper')
    ) {
        return 'yay, player won!'
    } else {
        return 'Damn it, computer won!'
    }

};


const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    const winner = whoTheWinner(playerSelection, computerSelection)
    console.log(`The player chose: ${playerSelection}`),
        console.log(`The computer chose: ${computerSelection}`);
    console.log('-------')
    console.log(winner);
    winners.push(winner); //push the winner
    score = keepScores();
};

//playRound()
console.log('--------');

//Create a function called game(), call the playRound function inside here to play a 5 round games.
//Create a function called game(), call the playRound function inside here to play a 5 round games.
const game = function() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        (playRound(i))
    }
};

game();
//Create a function to keep scores
//Filter returns the element of an array that meet the condition specified in a callback function

function keepScores() {
    let playerWins = winners.filter((item) => item == 'yay, player won!').length;
    let computerWins = winners.filter((item) => item == 'Damn it, computer won!').length;
    let ties = winners.filter((item) => item == "tie").length;
    console.log('--------')
    console.log('player wins: ' + playerWins)
    console.log('computer wins: ' + computerWins);
    console.log('ties: ' + ties);
    console.log('--------')
}




keepScores();