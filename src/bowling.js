import _ from 'lodash';

const isSpare = (frame) => !isStrike(frame) && _.sum(frame) === 10;

const isStrike = (frame) => frame[0] === 11;

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

  var previousFrameIsSpare = false;
  var previousFrameIsStrike = false;
  var doubleStrike = false;

  const frameScores = frames.map((frame, frameIndex) => {
    const frameScore = [...frame];
    const currentFrameIsExtra = isExtraFrame(frameIndex);
    const currentFrameIsStrike = isStrike(frame);

    if (doubleStrike) {
      if (currentFrameIsExtra) {
        frameScore[0] *= 2;
      } else {
        frameScore[0] *= 3;
      }
    }
    else if ((previousFrameIsSpare || previousFrameIsStrike) && !currentFrameIsExtra) {
      frameScore[0] *= 2;
    }

    if (previousFrameIsStrike && !currentFrameIsStrike && !currentFrameIsExtra) {
      frameScore[1] *= 2;
    }

    doubleStrike = previousFrameIsStrike && currentFrameIsStrike && !currentFrameIsExtra;
    previousFrameIsStrike = isStrike(frame);
    previousFrameIsSpare = isSpare(frame);

    return _.sum(frameScore);
  });

  return _.sum(frameScores);
};

export default { calculateScore, isSpare, isStrike, splitToFrames, isExtraFrame };
