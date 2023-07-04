// Assignment Code

var howmanyCharacters;

var generateBtn = document.querySelector("#generate");

// function that starts the process of running the code
function generatePassword() {
  askForPasswordCriteria ()
}
// function that asks the user how many characters they want
function askForPasswordCriteria(){
  var howmanyCharactersPrompt = prompt ('How many characters do you want your password to have (must be between 8 and 128)?')
  howmanyCharacters = parseInt(howmanyCharactersPrompt)

  if( howmanyCharacters < 8 ){
    alert("Password must be greater than 8 characters. Password automatically set to 8 characters.")
    howmanyCharacters = 8;
  } else if (howmanyCharacters > 128){
    alert ("Password must be less than 128 characters. Password automatically set to 8 characters.")
    howmanyCharacters = 8;
  }
  askAboutSpecialCharacters()
}
// function that determines which type of special characters the user wants and generates the password
function askAboutSpecialCharacters (){
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected. Lowercase characters will be included by default.");
    includeLowercase = true;
  }
  var password = generateRandomPassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
  writePassword(password);
}

function generateRandomPassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  
  var availableChars = "";

  if (includeLowercase) {
    availableChars += lowercaseChars;
  }

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }

  if (includeNumeric) {
    availableChars += numericChars;
  }

  if (includeSpecial) {
    availableChars += specialChars;
  }

  var password = "";

  for (var i = 0; i < howmanyCharacters; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}
// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);