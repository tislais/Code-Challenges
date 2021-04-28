export function fiveAndGreaterOnly(arr) {
  return arr.filter(n => n > 5);
}

export function evensOnly(arr) {
  return arr.filter(n => n % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(n => n.length <= 5);
}

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(n => n.member);
}

export function ofAge(arr) {
  return arr.filter(n => n.age >= 18);
}