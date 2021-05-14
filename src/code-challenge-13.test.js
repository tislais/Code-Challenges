import { sortByChildren, containsW, isNum, containsWorld, isCapitalized, citiesAtoJ } from './code-challenge-13.js';

describe('Testing challenge 1', () => {

  let characters = [
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

  test.only('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });

  test('It should sort the characters by number of children', () => {
    expect(containsW(characters)[0].name).toStrictEqual('Euron');
  });

  test('It should sort the characters by number of children', () => {
    expect(isNum(characters)[0].name).toStrictEqual('Euron');
  });

  test('It should sort the characters by number of children', () => {
    expect(containsWorld(characters)[0].name).toStrictEqual('Euron');
  });

  test('It should sort the characters by number of children', () => {
    expect(isCapitalized(characters)[0].name).toStrictEqual('Euron');
  });

  test('It should sort the characters by number of children', () => {
    expect(citiesAtoJ(characters)[0].name).toStrictEqual('Euron');
  });


});