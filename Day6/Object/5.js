function isObject(value) {
	
	if(typeof(value)==='object'&&value!=null)
		return true;
	else
		return false;
	
}
console.log(isObject(new Date()));
console.log(isObject("12/12/2011"));
console.log(isObject(null));
console.log(isObject([1,2,3]));
console.log(isObject({}));
