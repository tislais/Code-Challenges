export function getHouses(arr) {
  return arr.map(n => Object.values(n)[3]);
}

export function updateNumbers(obj) {
  // const array = [];
  // Object.entries(obj).forEach((n) => array.push(n[0] + ': ' + n[1]));
  // return array;
  return Object.keys(obj)
    .map(key => {
      return `${key}: ${obj[key]}`;
    });
}

export function houseSize(arr) {
  // const array = [];
  // const childrenArray = [];
  // arr.forEach(n => {
  //   array.push(n.name);
  //   if (n.spouse) {
  //     array.push(n.spouse);
  //   }
  //   if (n.children) {
  //     n.children.forEach(m => childrenArray.push(m));
  //   }
  // });
  // return array.length + childrenArray.length;

  let count = 0;
  
  Object.values(arr).forEach(character => {
    count++;
    if (character.spouse) count++;
    count += character.children.length;
    
  });
  return count;
}

export function hasChildrenEntries(arr, character) {
  let hasChildren = false;
  arr.forEach(n => {
    if (n.name === character) {
      Object.keys(n).forEach((key, index) => {
        if (key === 'children') {
          hasChildren = Object.values(n)[index].length;
        } 
      });
      //if (n.children.length > 0) {

      // this assignment makes me angry because I can't figure out how to use .entries without making some huge statement like below when i could just do it small like the commented line above :(

      // if (Object.values(Object.entries(n)[2])[1].length > 0) {
      //   hasChildren = true;
      // }
    }
  });
  return hasChildren ? true : false;
}

export function sortByChildren() {

}