import _ from 'lodash';

const isSpare = (frame) => !isStrike(frame) && _.sum(frame) === 10;

const isStrike = (frame) => frame[0] === 10;

const splitToFrames = (rolls) => {
  const newRolls = [...rolls];
  const frames = [];
  while (newRolls.length > 0) {
    const roll = newRolls.shift();
    if (isStrike([roll])) {
      frames.push([roll]);
    } else {
      frames.push([roll, newRolls.shift()]);
    }
  }
  return frames;
}

const isExtraFrame = (frameIndex) => frameIndex > 9;

const calculateScore = (rolls) => {
  const frames = splitToFrames(rolls);

  var spare = false;
  var strike = false;

  const frameScores = frames.map((frame, frameIndex) => {
    const frameScore = [...frame];
    const currentFrameIsExtra = isExtraFrame(frameIndex);
    if (!currentFrameIsExtra) {
      if ((spare || strike)) {
        frameScore[0] *= 2;
      }

      if (strike) {
        frameScore[1] *= 2;
      }
    }

    strike = isStrike(frame);
    spare = isSpare(frame);

    return _.sum(frameScore);
  });

  return _.sum(frameScores);
};

export default { calculateScore, isSpare, isStrike, splitToFrames, isExtraFrame };
