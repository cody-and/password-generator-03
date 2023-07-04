// Assignment Code

var howmanyCharacters;

var generateBtn = document.querySelector("#generate");


function generatePassword(){






  return
  askHowManyCharacters()
}

function askHowManyCharacters(){
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


function askAboutSpecialCharacters (){
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected. Lowercase characters will be included by default.");
    includeLowercase = true;
  }
  generatePassword(includeLowercase, includeUppercase, includeNumeric, includeSpecial);
}

function generatePassword (includeLowercase, includeUppercase, includeNumeric, includeSpecial) {




  writePassword()
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword ()