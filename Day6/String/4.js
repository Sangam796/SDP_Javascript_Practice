//Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
function testJackpot(result) {
	let setOfUniqueString = new Set();
    for(let item of result)
    setOfUniqueString.add(item);
    if(setOfUniqueString.size==1)
			return true;
	else
		return false;
	
}
