//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
function toArray(obj) {
	
	let arr = Array.from(Object.entries(obj));
	return arr;
	
}
