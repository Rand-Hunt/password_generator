# 

# Password Generator 

## Summary 
This is a password generation tool.  It produces a password between 8 and 128 characters long, with options of uppercase, lowercase, numbers, and special characters. 

## Live URL
[Password Generator](https://rand-hunt.github.io/password_generator/)

## Screenshots 
![Site](03-javascript-homework-demo.png)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - used for scripting the interactive functions of the tool. 
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

Check out our really clean code. 
```Javascript 
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

```

```Javascript
 // For Loop and random number generator 
  for (var i = 0; i < characterTotal; i++) {
    var firstIndex = getRandomArbitrary(0, resultArray.length)
    var seccondIndex = getRandomArbitrary(0, resultArray[firstIndex].length)

    passwordOutput = passwordOutput + resultArray[firstIndex][seccondIndex]
  }

  return passwordOutput
```
## Author Links
[LinkedIn](https://www.linkedin.com/in/randhunt/)

[GitHub](https://github.com/Rand-Hunt)
