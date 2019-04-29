const utils = require('../src/');

test('l-1', () => {
  const input = [0, 0, 1, 0, 0, -1, 0, 0, 1];
  const nextMove = utils.logic(input);
  expect(nextMove).toBe(0)
})

test('l-2', () => {
  const input = [1, 0, 1, 0, -1 , -1, 0, 0, 1];
  const nextMove = utils.logic(input);
  expect(nextMove).toBe(3)
})

test('l-3', () => {
  const input = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
  const nextMove = utils.logic(input);
  expect(nextMove).toBe(4)
})