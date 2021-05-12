/**
 * Fix anotherFunc() so that calls to it will change the doc variable to bye.
Keep the setTimeout to 100ms and do not change the callback function or the doc variable.
 */
function anotherFunc(callback) {
	let str = "bye"
	setTimeout(() => {
		callback(str);
	}, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}