import readlineSync from 'readline-sync';

import getRandomNumber from '../rngen.js';

import startGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  if (number1 === 0 && number2 === 0) {
    getRoundData();
  }
  let correctAnswer;
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  if (maxNumber % minNumber === 0) {
    correctAnswer = minNumber;
  } else {
    for (let i = 1; i <= (minNumber / 2); i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        correctAnswer = i;
      }
    }
  }
  console.log(`Question: ${number1} ${number2}`);

  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startGcdGame = () => startGame(getRoundData, task);

export default startGcdGame;
