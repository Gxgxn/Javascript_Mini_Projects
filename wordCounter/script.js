let charReg = /(\w)/g;
let wordReg = /(\w+)/g;

let input = document.querySelector("#input");
let wordCount = document.querySelector("#word-count");
let charCount = document.querySelector("#char-count");

input.addEventListener("keyup", () => {
  if (input.value === "") {
    wordCount.innerText = 0;
    charCount.innerText = 0;
  }
  inputStr = input.value.match(wordReg);
  inputChar = input.value.match(charReg);
  wordCount.innerText = inputStr.length;
  charCount.innerText = inputChar.length;
});
