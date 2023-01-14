import readlineSync from 'readline-sync';

import getRandomNumber from '../rngen.js';

import startGame from '../index.js';

const task = 'What number is missing in the progression?';

const getRoundData = () => {
  const startNumber = getRandomNumber();
  const numbersCount = getRandomNumber(5, 10);
  const sequenceStep = getRandomNumber(2, 10);
  const sequence = [];
  for (let i = 1, number = startNumber; i <= numbersCount; i += 1, number += sequenceStep) {
    sequence.push(number);
  }
  const indexOfMissingNumber = getRandomNumber(0, (sequence.length - 1));
  const correctAnswer = sequence[indexOfMissingNumber];
  const shownSequense = sequence;
  shownSequense[indexOfMissingNumber] = '..';
  console.log(`Question: ${shownSequense.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startProgressionGame = () => startGame(getRoundData, task);

export default startProgressionGame;
