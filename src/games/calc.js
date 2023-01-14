import readlineSync from 'readline-sync';

import getRandomNumber from '../rngen.js';

import startGame from '../index.js';

const task = 'What is the result of the expression?';

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const numberOfOperator = getRandomNumber();
  let correctAnswer;
  if (numberOfOperator <= 33 && (number1 <= 10 || number2 <= 10)) {
    correctAnswer = number1 * number2;
    console.log(`Question: ${number1} * ${number2}`);
  } else if (numberOfOperator > 66) {
    correctAnswer = number1 + number2;
    console.log(`Question: ${number1} + ${number2}`);
  } else {
    correctAnswer = number1 - number2;
    console.log(`Question: ${number1} - ${number2}`);
  }
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startCalcGame = () => startGame(getRoundData, task);

export default startCalcGame;
