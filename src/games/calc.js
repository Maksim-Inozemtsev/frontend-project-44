import getRandomNumber from '../getRandomNumber.js';

import startGame from '../index.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error('Operator error!');
  }
};

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operators = ['+', '-', '*'];
  let operator;
  if (number1 > 10 && number2 > 10) {
    operator = operators[getRandomNumber(0, operators.length - 2)];
  } else {
    operator = operators[getRandomNumber(0, operators.length - 1)];
  }
  const correctAnswer = calculate(number1, number2, operator);
  const question = `Question: ${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

const startCalcGame = () => startGame(getRoundData, task);

export default startCalcGame;
