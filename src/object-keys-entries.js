export function capitalizeObjectKeys(obj) {
  const array = Object.keys(obj);
  const newArray = [];
  for (let n of array) {
    newArray.push(n.toUpperCase());
  }
  return newArray;
}

export function sortedKeys(obj) {
  const array = Object.keys(obj);
  return array.sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj) {
  const array = Object.keys(obj);
  return array.filter(n => n.includes('age'));
} 

export function getArrayOfKeysAndValues(obj) {
  return Object.entries(obj).map(([key, value]) => ([key, value]));
}

export function sortedArraysByValuesLength(obj) {
  const array = Object.entries(obj).map(([key, value]) => ([key, value]));
  return array.sort((a, b) => b[1].length - a[1].length);
}