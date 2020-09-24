// Choose a random word of 3 letters or more from the commonWords array
// Allow the user to guess one letter at a time
// When the user runs out of turns, show a losing screen
// When the user guesses all of the letters in the word, show a winning screen

//    W O R D S    T O   C H O O S E    F R O M
// import { commonWords } from "./constants.js"
// console.log(commonWords)
//math.random() to get a random index of the constants object list
//let variable = commonWords[math.random...]
//thisRandomWord.length = how many <span></span> will be passed to html with underscores as placeholders.
//flex-box (row) each span
//    U S E R    I N P U T
// if thisRandomWord.includes(userInput) then return true, else false.
// if true then assign it to its corresponding index (randomWord.length, [correspondingIndex]).
// use randomWord.split() turn string into an array to break the word down

// "have" is the word
const word = "hello"

const wordObj = word.split("") //chosen word is split
console.log(wordObj)

let underscoreAmount = function () {} //Determines how many underscores to have

function doesItContainLetter() {
  const userInput = document.getElementById("userInput").value //     U S E R   I N P U T   F I L T E R
  console.log(userInput)

  let matchingLetter = wordObj.filter(function (item) {
    return item === userInput
  })
  console.log(matchingLetter)
  document.querySelector(
    ".matchingLetters"
  ).innerHTML = `<p>${matchingLetter}</p>`
}

document
  .querySelector(".submitAnswer")
  .addEventListener("click", doesItContainLetter)

// for(let i = 0; i < wordObj.length; i++)
// if(wordObj[i].includes(userInput) === true) {
//   matchingLetters.push(userInput)
//   document.querySelector('.matchingLetters').innerHTML = matchingLetters
// } else {
//   console.log('wrong letter')
