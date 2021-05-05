import _ from 'lodash';

const isSpare = (roll, followingRoll) => roll + followingRoll === 10;

const isSecondRollInFrame = rollNumber => rollNumber % 2 === 1;

const calculateScore = (rolls) => {
  return _.sum(
    rolls.map((roll, index) => {
      if (isSecondRollInFrame(index) && isSpare(rolls[index - 1], roll)) return roll + rolls[index + 1];
      return roll;
    })
  );
};

export default { calculateScore, isSpare, isSecondRollInFrame };
