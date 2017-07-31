$(document).ready(function(){ 
//create variables

var winCountn = 0;
var lossCount = 0;
var guessCount = 0;
var maxGuesses = 6;

//create array with list of words

var words = ["sand", "ocean", "swimsuit", "beachtowel", "crab", "seashells", "sunshine", "relaxation", "dolphins", "seaweed", "surfboard", "hammock"];

//pick random words out of an array
 var computerChoice = words[Math.floor(Math.random() * words.length)];
 console.log(computerChoice)

//user input from keyboard
 document.onkeyup = function(event) {

// Determines which key was pressed.
 var playerGuess = event.key;
 $("#playerInput").html(playerGuess)
 $("#guesses").append(playerGuess)

}

//verify whether the letter is part of the word
for (i = 0; i < computerChoice.length; i++) {
var res = computerChoice.charAt (i) ;
var letters = [];
letters.push(res);
console.log(res)
}
	
//if statements
if (playerGuess === res) {

}

	//if no then display a message to guess again
	//increment guess against number of guesses left //rinse and repeat

   //when max guesses are reached game is over, no more input allowed
   //increment wins/losses


//game reset

}) //end Document Ready Function