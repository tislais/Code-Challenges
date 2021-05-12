import { toLastNames, addValues, addPurchases, countNumberOfElements, returnNames } from './code-challenge-12.js';

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

test.only('should add numbers in an array', () => {
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

test('should count number of elements in array without using .length', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = 10;
  expect(countNumberOfElements(numbers)).toEqual(sum);
});

test('should return an array containing the names of the characters', () => {
  const starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'},
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
  }];

  const array = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa'];
  expect(returnNames(starWarsData)).toEqual(array);
});