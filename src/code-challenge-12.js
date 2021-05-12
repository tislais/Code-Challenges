export function toLastNames(people) {
  return people.map(p => `${p.firstName} ${p.lastName}`);
}

export function addValues(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}