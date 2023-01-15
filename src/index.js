import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGame = (getRoundData, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== `${correctAnswer}`) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
