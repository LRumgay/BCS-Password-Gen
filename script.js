const generateBtn = document.querySelector('#generate');

const upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const specialChars = ['!','@','#','$','%','^','&','*','(',')','_','+'];
const numberChars = ['1','2','3','4','5','6','7','8','9']
const allChars = upperChars + lowerChars + specialChars + numberChars;


function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');

    passwordText.value = password;
}







generateBtn.addEventListener('click', writePassword);
