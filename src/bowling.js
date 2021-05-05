import _ from 'lodash';

const isSpare = (roll, followingRoll) => roll !== 10 && roll + followingRoll === 10;

const isStrike = (roll) => roll === 10;

const isSecondRollInFrame = rollNumber => rollNumber % 2 === 1;

const fixFramesAfterStrikes = (rolls) => {
  const newRolls = [...rolls];
  const frames = [];
  while(newRolls.length > 0){
    const roll = newRolls.shift();
    if (isStrike(roll)) {
      frames.push([10, 0]);
    } else {
      frames.push([roll, newRolls.shift()]);
    }
  }
  return _.flatten(frames);
}

const calculateScore = (rolls) => {
  const newRolls = fixFramesAfterStrikes(rolls);
  return _.sum(
    newRolls.map((roll, index) => {
      if (isSecondRollInFrame(index) && isSpare(newRolls[index - 1], roll)) return roll + newRolls[index + 1];

      if (!isSecondRollInFrame(index) && isStrike(roll)) return roll + newRolls[index + 2] + newRolls[index + 3];

      return roll;
    })
  );
};

export default { calculateScore, isSpare, isStrike, isSecondRollInFrame, fixFramesAfterStrikes };
