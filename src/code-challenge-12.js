export function toLastNames(people) {
  return people.map(p => `${p.firstName} ${p.lastName}`);
}