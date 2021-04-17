//Create a function that validates whether a binary string is valid, using parity bits.
function validateBinary(b) {
	let count = 0;
	for(let i = 0; i<b.length;i++)
		if(b.slice(i,i+1)==='1')
			count++;
	if(count%2===0)
		return true;
	else
		return false;
	
}
