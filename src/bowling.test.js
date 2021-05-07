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

  it('should return correct score in case of a frame contains a spare in the last frame', () => {
    const rolls = [1, 2, 5, 4, 0, 0, 3, 7, 9, 0, 1, 2, 5, 4, 0, 0, 3, 3, 9, 1, 3];
    expect(bowling.calculateScore(rolls)).toEqual(71);
  });

  it('should return correct score in case of all the frames are spares', () => {
    const rolls = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    expect(bowling.calculateScore(rolls)).toEqual(150);
  });

  it('should return correct score in case of all the frames are strikes', () => {
    const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    expect(bowling.calculateScore(rolls)).toEqual(300);
  });

  it('should return correct score in case of all the frames does not have strikes nor spares', () => {
    const rolls = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    expect(bowling.calculateScore(rolls)).toEqual(90);
  });
});

describe('isSpare', () => {
  it('should return true if sum is 10', () => {
    expect(bowling.isSpare([3, 7])).toEqual(true);
  });
  it('should return false if sum is not 10', () => {
    expect(bowling.isSpare([3, 6])).toEqual(false);
  });
  it('should return false in case of strike', () => {
    expect(bowling.isSpare([10])).toEqual(false);
  });
});

describe('isStrike', () => {
  it('should return true if equal 10', () => {
    expect(bowling.isStrike([10])).toEqual(true);
  });
  it('should return false if not equal 10', () => {
    expect(bowling.isStrike([5, 0])).toEqual(false);
  });
});

describe('splitToFrames', () => {
  it('should split rolls into frames', () => {
    expect(bowling.splitToFrames([1, 2, 3, 4, 5, 6])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
});

describe('isExtraFrame', () => {
  it('should return true if index is > 9', () => {
    expect(bowling.isExtraFrame(10)).toEqual(true);
  });

  it('should return false if index is <= 9', () => {
    expect(bowling.isExtraFrame(9)).toEqual(false);
  });
})
