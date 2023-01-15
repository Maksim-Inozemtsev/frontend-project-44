import getRandomNumber from '../getRandomNumber.js';

import startGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => startGame(getRoundData, task);

export default startEvenGame;
