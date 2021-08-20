// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcsdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var storedValue = [];
var confirmLowerCase = false;
var confirmUpperCase = false;
var confirmSpecial = false;
var confirmNumbers = false;

function generatePassword() {
  var length = prompt("How many characters do you want your password?");
  if (length < 8 || length > 128 ) {
    length = prompt("The number must be between 8 and 128, please re-enter.");
  }

  var password = "";

  var confirmLowerCase = confirm("Do you want lowerCase?");
  if (confirmLowerCase) {
    var random = Math.floor(Math.random () * lowerCase.length);
    var lowerCaseChoice = lowerCase[random];
    storedValue.push(lowerCaseChoice);
    console.log (lowerCaseChoice);
  }

  for (var i=0; i < length; i++) {
    var random = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase[random];
  }

  var upperCase = confirm ("Do you want upperCase?")
  if (upperCase) {
    possiblechoices 
  }
    
  


  //Code goes here -all code goes here, no need to place it anywhere else
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

if (password) {
  passwordText.value=password;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

