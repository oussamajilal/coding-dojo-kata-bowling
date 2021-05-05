import bowling from './bowling';

describe('calculateScore', () => {
  it('should return 0 in case of all rolls are 0', () => {
    expect(bowling.calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
  });
});
