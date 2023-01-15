import getRandomNumber from '../getRandomNumber.js';

import startGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => startGame(getRoundData, task);

export default startPrimeGame;
