//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
function arrayOfMultiples (num, length) {
	let array = new Array();
	for(let i = 1; i<=length;i++)
		array.push(num*i);
	
	return array;
	
}

console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(12, 10))
