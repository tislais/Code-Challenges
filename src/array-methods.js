
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
  const array = [];
  obj.ingredients.map(str => array.push(
    str.split(' ').slice(2).join(' '))
  );
  return array;
};

export function removeLastCharacters(arr) {

};

export function stepActions(arr) {

};

export function totalSumCSV(arr) {

};

export function removeVowels(arr) {

};

export function extractVowels(arr) {

}