// Calling our variables in the DOM
var generateBtn = document.querySelector("#generate");
var areaText = document.querySelector("textarea");

//initializing all the variables to be used in functions below
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "@", "#", "$", "%", "^", "&", "*"];
var generation = [];
var solution = [];


//Main Function Handling Element
function generatePassword(var1, var2, var3, var4) {

  //Calling Function to reset the text before next Output!
  clearText();

  //Added exception to user canceling through all confirm windows
  if (var1 === false && var2 === false && var3 === false && var4 === false) {
    alert("I cannot make a password with no characters.\nPlease try again.");
    return 0;
  }

  //After making sure there's at least one confirmed event prompting for length
  var ask= prompt("How many characters would you like in your password? (number from 8 to 128)");
  //Making sure to change the value from a string type to a number type
  var x = parseInt(ask);

  
  if (7<x && x<129){
    //concatinating every possible character into a single array
    if (var1 === true) {
      generation = generation.concat(lowerCase)
    }
    if (var2 === true) {
      generation = generation.concat(upperCase)
    }
    if (var3 === true) {
      generation = generation.concat(numeric)
    }
    if (var4 === true) {
      generation = generation.concat(special)
    }

    //Randomizing array by concatinating randomizer element, creating a new array and adding the password to the text area 
    for (i=0; i<x; i++){
      var randomizer = generation[Math.floor(Math.random() * generation.length)];
      solution = solution.concat(randomizer);
      areaText.innerHTML += solution[i];
    }
  }
  else{
    alert("Please only input a number from 8 to 128.\nPress Generate Password again when ready.")
    return 0;
  }
  // Resetting all arrays
  solution = [];
  generation = [];
}

//function to clear out the Text in the window
function clearText(){
  areaText.innerHTML ="";
}
function writePassword() {

  var confirmLower = confirm("Would you like to include Lower Case Characters?");
  var confirmUpper = confirm("Would you like to include Upper Case Characters?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include Special Characters?");

  generatePassword(confirmLower, confirmUpper, confirmNumbers, confirmSpecial);
}

generateBtn.addEventListener("click", writePassword);
