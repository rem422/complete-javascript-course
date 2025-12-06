'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const scores = document.querySelector('.score');

const secretNumber = Math.trunc(Math.random()*20 + 1);
let score = 20;

number.textContent = secretNumber;

document.querySelector('.check').addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.guess').value = '';

    if (!guess) {
        message.textContent = '⛔ No Number!';
    } 
    else if(guess === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
    } 
    else if (guess > secretNumber) {
        if(score > 1){
            message.textContent = '📈 Too high!';
            score --;
            scores.textContent = score;
        } else {
            message.textContent = '💥 You lost the game! ';
            scores.textContent = 0;
        };
    } 
    else if (guess < secretNumber) {
        if(score > 1) {
            message.textContent = '📉 Too low!';
            score --;
            scores.textContent = score;
        } else {
            message.textContent = '💥 You lost the game! ';
            scores.textContent = 0;
        };
    };
});




