import React from 'react';
import LifeMatrix from './service/LifeMatrix';
const numbersInitial = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
];
const numbersNext1 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
];
const numbersNext2 = numbersInitial;
const lifeMatrix = new LifeMatrix(numbersInitial);
test('numbersNext1 test', () => {
  expect(lifeMatrix.nextStep()).toEqual(numbersNext1);
});
test('numbersNext2 test', () => {
  expect(lifeMatrix.nextStep()).toEqual(numbersNext2);
})
