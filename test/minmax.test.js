const utils = require('../src/');

test('.', () => {
  const input = [0, 0, 1, 0, 0, -1, 0, 0, 1];
  const nextMove = utils.minMax(input);
  expect(nextMove).toBe(4) // This one no good
})

test('.', () => {
  const input = [1, 0, 1, 0, -1, -1, 0, 0, 1];
  const nextMove = utils.minMax(input);
  expect(nextMove).toBe(1) // This one really is no good
})