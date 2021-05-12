import { toLastNames } from './code-challenge-12.js';

test('should iterate over an array of people objects and creates a new list of each persons full name', () => {
  const people = [
    { firstName:'Jane', lastName:'Doe' }, 
    { firstName:'James', lastName:'Bond' }
  ];
  const names = ['Jane Doe', 'James Bond'];
  expect(toLastNames(people)).toEqual(names);
});


