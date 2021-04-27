export function doubleNumbers(arr) {
  return arr.map(number => number * 2);
}

export function stringItUp(arr){
  return arr.map(number => number.toString());
}

export function capitalizeNames(arr){
  return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

export function namesOnly(arr){
  return arr.map(x => x.name);
}

export function makeStrings(arr){
  return arr.map(x => `${x.name} ${x.age >= 18 ? 'can go to The Matrix' : 'is under age!!'}`);
}

export function readyToPutInTheDOM(arr){
  return arr.map(x => `<h1>${x.name}</h1><h2>${x.age}</h2>`);
}