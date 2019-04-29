# CityJS-Workshop-Utils

This repo contains 3 Utility functions designed to be used during []() CityJS Workshop. Each function takes a board state and suggests the next move in tic-tac-toe. They are all pretty effective but not perfect. Contributions to this Repo are welcome.

The approaches are

* MinMax
* Logic
* NeuralNetwork

## Install

To install this package install it by running this command in your project folder

```bash
yarn add https://github.com/lnug/CityJS-Workshop-utils.git
```

## Usage
Try copy pasting this example to see how the package works

```js
import { minMax, logic, neuralNetwork } from 'cityjs-workshop-utils';

// A board that looks like
//        |   | o
//    ----|---|----
//        |   | x
//    ----|---|----
//        |   | 0
//

const input = [0, 0, 1, 0, 0, -1, 0, 0, 1];

const nextMove = minMax(input);

console.log(nextMove);

// The output is -> 4 (hopefully)

```


