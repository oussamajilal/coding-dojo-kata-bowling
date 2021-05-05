import bowling from './bowling';

describe('calculateScore', () => {
  it('should return 0 in case of all rolls are 0', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowling.calculateScore(rolls)).toEqual(0);
  });

  it('should return correct score in case of failure of knocking all pins down', () => {
    const rolls = [1, 2, 5, 4, 0, 0, 3, 3, 9, 0, 1, 2, 5, 4, 0, 0, 3, 3, 9, 0];
    expect(bowling.calculateScore(rolls)).toEqual(54);
  });

  it('should return correct score in case of a frame contains a spare but not the last frame', () => {
    const rolls = [1, 2, 5, 4, 0, 0, 3, 7, 9, 0, 1, 2, 5, 4, 0, 0, 3, 3, 9, 0];
    expect(bowling.calculateScore(rolls)).toEqual(67);
  });

  it('should not correct score in case two rolls are equal 10 but not in the same frame', () => {
    const rolls = [1, 5, 5, 4, 0, 0, 3, 7, 9, 0, 1, 2, 5, 4, 0, 0, 3, 3, 9, 0];
    expect(bowling.calculateScore(rolls)).toEqual(70);
  });

  it('should return correct score in case of a frame contains a strike but not the last frame', () => {
    const rolls = [1, 5, 5, 4, 0, 0, 3, 7, 9, 0, 1, 2, 5, 4, 10, 3, 3, 9, 0];
    expect(bowling.calculateScore(rolls)).toEqual(86);
  });
});

describe('isSpare', () => {
  it('should return true if sum is 10', () => {
    expect(bowling.isSpare(3, 7)).toEqual(true);
  });
  it('should return false if sum is not 10', () => {
    expect(bowling.isSpare(3, 6)).toEqual(false);
  });
  it('should return false in case of strike', () => {
    expect(bowling.isSpare(10, 0)).toEqual(false);
  });
});

describe('isStrike', () => {
  it('should return true if equal 10', () => {
    expect(bowling.isStrike(10)).toEqual(true);
  });
  it('should return false if not equal 10', () => {
    expect(bowling.isStrike(5)).toEqual(false);
  });
});

describe('isSecondRollInFrame', () => {
  it('should return false if roll number is pair', () => {
    expect(bowling.isSecondRollInFrame(8)).toEqual(false);
  });

  it('should return true if roll number is even', () => {
    expect(bowling.isSecondRollInFrame(5)).toEqual(true);
  });
});

describe('fixFramesAfterStrikes', () => {
  it('should fill next roll in a frame with 0 after strike', () => {
    const realRolls = [5, 4, 10, 3, 2, 0, 10, 1, 7];
    const expectedRolls = [5, 4, 10, 0, 3, 2, 0, 10, 1, 7];
    expect(bowling.fixFramesAfterStrikes(realRolls)).toEqual(expectedRolls);
  });
})
