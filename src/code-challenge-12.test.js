import { toLastNames, addValues, addPurchases, countNumberOfElements } from './code-challenge-12.js';

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

test('should add numbers in an array', () => {
  const purchases = [{
    item: 'switch',
    purchasePrice: 399
  },
  {
    item: 'booger',
    purchasePrice: 420
  },
  {
    item: 'splat',
    purchasePrice: 69
  }];

  const sum = 888;
  
  expect(addPurchases(purchases)).toEqual(sum);
});

test.only('should count number of elements in array without using .length', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = 10;
  expect(countNumberOfElements(numbers)).toEqual(sum);
});