import readlineSync from 'readline-sync';

export const generateRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

export const isEven = (num) => {
  return num % 2 === 0;
};

export const startRound = () => {
  const number = generateRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? "yes" : "no";

  if (answer.toLowerCase() === correctAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
};

export const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();

    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};