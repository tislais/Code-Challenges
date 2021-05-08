
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

export function removeLastCharacters(obj) {
};

export function totalSumCSV(arr) {

};

export function removeVowels(arr) {

};

export function extractVowels(arr) {

}