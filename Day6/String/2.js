//Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
	let count = 0;
	for(let item of arr)
		if(item===true)
			count++;
	
	return count;
	 
}
