import getRandomNumber from '../getRandomNumber.js';

import startGame from '../index.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, op) => {
  if (op === '+') {
    return num1 + num2;
  } if (op === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operators = ['+', '-', '*'];
  let operator;
  if (number1 > 10 && number2 > 10) {
    operator = operators[getRandomNumber(0, 1)];
  } else {
    operator = operators[getRandomNumber(0, 2)];
  }
  const correctAnswer = calculate(number1, number2, operator);
  const question = `Question: ${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

const startCalcGame = () => startGame(getRoundData, task);

export default startCalcGame;
