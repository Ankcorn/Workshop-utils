const trainedNet = require('./trained-net');

module.exports = function (input) {
    const boardSum = input.reduce((a,b) => a + b, 0)

    const result = trainedNet(input)

    const emptySpaces = input.map((space, index) => {
        return space === 0 ? result[index] : null
    }).filter(space => {
        return space !== null
    })

   return result.indexOf(emptySpaces.sort(function(a, b){return b - a})[0])
}
