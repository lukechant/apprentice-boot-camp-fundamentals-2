const bowl = require ('../../main/bowling/bowling');

describe('Bowling tests', () => {
  
  test('given an array of 0 scores, when total score is calculated, then result should be 0', () => {
    const rolls = [0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0];
    expect(bowl(rolls)).toBe(0);
  });
  test('given an array of 1 scores, when total score is calculated, then result should be 20', () => {
    const rolls = [1, 1,  1, 1,  1, 1,  1, 1,  1, 1,  1, 1,  1, 1,  1, 1,  1, 1,  1, 1];
    expect(bowl(rolls)).toBe(20);
  });
  test('given an array of scores including a spare, when total score is calculated, then result should be 12', () => {
    const rolls = [5, 5,  1, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0];
    expect(bowl(rolls)).toBe(12);
  });
  test('given an array of scores including a strike without a zero, when total score is calculated, then result should be 14', () => {
    const rolls = [10,  1, 1,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0];
    expect(bowl(rolls)).toBe(14);
  });
  test('given an array of scores including a strike and spare, when total score is calculated, then result should be 32', () => {
    const rolls = [10,  5, 5,  1, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0];
    expect(bowl(rolls)).toBe(32);
  });
  test('given an array of scores including a strike and spares, when total score is calculated, then result should be 32', () => {
    const rolls = [10,  5, 5,  1, 0,  0, 0,  7, 3,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0];
    expect(bowl(rolls)).toBe(42);
  });
});