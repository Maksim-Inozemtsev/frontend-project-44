import getRandomNumber from '../getRandomNumber.js';

import startGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const getRoundData = () => {
  const number1 = getRandomNumber(1);
  const number2 = getRandomNumber(1);
  const correctAnswer = findGcd(number1, number2);
  const question = `Question: ${number1} ${number2}`;
  return [question, correctAnswer];
};

const startGcdGame = () => startGame(getRoundData, task);

export default startGcdGame;
