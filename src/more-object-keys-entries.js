export function getHouses(arr) {
  return arr.map(n => n.house);
}

export function updateNumbers(obj) {
  const array = [];
  Object.entries(obj).forEach((n, index) => array.push(n[0] + ': ' + n[1]));
  return array;
}

// export function houseSize() {

// }

// export function hasChildrenEntries() {

// }

// export function sortByChildren() {

// }