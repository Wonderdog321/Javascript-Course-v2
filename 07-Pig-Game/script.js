'use strict';
const diceImg = document.querySelector('.dice');
const playersElement = document.querySelectorAll('.player');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let diceRoll = 0;
const Player1 = {
  currentScore: 0,
  totalScore: 0,
  currentScoreText: document.querySelector('#current--0'),
  totalScoreText: document.querySelector('#score--0'),
  activePlayer: true,
};
const Player2 = {
  currentScore: 0,
  totalScore: 0,
  currentScoreText: document.querySelector('#current--1'),
  totalScoreText: document.querySelector('#score--1'),
  activePlayer: false,
};
//Generate random dice rolls
const randomDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
//Display dice roll
const changeDiceImg = dice => (diceImg.src = `dice-${dice}.png`);
//Switch player function
const playerSwitch = () => {
  for (let i = 0; i < playersElement.length; i++) {
    playersElement[i].classList.toggle('player--active');
  }
  if (Player1.activePlayer) {
    Player1.activePlayer = false;
    Player2.activePlayer = true;
    Player1.currentScore = 0;
    Player1.currentScoreText.textContent = Player1.currentScore;
  } else {
    Player2.activePlayer = false;
    Player1.activePlayer = true;
    Player2.currentScore = 0;
    Player2.currentScoreText.textContent = Player2.currentScore;
  }
};
//Button Hold Function
const fnHold = () => {
  Player1.totalScore += Player1.currentScore;
  Player2.totalScore += Player2.currentScore;
  Player1.totalScoreText.textContent = Player1.totalScore;
  Player2.totalScoreText.textContent = Player2.totalScore;
  if (Player1.totalScore >= 100) {
    playersElement[0].classList.add('player--winner');
    btnRollDice.removeEventListener('click', fnRollDice);
    btnHold.removeEventListener('click', fnHold);
  } else if (Player2.totalScore >= 100) {
    playersElement[1].classList.add('player--winner');
    btnRollDice.removeEventListener('click', fnRollDice);
    btnHold.removeEventListener('click', fnHold);
  } else playerSwitch();
};
//Button Roll Dice
const fnRollDice = () => {
  if (diceImg.style.visibility === 'hidden')
    diceImg.style.visibility = 'visible';
  let currDiceRoll = randomDice();
  changeDiceImg(currDiceRoll);
  if (currDiceRoll === 1) {
    playerSwitch();
  } else {
    if (Player1.activePlayer) Player1.currentScore += currDiceRoll;
    else Player2.currentScore += currDiceRoll;
  }
  Player1.currentScoreText.textContent = Player1.currentScore;
  Player2.currentScoreText.textContent = Player2.currentScore;
};
//If its a 1 switch players if not add to current score
btnRollDice.addEventListener('click', fnRollDice);
//Make hold button add current score to total score than switch players, check before switching if score is > 100 if score is >= 100 user wins!
btnHold.addEventListener('click', fnHold);
//Make reset function and switch to player 1
btnNewGame.addEventListener('click', () => {
  Player1.totalScore = 0;
  Player1.totalScoreText.textContent = Player1.totalScore;
  Player1.currentScore = 0;
  Player1.currentScoreText.textContent = Player1.currentScore;
  Player2.totalScore = 0;
  Player2.totalScoreText.textContent = Player2.totalScore;
  Player2.currentScore = 0;
  Player2.currentScoreText.textContent = Player1.currentScore;
  for (let i = 0; i < playersElement; i++) {
    playersElement[i].classList.remove('player--winner');
  }
  if (!Player1.activePlayer) {
    playerSwitch();
  }
  btnRollDice.addEventListener('click', fnRollDice);
  btnHold.addEventListener('click', fnHold);
  diceImg.style.visibility = 'hidden';
});
