// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcsdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var storedValue = [];


function generatePassword() {
  var length = prompt("How many characters do you want your password?");
  if (length < 8 || length > 128 ) {
    length = prompt("The number must be between 8 and 128, please re-enter.");
  }

  var password = "";
  var possibleChoices = "";

  var confirmLowerCase = confirm("Do you want Lower Case letters in your password?");
  if (confirmLowerCase) {
    var random = Math.floor(Math.random () * lowerCase.length);
    var lowerCaseChoice = lowerCase[random];
    storedValue.push(lowerCaseChoice);
    possibleChoices = possibleChoices.concat(lowerCase);
  }

  var confirmUpperCase = confirm("Do you want Upper Case letters in your password?");
  if (confirmUpperCase) {
    var random = Math.floor(Math.random () * upperCase.length);
    var upperCaseChoice = upperCase[random];
    storedValue.push(upperCaseChoice);
    possibleChoices = possibleChoices.concat(upperCase);
  }

  var confirmSpecial = confirm("Do you want any special characters in your password?");
  if (confirmSpecial) {
    var random = Math.floor(Math.random () * specialChar.length);
    var specialChoice = specialChar[random];
    storedValue.push(specialChoice);
    possibleChoices = possibleChoices.concat(specialChar);
  }

  var confirmNumbers = confirm("Do you want numbers in your password?");
  if (confirmNumbers) {
    var random = Math.floor(Math.random () * numbers.length);
    var numbersChoice = numbers[random];
    storedValue.push(numbersChoice);
    possibleChoices = possibleChoices.concat(numbers);
  }

  for (var i=0; i < length - storedValue.length; i++) {
    var random = Math.floor(Math.random() * possibleChoices.length);
    password += possibleChoices [random];
  }

  password += storedValue.join ('');
    
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

