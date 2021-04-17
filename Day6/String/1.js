function addParityBit(b) {
	let count = 0;
	for(let i = 0;i<b.length;i++)
		if(b.slice(i,i+1)==='1')
			count++;
	if(count%2==0)
		b =b + '0';
	else
		b = b + '1';
	
	return b;
}

console.log(addParityBit("1000111");
