module.exports = function (input, model) {
  const you = input.filter(el => el !== 0).reduce((sum, el, i, arr) =>
    (arr.filter(v => v === sum).length >= arr.filter(v => v === el).length ? sum : el),
    null) * -1;

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  const moves = winConditions.find(el => el.filter(value => input[value] == you).length == 2 && el.filter(value => input[value] == you * -1).length == 0)

  if(moves) {
    return moves.find(el => input[el] == 0)
  }

  const preventLoss = winConditions.find(el => el.filter(value => input[value] == you * -1).length == 2 && el.filter(value => input[value] == you).length == 0)
  
  if(preventLoss) {
    return preventLoss.find(el => input[el] == 0);
  }

  const backup = winConditions.filter(el => input[el[0]] === 0 && input[el[1]] === 0 && input[el[2]] === 0).reduce((sum, el) => [...sum, ...el],[])
  const counts = backup.reduce((sum, el) => ({...sum, [el]: sum[el] ? sum[el]+1:1}),{});
  
  return parseInt(Object.entries(counts).sort((a,b) => b[1]-a[1])[0][0]);
}