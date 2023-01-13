import readlineSync from 'readline-sync';

export const task = () => {
  console.log('What number is missing in the progression?');
};

export const startRound = () => {
  const startNumber = Math.round(Math.random() * 100);
  const numbersCount = Math.round(Math.random() * 5 + 5);
  const sequenceStep = Math.round(Math.random() * 8 + 2);
  const sequence = [];
  for (let i = 1, number = startNumber; i <= numbersCount; i += 1, number += sequenceStep) {
    sequence.push(number);
  }
  const indexOfMissingNumber = Math.round(Math.random() * (sequence.length - 1));
  const correctAnswer = sequence[indexOfMissingNumber];
  const shownSequense = sequence;
  shownSequense[indexOfMissingNumber] = '..';
  console.log(`Question: ${shownSequense.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
