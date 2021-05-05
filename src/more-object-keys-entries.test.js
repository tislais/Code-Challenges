import { getHouses, updateNumbers } from './more-object-keys-entries.js';

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

test('it gets the names of the houses', () => {

  const output = getHouses(characters); //act

  expect(output).toEqual(expect.arrayContaining(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark']));

});

test('it returns an array of transformed key value pairs into strings', () => {

  const output = updateNumbers(
    { 'Grace Hopper': '222-303-5938', 
      'Ada Lovelace': '222-349-9842', 
      'Alan Turing': '222-853-5933' }
  ); 

  expect(output).toEqual(
    ['Grace Hopper: 222-303-5938', 
      'Ada Lovelace: 222-349-9842', 
      'Alan Turing: 222-853-5933']
  ); 
  
});

// test('it gets the names of the houses', () => {
//    //arrange
//   const output = getHouses(characters); //act
//   expect(output).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark']); //assert
// });

// test('it gets the names of the houses', () => {
//    //arrange
//   const output = getHouses(characters); //act
//   expect(output).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark']); //assert
// });

// test('it gets the names of the houses', () => {
//    //arrange
//   const output = getHouses(characters); //act
//   expect(output).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark']); //assert
// });