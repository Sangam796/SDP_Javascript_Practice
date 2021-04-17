//Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

function intWithinBounds(n, lower, upper) {
    if(n>=lower && n<upper && Number.isInteger(n))
    return true;
    return false;
}
console.log(typeof(1));
console.log(intWithinBounds(3, 1, 9))
console.log(intWithinBounds(6, 1, 6))
console.log(intWithinBounds(4.5, 3, 8))
console.log(intWithinBounds(-5, -10, 6))
console.log(intWithinBounds(4, 0, 0))
console.log(intWithinBounds(10, 9, 11))
console.log(intWithinBounds(6.3, 2, 6))
console.log(intWithinBounds(6.3, 2, 10))
