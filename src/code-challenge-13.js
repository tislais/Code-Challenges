
export const sortByChildren = (charArray) => {
  const array = charArray.sort((a, b) => (a.children.length > b.children.length) ? 1 : (a.children.length === b.children.length) ? ((a.name > b.name) ? 1 : -1) : -1);
  return array;
};

export const containsW = (str) => {
  return /w/.test(str);
};

export const isNum = (input) => {
  return /\d/.test(input);
};

export const containsWorld = (input) => {

};

export const isCapitalized = (str) => {

};

export const citiesAtoJ = (arr) => {

};

// stretch 

export const matchMonth = (input) => {

};

export const noPunctuation = str => {

};

export let hangman = (str) => {

};

const seashells = `She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I'm sure she sells seashore shells.`;

export const findShells = (str) => {

};