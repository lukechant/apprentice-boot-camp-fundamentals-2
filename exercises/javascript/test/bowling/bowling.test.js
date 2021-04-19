const bowling = require ('../../main/bowling/bowling');

describe('Bowling tests', () => {
  const rolls = [0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0];
  test('given an array of scores, when total score is calculated, then result should be 0', () => {
    expect(bowling(rolls)).toBe(0);
  });
});