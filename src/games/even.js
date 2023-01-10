import readlineSync from 'readline-sync';

export const task = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const startRound = () => {
  const number = Math.round(Math.random() * 100);
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
