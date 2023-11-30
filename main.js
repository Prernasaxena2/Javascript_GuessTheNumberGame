let randomNumber = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;


if (playGame) {

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (guess === "" || isNaN(guess)) {
        alert('Please enter a valid number');

    }
    else if (guess < 1) {
        alert('Please enter a number greater that 1');
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);

        if (numGuess > 10) {
            dispalyGuess(guess);
            displayMessage(`Game Over ,Random number was ${randomNumber}`);
            endGame();
        }
        else {
            dispalyGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right the number is ${randomNumber}`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too Low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too High`);
    }
}

function dispalyGuess(guess) {

    userInput.value = '';
    guessSlot.innerHTML += ` ${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;


}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}



function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lowOrhigh.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })

}



