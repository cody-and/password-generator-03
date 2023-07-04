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
  var askAboutSpecialCharactersPrompt = prompt ('How many special characters do you want your pass word to have?')
  
  var specialCharacters = parseInt (askAboutSpecialCharactersPrompt)
  




  var askAboutUppercaseCharactersPrompt = prompt ('How many uppercase characters do you want in your password?')

  var howManyUppercase;

  askAboutUppercaseCharactersPrompt = parseInt(howManyUppercase) 

  if(howManyUppercase > howmanyCharacters){
    alert('There cannot be more uppercase letters than characters. Password set to one uppercase character.')
    howManyUppercase = 1;
  }
  
  var askAboutNumericCharactersPrompt = prompt ('How many numeric charachters do you want in your password?')

  var howManyNumeric;

  askAboutNumericCharactersPrompt = parseInt(howManyNumeric)

  if (howManyNumeric > howmanyCharacters){
    alert('There cannot be more numeric characters than characters total. Numeric characters set to one numeric character.')
  }
  
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