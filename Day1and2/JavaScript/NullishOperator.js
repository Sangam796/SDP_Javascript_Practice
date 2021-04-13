let height = null;
let width = null;
let result = height ?? 500 * width ?? 50; // it is evaluated as height ?? 0 ?? 50 which gives next value to undefined value which is 0
console.log(result);