const utils = require('../src/');

test('mm-1', () => {
  const input = [0, 0, 1, 0, 0, -1, 0, 0, 1];
  const nextMove = utils.minMax(input);
  expect(nextMove).toBe(4) // This one no good
})

test('mm-2', () => {
  const input = [1, 0, 1, 0, -1 , -1, 0, 0, 1];
  const nextMove = utils.minMax(input);
  expect(nextMove).toBe(3)
})