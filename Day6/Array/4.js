//Write a function that converts an object into an array of keys and values.
function objectToArray(obj) {
	let arr = Array.from(Object.entries(obj));
	return arr;
}
