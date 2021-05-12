export function returnTen(str) {
  return str.slice(str.length - 10, str.length).split('');
}

export function findMax(matrix) {
  return [].concat(...matrix).sort(function(a, b) { return b - a; })[0];
}

export function totalSum(matrix) {
  return [].concat(...matrix).reduce((a, b) => a + b, 0);
}

// export function grandTotal(stores) {
//   const arr = [];
//   stores.forEach(function(value, index) {
//   });
//   console.log(stores);
//   console.log(arr);
// }

// export function salesData(hours, data) {
  
// }