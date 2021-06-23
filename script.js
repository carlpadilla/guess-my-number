'use strict';

//secret secretNumber
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

//event listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎇 Correct Number!';
  }
});
