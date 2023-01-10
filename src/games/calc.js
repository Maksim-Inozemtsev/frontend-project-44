import readlineSync from 'readline-sync';

export const task = () => {
  console.log('What is the result of the expression?');
};

export const startRound = () => {
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  const numberOfOperator = Math.round(Math.random() * 100);
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
