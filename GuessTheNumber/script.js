let randNum = (Math.random()*100+1).toFixed()

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(input.value)
        console.log(guess);
        validateGuess(guess)

    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('please enter a valid number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${randNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess > randNum){
        displayMessage(`guess was higher`);
    }
    else if(guess < randNum){
        displayMessage(`guess was lower`);
    }
    else if (guess == randNum){
        displayMessage('guess was right');
        endGame()
    }
}

function displayGuess(guess){
    input.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    input.value = ''
    input.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e)=>{
        randNum = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = 10
        input.removeAttribute('disabled')
        
        startOver.removeChild(p)

        playGame= true
    })

}

// function newGame() {
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function (e) {
//       randomNumber = parseInt(Math.random() * 100 + 1);
//       prevGuess = [];
//       numGuess = 1;
//       guessSlot.innerHTML = '';
//       remaining.innerHTML = 10;
//       userInput.removeAttribute('disabled');
//       startOver.removeChild(p);
  
//       playGame = true;
//     });
//   }