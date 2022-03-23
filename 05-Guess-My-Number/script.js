'use strict';
//Grabbing all the classes needed for the elements changing
const againButton = document.getElementsByClassName('again')[0];
const checkButton = document.getElementsByClassName('check')[0];
const scoreText = document.getElementsByClassName('score')[0];
const highScoreText = document.getElementsByClassName('label-highscore')[0];
const messageText = document.getElementsByClassName('message')[0];
const numberText = document.getElementsByClassName('number')[0];
const guessBox = document.getElementsByClassName('guess')[0];
let bodyElement = document.body; //Grabbing the body for background color
//Game Variables
let randomNum = getRandomNum();
let guessCorrect = false;
let highScore = 0;
let score = 20;
//Generates a random number - Has to be an function declaration to keep var together.
function getRandomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}
//Resets the page to start a new game when the again button is clicked
const resetPage = function () {
  score = 20;
  guessCorrect = false;
  bodyElement.style.backgroundColor = '#222';
  scoreText.textContent = score;
  messageText.textContent = 'Start guessing...';
  guessBox.value = '';
  numberText.textContent = '?';
  randomNum = getRandomNum();
  checkButton.addEventListener('click', game);
};
//Updates all the elements whenever the user checks his guess/handles all game logic.
const game = function () {
  if (guessBox.value < 1) guessBox.value = 1;
  if (guessBox.value > 20) guessBox.value = 20;
  let guess = Number(guessBox.value);
  if (guess === randomNum) guessCorrect = true;
  if (guessCorrect) {
    bodyElement.style.backgroundColor = '#60b347';
    checkButton.removeEventListener('click', game);
    messageText.textContent = 'Correct number!';
    numberText.textContent = randomNum;
    if (score > highScore) {
      highScoreText.textContent = `🥇 Highscore: ${score}`;
    }
  } else {
    //Lower the score by 1
    score--;
    scoreText.textContent = score;
    //Determine if it was to high or low
    guess < randomNum
      ? (messageText.textContent = 'Too low!')
      : (messageText.textContent = 'Too high!');
  }
};
againButton.addEventListener('click', resetPage);
checkButton.addEventListener('click', game);
