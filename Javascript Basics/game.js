//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check guess is right
if(guess === secretNumber){
	alert("You got it right");
}

//otherwise check if higher
else if(guess > secretNumber){
	alert("The number you guessed is too high!")
}

//otherwise check if lower
else{
	alert("The number you guessed is too low!")
}