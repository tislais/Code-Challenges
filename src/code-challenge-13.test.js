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

  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });

  test('It should use a regular expression pattern to return true if the string contains the letter w in lower case', () => {
    expect(containsW('hello world')).toStrictEqual(true);
    expect(containsW('Hello World')).toStrictEqual(false);
    expect(containsW('hello everyone')).toStrictEqual(false);
  });

  test('It should use a regular expression pattern to return true if the input contains a number', () => {
    expect(isNum(1234567890)).toStrictEqual(true);
    expect(isNum('12345')).toStrictEqual(true);
    expect(isNum('h3llo w0rld')).toStrictEqual(true);
    expect(isNum('hello world')).toStrictEqual(false);
    expect(isNum('')).toStrictEqual(false);
  });

  test.only('It should use a regular expression pattern to return true if the input contains the word world all in lower-case letters', () => {
    expect(containsWorld('hello world')).toStrictEqual(true);
    expect(containsWorld('Hello World')).toStrictEqual(false);
    expect(containsWorld('hello everyone')).toStrictEqual(false);
  });

  test('It should sort the characters by number of children', () => {
    expect(isCapitalized(characters)[0].name).toStrictEqual('Euron');
  });

  test('It should sort the characters by number of children', () => {
    expect(citiesAtoJ(characters)[0].name).toStrictEqual('Euron');
  });


});