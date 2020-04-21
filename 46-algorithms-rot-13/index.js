const encryptBtn = document.querySelector("#encrypt");
const decryptBtn = document.querySelector("#decrypt");
const textarea = document.querySelector("textarea");
const result = document.querySelector(".result");

const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";

const rot13 = (string) => {
  let newString = "";

  for (let letter of string) {
    const wasLetterUpperCase = letter.toUpperCase() === letter;

    const indexLowerC = lowercaseAlphabet.indexOf(letter.toLowerCase());
    if (indexLowerC === -1) {
      newString += letter;
      continue;
    }

    let newLetterIndex = indexLowerC + 13;
    if (newLetterIndex >= 26) {
      newLetterIndex -= 26;
    }

    let newLetter = lowercaseAlphabet[newLetterIndex];
    if (wasLetterUpperCase) {
      newLetter = newLetter.toUpperCase();
    }
    newString += newLetter;
  }
  return newString;
};

const getRot13Result = () => {
  const text = textarea.value;
  const encrypted = rot13(text);
  result.innerText = encrypted;
};

encryptBtn.addEventListener("click", getRot13Result);

decryptBtn.addEventListener("click", getRot13Result);
