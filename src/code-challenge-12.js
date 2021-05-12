export function toLastNames(people) {
  return people.map(p => `${p.firstName} ${p.lastName}`);
}

export function addValues(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

export function addPurchases(arr) {
  return arr.reduce((a, b) => ({ purchasePrice: a.purchasePrice + b.purchasePrice })).purchasePrice;
}

export function countNumberOfElements(arr) {
  return arr.reduce((a) => a + 1);
}