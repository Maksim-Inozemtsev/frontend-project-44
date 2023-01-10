import readlineSync from 'readline-sync';

const startRound = () => {
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

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();

    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
