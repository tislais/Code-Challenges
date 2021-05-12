import { toLastNames, addValues } from './code-challenge-12.js';

test('should iterate over an array of people objects and creates a new list of each persons full name', () => {
  const people = [
    { firstName:'Jane', lastName:'Doe' }, 
    { firstName:'James', lastName:'Bond' }
  ];
  const names = ['Jane Doe', 'James Bond'];
  expect(toLastNames(people)).toEqual(names);
});

test('should add numbers in an array', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = 55;
  expect(addValues(numbers)).toEqual(sum);
});

