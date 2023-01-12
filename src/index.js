import readlineSync from 'readline-sync';

import * as evenGame from './games/even.js';

import * as calcGame from './games/calc.js';

import * as gcdGame from './games/gcd.js';

import * as progressionGame from './games/progression.js';

const startGame = (gameNumber) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  switch (gameNumber) {
    case '1':
      evenGame.task();
      break;
    case '2':
      calcGame.task();
      break;
    case '3':
      gcdGame.task();
      break;
    case '4':
      progressionGame.task();
      break;
    default:
      break;
  }
  let isCorrect;
  for (let i = 0; i < 3; i += 1) {
    switch (gameNumber) {
      case '1':
        isCorrect = evenGame.startRound();
        break;
      case '2':
        isCorrect = calcGame.startRound();
        break;
      case '3':
        isCorrect = gcdGame.startRound();
        break;
      case '4':
        isCorrect = progressionGame.startRound();
        break;
      default:
        break;
    }
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;