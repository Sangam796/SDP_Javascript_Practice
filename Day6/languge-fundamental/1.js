//Write a function redundant that takes in a string str and returns a function that returns str.
function redundant(str) {
	
	function f1()
	{
		return str;
	}
	return f1;
	
}
