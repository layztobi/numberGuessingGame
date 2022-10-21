alert("Welcome, This is a Simple Guessing Game")
numberGuessingGame()
alert("Thank You! and Goodbye!")

// program for a simple guessing game
function validGuess(guess){
    if(guess == 1)return false
    if (guess == 2)return false
    if (guess == 3)return false
    return true
}
function getUserGuess(){
    usersGuess = prompt("Enter a Number Guess: ")
    while(validGuess(usersGuess)){
        if (usersGuess === null) return
        else usersGuess = prompt( "Enter a valid Guess:")
    }
    console.log(usersGuess)
    return usersGuess
}
function numberGuessingGame(){
    let randomNumber = Math.floor(Math.random()*2+1)
    let randomNumber1 = Math.floor(Math.random()*3+1)
    let guessCount = 1
    let guessCount1 = 1
    alert('Welcome to stage 1 of the guessing game, Pick a number between 1 and 2')
    getUserGuess()
    console.log(randomNumber)
    while(usersGuess!=randomNumber){
        alert('You have guessed the wrong number')
        getUserGuess()
        guessCount++
    }
    if (usersGuess == randomNumber){alert('You have guessed the right number in '+ guessCount + " guess")}
    alert('Welcome to stage 2 of the guessing game, Pick a number between 1 and 3')
      console.log(randomNumber1)
    while(usersGuess!=randomNumber1){ 
        alert('You have guessed the wrong number')
        getUserGuess()
        guessCount1++
    }
    if (usersGuess == randomNumber1){alert('You have guessed the right number in '+ guessCount1 + " guess")}

}

