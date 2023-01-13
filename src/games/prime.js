import readlineSync from 'readline-sync';

export const task = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"..');
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const startRound = () => {
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';

  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
