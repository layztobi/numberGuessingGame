alert("Welcome, This is a Simple Guessing Game")
point = 0
range =  2
guessCount = 0
do {numberGuessingGame()} while(range<=10&&usersGuess!==null)
alert('you made '+ guessCount + ' guesses '+"Your Total point is " + point + " Thank You! and Goodbye!")

// program for a simple guessing game
function validGuess(guess){
    if(0 < guess <= 1)return false
    if(guess === null)return false

    return true
}
function getUserGuess(){
    usersGuess = prompt("Enter a Number Guess: ")
    while(validGuess(usersGuess)){
         usersGuess = prompt( "Enter a valid Guess:")
    }
    return usersGuess
}
function getRandomNumber(range){
randomNumber = Math.floor(Math.random()*range+1)
return randomNumber
}
function numberGuessingGame(){
    alert('Welcome to stage '+ point+ ' of the guessing game, Pick a number between 1 and ' + range)
    getUserGuess()
    getRandomNumber(range)
    while(usersGuess!=randomNumber&&usersGuess!==null){
        alert('You have guessed the wrong number')
        guessCount++
        getUserGuess()
    }
    if (usersGuess == randomNumber){
        alert('You have guessed the right number and have gained a point')
        range++
        point++
        guessCount++
    }
}

