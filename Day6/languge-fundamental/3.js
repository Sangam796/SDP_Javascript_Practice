//Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
function add_suffix(suffix) {
	return function(string) {
    return string + suffix;
  };
}
