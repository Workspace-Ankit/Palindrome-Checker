const textInputElement = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");


const showResult = () =>  {
  if(textInputElement.value.trim()===""){
    alert("Please input a value")
  }
  else{
    const resultText = palindromeChecker(textInputElement.value);
    resultElement.innerText= resultText;
  }
};


const palindromeChecker = (inputString) => {
const cleanedInputString = inputString.replace(/[\W_]/g, "").toLowerCase();
const reversedString= cleanedInputString.split("").reverse().join("");

if (reversedString === cleanedInputString) {
   return `${inputString} is a palindrome. ✔️`;
 }
else {
  return `${inputString} is not a palindrome. ✖️`;
 }
}
checkButton.addEventListener("click", showResult );

 
//************ ALTERNATE WAY FOR CLEANING INPUT STRING ***********
  /* 
  let cleanedInputString = "";
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    const isAlphaNumeric =
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9");
  

    if (isAlphaNumeric) {
      cleanedInputString += char.toLowerCase();
    }
  }
  */

  //**********ALTERNATE WAY TO REVERSE STRING*********

  // let reversedString = "";
  // for (let i = cleanedInputString.length-1; i>=0; i--) {
  //   reversedString += cleanedInputString[i];
  // }
