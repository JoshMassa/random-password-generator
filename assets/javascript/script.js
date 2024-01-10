// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercase = confirm("Would you like your password to contain uppercase letters? Please click 'OK' for Yes or 'Cancel' for No.");
  var lowercase = confirm("Would you like your password to contain lowercase letters? Please click 'OK' for Yes or 'Cancel' for No.");
  var symbols = confirm("Would you like your password to contain special characters? Please click 'OK' for Yes or 'Cancel' for No.");
  var numbers = confirm("Would you like your password to contain numbers? Please click 'OK' for Yes or 'Cancel' for No.");
  var keyLength = prompt("Password must be between 8 and 128 characters, please enter your desired length and click 'OK' to continue");
  var uppercaseAllowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseAllowed = "abcdefghijklmnopqrstuvwxyz";
  var symAllowed = "@%+\/'!#$^?:,(){}[]~-_.";
  var numsAllowed = "0123456789";
  var selectMultiple = [];

  while (isNaN(keyLength) || keyLength < 8 || keyLength > 128) {
    alert("Your password does not meet our criteria. Please try again.");
    keyLength = prompt("Password must be between 8 and 128 characters.");
  }
  
  if (uppercase || lowercase || symbols || numbers) {
    //Password will be generated
  } else {
      return "No options selected. Please select at least one option to generate a password.";
  };

  if (uppercase) {selectMultiple += uppercaseAllowed};
  if (lowercase) {selectMultiple += lowercaseAllowed};
  if (symbols) {selectMultiple += symAllowed};
  if (numbers) {selectMultiple += numsAllowed};

  let generatedPassword = ""
  for (let i = 0; i < keyLength; i++) {
    let rpg = Math.floor(Math.random() * selectMultiple.length);
    generatedPassword = generatedPassword + selectMultiple[rpg];
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
