//Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.function countTrue(arr) {
	function areaOfCountry(name, area) {
	let globalArea = area*100/148940000;
	globalArea = globalArea.toFixed(2);
	return `${name} is ${globalArea}% of the total world's landmass`;
}
