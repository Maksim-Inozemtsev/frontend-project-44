import getRandomNumber from '../getRandomNumber.js';

import startGame from '../index.js';

const task = 'What number is missing in the progression?';

const makeSequence = () => {
  const startNumber = getRandomNumber();
  const numbersCount = getRandomNumber(5, 10);
  const sequenceStep = getRandomNumber(2, 10);
  const sequence = [];
  for (let i = 1, number = startNumber; i <= numbersCount; i += 1, number += sequenceStep) {
    sequence.push(number);
  }
  return sequence;
};

const getRoundData = () => {
  const sequence = makeSequence();
  const indexOfMissingNumber = getRandomNumber(0, (sequence.length - 1));
  const correctAnswer = sequence[indexOfMissingNumber];
  const shownSequense = sequence;
  shownSequense[indexOfMissingNumber] = '..';
  const question = `Question: ${shownSequense.join(' ')}`;
  return [question, correctAnswer];
};

const startProgressionGame = () => startGame(getRoundData, task);

export default startProgressionGame;
