//Find the Second Largest Number
function secondLargest(arr) {
	let largest = arr[0];
	let second_largest = 0;
	for(let i = 1; i<arr.length;i++)
		{
			if(largest<arr[i])
				{
					second_largest = largest;
					largest = arr[i];
				}
			else if(arr[i]<largest && arr[i]>second_largest)
				second_largest = arr[i];
		}
	return second_largest;
	
}
