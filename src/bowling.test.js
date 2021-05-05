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
});
