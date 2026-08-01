const randomNumber = parseInt(Math.random() * 100 + 1 );

const Submit = document.querySelector('#Submit');
const userInput = document.querySelector('input');
const guessSlot = document.querySelector('#guess');
const remaining = document.querySelector('#remGuess');
const lowOrHi = document.querySelector('#lowOrHi');
const startOver = document.querySelector('form');

const p = document.createElement('button');

let prevGuess = [];
let numGuess = 1 ;
let playGame = true;

if(playGame){
    Submit.addEventListener('click',function(e){
        e.preventDefault();

        const Guess = userInput.value ;
        validate(Guess);
         
    });
}

function validate(guess){
    if(isNaN(guess) || guess > 100 || guess < 1){
        alert('Please Enter Add A Valid Number');
    }else{
        prevGuess.push(guess);

        if(numGuess == 10){
            displayGuess(guess);
            displayMessage(`Game Over.Random Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            check(guess);
        }
    }
}

function check(guess){
    if(guess == randomNumber){
        displayMessage(`You Guessed It Right.You Won!`);
        endGame();
    }else if(guess > randomNumber){
        displayMessage(`The Number is tooooooooo Low`);
    }else if(guess < randomNumber){
        displayMessage(`The Number is tooooooooo High`);
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += ` ${guess}`;
    numGuess++;
    remaining.innerHTML = `Guessess Remaining :${11 - numGuess}` ;

}

function displayMessage(Message){
    lowOrHi.innerHTML = `<h2>${Message}</h2>`;
}

function endGame(){
    userInput.value = '' ;
    userInput.setAttribute('disabled' , '');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const Game = document.querySelector('#newGame');
    Game.addEventListener('click' , function(){
        prevGuess = [];
        numGuess = 1 ;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `Guessess Remaining :${11 - numGuess}` ;
        userInput.removeAttribute('disables');
        startOver.removeChild(p);
        playGame = true;
    });
}
