
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

export function listFoods(arr) {

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