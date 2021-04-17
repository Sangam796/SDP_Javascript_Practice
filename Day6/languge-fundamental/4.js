//Create a function that squares every digit of a number.
function squareDigits(n) {
	let str = n.toString();
    let resultString ="";
    for(let i = 0;i<str.length;i++)
    {
        let squareOfNum = +(str.slice(i,i+1));
        squareOfNum *= squareOfNum;
        resultString += squareOfNum.toString();

    }

    return +(resultString);
	
}
