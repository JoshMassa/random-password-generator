// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercase = confirm("Would you like your password to contain uppercase letters? Please click 'OK' for Yes or 'Cancel' for No.");
  var lowercase = confirm("Would you like your password to contain lowercase letters? Please click 'OK' for Yes or 'Cancel' for No.");
  var symbols = confirm("Would you like your password to contain special characters? Please click 'OK' for Yes or 'Cancel' for No.");
  var numbers = confirm("Would you like your password to contain numbers? Please click 'OK' for Yes or 'Cancel' for No.");
  var keyLength = prompt("Password must be between 8 and 32 characters, please enter your desired length and click 'OK' to continue");
  var uppercaseAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseAllowed = "abcdefghijklmnopqrstuvwxyz";
  var scAllowed = "@%+\/'!#$^?:,(){}[]~-_."
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
