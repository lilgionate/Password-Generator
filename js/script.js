// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  
  var userChoice = window.prompt
    ("Enter the desired length of the password (between 8 and 128 characters):");

    if (userChoice < 8 || userChoice > 128 || isNaN(userChoice)) {
      window.alert("Invalid length. Please enter a valid number between 8 and 128.");
      
    }

    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");

    if (!lowercase && !uppercase && !numeric && !special) {
      window.alert("At least one character type must be selected.");
    }

    var writepassword = '';
    if (lowercase) {
      writepassword += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercase) {
      writepassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (numeric) {
      writepassword += "0123456789";
    }

    if (special) {
      writepassword += "!@#$%^&*()_+";
    }


    var password = '';
    for (var i = 0; i < userChoice; i++){
      var randomIndex = 
      Math.floor(Math.random() * writepassword.length);
      password += writepassword[randomIndex];
    }
    return password;

  }
