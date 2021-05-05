import bowling from './bowling';

describe('calculateScore', () => {
  it('should return 0 in case of all rolls are 0', () => {
    expect(bowling.calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
  });

  it('should return correct score in case of failure of knocking all pins down', () => {
    expect(bowling.calculateScore([1, 2, 5, 4, 0, 0, 3, 3, 9, 0])).toEqual(27);
  });
});
