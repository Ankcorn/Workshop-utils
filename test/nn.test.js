const utils = require('../src');

test('nn-1', () => {
  const input = [0, 0, 1, 0, 0, -1, 0, 0, 1];
  const nextMove = utils.neuralNetwork(input);
  expect(nextMove).toBe(0)
})

test('nn-2', () => {
  const input = [1, 0, 1, 0, -1 , -1, 0, 0, 1];
  const nextMove = utils.neuralNetwork(input);
  expect(nextMove).toBe(3)
})

test('nn-3', () => {
  const input = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
  const nextMove = utils.neuralNetwork(input);
  expect(nextMove).toBe(0)
})