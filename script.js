const generateBtn = document.querySelector("#generate");

const upperChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allChars = upperChars + lowerChars + specialChars + numberChars;

function generatePassword() {
  const passLength = prompt("How many characters would you like your password to be? 8-128?");
  const number = confirm("Would you like numbers in your password?");
  const upper = confirm("Would you like Uppercase letters in the password?");
  const lower = confirm("Would you like lowercase letters in your password?");
  const character = confirm(
    "Would you like to include special characters in your password?"
  );
  let resultArray = [];
  let finalPassword = "";

  if (number) {
    resultArray = resultArray.concat(numberChars);
  }

  if (upper) {
    resultArray = resultArray.concat(upperChars);
  }

  if (lower) {
    resultArray = resultArray.concat(lowerChars);
  }

  if (character) {
    resultArray = resultArray.concat(specialChars);
  }

  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return generatePassword();
  }

  for (var i = 0; i < passlength; i++) {
    finalPassword +=
      resultArray[Math.floor(Math.random() * resultArray.length)];
    console.log(finalPassword);
  }
  return finalPassword;
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
