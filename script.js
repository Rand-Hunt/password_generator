// Assignment Code
var generateBtn = document.querySelector("#generate");

// ------Arrays of characters------

// Array of lowercase to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// CharacterTotal Limits
var number 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Create function, and prompt user for password customization 
function generatePassword() {
  var includeLowercase = prompt("Do you want to include lowercase characters? (Y/N)");
  var includeUppercase = prompt("Do you want to include UpperCase characters? (Y/N)");
  var includeNumbers = prompt("Do you want to include Numbers? (Y/N)");
  var includeSpecial = prompt("Do you want to include special characters? (Y/N)");
  
//Require character range during prompt 
  var characterTotal = (function ask() {
    var n = prompt("How many characters total? (Minimum 8, Maximum 128) ");
    return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
  }());
  
  //Create user generated character array for password
  if (includeLowercase.toLocaleLowerCase() === "y") {
    resultArray.push(lowerCasedCharacters);
  }

  if (includeUppercase.toLocaleLowerCase() === "y") {
    resultArray.push(upperCasedCharacters);
  }

  if (includeNumbers.toLocaleLowerCase() === "y") {
    resultArray.push(numericCharacters);
  }

  if (includeSpecial.toLocaleLowerCase() === "y") {
    resultArray.push(specialCharacters);
  }

  // Create Password Output Variable 
  var passwordOutput = "";

  // For Loop and random number generator 
  for (var i = 0; i < characterTotal; i++) {
    var firstIndex = getRandomArbitrary(0, resultArray.length)
    var seccondIndex = getRandomArbitrary(0, resultArray[firstIndex].length)

    passwordOutput = passwordOutput + resultArray[firstIndex][seccondIndex]
  }

  return passwordOutput
}

// Combined Array from user selection
var resultArray = [];

// Random number generation
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
