import readlineSync from 'readline-sync';

export const task = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const startRound = () => {
  const number1 = Math.round(Math.random() * 100);
  const number2 = Math.round(Math.random() * 100);
  if (number1 === 0 && number2 === 0) {
    startRound();
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
