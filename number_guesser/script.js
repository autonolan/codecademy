let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

const getAbsoluteDiff = (firstVal, secondVal) => Math.abs(firstVal-secondVal);

const validUserInput = input => (input >= 0 && input <= 9) ? true : false;

function compareGuesses(userGuess, computerGuess, target) {
    if (!validUserInput(userGuess)) {
        window.alert("Invalid Guess!!!");
      }
    let calcUser = getAbsoluteDiff(target, userGuess);
    let calcComputer = getAbsoluteDiff(target, computerGuess);
    if (calcUser <= calcComputer) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;
const advanceRound = () => currentRoundNumber++;

/*
/ Tests
*/
/*let targetToGuess = generateTarget();
console.log(targetToGuess);
let winnerThisRound = compareGuesses(7, 6, 6);
console.log(winnerThisRound);
updateScore(winnerThisRound);
advanceRound();
console.log(humanScore, computerScore, currentRoundNumber);*/