import readlineSync from 'readline-sync';

import getRandomNumber from '../rngen.js';

import startGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startEvenGame = () => startGame(getRoundData, task);

export default startEvenGame;
