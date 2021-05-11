
export function howMuchPencil(str) {
  const array = [str];
  [...str].forEach((value, index) => array.push(str.slice(index + 1)));
  return array;
};

export function wordsToCharList(str) {
  const array = [];
  [...str].forEach(char => array.push(char));
  return array;
};

export function listFoods(obj) {
  return obj.ingredients.map(str => str.split(' ').slice(2).join(' '));
};

export function stepActions(obj) {
  return obj.steps.map(str => str.split(' ').slice(0, 1).join(' '));
};

export function removeLastCharacters(str, num) {
  return str.slice(0, str.length - num);
};

// export function totalSumCSV(str) {
//   return str.split(',').map(number => Number(number)).reduce((a, b) => a + b, 0);
// };

// export function removeVowels(arr) {

// };

// export function extractVowels(arr) {

// }