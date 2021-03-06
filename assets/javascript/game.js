 //declaration of variables 
 var wins = 0; // to store the user wins
 var attempts = 12; // to store the number of attempts left
 var userLetters = []; // to store all the key pressed by the user
 var computerGuess;
 var answerArray = [];
 var answer = "";
 // the alphabet array named letters
 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
 ];

 var brands = ["mercedes-benz", "audi", "volkswagen", "bmw", "opel", "porsche",
   "fiat", "lancia", "alfa-romeo", "lamborghini", "maserati", "ferrari",
   "citroen", "renault", "bugatti", "alpine", "peugeot", "mclaren", "aston-martin", "vauxhall", "bentley",
   "rolls-royce", "land-rover", "mini", "chrysler", "dodge", "jeep",
   "chevrolet", "buick", "gmc", "cadillac", "lincoln", "ford", "honda", "toyota", "suzuki", "lexus", "infiniti",
   "mazda", "mitsubishi", "nissan", "hyundai", "kia", "daewoo"
 ];

 function wordblanked() {
   // Randomly chooses a choice from the brands array. This is the Computer's guess.
   computerGuess = brands[Math.floor(Math.random() * brands.length)];
   console.log(computerGuess);

   for (var i = 0; i < computerGuess.length; i++) { // loop to place the dashes in the answerArray
     answerArray[i] = "_";
   }

   console.log(answerArray.join('|'));
   console.log(computerGuess.length);
 }

 function isUsed(letter, arr) {
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] === letter) {
       alert(`You typed "${letter} " already!! Press another key!`);
       return true;
     } else {
       return false;
     }
   }
 }

 /* function checkWord(userLetter,computerWord){
   console.log(brand) // displaying brand to see if the forEach method return a value.
   if (brand)
 } */
 function resetGame() {
   // blanked the word generated by the computer
   // Randomly chooses a choice from the brands array. This is the Computer's guess.
   computerGuess = brands[Math.floor(Math.random() * brands.length)];
   console.log(computerGuess);

   for (var i = 0; i < computerGuess.length; i++) { // loop to place the dashes in the answerArray
     answerArray[i] = "_";
   }

   console.log(answerArray.join('|'));
   console.log(computerGuess.length);

   userLetters = [];
   attempts = 12;
   //display the word generated with dahses in the p tag toguess
   document.getElementById("toguess").textContent = answerArray.join(' ');
   document.getElementById("guessesLeft").textContent = attempts;
   document.getElementById("guesses").textContent = userLetters.join(' ');
 }

 //run resetGame on load
 resetGame();

 //
 document.onkeyup = function (event) {

   var userLetter = event.key.toLowerCase(); // userLetter to store the key pressed by the user

   //console.log(userLetter);

   if (!isUsed(userLetter, userLetters)) {
     // lets store the user guessed word in the userGuessed Array if he did press it yet
     userLetters.push(userLetter);
   }
   document.getElementById("guesses").textContent = userLetters.join(' ');

   //check if the user letter correspond to any value of the computer guess
   for (var i = 0; i < computerGuess.length; i++) {
     if (userLetter === computerGuess[i]) {
       answerArray[i] = computerGuess[i]; // store to the current index the value that matches to the current computer guess index
     }

   }
   // display the current value of answerArray
   document.getElementById("toguess").textContent = answerArray.join(' ');

   if (!answerArray.includes(userLetter)) {
     attempts--;
   }
   document.getElementById("guessesLeft").textContent = attempts;

   answer = answerArray.join("");
   console.log(answer);
   if (computerGuess === answer) {
     wins++;
     //console.log(`w: ${wins} L: ${losses} a: ${attempts}`);
     //console.log(userLetters.join(' ') + '.');
     document.getElementById("guesses").textContent = userLetters.join(' ');
     document.getElementById("wins").textContent = wins;

   }
 }

 document.getElementById("new-game-btn").addEventListener("click", resetGame);